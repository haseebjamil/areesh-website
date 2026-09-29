import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service governing the use of Areesh Technologies services and website.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="yellow" className="mb-4">
          LEGAL AGREEMENT
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs font-mono text-brand-gray-400 mt-2">
          Effective Date: January 1, 2026 | Last Updated: September 2026
        </p>

        <div className="mt-10 space-y-8 text-sm sm:text-base text-brand-gray-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing our website or engaging with {COMPANY_INFO.legalName} for custom software development, mobile apps, AI solutions, or cloud infrastructure services, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Intellectual Property Rights</h2>
            <p>
              All software architectures, proprietary source code, design systems, and deliverables created pursuant to custom client contracts are governed by specific Statement of Work (SOW) agreements. Upon full payment of contractual fees, all agreed deliverables and intellectual property rights are assigned to the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Professional Warranty & SLA</h2>
            <p>
              We warrant that all custom software delivered by {COMPANY_INFO.name} conforms to professional software industry standards, clean architectural principles, and specified functional requirements as outlined in formal client agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Confidentiality & Non-Disclosure</h2>
            <p>
              Both parties agree to treat all business information, technical schematics, database schemas, and proprietary assets disclosed during discovery or project execution as strictly confidential under bilateral non-disclosure terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Governing Law & Contact</h2>
            <p>
              These Terms shall be interpreted in accordance with applicable laws governing commercial technology transactions. For formal legal notices or queries, reach us at:{" "}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-yellow underline">
                {COMPANY_INFO.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
