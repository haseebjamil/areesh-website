"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LEADERSHIP_TEAM } from "@/data/company";
import { CheckCircle2 } from "lucide-react";

export const LeadershipSection: React.FC = () => {
  return (
    <section
      id="leadership"
      className="relative py-28 sm:py-36 bg-white text-brand-black overflow-hidden border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span className="text-xs font-mono tracking-widest text-brand-black/60 uppercase">
              EXECUTIVE GOVERNANCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-brand-black leading-tight">
            Leadership.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-gray-600 leading-relaxed font-normal">
            Experienced technology leaders guiding strategic innovation, engineering standards, and international partnerships.
          </p>
        </div>

        {/* Large Editorial Portrait Split Layout */}
        <div className="space-y-16 lg:space-y-20">
          {LEADERSHIP_TEAM.map((leader, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Large Editorial Portrait Visual */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative w-full h-[380px] sm:h-[450px] rounded-3xl overflow-hidden bg-brand-black shadow-lg">
                    <Image
                      src={leader.image || "/images/leadership/hafix-haseeb-jamil.svg"}
                      alt={leader.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                      <div>
                        <span className="font-mono text-xs text-brand-yellow uppercase tracking-widest font-medium">
                          EXECUTIVE // 0{idx + 1}
                        </span>
                        <div className="text-xl font-semibold font-sans">
                          {leader.name}
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono uppercase text-brand-yellow">
                        {leader.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Narrative Profile Details */}
                <div
                  className={`lg:col-span-7 flex flex-col justify-center ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow font-semibold mb-2">
                    {leader.title}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-semibold text-brand-black tracking-tight mb-3">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-mono text-brand-gray-500 uppercase mb-5 pb-3 border-b border-gray-200">
                    Role: {leader.role} | Organization: Areesh Technologies
                  </div>

                  <p className="text-base sm:text-lg text-brand-gray-700 leading-relaxed font-normal mb-6">
                    {leader.bio}
                  </p>

                  <div className="pt-6 border-t border-gray-200">
                    <div className="text-xs font-mono text-brand-gray-500 uppercase tracking-wider mb-3">
                      Executive Competencies & Focus:
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {leader.focusAreas.map((focus, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-gray-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                          <span>{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
