"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lightbulb,
  Award,
  Key,
  Users2,
  Target,
  Compass,
  Eye,
} from "lucide-react";
import { COMPANY_INFO, COMPANY_VALUES } from "@/data/company";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Lightbulb,
  Award,
  Key,
  Users2,
  Target,
};

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-brand-black border-t border-brand-border/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ABOUT AREESH TECHNOLOGIES"
          title="Technology Built Around People."
          description="A software and technology company focused on creating reliable digital products, modern software platforms and intelligent technology solutions."
        />

        {/* Mission & Vision Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="p-8 sm:p-10 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-yellow/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow">
                  <Compass className="w-6 h-6" />
                </div>
                <Badge variant="yellow">OUR MISSION</Badge>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                Engineering Measurable Value
              </h3>

              <p className="mt-4 text-base text-brand-gray-300 leading-relaxed">
                To build meaningful technology that helps businesses operate better,
                connect with people, and unlock new commercial opportunities
                through high-performance digital products.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border/60 text-xs font-mono text-brand-gray-500 uppercase">
              STRATEGIC_PURPOSE // 01
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="p-8 sm:p-10 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-yellow/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow">
                  <Eye className="w-6 h-6" />
                </div>
                <Badge variant="yellow">OUR VISION</Badge>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                A Trusted Global Partner
              </h3>

              <p className="mt-4 text-base text-brand-gray-300 leading-relaxed">
                To become a globally recognized software technology partner known
                for engineering excellence, uncompromised product craftsmanship,
                and enduring long-term relationships.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border/60 text-xs font-mono text-brand-gray-500 uppercase">
              LONG_TERM_HORIZON // 02
            </div>
          </motion.div>
        </div>

        {/* Company Core Values Grid */}
        <div className="mt-12">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Our Guiding Principles
            </h3>
            <p className="text-sm text-brand-gray-400 mt-1">
              The foundational values that govern how we design, write code, and collaborate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_VALUES.map((val, idx) => {
              const Icon = iconMap[val.icon] || ShieldCheck;

              return (
                <motion.div
                  key={val.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-6 rounded-xl bg-brand-dark/70 border border-brand-border hover:border-brand-yellow/40 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-brand-surface border border-brand-border text-brand-yellow">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {val.name}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-gray-300 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
