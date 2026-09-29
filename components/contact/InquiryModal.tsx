"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertCircle } from "lucide-react";
import { SERVICES_DATA } from "@/data/company";
import { Button } from "@/components/ui/Button";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: defaultService || SERVICES_DATA[0].title,
    budget: "$10,000 – $25,000",
    timeline: "1 – 2 Months",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [inquiryId, setInquiryId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please provide your full name, work email, and project scope.");
      }

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setStatus("success");
      setInquiryId(data.data?.inquiryId || `inq_${Date.now()}`);
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred.");
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
          className="relative w-full max-w-2xl bg-brand-surface border border-brand-border rounded-3xl shadow-2xl p-6 sm:p-10 z-10 my-8 max-h-[90vh] overflow-y-auto text-white"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-brand-dark border border-brand-border text-brand-gray-300 hover:text-white hover:border-brand-yellow focus:outline-none transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow font-bold">
              GET IN TOUCH
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Start a Conversation
            </h3>
            <p className="text-xs sm:text-sm text-brand-gray-300 mt-1">
              Connect directly with our engineering and architecture leadership.
            </p>
          </div>

          {status === "success" ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Message Received!
              </h4>
              <p className="text-sm text-brand-gray-300 max-w-md mt-2 leading-relaxed">
                Thank you. A senior software architect will reach out within 24 hours.
              </p>
              <div className="mt-4 p-2.5 rounded bg-brand-dark border border-brand-border font-mono text-xs text-brand-gray-400">
                INQUIRY_REF: <span className="text-brand-yellow">{inquiryId}</span>
              </div>
              <Button variant="primary" size="md" className="mt-6 font-bold" onClick={onClose}>
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === "error" && (
                <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-brand-gray-400 mb-1 uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-brand-gray-400 mb-1 uppercase">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="sarah@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-gray-400 mb-1 uppercase">
                  Service *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-brand-gray-400 mb-1 uppercase">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow"
                  >
                    <option value="< $10,000">&lt; $10,000</option>
                    <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                    <option value="$25,000 – $50,000">$25,000 – $50,000</option>
                    <option value="$50,000 – $100,000">$50,000 – $100,000</option>
                    <option value="$100,000+">$100,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-brand-gray-400 mb-1 uppercase">
                    Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow"
                  >
                    <option value="Immediate (1-2 Weeks)">Immediate (1-2 Weeks)</option>
                    <option value="1 – 2 Months">1 – 2 Months</option>
                    <option value="3 – 6 Months">3 – 6 Months</option>
                    <option value="6+ Months">6+ Months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-gray-400 mb-1 uppercase">
                  Project Description *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Share a brief overview of your product goals..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow resize-none"
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
                  className="font-bold"
                >
                  Get in Touch
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
