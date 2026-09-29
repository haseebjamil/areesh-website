import {
  ServiceItem,
  SolutionItem,
  WhyUsPillar,
  TechCategory,
  ProcessStep,
  ProjectItem,
  LeadershipMember,
  JobListing,
  CompanyStat,
} from "@/types";

export * from "@/data/projects";

export const COMPANY_INFO = {
  name: "Areesh Technologies",
  brandName: "Areesh",
  brandSuffix: "Technologies",
  legalName: "Areesh Technologies Ltd.",
  tagline: "We Build Digital Products That Move Businesses Forward.",
  supportingText:
    "Engineering powerful software, intelligent digital experiences, and scalable technology solutions for businesses worldwide.",
  statementHeading: "Technology With Purpose.",
  statementBody:
    "Areesh Technologies helps businesses transform ideas into reliable digital products. From mobile applications and web platforms to AI-powered systems and cloud solutions, we combine engineering, design, and strategy to create technology that delivers measurable value.",
  editorialMotto: "Ideas → Products → Experiences → Growth",
  foundedYear: 2023,
  email: "contact@areeshtechnologies.com",
  inquiriesEmail: "hello@areeshtechnologies.com",
  careersEmail: "careers@areeshtechnologies.com",
  phone: "+1 (555) 019-2834",
  address: "Global Headquarters & Engineering Centers",
  socials: {
    github: "https://github.com/areesh-technologies",
    linkedin: "https://linkedin.com/company/areesh-technologies",
    twitter: "https://x.com/areeshtech",
    dribbble: "https://dribbble.com/areeshtechnologies",
  },
};

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Careers", href: "/careers" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export const PROGRAMMING_LANGUAGES = [
  "Kotlin",
  "Java",
  "Swift",
  "TypeScript",
  "JavaScript",
  "Python",
  "Dart",
  "SQL",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Flutter",
  "PostgreSQL",
  "Prisma",
  "AWS",
  "Docker",
  "GraphQL",
];

export const COMPANY_STATS: CompanyStat[] = [
  {
    value: "50+",
    label: "Projects Delivered",
    caption: "High-performance digital products engineered and deployed.",
    accent: true,
  },
  {
    value: "10+",
    label: "Global Industries",
    caption: "Specialized domain solutions across enterprise & high-growth sectors.",
  },
  {
    value: "20+",
    label: "Tech Solutions",
    caption: "End-to-end capabilities spanning web, mobile, cloud & AI.",
  },
  {
    value: "Global",
    label: "Digital Reach",
    caption: "Serving international clients across North America, Europe & Asia.",
    accent: true,
  },
];

