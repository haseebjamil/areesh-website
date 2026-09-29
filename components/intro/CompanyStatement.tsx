"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { Button } from "@/components/ui/Button";

export const CompanyStatement: React.FC = () => {
  const manifestoSteps = [
    { step: "01", label: "Ideas", desc: "Formulated through rigorous product discovery and architectural strategy." },
    { step: "02", label: "Products", desc: "Engineered with clean codebases, high concurrency, and robust APIs." },
    { step: "03", label: "Experiences", desc: "Designed around human behavior for maximum user adoption." },
    { step: "04", label: "Growth", desc: "Scaled globally to unlock continuous measurable commercial value." },
  ];

  return (
    <section
      id="statement-section"
      className="relative py-28 sm:py-36 bg-white text-brand-black overflow-hidden select-none border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Refined Editorial Heading */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              <span className="text-xs font-mono tracking-widest text-brand-black/60 uppercase">
                PHILOSOPHY & MANIFESTO
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-brand-black leading-[1.1]">
              Technology <br />
              <span className="relative inline-block text-brand-black font-semibold">
                With Purpose.
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-brand-yellow rounded-full" />
              </span>
            </h2>
          </div>

          {/* Right Column: Deep Narrative Paragraph */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-2">
            <p className="text-lg sm:text-xl text-brand-gray-700 leading-relaxed font-normal">
              {COMPANY_INFO.statementBody}
            </p>

            <div className="mt-8 pt-8 border-t border-gray-200 flex flex-wrap items-center gap-6">
              <Button
                variant="dark"
                size="md"
                href="/about"
                showArrow
                className="bg-brand-black text-white hover:bg-brand-dark font-medium"
              >
                Our Engineering Philosophy
              </Button>
              <Button
                variant="ghost"
                size="md"
                href="/services"
                className="text-brand-black hover:text-brand-black/80 hover:bg-black/5 font-medium"
              >
                Explore Capabilities
              </Button>
            </div>
          </div>
        </div>

        {/* Below: Horizontal Typographic Statement */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-xs font-mono uppercase tracking-widest text-brand-gray-500 mb-8">
            VALUE CREATION PIPELINE
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {manifestoSteps.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-mono text-xs font-semibold text-brand-yellow">
                      {item.step}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black group-hover:text-brand-yellow transition-colors">
                      {item.label}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed mt-2 font-normal">
                    {item.desc}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-3 text-gray-300 font-mono text-base">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
