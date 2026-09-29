"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  onOpenInquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const scrollToExplore = () => {
    const nextSection = document.getElementById("statement-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden bg-brand-black pt-32 pb-14">
      {/* High-End Cinematic Luxury Ambient Background Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2400&auto=format&fit=crop"
          alt="Areesh Technologies Ambient Digital Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 scale-105 filter grayscale contrast-125"
        />
        {/* Soft Multi-Layered Gradients for Premium Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/75 to-brand-black/60" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
        <div className="absolute inset-0 bg-tech-grid opacity-15" />
      </div>

      {/* Central Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-auto flex flex-col items-center text-center">
        {/* Refined Brand Eyebrow Lockup */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-surface/70 border border-brand-border/80 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
            <span className="text-sm font-semibold tracking-tight text-brand-yellow font-mono">
              AREESH
            </span>
            <span className="text-xs font-normal tracking-[0.2em] text-white/90 uppercase">
              TECHNOLOGIES
            </span>
          </div>
        </motion.div>

        {/* Main Heading: Softened Typography Weight */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl text-balance leading-[1.12]"
        >
          We Build Digital Products That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-gray-300 font-medium">
            Move Businesses
          </span>{" "}
          <span className="text-brand-yellow font-semibold">Forward.</span>
        </motion.h1>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-6 sm:mt-8 text-base sm:text-lg text-brand-gray-300 max-w-2xl text-balance leading-relaxed font-normal"
        >
          {COMPANY_INFO.supportingText}
        </motion.p>

        {/* CTA Buttons: "Get in Touch" & "Explore Solutions" */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base px-8 py-3.5 font-medium"
            showArrow
            href="/contact"
            onClick={(e) => {
              if (onOpenInquiry) {
                e.preventDefault();
                onOpenInquiry();
              }
            }}
          >
            Get in Touch
          </Button>

          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base px-8 py-3.5 bg-brand-surface border-brand-border text-white hover:text-brand-yellow hover:border-brand-yellow/50 font-medium"
            href="/solutions"
          >
            Explore Solutions
          </Button>
        </motion.div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={scrollToExplore}
        role="button"
        tabIndex={0}
        aria-label="Scroll to explore website sections"
      >
        <span className="text-[11px] font-mono tracking-widest text-brand-gray-500 uppercase transition-colors group-hover:text-brand-yellow">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-brand-gray-500 group-hover:text-brand-yellow transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};
