import { NextResponse } from "next/server";
import { ZodError } from "zod";

export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
  details?: Record<string, string[]>;
  timestamp: string;
};

export function apiSuccess<T>(data: T, status = 200) {
  const response: ApiResponse<T> = {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  };
  return NextResponse.json(response, { status });
}

export function apiError(message: string, status = 400) {
  const response: ApiResponse = {
    success: false,
    error: message,
    timestamp: new Date().toISOString(),
  };
  return NextResponse.json(response, { status });
}

export function apiValidationError(error: ZodError) {
  const formattedDetails: Record<string, string[]> = {};

  for (const issue of error.issues) {
    const path = issue.path.join(".") || "root";
    if (!formattedDetails[path]) {
      formattedDetails[path] = [];
    }
    formattedDetails[path].push(issue.message);
  }

  const response: ApiResponse = {
    success: false,
    error: "Validation failed. Please check your submitted inputs.",
    details: formattedDetails,
    timestamp: new Date().toISOString(),
  };
  return NextResponse.json(response, { status: 422 });
}
