import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please provide a valid email address")
    .max(150, "Email cannot exceed 150 characters")
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .max(30, "Phone number cannot exceed 30 characters")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .max(100, "Company name cannot exceed 100 characters")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .max(150, "Subject cannot exceed 150 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message cannot exceed 3000 characters")
    .trim(),
});

export const projectInquirySchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please provide a valid business email address")
    .max(150, "Email cannot exceed 150 characters")
    .trim()
    .toLowerCase(),
  company: z
    .string()
    .max(100, "Company name cannot exceed 100 characters")
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .min(2, "Please select a service")
    .max(100, "Service name is too long"),
  budget: z
    .string()
    .max(50, "Budget selection is invalid")
    .optional()
    .or(z.literal("")),
  timeline: z
    .string()
    .max(50, "Timeline selection is invalid")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Please share a brief description of your project (min 10 characters)")
    .max(3000, "Message cannot exceed 3000 characters")
    .trim(),
});

export const jobApplicationSchema = z.object({
  jobId: z.string().min(1, "Job ID is required"),
  jobTitle: z.string().optional(),
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please provide a valid email address")
    .max(150, "Email cannot exceed 150 characters")
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .min(5, "Please provide a valid phone number")
    .max(30, "Phone number is too long"),
  resume: z
    .string()
    .min(1, "Please upload or attach your resume / CV document"),
  coverLetter: z
    .string()
    .max(3000, "Cover letter cannot exceed 3000 characters")
    .optional()
    .or(z.literal("")),
});

export const newsletterSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(150, "Email is too long")
    .trim()
    .toLowerCase(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ProjectInquiryData = z.infer<typeof projectInquirySchema>;
export type JobApplicationData = z.infer<typeof jobApplicationSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