export const BUILD_ITEMS = [
  {
    id: "mobile-applications",
    number: "01",
    title: "Mobile Applications",
    subtitle: "Native & Cross-Platform",
    description:
      "Fluid 60fps mobile products engineered for global reach on Android and iOS devices.",
    technologies: ["Kotlin", "Java", "Swift", "Flutter", "React Native"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "web-applications",
    number: "02",
    title: "Web Applications",
    subtitle: "Modern Reactive Platforms",
    description:
      "Ultra-fast server-rendered web architectures optimized for conversion and scale.",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "backend-systems",
    number: "03",
    title: "Backend Systems",
    subtitle: "Resilient Microservices",
    description:
      "High-throughput APIs, transactional databases, and scalable distributed architectures.",
    technologies: ["Node.js", "NestJS", "REST APIs", "PostgreSQL", "Prisma"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "ai-intelligent-products",
    number: "04",
    title: "AI & Intelligent Products",
    subtitle: "Autonomous AI & LLMs",
    description:
      "Practical LLM pipelines, autonomous agents, computer vision, and machine learning models.",
    technologies: ["AI APIs", "Machine Learning", "Automation", "Generative AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "cloud-infrastructure",
    number: "05",
    title: "Cloud & Infrastructure",
    subtitle: "Zero-Downtime DevOps",
    description:
      "Automated deployment pipelines, secure multi-region cloud VPCs, and edge networks.",
    technologies: ["AWS", "Cloudflare", "Docker", "CI/CD", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "product-engineering",
    number: "06",
    title: "Product Engineering",
    subtitle: "End-to-End Delivery",
    description:
      "From architecture blueprint to production scaling, subscription billing, and telemetry.",
    technologies: ["SaaS", "Enterprise Software", "APIs", "Digital Platforms"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "mobile-app-development",
    number: "01",
    title: "Mobile App Development",
    shortDesc: "Native and cross-platform mobile applications for Android and iOS.",
    fullDesc:
      "We design and engineer high-performance mobile applications that users love. Leveraging native iOS (Swift), native Android (Kotlin/Java), and modern cross-platform engines (Flutter & React Native), our apps deliver fluid 60fps animations, rock-solid offline sync, and bank-grade security.",
    technologies: ["Kotlin", "Java", "Swift", "Flutter", "React Native"],
    deliverables: [
      "iOS & Android Native Apps",
      "Cross-Platform Flutter & React Native",
      "App Store & Google Play Optimization",
      "Push Notifications & Offline Engine",
      "Biometric Authentication & Security",
    ],
    icon: "Smartphone",
    badge: "Native & Cross-Platform",
  },
  {
    id: "web-application-development",
    number: "02",
    title: "Web Application Development",
    shortDesc: "Modern, fast and scalable web applications.",
    fullDesc:
      "Enterprise-grade web platforms built with precision. Utilizing modern Next.js server components, React, TypeScript, and high-throughput Node.js microservices, we build lightning-fast web applications designed for conversion, accessibility, and frictionless scalability.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
    deliverables: [
      "Next.js App Router Architecture",
      "Real-Time Reactive Web Apps",
      "SEO & Core Web Vitals Optimization",
      "Progressive Web Apps (PWA)",
      "High-Conversion UI Interfaces",
    ],
    icon: "Globe",
    badge: "Next.js & Full-Stack",
  },
  {
    id: "custom-software-development",
    number: "03",
    title: "Custom Software Development",
    shortDesc: "Tailored software platforms designed around unique business workflows.",
    fullDesc:
      "Bespoke software systems architected precisely for your operational complexity. We eliminate workflow bottlenecks with custom ERPs, internal orchestration tools, and automated pipelines engineered with maintainable codebases and comprehensive API documentation.",
    technologies: ["TypeScript", "Python", "Go", "PostgreSQL", "GraphQL"],
    deliverables: [
      "Custom Enterprise ERP / CRM Systems",
      "Automated Workflow Orchestrators",
      "High-Throughput Microservices",
      "Legacy System Modernization",
      "Robust API Integrations",
    ],
    icon: "Code2",
    badge: "Bespoke Enterprise",
  },
  {
    id: "ai-intelligent-solutions",
    number: "04",
    title: "AI & Intelligent Solutions",
    shortDesc: "Integrate practical AI capabilities into products and business processes.",
    fullDesc:
      "Transform raw intelligence into business ROI. We build production-ready LLM pipelines, autonomous agents, computer vision systems, and predictive machine learning models seamlessly integrated into your existing software stack.",
    technologies: ["OpenAI APIs", "PyTorch", "LangChain", "Vector DBs", "ML Pipelines"],
    deliverables: [
      "Custom AI Agents & Workflow Automation",
      "RAG & Semantic Search Architectures",
      "Predictive Analytics & Data Intelligence",
      "Computer Vision & NLP Solutions",
      "Model Fine-Tuning & Evaluation",
    ],
    icon: "BrainCircuit",
    badge: "Production AI & LLMs",
  },
  {
    id: "ui-ux-design",
    number: "05",
    title: "UI/UX Design",
    shortDesc: "Simple, intuitive and conversion-focused digital experiences.",
    fullDesc:
      "Crafting digital interfaces that merge aesthetic elegance with cognitive clarity. We conduct user research, build comprehensive design systems, and prototype responsive interactions that delight users and drive business conversion.",
    technologies: ["Figma", "Design Systems", "Prototyping", "Design Tokens", "Accessibility"],
    deliverables: [
      "End-to-End Product UX Strategy",
      "Design Systems & Component Libraries",
      "Interactive High-Fidelity Prototypes",
      "User Journey & Information Architecture",
      "WCAG 2.1 Accessibility Compliance",
    ],
    icon: "Palette",
    badge: "Human-Centered Design",
  },
  {
    id: "cloud-backend-solutions",
    number: "06",
    title: "Cloud & Backend Solutions",
    shortDesc: "Scalable backend infrastructure, APIs, databases and cloud systems.",
    fullDesc:
      "Bulletproof cloud architectures engineered for 99.99% uptime. We design cloud-native serverless and containerized systems on AWS and Cloudflare, optimized PostgreSQL databases, and high-performance caching layers.",
    technologies: ["AWS", "PostgreSQL", "Prisma", "Docker", "Cloudflare", "Redis"],
    deliverables: [
      "Distributed Cloud Architecture",
      "PostgreSQL & Database Optimization",
      "Containerization & CI/CD Pipelines",
      "Zero-Trust Cloud Security & VPCs",
      "Automated Disaster Recovery",
    ],
    icon: "Cloud",
    badge: "Cloud-Native & Distributed",
  },
  {
    id: "saas-product-development",
    number: "07",
    title: "SaaS Product Development",
    shortDesc: "Build, launch and scale subscription-based software products.",
    fullDesc:
      "From zero to multi-tenant market leader. We construct resilient SaaS architectures equipped with subscription billing, granular RBAC permissions, analytics telemetry, onboarding funnels, and enterprise compliance.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Multi-Tenancy", "Webhooks"],
    deliverables: [
      "Multi-Tenant Architecture & Data Isolation",
      "Stripe Billing & Subscription Engines",
      "Granular RBAC & Team Management",
      "Customer Telemetry & Usage Analytics",
      "Automated Onboarding Flows",
    ],
    icon: "Boxes",
    badge: "Multi-Tenant SaaS",
  },
  {
    id: "maintenance-optimization",
    number: "08",
    title: "Maintenance & Optimization",
    shortDesc: "Continuous improvement, performance optimization, security and technical support.",
    fullDesc:
      "Protect your technology investments with proactive engineering support. We conduct deep code audits, security hardening, database query tuning, latency minimization, and round-the-clock infrastructure monitoring.",
    technologies: ["Monitoring", "Sentry", "New Relic", "Security Audits", "Performance Profiling"],
    deliverables: [
      "24/7 SLA Technical Support & Monitoring",
      "Database & Query Latency Optimization",
      "Quarterly Security Audits & Patching",
      "Continuous Codebase Refactoring",
      "Version & Dependency Lifecycle Upgrades",
    ],
    icon: "Wrench",
    badge: "24/7 Proactive Support",
  },
];

export const EDITORIAL_SOLUTIONS = [
  {
    number: "01",
    id: "startups",
    title: "Startups",
    subtitle: "From MVP to Scalable Product",
    description:
      "We help visionary founders turn ideas into launch-ready, investor-grade technology with rapid sprint velocity and modular architectures.",
    points: [
      "Rapid MVP development in 4–8 week sprints",
      "Production-ready scalable foundation",
      "Investor-ready technical architecture & documentation",
    ],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop",
    tag: "High Velocity",
  },
  {
    number: "02",
    id: "saas",
    title: "SaaS Platforms",
    subtitle: "Multi-Tenant Architecture",
    description:
      "Construct subscription software architectures built to onboard thousands of organizations with automated billing, RBAC, and granular telemetry.",
    points: [
      "Tenant-isolated databases & security",
      "Stripe & multi-currency billing integration",
      "Real-time usage metering & analytics",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tag: "Subscription Ready",
  },
  {
    number: "03",
    id: "enterprise",
    title: "Enterprise",
    subtitle: "High-Availability Systems",
    description:
      "Build secure, maintainable enterprise platforms capable of supporting complex workflows, high concurrency, and zero-trust security.",
    points: [
      "SOC2 / GDPR compliance architecture",
      "Enterprise SSO (SAML/OAuth) & RBAC",
      "High-availability microservice clusters",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    tag: "High Reliability",
  },
  {
    number: "04",
    id: "ecommerce",
    title: "E-Commerce",
    subtitle: "Headless High-Conversion Storefronts",
    description:
      "High-speed commerce platforms engineered for peak traffic events, sub-second checkout speeds, and real-time inventory synchronization.",
    points: [
      "Sub-second edge-rendered catalog pages",
      "Frictionless checkout & multi-payment rails",
      "ERP & warehouse inventory synchronization",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0a67e5572293?q=80&w=1200&auto=format&fit=crop",
    tag: "Conversion-Focused",
  },
  {
    number: "05",
    id: "fintech",
    title: "FinTech",
    subtitle: "Bank-Grade Financial Architecture",
    description:
      "Cryptographically secure financial dashboards, payment gateways, ledger engines, and algorithmic transaction workflows.",
    points: [
      "End-to-end cryptographic encryption",
      "Multi-currency wallets & payment rails",
      "Sub-50ms data streaming & risk analytics",
    ],
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop",
    tag: "Bank-Grade Security",
  },
  {
    number: "06",
    id: "healthcare",
    title: "Healthcare",
    subtitle: "HIPAA-Compliant Digital Health",
    description:
      "Encrypted patient portals, telemedicine video interfaces, and medical device telemetry platforms designed with clinical-grade reliability.",
    points: [
      "Encrypted patient records & telemetry",
      "Secure WebRTC video consultations",
      "Interoperable medical API integrations",
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    tag: "Regulatory Ready",
  },
  {
    number: "07",
    id: "education",
    title: "Education & EdTech",
    subtitle: "Interactive Learning Ecosystems",
    description:
      "Engaging LMS platforms, real-time virtual classrooms, and automated student progress analytics.",
    points: [
      "Interactive courseware delivery engines",
      "Automated assessment & grading pipelines",
      "Live webinar & collaboration tools",
    ],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    tag: "Interactive Learning",
  },
  {
    number: "08",
    id: "logistics",
    title: "Logistics",
    subtitle: "Real-Time Fleet & Supply Chain Hubs",
    description:
      "Distributed logistics control platforms coordinating multi-modal shipping routes, cold-chain telemetry, and automated dispatching.",
    points: [
      "Live GPS fleet route optimization",
      "Automated dispatching & digital manifests",
      "Predictive inventory demand forecasting",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    tag: "Real-Time Tracking",
  },
];

export const WHY_US_PILLARS = [
  {
    id: "engineering",
    title: "Engineering Excellence",
    word: "ENGINEERING",
    description:
      "Strong technical foundations built for scalability. Clean, modular, and rigorously tested codebases that minimize technical debt and perform under extreme concurrency.",
  },
  {
    id: "product-thinking",
    title: "Product Thinking",
    word: "DESIGN",
    description:
      "Technology decisions aligned with actual business objectives. We analyze user behavior, conversion funnels, and market economics before writing a single line of code.",
  },
  {
    id: "modern-architecture",
    title: "Modern Architecture",
    word: "INTELLIGENCE",
    description:
      "Maintainable and future-ready software architecture. Leveraging Next.js server components, distributed microservices, practical AI models, and cloud-native containerization.",
  },
  {
    id: "scale-and-growth",
    title: "Human-Centered Scale",
    word: "SCALE",
    description:
      "Technology should be powerful but effortless to use. We build digital products designed to serve millions of international users with sub-second latency.",
  },
];

export const TECH_ECOSYSTEM = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "NestJS", "PostgreSQL", "Prisma ORM", "REST APIs", "GraphQL", "Redis"],
  },
  {
    category: "Mobile",
    technologies: ["Kotlin", "Android SDK", "Swift", "iOS Core", "Flutter", "React Native"],
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS", "Cloudflare", "Docker", "CI/CD Pipelines", "Kubernetes", "Vercel"],
  },
  {
    category: "AI & Intelligence",
    technologies: ["OpenAI APIs", "Machine Learning", "Automation", "Vector DBs", "LangChain", "Intelligent Systems"],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    phase: "Research & Blueprint",
    description:
      "We dive deep into your business objectives, user workflows, and technical constraints to architect a precise technical roadmap.",
    deliverables: [
      "Technical Architecture Blueprint",
      "User Persona & Workflow Mapping",
      "Scope & Milestone Specification",
    ],
  },
  {
    number: "02",
    title: "Design",
    phase: "Architecture & UX",
    description:
      "We craft intuitive UI/UX design prototypes and architect resilient database schemas, API contracts, and security protocols.",
    deliverables: [
      "Interactive High-Fidelity Design System",
      "API Schema & Database ERD",
      "Security & Performance Protocols",
    ],
  },
  {
    number: "03",
    title: "Build",
    phase: "Engineering & QA",
    description:
      "Our agile engineering team develops the product in focused sprints with automated testing, continuous integration, and transparent weekly progress demos.",
    deliverables: [
      "Clean TypeScript Codebase",
      "Automated Unit & E2E Test Suite",
      "Staging Environment Previews",
    ],
  },
  {
    number: "04",
    title: "Scale",
    phase: "Deployment & Growth",
    description:
      "We deploy to high-availability production cloud infrastructure, implement 24/7 telemetry monitoring, and optimize for speed and growth.",
    deliverables: [
      "Production Zero-Downtime Launch",
      "Telemetry & 24/7 Monitoring",
      "Long-Term Maintenance & Updates",
    ],
  },
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: "hafiz-haseeb-jamil",
    name: "Hafiz Haseeb Jamil",
    role: "Chief Executive Officer",
    title: "CEO & Co-Founder",
    bio: "Visionary technology executive and product strategist leading Areesh Technologies' international growth, engineering standards, and long-term client partnerships. With a relentless focus on high-impact software engineering and scalable systems, he oversees company direction and strategic execution across global markets.",
    focusAreas: [
      "Executive Strategy",
      "Global Enterprise Partnerships",
      "Product Architecture",
      "Engineering Leadership",
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "adnan-bhatti",
    name: "Adnan Bhatti",
    role: "Director",
    title: "Director & Co-Founder",
    bio: "Accomplished technology director driving operational excellence, organizational scaling, and engineering delivery across international software ventures. He ensures every solution deployed by Areesh Technologies adheres to rigorous standards of security, maintainability, and client business success.",
    focusAreas: [
      "Operations & Growth",
      "Technology Delivery",
      "Client Success & Governance",
      "Talent & Innovation Strategy",
    ],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
  },
];

export const CAREER_POSITIONS: JobListing[] = [
  {
    id: "lead-fullstack-engineer",
    title: "Lead Full-Stack Engineer (Next.js / Node.js)",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "5+ Years",
    overview:
      "We are seeking an experienced Full-Stack Engineer to architect high-performance web applications using Next.js App Router, TypeScript, and Node.js backend microservices.",
    responsibilities: [
      "Architect and build scalable web applications with Next.js and TypeScript",
      "Design resilient REST and GraphQL APIs with PostgreSQL and Prisma",
      "Collaborate with UI/UX designers to implement pixel-perfect, accessible interfaces",
      "Conduct code reviews and mentor junior engineering team members",
    ],
    requirements: [
      "5+ years of production experience in React, Next.js, and TypeScript",
      "Deep understanding of modern web performance, SSR, and Core Web Vitals",
      "Proficiency with PostgreSQL, relational data modeling, and Prisma ORM",
      "Strong communication and collaborative problem-solving skills",
    ],
    status: "OPEN",
  },
  {
    id: "senior-mobile-engineer",
    title: "Senior Mobile Engineer (Flutter & Kotlin/Swift)",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "4+ Years",
    overview:
      "Join our mobile engineering group to build world-class native and cross-platform mobile apps for international enterprise and startup clients.",
    responsibilities: [
      "Develop responsive mobile applications in Flutter, Swift, and Kotlin",
      "Implement robust state management, offline database sync, and push notification pipelines",
      "Optimize mobile performance, memory consumption, and battery efficiency",
      "Manage App Store and Google Play deployment lifecycles",
    ],
    requirements: [
      "4+ years of mobile application development experience",
      "Strong portfolio of published iOS and Android applications",
      "Expertise with Flutter/Dart or native Kotlin/Swift development",
      "Experience with mobile CI/CD pipelines and unit testing",
    ],
    status: "OPEN",
  },
  {
    id: "senior-ai-engineer",
    title: "Senior AI & Machine Learning Solutions Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ Years",
    overview:
      "Lead the implementation of practical AI solutions, LLM orchestration pipelines, and intelligent automation systems for client products.",
    responsibilities: [
      "Build RAG systems, AI agents, and semantic search architectures",
      "Integrate OpenAI and open-source models with vector databases",
      "Evaluate model performance, latency, and cost efficiency in production",
      "Work closely with backend teams to integrate AI endpoints securely",
    ],
    requirements: [
      "Strong background in Python, TypeScript, and modern AI/LLM frameworks",
      "Hands-on experience with LangChain, LlamaIndex, and Vector DBs (Pinecone, pgvector)",
      "Understanding of prompt engineering, model fine-tuning, and evaluation metrics",
    ],
    status: "OPEN",
  },
  {
    id: "senior-ui-ux-designer",
    title: "Senior Product & UI/UX Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "4+ Years",
    overview:
      "Shape the visual direction and user experience for groundbreaking software platforms, web apps, and digital experiences.",
    responsibilities: [
      "Conduct user research, journey mapping, and wireframing for complex products",
      "Create high-fidelity interactive prototypes in Figma with scalable design systems",
      "Collaborate seamlessly with frontend engineers to ensure design precision",
    ],
    requirements: [
      "Strong portfolio demonstrating complex web and mobile product designs",
      "Mastery of Figma, auto-layout, design tokens, and prototyping",
      "Deep empathy for user psychology and accessibility standards (WCAG)",
    ],
    status: "OPEN",
  },
  {
    id: "technical-project-manager",
    title: "Technical Project Manager",
    department: "Project Management",
    location: "Remote",
    type: "Full-time",
    experience: "3+ Years",
    overview:
      "Coordinate agile sprint delivery, stakeholder communication, and milestone execution across international engineering projects.",
    responsibilities: [
      "Manage sprint planning, daily standups, and roadmap milestones",
      "Serve as primary liaison between client stakeholders and engineering teams",
      "Proactively identify technical risks, scope creep, and timeline bottlenecks",
    ],
    requirements: [
      "3+ years managing software development teams in an agile environment",
      "Technical background or ability to understand software architectures",
      "Exceptional English written and verbal communication skills",
    ],
    status: "OPEN",
  },
  {
    id: "senior-qa-automation",
    title: "Senior QA Automation Engineer",
    department: "QA",
    location: "Remote",
    type: "Full-time",
    experience: "3+ Years",
    overview:
      "Ensure the highest quality of our delivered software through automated regression, API testing, and performance validation.",
    responsibilities: [
      "Design and maintain automated testing suites (Playwright, Cypress, Jest)",
      "Conduct automated API load, stress, and security testing",
      "Integrate automated test runs into CI/CD pipelines",
    ],
    requirements: [
      "3+ years in software quality assurance and test automation",
      "Proficiency in TypeScript/JavaScript test frameworks",
      "Experience with API testing (Postman, REST, GraphQL)",
    ],
    status: "OPEN",
  },
];

export const COMPANY_VALUES = [
  {
    name: "Integrity",
    description: "We are honest, transparent, and direct in our engineering, estimations, and communication.",
    icon: "ShieldCheck",
  },
  {
    name: "Innovation",
    description: "We continuously explore modern technologies to provide tangible competitive advantages to our partners.",
    icon: "Lightbulb",
  },
  {
    name: "Quality",
    description: "We refuse to cut corners. Every line of code, design element, and architecture choice is built to last.",
    icon: "Award",
  },
  {
    name: "Ownership",
    description: "We treat our clients' products with the same dedication and responsibility as our own.",
    icon: "Key",
  },
  {
    name: "Collaboration",
    description: "We foster open teamwork, seamless knowledge sharing, and tight integration with client teams.",
    icon: "Users2",
  },
  {
    name: "Customer Success",
    description: "Our ultimate metric of success is the commercial and operational growth of the businesses we build for.",
    icon: "Target",
  },
];
