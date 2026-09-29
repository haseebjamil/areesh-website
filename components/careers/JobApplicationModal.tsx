"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, UploadCloud, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { JobListing } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface JobApplicationModalProps {
  job: JobListing | null;
  onClose: () => void;
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  job,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    fileName: "",
    coverLetter: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!job) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      setError("File size exceeds 5MB limit. Please upload a smaller PDF/Word document.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        resume: reader.result as string,
        fileName: file.name,
      }));
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (!formData.name || !formData.email || !formData.phone) {
        throw new Error("Please complete all required contact fields.");
      }

      if (!formData.resume) {
        throw new Error("Please upload your resume / CV document.");
      }

      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobId: job.id,
          jobTitle: job.title,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          resume: formData.resume,
          coverLetter: formData.coverLetter,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.error || "Failed to submit application. Please try again."
        );
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-brand-surface border border-brand-border rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-brand-dark/80 border border-brand-border text-brand-gray-300 hover:text-white hover:border-brand-yellow focus:outline-none transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="yellow">{job.department}</Badge>
              <Badge variant="dark">{job.type}</Badge>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Apply for {job.title}
            </h3>
            <p className="text-xs sm:text-sm text-brand-gray-400 mt-1 font-mono">
              Location: {job.location} | Experience: {job.experience}
            </p>
          </div>

          {success ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Application Submitted!
              </h4>
              <p className="text-sm text-brand-gray-300 max-w-md mt-2 leading-relaxed">
                Thank you for your interest in Areesh Technologies. Our talent
                acquisition team will review your credentials and contact you if
                your background matches our current openings.
              </p>
              <Button variant="primary" size="md" className="mt-6" onClick={onClose}>
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-brand-gray-300 mb-1.5 uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-brand-gray-300 mb-1.5 uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-gray-300 mb-1.5 uppercase">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                />
              </div>

              {/* Resume Upload File Picker */}
              <div>
                <label className="block text-xs font-mono text-brand-gray-300 mb-1.5 uppercase">
                  Resume / CV (PDF or Word, max 5MB) *
                </label>
                <div className="relative border-2 border-dashed border-brand-border hover:border-brand-yellow/60 rounded-xl p-5 text-center cursor-pointer transition-colors bg-brand-dark/50">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center">
                    <UploadCloud className="w-8 h-8 text-brand-yellow mb-2" />
                    {formData.fileName ? (
                      <span className="text-xs font-mono text-brand-yellow font-semibold truncate max-w-xs">
                        Selected: {formData.fileName}
                      </span>
                    ) : (
                      <>
                        <span className="text-xs text-brand-gray-300 font-medium">
                          Click to upload or drag & drop
                        </span>
                        <span className="text-[10px] font-mono text-brand-gray-500 mt-0.5">
                          PDF, DOC, DOCX up to 5MB
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-gray-300 mb-1.5 uppercase">
                  Cover Letter / Portfolio Note (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.coverLetter}
                  onChange={(e) =>
                    setFormData({ ...formData, coverLetter: e.target.value })
                  }
                  placeholder="Share any portfolio links, GitHub repositories, or brief introduction..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow resize-none"
                />
              </div>

              <div className="pt-4 border-t border-brand-border flex items-center justify-end gap-3">
                <Button variant="ghost" size="sm" type="button" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  isLoading={isLoading}
                  showArrow
                >
                  Submit Application
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
