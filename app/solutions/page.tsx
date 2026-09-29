import { Metadata } from "next";
import Image from "next/image";
import { EDITORIAL_SOLUTIONS } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Industry & Business Solutions",
  description:
    "Tailored software engineering solutions for Startups, Enterprise, FinTech, Healthcare, SaaS, E-commerce, and Logistics.",
};

export default function SolutionsPage() {
  return (
    <div className="bg-brand-black min-h-screen">
      {/* Hero Header */}
      <div className="pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span className="text-xs font-mono tracking-widest text-brand-yellow uppercase">
              DOMAIN ARCHITECTURES
            </span>
          </div>
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white leading-[1.05]">
            Solutions Built for Modern Industry Demands.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brand-gray-300 leading-relaxed">
            Every sector requires unique security, compliance, data velocity, and user experience standards. We architect purpose-engineered systems designed around your commercial ecosystem.
          </p>
        </div>
      </div>

      {/* Alternating Visual Stories per Solution */}
      <div className="divide-y divide-brand-border/40">
        {EDITORIAL_SOLUTIONS.map((solution, idx) => {
          const isWhiteSection = idx % 2 !== 0;
          const isReversed = idx % 2 === 1;

          return (
            <section
              key={solution.id}
              className={cn(
                "py-24 sm:py-32 transition-colors",
                isWhiteSection
                  ? "bg-white text-brand-black"
                  : "bg-brand-black text-white"
              )}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Image Column */}
                  <div
                    className={cn(
                      "lg:col-span-6",
                      isReversed ? "lg:order-2" : "lg:order-1"
                    )}
                  >
                    <div className="relative w-full h-[360px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 600px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                        <span className="font-mono text-xs font-bold text-brand-yellow">
                          SECTOR // {solution.number}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono uppercase text-brand-yellow">
                          {solution.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Story Text Column */}
                  <div
                    className={cn(
                      "lg:col-span-6 flex flex-col justify-center",
                      isReversed ? "lg:order-1" : "lg:order-2"
                    )}
                  >
                    <span
                      className={cn(
                        "text-xs font-mono uppercase tracking-wider mb-2",
                        isWhiteSection ? "text-brand-gray-500" : "text-brand-yellow"
                      )}
                    >
                      {solution.subtitle}
                    </span>

                    <h2
                      className={cn(
                        "text-3xl sm:text-5xl font-bold tracking-tight mb-6",
                        isWhiteSection ? "text-brand-black" : "text-white"
                      )}
                    >
                      {solution.title}
                    </h2>

                    <p
                      className={cn(
                        "text-base sm:text-lg leading-relaxed mb-8",
                        isWhiteSection ? "text-brand-gray-700" : "text-brand-gray-300"
                      )}
                    >
                      {solution.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {solution.points.map((pt, pIdx) => (
                        <div
                          key={pIdx}
                          className={cn(
                            "flex items-center gap-3 text-sm sm:text-base",
                            isWhiteSection ? "text-brand-gray-800" : "text-brand-gray-200"
                          )}
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Button
                        variant={isWhiteSection ? "dark" : "primary"}
                        size="md"
                        href={`/contact?solution=${encodeURIComponent(
                          solution.title
                        )}`}
                        showArrow
                        className={
                          isWhiteSection
                            ? "bg-brand-black text-white hover:bg-brand-dark"
                            : "font-bold"
                        }
                      >
                        Build for {solution.title}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
