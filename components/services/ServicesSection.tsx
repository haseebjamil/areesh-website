"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { BUILD_ITEMS } from "@/data/company";
import { Button } from "@/components/ui/Button";

export const ServicesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-scroll loop when not hovered
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollBy({ left: 1.5, behavior: "auto" });
        }
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 bg-brand-black text-white overflow-hidden border-b border-brand-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              <span className="text-xs font-mono tracking-widest text-brand-yellow uppercase">
                CAPABILITIES & PRODUCTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              What We Build.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-gray-300 max-w-2xl leading-relaxed font-normal">
              From high-concurrency cloud systems to AI automation and mobile platforms, we engineer end-to-end technology solutions.
            </p>
          </div>

          {/* Manual Scroll Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-brand-surface border border-brand-border text-brand-gray-300 hover:text-white hover:border-brand-yellow transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-brand-surface border border-brand-border text-brand-gray-300 hover:text-white hover:border-brand-yellow transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Auto-Scrolling Technology Showcase */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto no-scrollbar px-4 sm:px-8 max-w-full pb-6 cursor-grab active:cursor-grabbing"
      >
        {BUILD_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[330px] sm:w-[400px] rounded-3xl bg-brand-surface border border-brand-border hover:border-brand-yellow/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
          >
            {/* Visual Image */}
            <div className="relative w-full h-48 bg-brand-dark overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-110 group-hover:grayscale-0"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-brand-black/80 backdrop-blur-md border border-brand-border text-brand-yellow">
                  {item.number}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-yellow font-medium">
                  {item.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-1 group-hover:text-brand-yellow transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-brand-gray-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Technologies List */}
              <div className="mt-6 pt-5 border-t border-brand-border/60">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-brand-dark border border-brand-border text-xs font-mono text-brand-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  href={`/contact?service=${encodeURIComponent(item.title)}`}
                  showArrow
                  className="w-full justify-center border-brand-border hover:border-brand-yellow font-medium"
                >
                  Inquire Solution
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
