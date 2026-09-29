"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const budgetOptions = [
  "< $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

const timelineOptions = [
  "Immediate (1-2 Weeks)",
  "1 – 2 Months",
  "3 – 6 Months",
  "6+ Months",
  "Flexible",
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: SERVICES_DATA[0].title,
    budget: budgetOptions[1],
    timeline: timelineOptions[1],
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please complete your full name, business email, and project scope.");
      }

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit message. Please try again.");
      }

      setStatus("success");
      setReferenceId(data.data?.inquiryId || `inq_${Date.now()}`);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: SERVICES_DATA[0].title,
        budget: budgetOptions[1],
        timeline: timelineOptions[1],
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 bg-brand-black text-white overflow-hidden border-b border-brand-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & SLA */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                <span className="text-xs font-mono tracking-widest text-brand-yellow uppercase">
                  START A CONVERSATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
                Let&apos;s Build <br />
                <span className="text-brand-yellow">Something</span> <br />
                Meaningful.
              </h2>

              <p className="mt-6 text-base sm:text-lg text-brand-gray-300 leading-relaxed font-normal">
                Tell us what you&apos;re building and we&apos;ll explore how technology can bring it to life.
              </p>

              {/* Direct Info */}
              <div className="mt-10 space-y-4">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-brand-surface/70 border border-brand-border hover:border-brand-yellow transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-border text-brand-yellow">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-brand-gray-400 uppercase">
                      Direct Email
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-brand-yellow transition-colors">
                      {COMPANY_INFO.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-surface/70 border border-brand-border">
                  <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-border text-brand-yellow">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-brand-gray-400 uppercase">
                      Response SLA
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Within 24 Business Hours
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-surface/70 border border-brand-border">
                  <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-border text-brand-yellow">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-brand-gray-400 uppercase">
                      Confidentiality
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Mutual NDA Protected
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Open Form with Thin Borders */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-brand-surface/80 border border-brand-border shadow-2xl">
              {status === "success" ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-brand-gray-300 max-w-md mt-2 leading-relaxed">
                    Thank you. Our solutions architect will review your project requirements and get in touch within 24 hours.
                  </p>
                  <div className="mt-4 p-3 rounded-lg bg-brand-dark border border-brand-border font-mono text-xs text-brand-gray-400">
                    REFERENCE ID: <span className="text-brand-yellow">{referenceId}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="md"
                    className="mt-6 border-brand-border hover:border-brand-yellow text-white font-medium"
                    onClick={() => setStatus("idle")}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-xs text-red-400">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-brand-gray-400 mb-2 uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-brand-gray-600 font-normal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brand-gray-400 mb-2 uppercase">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-brand-gray-600 font-normal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-brand-gray-400 mb-2 uppercase">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-brand-gray-600 font-normal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brand-gray-400 mb-2 uppercase">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-brand-gray-600 font-normal"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-mono text-brand-gray-400 mb-2 uppercase">
                      Select Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow transition-colors font-normal"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget & Timeline Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-brand-gray-400 mb-2 uppercase">
                        Expected Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow transition-colors font-normal"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brand-gray-400 mb-2 uppercase">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) =>
                          setFormData({ ...formData, timeline: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow transition-colors font-normal"
                      >
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-brand-gray-400 mb-2 uppercase">
                      Project Scope & Goals *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your technical requirements, goals, and target delivery window..."
                      className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-yellow transition-colors resize-none placeholder:text-brand-gray-600 font-normal"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-brand-gray-500">
                      SECURE_SSL // ENCRYPTED
                    </span>
                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      isLoading={isLoading}
                      showArrow
                      className="px-8 py-3.5 font-medium text-sm sm:text-base"
                    >
                      Get in Touch
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
