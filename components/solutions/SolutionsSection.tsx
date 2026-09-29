"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { EDITORIAL_SOLUTIONS } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const SolutionsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = EDITORIAL_SOLUTIONS[activeIndex];

  return (
    <section
      id="solutions"
      className="relative py-28 sm:py-36 bg-white text-brand-black overflow-hidden border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              <span className="text-xs font-mono tracking-widest text-brand-black/60 uppercase">
                DOMAIN ARCHITECTURES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-brand-black leading-tight">
              Solutions For Modern Businesses.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-brand-gray-600 max-w-md leading-relaxed font-normal">
            Purpose-engineered software architectures designed for the specific scaling, security, and transaction demands of high-growth sectors.
          </p>
        </div>

        {/* Sector Selection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10 select-none">
          {EDITORIAL_SOLUTIONS.map((sol, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={sol.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "px-3 py-3 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between group",
                  isActive
                    ? "bg-brand-black text-white border-brand-black shadow-md"
                    : "bg-gray-50 text-brand-gray-700 border-gray-200 hover:bg-gray-100 hover:text-brand-black"
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[11px] font-semibold",
                    isActive ? "text-brand-yellow" : "text-brand-gray-400 group-hover:text-brand-black"
                  )}
                >
                  {sol.number}
                </span>
                <span className="text-xs sm:text-sm font-medium tracking-tight mt-2 truncate">
                  {sol.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Editorial Feature Display */}
        <div className="rounded-3xl bg-gray-50 border border-gray-200 overflow-hidden shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch"
            >
              {/* Left Column: High-Res Visual Experience */}
              <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] bg-gray-900 overflow-hidden">
                <Image
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  fill
                  className="object-cover filter contrast-105"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-brand-yellow font-medium">
                      SECTOR // {activeSolution.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-0.5">
                      {activeSolution.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono uppercase text-brand-yellow">
                    {activeSolution.tag}
                  </span>
                </div>
              </div>

              {/* Right Column: Architectural Insights & Action */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-brand-gray-500 font-medium">
                    {activeSolution.subtitle}
                  </span>
                  <p className="text-base sm:text-lg text-brand-gray-700 leading-relaxed mt-2 mb-8 font-normal">
                    {activeSolution.description}
                  </p>

                  <div className="pt-6 border-t border-gray-200 space-y-3.5">
                    <div className="text-xs font-mono text-brand-gray-500 uppercase tracking-wider mb-2">
                      Core Architecture & Capabilities:
                    </div>
                    {activeSolution.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-center gap-3 text-sm sm:text-base text-brand-gray-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs font-mono text-brand-gray-500 uppercase">
                    PRODUCTION SPECIFIED
                  </span>
                  <Button
                    variant="dark"
                    size="md"
                    href={`/contact?solution=${encodeURIComponent(
                      activeSolution.title
                    )}`}
                    showArrow
                    className="bg-brand-black text-white hover:bg-brand-dark font-medium"
                  >
                    Build for {activeSolution.title}
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
