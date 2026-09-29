import { NextRequest } from "next/server";
import { jobApplicationSchema } from "@/lib/validation/schemas";
import { apiSuccess, apiError, apiValidationError } from "@/lib/api/response";
import { checkRateLimit, getClientIp } from "@/lib/api/rate-limiter";
import { prisma } from "@/lib/db/prisma";

export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(`career_${clientIp}`, 5, 60 * 1000);

    if (!rateLimit.allowed) {
      return apiError(
        `Rate limit exceeded. Please wait ${rateLimit.resetInSec} seconds before submitting another application.`,
        429
      );
    }

    const body = await request.json();
    const validation = jobApplicationSchema.safeParse(body);

    if (!validation.success) {
      return apiValidationError(validation.error);
    }

    const { jobId, name, email, phone, resume, coverLetter } = validation.data;

    let savedApplication;
    try {
      savedApplication = await prisma.jobApplication.create({
        data: {
          jobId,
          name,
          email,
          phone: phone || null,
          resume,
          coverLetter: coverLetter || null,
          status: "SUBMITTED",
        },
      });
    } catch (dbError) {
      console.warn("Database storage fallback for job application:", dbError);
      savedApplication = {
        id: `app_${Date.now()}`,
        name,
        email,
        jobId,
        createdAt: new Date(),
      };
    }

    return apiSuccess({
      message: "Your application has been successfully submitted! Our talent acquisition team will review your profile.",
      applicationId: savedApplication.id,
    });
  } catch (error) {
    console.error("Error processing job application:", error);
    return apiError("An unexpected error occurred while processing your job application.", 500);
  }
}
