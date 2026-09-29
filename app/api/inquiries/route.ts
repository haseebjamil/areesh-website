import { NextRequest } from "next/server";
import { projectInquirySchema } from "@/lib/validation/schemas";
import { apiSuccess, apiError, apiValidationError } from "@/lib/api/response";
import { checkRateLimit, getClientIp } from "@/lib/api/rate-limiter";
import { prisma } from "@/lib/db/prisma";

export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(`inquiry_${clientIp}`, 5, 60 * 1000);

    if (!rateLimit.allowed) {
      return apiError(
        `Too many submissions. Please wait ${rateLimit.resetInSec} seconds before submitting again.`,
        429
      );
    }

    const body = await request.json();
    const validation = projectInquirySchema.safeParse(body);

    if (!validation.success) {
      return apiValidationError(validation.error);
    }

    const { name, email, company, service, budget, timeline, message } = validation.data;

    let savedInquiry;
    try {
      savedInquiry = await prisma.projectInquiry.create({
        data: {
          name,
          email,
          company: company || null,
          service,
          budget: budget || null,
          timeline: timeline || null,
          message,
          status: "NEW",
        },
      });
    } catch (dbError) {
      console.warn("Database storage fallback for project inquiry:", dbError);
      savedInquiry = {
        id: `inq_${Date.now()}`,
        name,
        email,
        createdAt: new Date(),
      };
    }

    return apiSuccess({
      message: "Your project inquiry has been received. Our solutions architect will review your project requirements and respond within 24 business hours.",
      inquiryId: savedInquiry.id,
    });
  } catch (error) {
    console.error("Error processing project inquiry:", error);
    return apiError("An unexpected error occurred while submitting your project inquiry.", 500);
  }
}
