"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHY_US_PILLARS } from "@/data/company";

export const WhyUsSection: React.FC = () => {
  return (
    <section
      id="why-us"
      className="relative py-28 sm:py-36 bg-brand-black text-white overflow-hidden border-b border-brand-border/60"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span className="text-xs font-mono tracking-widest text-brand-yellow uppercase">
              DISTINCTIVE ADVANTAGE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
            Why Areesh?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-gray-400 max-w-xl leading-relaxed font-normal">
            We reject superficial shortcuts and fragile frameworks. Our engineering ethos is built on four non-negotiable foundations.
          </p>
        </div>

        {/* Full-Width Typography-Driven Stack with Thin Separators */}
        <div className="divide-y divide-brand-border/60">
          {WHY_US_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group transition-colors hover:bg-white/[0.01]"
            >
              {/* Refined Kinetic Typography Word */}
              <div className="lg:col-span-5 flex items-baseline gap-6">
                <span className="font-mono text-sm font-semibold text-brand-yellow">
                  0{idx + 1} //
                </span>
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white/90 group-hover:text-brand-yellow transition-colors duration-300">
                  {pillar.word}
                </h3>
              </div>

              {/* Title & Description */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <h4 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm sm:text-base text-brand-gray-300 leading-relaxed max-w-xl font-normal">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
