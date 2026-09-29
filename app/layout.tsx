import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { COMPANY_INFO } from "@/data/company";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://areeshtechnologies.com"
  ),
  title: {
    default: "Areesh Technologies | Software & Technology Solutions",
    template: "%s | Areesh Technologies",
  },
  description:
    "Areesh Technologies builds modern software, mobile applications, web platforms, AI solutions and scalable digital products for businesses worldwide.",
  keywords: [
    "Areesh Technologies",
    "software development company",
    "mobile app development",
    "web application development",
    "Next.js developers",
    "AI solutions",
    "enterprise software",
    "Flutter app development",
    "Kotlin Swift developers",
    "cloud infrastructure",
    "Hafiz Haseeb Jamil",
    "Adnan Bhatti",
  ],
  authors: [
    { name: "Areesh Technologies", url: "https://areeshtechnologies.com" },
    { name: "Hafiz Haseeb Jamil" },
    { name: "Adnan Bhatti" },
  ],
  creator: "Areesh Technologies",
  publisher: "Areesh Technologies Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://areeshtechnologies.com",
    siteName: "Areesh Technologies",
    title: "Areesh Technologies | Software & Technology Solutions",
    description:
      "Engineering powerful software, intelligent digital experiences, and scalable technology solutions for businesses worldwide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Areesh Technologies Global Software Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Areesh Technologies | Software & Technology Solutions",
    description:
      "Areesh Technologies builds modern software, mobile applications, web platforms, AI solutions and scalable digital products for businesses worldwide.",
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    ],
    creator: "@areeshtech",
  },
  alternates: {
    canonical: "https://areeshtechnologies.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_INFO.name,
  legalName: COMPANY_INFO.legalName,
  url: "https://areeshtechnologies.com",
  logo: "https://areeshtechnologies.com/images/logo.png",
  description: COMPANY_INFO.supportingText,
  foundingDate: "2023",
  founder: [
    {
      "@type": "Person",
      name: "Hafiz Haseeb Jamil",
      jobTitle: "Chief Executive Officer",
    },
    {
      "@type": "Person",
      name: "Adnan Bhatti",
      jobTitle: "Director",
    },
  ],
  sameAs: [
    COMPANY_INFO.socials.github,
    COMPANY_INFO.socials.linkedin,
    COMPANY_INFO.socials.twitter,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: COMPANY_INFO.email,
    contactType: "customer support",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-black text-white antialiased selection:bg-brand-yellow selection:text-brand-black">
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
