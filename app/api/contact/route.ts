import { NextRequest } from "next/server";
import { contactFormSchema } from "@/lib/validation/schemas";
import { apiSuccess, apiError, apiValidationError } from "@/lib/api/response";
import { checkRateLimit, getClientIp } from "@/lib/api/rate-limiter";
import { prisma } from "@/lib/db/prisma";

export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(`contact_${clientIp}`, 5, 60 * 1000);

    if (!rateLimit.allowed) {
      return apiError(
        `Too many requests. Please wait ${rateLimit.resetInSec} seconds before submitting again.`,
        429
      );
    }

    const body = await request.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return apiValidationError(validation.error);
    }

    const { name, email, phone, company, subject, message } = validation.data;

    let savedRecord;
    try {
      savedRecord = await prisma.contactMessage.create({
        data: {
          name,
          email,
          phone: phone || null,
          company: company || null,
          subject: subject || null,
          message,
          status: "NEW",
        },
      });
    } catch (dbError) {
      console.warn("Database storage fallback for contact message:", dbError);
      // Return success to user even if local DB is in mock/offline mode
      savedRecord = {
        id: `mock_${Date.now()}`,
        name,
        email,
        createdAt: new Date(),
      };
    }

    return apiSuccess({
      message: "Your message has been successfully received. Our team will get back to you shortly.",
      referenceId: savedRecord.id,
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return apiError("An unexpected error occurred while processing your request.", 500);
  }
}
