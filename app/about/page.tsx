import { Metadata } from "next";
import { COMPANY_INFO, COMPANY_VALUES } from "@/data/company";
import { LeadershipSection } from "@/components/leadership/LeadershipSection";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ShieldCheck, Lightbulb, Award, Key, Users2, Target } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us & Leadership Team",
  description:
    "Learn about Areesh Technologies, our mission, executive leadership (CEO Hafix Haseeb Jamil & Director Adnan Bhatti), and our engineering philosophy.",
};

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Lightbulb,
  Award,
  Key,
  Users2,
  Target,
};

export default function AboutPage() {
  return (
    <div className="bg-brand-black min-h-screen text-white">
      {/* Hero Header */}
      <div className="pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span className="text-xs font-mono tracking-widest text-brand-yellow uppercase">
              COMPANY STORY & PRINCIPLES
            </span>
          </div>
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white leading-[1.05]">
            Technology Built Around People.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brand-gray-300 leading-relaxed">
            {COMPANY_INFO.statementBody}
          </p>
        </div>
      </div>

      {/* Story & Manifesto Section (WHITE SECTION) */}
      <section className="py-24 sm:py-32 bg-white text-brand-black border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gray-500 font-bold">
                FOUNDATION // 2023
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-black mt-2 leading-tight">
                Engineering with Purpose, Scaling with Integrity.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-brand-gray-700 leading-relaxed">
              <p>
                Areesh Technologies was established with a singular objective: to bridge the gap between high-level architectural complexity and real commercial business value.
              </p>
              <p>
                Too often, software projects suffer from poor foundations, brittle architectures, and fragile short-term hacks. We believe true engineering excellence requires disciplined craftsmanship, deep user empathy, and end-to-end responsibility.
              </p>
            </div>
          </div>

          {/* Mission & Vision Full-Width Split */}
          <div className="mt-20 pt-16 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow font-bold">
                01 // MISSION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-black mt-2 mb-3">
                Engineering Measurable Value
              </h3>
              <p className="text-base text-brand-gray-600 leading-relaxed">
                To build meaningful technology that helps businesses operate better, connect with people, and create sustainable commercial advantage.
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow font-bold">
                02 // VISION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-black mt-2 mb-3">
                A Trusted Global Partner
              </h3>
              <p className="text-base text-brand-gray-600 leading-relaxed">
                To become a recognized global technology partner renowned for software architecture quality, innovation, and enduring long-term relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section (WHITE SECTION - EDITORIAL PORTRAIT) */}
      <LeadershipSection />

      {/* Core Values (BLACK SECTION - TYPOGRAPHY DRIVEN) */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow font-bold">
            FOUNDATIONAL VALUES
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
            Our Guiding Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_VALUES.map((val, idx) => {
            const Icon = iconMap[val.icon] || ShieldCheck;
            return (
              <div key={val.name} className="py-6 border-t border-brand-border/60">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-brand-yellow font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {val.name}
                  </h3>
                </div>
                <p className="text-sm text-brand-gray-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
