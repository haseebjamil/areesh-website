"use client";

import React from "react";
import { motion } from "framer-motion";
import { COMPANY_STATS } from "@/data/company";

export const StatsSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-brand-dark border-y border-brand-border/60 overflow-hidden">
      {/* Background Subtle Tech Line */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y-2 sm:divide-y-0 sm:divide-x divide-brand-border/40">
          {COMPANY_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`pt-6 sm:pt-0 sm:px-6 first:pt-0 first:px-0 flex flex-col items-start ${
                idx !== 0 ? "lg:pl-8" : ""
              }`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-mono text-white flex items-baseline gap-1">
                <span className={stat.accent ? "text-brand-yellow" : "text-white"}>
                  {stat.value}
                </span>
              </div>

              <div className="text-sm font-semibold text-white mt-2 tracking-tight">
                {stat.label}
              </div>

              <p className="text-xs text-brand-gray-400 mt-1 leading-relaxed">
                {stat.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
