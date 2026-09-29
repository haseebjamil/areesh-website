"use client";

import React from "react";
import { TECH_ECOSYSTEM } from "@/data/company";

export const TechStackSection: React.FC = () => {
  return (
    <section
      id="technology"
      className="relative py-28 sm:py-36 bg-white text-brand-black overflow-hidden border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span className="text-xs font-mono tracking-widest text-brand-black/60 uppercase">
              MODERN ECOSYSTEM
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-brand-black leading-tight">
            Powered By Modern Technology.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-gray-600 leading-relaxed font-normal">
            We leverage battle-tested modern frameworks, scalable cloud infrastructure, and practical AI tools to build enduring software.
          </p>
        </div>
      </div>

      {/* Multi-Row Horizontal Technology Marquee Streams */}
      <div className="space-y-5 select-none">
        {TECH_ECOSYSTEM.map((row, rowIdx) => {
          const isReverse = rowIdx % 2 !== 0;

          return (
            <div key={row.category} className="relative overflow-hidden py-1">
              <div
                className={isReverse ? "animate-marquee-reverse" : "animate-marquee"}
              >
                {[...row.technologies, ...row.technologies, ...row.technologies].map(
                  (tech, tIdx) => (
                    <div
                      key={tIdx}
                      className="inline-flex items-center gap-3 px-5 py-2.5 mx-2 rounded-full bg-gray-100 hover:bg-brand-black hover:text-white transition-colors duration-200 border border-gray-200 cursor-default group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                      <span className="text-xs sm:text-sm font-mono font-medium tracking-wider text-brand-black group-hover:text-white uppercase">
                        {tech}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 group-hover:text-brand-yellow uppercase">
                        // {row.category}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
