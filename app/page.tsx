import { Hero } from "@/components/hero/Hero";
import { CompanyStatement } from "@/components/intro/CompanyStatement";
import { ServicesSection } from "@/components/services/ServicesSection";
import { SolutionsSection } from "@/components/solutions/SolutionsSection";
import { WhyUsSection } from "@/components/why-us/WhyUsSection";
import { TechStackSection } from "@/components/tech-stack/TechStackSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { LeadershipSection } from "@/components/leadership/LeadershipSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-brand-black">
      {/* 01. FULL-SCREEN AI / DIGITAL HERO (BLACK / DARK) */}
      <Hero />

      {/* 02. TECHNOLOGY WITH PURPOSE (WHITE — HORIZONTAL EDITORIAL) */}
      <CompanyStatement />

      {/* 03. WHAT WE BUILD (BLACK — HORIZONTAL AUTO-SCROLL + MARQUEE) */}
      <ServicesSection />

      {/* 04. SOLUTIONS FOR MODERN BUSINESSES (WHITE — ASYMMETRIC EDITORIAL) */}
      <SolutionsSection />

      {/* 05. WHY AREESH? (BLACK — TYPOGRAPHY-DRIVEN) */}
      <WhyUsSection />

      {/* 06. POWERED BY MODERN TECHNOLOGIES (WHITE — HORIZONTAL TECH MARQUEE) */}
      <TechStackSection />

      {/* 07. HOW WE WORK (BLACK — HORIZONTAL PROGRESSIVE TIMELINE) */}
      <ProcessSection />

      {/* 08. LEADERSHIP (WHITE — LARGE EDITORIAL PORTRAIT LAYOUT) */}
      <LeadershipSection />

      {/* 09. CONTACT (BLACK — PREMIUM CTA + FORM) */}
      <ContactSection />
    </div>
  );
}
