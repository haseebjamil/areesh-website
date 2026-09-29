"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/company";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Subtle auto-step progress every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="process"
      className="relative py-28 sm:py-36 bg-brand-black text-white overflow-hidden border-b border-brand-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span className="text-xs font-mono tracking-widest text-brand-yellow uppercase">
              DELIVERY LIFECYCLE
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            How We Work.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-gray-300 leading-relaxed">
            A disciplined 4-stage engineering methodology designed to eliminate risk, maintain sprint velocity, and guarantee production excellence.
          </p>
        </div>

        {/* Desktop Horizontal Process Journey Timeline */}
        <div className="hidden lg:block">
          {/* Top Progress Track */}
          <div className="relative mb-12">
            <div className="h-[2px] w-full bg-brand-border relative">
              <div
                className="h-[2px] bg-brand-yellow transition-all duration-500 ease-out"
                style={{
                  width: `${((activeStep + 1) / PROCESS_STEPS.length) * 100}%`,
                }}
              />
            </div>

            {/* Step Indicators on Track */}
            <div className="grid grid-cols-4 mt-6">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = idx === activeStep;

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className="text-left group focus:outline-none"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "w-3 h-3 rounded-full border-2 transition-all duration-300",
                          isActive
                            ? "bg-brand-yellow border-brand-yellow scale-125"
                            : "bg-brand-black border-brand-gray-600 group-hover:border-white"
                        )}
                      />
                      <span
                        className={cn(
                          "font-mono text-xs font-bold transition-colors",
                          isActive ? "text-brand-yellow" : "text-brand-gray-500 group-hover:text-white"
                        )}
                      >
                        PHASE {step.number}
                      </span>
                    </div>
                    <div
                      className={cn(
                        "text-xl font-bold tracking-tight mt-3 transition-colors",
                        isActive ? "text-white" : "text-brand-gray-500 group-hover:text-white"
                      )}
                    >
                      {step.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Narrative Showcase */}
          <div className="p-10 rounded-3xl bg-brand-surface border border-brand-border mt-8">
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-5">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow">
                  {PROCESS_STEPS[activeStep].phase}
                </span>
                <h3 className="text-3xl font-bold text-white tracking-tight mt-1">
                  {PROCESS_STEPS[activeStep].title}
                </h3>
                <p className="mt-4 text-base text-brand-gray-300 leading-relaxed">
                  {PROCESS_STEPS[activeStep].description}
                </p>
              </div>

              <div className="col-span-7 bg-brand-dark/70 p-6 rounded-2xl border border-brand-border">
                <div className="text-xs font-mono text-brand-gray-400 uppercase tracking-wider mb-4">
                  Stage Deliverables & Verification:
                </div>
                <div className="space-y-3">
                  {PROCESS_STEPS[activeStep].deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-brand-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Process Timeline */}
        <div className="lg:hidden space-y-6 relative">
          <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-brand-border" />

          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.number} className="relative ml-10 p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <div className="absolute -left-10 top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-black border-2 border-brand-yellow flex items-center justify-center font-mono text-[10px] font-bold text-brand-yellow">
                {step.number}
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-brand-yellow">
                {step.phase}
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">{step.title}</h3>
              <p className="text-sm text-brand-gray-300 mt-2 leading-relaxed">
                {step.description}
              </p>

              <div className="mt-4 pt-4 border-t border-brand-border/60 space-y-2">
                {step.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-brand-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
