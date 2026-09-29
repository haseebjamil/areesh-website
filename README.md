# Areesh Technologies — Production Full-Stack Corporate Website

Modern, high-performance, full-stack international software and technology company website for **Areesh Technologies**.

- **Company:** Areesh Technologies Ltd.
- **Chief Executive Officer:** Hafiz Haseeb Jamil
- **Director:** Adnan Bhatti
- **Design System:** Black (`#0A0A0A`), Charcoal (`#121212`), Crisp White (`#FFFFFF`), Precision Yellow Accent (`#F5C400`).

---

## 🚀 Technology Stack

### Frontend
- **Framework:** Next.js (App Router, Server & Client Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **Animations:** Framer Motion (Smooth, accessible, respecting `prefers-reduced-motion`)
- **Icons:** Lucide React
- **Validation:** Zod

### Backend & Data
- **Runtime:** Node.js + Next.js Route Handlers
- **ORM:** Prisma ORM
- **Database:** PostgreSQL
- **Security:** Rate limiting, input sanitization, security headers (CSP, X-Frame-Options, X-Content-Type-Options)

---

## 📂 Project Structure

```text
areesh-technologies/
├── app/
│   ├── api/
│   │   ├── contact/route.ts       # Contact message submissions
│   │   ├── inquiries/route.ts     # Detailed project quotations
│   │   ├── careers/apply/route.ts # Job applications + resume upload
│   │   └── newsletter/route.ts    # Newsletter subscriptions
│   ├── services/page.tsx          # Comprehensive services catalog
│   ├── solutions/page.tsx         # Industry domain solutions
│   ├── careers/page.tsx           # Job portal & company culture
│   ├── about/page.tsx             # Company history, mission & leadership
│   ├── contact/page.tsx           # Quotation & contact desk
│   ├── privacy/page.tsx           # Privacy policy
│   ├── terms/page.tsx             # Terms of service
│   ├── layout.tsx                 # Root layout with SEO & JSON-LD
│   ├── page.tsx                   # Interactive homepage with 13 sections
│   ├── globals.css                # Brand colors & dark theme styles
│   ├── sitemap.ts                 # Dynamic XML sitemap
│   └── robots.ts                  # Crawler robots directives
│
├── components/
│   ├── navbar/Navbar.tsx          # Sticky blur nav with active indicator
│   ├── hero/Hero.tsx              # Full-viewport hero with tech imagery
│   ├── intro/CompanyStatement.tsx # Editorial statement section
│   ├── services/ServicesSection.tsx # Desktop split explorer + mobile accordion
│   ├── solutions/SolutionsSection.tsx # Sector solution cards
│   ├── why-us/WhyUsSection.tsx    # 6 engineering value pillars
│   ├── tech-stack/TechStackSection.tsx # Categorized tech badges
│   ├── process/ProcessSection.tsx # 4-step horizontal & vertical timeline
│   ├── portfolio/PortfolioSection.tsx # Case studies with modal inspector
│   ├── portfolio/ProjectModal.tsx
│   ├── stats/StatsSection.tsx     # Typography metrics counter
│   ├── leadership/LeadershipSection.tsx # Executive cards (CEO & Director)
│   ├── careers/CareersSection.tsx # Open roles & job cards
│   ├── careers/JobApplicationModal.tsx # Resume upload application modal
│   ├── about/AboutSection.tsx     # Mission, vision, and core values
│   ├── contact/ContactSection.tsx # Interactive quotation form
│   ├── contact/InquiryModal.tsx   # Global project estimator modal
│   ├── footer/Footer.tsx          # Footer with newsletter & social links
│   └── ui/                        # Reusable buttons, badges, cursor
│
├── data/
│   └── company.ts                 # Single source of truth data store
│
├── lib/
│   ├── db/prisma.ts               # Singleton Prisma client with fallback
│   ├── validation/schemas.ts      # Zod validation schemas
│   ├── api/rate-limiter.ts        # Rate limiter
│   ├── api/response.ts            # API JSON response builders
│   └── utils.ts                   # Utility helpers
│
├── prisma/
│   └── schema.prisma              # PostgreSQL database models
│
├── .env.example
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🛠️ Getting Started

### 1. Prerequisites
- Node.js 18.x or 20.x+
- PostgreSQL (or local instance)

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env` and adjust your PostgreSQL credentials:
```bash
cp .env.example .env
```

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/areesh_tech?schema=public"
NODE_ENV="development"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Database Setup & Prisma Generation
```bash
# Generate Prisma Client
npm run prisma:generate

# Push schema directly to database (or create migrations)
npm run prisma:db-push
```

### 5. Running in Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Verification & Build

### Type Checking
```bash
npm run type-check
```

### Production Build
```bash
npm run build
```

### Production Start
```bash
npm run start
```

---

## 🔒 Security & Performance Features

- **Rate Limiting:** Built-in sliding-window limiter protecting `/api/contact`, `/api/inquiries`, `/api/careers/apply`, and `/api/newsletter`.
- **Validation:** Strict Zod schema parsing on all endpoints.
- **Security Headers:** Strict Content Security Policy, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`.
- **SEO & Structured Data:** OpenGraph, Twitter Cards, Sitemap, Robots, and Schema.org `Organization` JSON-LD embedded.
- **Accessibility:** Semantic HTML, ARIA attributes, high contrast ratio, and `prefers-reduced-motion` compliance.

---

## 📄 License
© 2026 **Areesh Technologies Ltd.** All rights reserved.
