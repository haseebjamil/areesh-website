import { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us & Get in Touch",
  description:
    "Get in touch with Areesh Technologies. Request a software development quotation, architecture consultation, or explore partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 bg-brand-black min-h-screen">
      <ContactSection />
    </div>
  );
}
