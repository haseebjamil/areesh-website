import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data protection terms for Areesh Technologies.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="yellow" className="mb-4">
          LEGAL & COMPLIANCE
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-brand-gray-400 mt-2">
          Effective Date: January 1, 2026 | Last Updated: September 2026
        </p>

        <div className="mt-10 space-y-8 text-sm sm:text-base text-brand-gray-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            <p>
              {COMPANY_INFO.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard data when you visit our website or engage with our software engineering services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p>We may collect information you provide directly to us through our web forms:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-brand-gray-400">
              <li>Contact details (Full Name, Business Email Address, Phone Number, Company Name)</li>
              <li>Project specifications, timelines, budget scopes, and technical requirements</li>
              <li>Job applicant information, resumes, CVs, and employment background details</li>
              <li>Newsletter subscription email addresses</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
            <p>Collected information is used solely to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-brand-gray-400">
              <li>Respond to inquiries, provide quotations, and execute contractual obligations</li>
              <li>Process career applications and candidate communications</li>
              <li>Send technical updates and company briefings to opted-in subscribers</li>
              <li>Ensure application security, prevent fraud, and comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Data Security</h2>
            <p>
              We implement industry-standard administrative, physical, and electronic security safeguards, including TLS encryption, restricted database access, and regular security audits. We never sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or your data rights, please contact our legal and privacy desk at:{" "}
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
