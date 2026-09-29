import { Metadata } from "next";
import { SERVICES_DATA } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Engineering & Development Services",
  description:
    "Explore Areesh Technologies' software development capabilities including mobile apps, web applications, custom software, AI integration, and cloud architectures.",
};

export default function ServicesPage() {
  return (
    <div className="bg-brand-black min-h-screen">
      {/* Hero Header */}
      <div className="pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span className="text-xs font-mono tracking-widest text-brand-yellow uppercase">
              ENGINEERING SPECTRUM
            </span>
          </div>
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white leading-[1.05]">
            Engineering Digital Possibilities.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brand-gray-300 leading-relaxed">
            We deliver complete software development lifecycles — from initial product architecture and intuitive UI/UX design to robust cloud deployment, machine learning integration, and ongoing performance tuning.
          </p>
        </div>
      </div>

      {/* Alternating Black and White Sections per Service (NO BOXES) */}
      <div className="divide-y divide-brand-border/40">
        {SERVICES_DATA.map((service, index) => {
          const isWhiteSection = index % 2 !== 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className={cn(
                "py-24 sm:py-32 transition-colors",
                isWhiteSection
                  ? "bg-white text-brand-black"
                  : "bg-brand-black text-white"
              )}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  {/* Left Specs */}
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-sm font-bold text-brand-yellow">
                        SERVICE // {service.number}
                      </span>
                      <span
                        className={cn(
                          "text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border",
                          isWhiteSection
                            ? "bg-gray-100 text-brand-black border-gray-300"
                            : "bg-brand-surface text-brand-gray-300 border-brand-border"
                        )}
                      >
                        {service.badge}
                      </span>
                    </div>

                    <h2
                      className={cn(
                        "text-3xl sm:text-5xl font-bold tracking-tight mb-6",
                        isWhiteSection ? "text-brand-black" : "text-white"
                      )}
                    >
                      {service.title}
                    </h2>

                    <p
                      className={cn(
                        "text-base sm:text-lg leading-relaxed mb-8",
                        isWhiteSection ? "text-brand-gray-700" : "text-brand-gray-300"
                      )}
                    >
                      {service.fullDesc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((t) => (
                        <span
                          key={t}
                          className={cn(
                            "px-3.5 py-1.5 rounded-lg text-xs font-mono border",
                            isWhiteSection
                              ? "bg-gray-100 text-brand-black border-gray-300"
                              : "bg-brand-dark text-brand-gray-300 border-brand-border"
                          )}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Deliverables & CTA */}
                  <div
                    className={cn(
                      "lg:col-span-6 p-8 sm:p-10 rounded-3xl border flex flex-col justify-between",
                      isWhiteSection
                        ? "bg-gray-50 border-gray-200"
                        : "bg-brand-surface border-brand-border"
                    )}
                  >
                    <div>
                      <h3
                        className={cn(
                          "text-xs font-mono uppercase tracking-wider mb-6",
                          isWhiteSection ? "text-brand-gray-500" : "text-brand-yellow"
                        )}
                      >
                        Core Engineering Deliverables:
                      </h3>
                      <ul className="space-y-3.5">
                        {service.deliverables.map((del, dIdx) => (
                          <li
                            key={dIdx}
                            className={cn(
                              "flex items-center gap-3 text-sm sm:text-base",
                              isWhiteSection
                                ? "text-brand-gray-800"
                                : "text-brand-gray-200"
                            )}
                          >
                            <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={cn(
                        "mt-10 pt-6 border-t flex items-center justify-between",
                        isWhiteSection ? "border-gray-200" : "border-brand-border/60"
                      )}
                    >
                      <span className="text-xs font-mono text-brand-gray-500 uppercase">
                        READY TO DEPLOY
                      </span>
                      <Button
                        variant={isWhiteSection ? "dark" : "primary"}
                        size="sm"
                        href={`/contact?service=${encodeURIComponent(
                          service.title
                        )}`}
                        showArrow
                        className={
                          isWhiteSection
                            ? "bg-brand-black text-white hover:bg-brand-dark"
                            : "font-bold"
                        }
                      >
                        Get in Touch
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
