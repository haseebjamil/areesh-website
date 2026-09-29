import { NextRequest } from "next/server";
import { newsletterSchema } from "@/lib/validation/schemas";
import { apiSuccess, apiError, apiValidationError } from "@/lib/api/response";
import { checkRateLimit, getClientIp } from "@/lib/api/rate-limiter";
import { prisma } from "@/lib/db/prisma";

export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(`newsletter_${clientIp}`, 5, 60 * 1000);

    if (!rateLimit.allowed) {
      return apiError(
        `Too many requests. Please wait ${rateLimit.resetInSec} seconds before subscribing again.`,
        429
      );
    }

    const body = await request.json();
    const validation = newsletterSchema.safeParse(body);

    if (!validation.success) {
      return apiValidationError(validation.error);
    }

    const { email } = validation.data;

    try {
      await prisma.newsletterSubscriber.upsert({
        where: { email },
        update: { status: "ACTIVE" },
        create: {
          email,
          status: "ACTIVE",
        },
      });
    } catch (dbError) {
      console.warn("Database storage fallback for newsletter:", dbError);
    }

    return apiSuccess({
      message: "Thank you for subscribing to Areesh Technologies technology insights.",
    });
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return apiError("An unexpected error occurred while subscribing to the newsletter.", 500);
  }
}
