import { ProjectItem } from "@/types";

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "apex-fintech-terminal",
    title: "Apex FinTech Analytics Engine",
    client: "Global Capital Markets",
    category: "Web & SaaS",
    industry: "FinTech & Financial Trading",
    description:
      "A high-frequency web trading terminal and portfolio risk analytics platform processing live telemetry and market data streams with sub-50ms latency.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    metrics: [
      { label: "Latency", value: "< 45ms" },
      { label: "Data Volume", value: "2.4M ops/day" },
      { label: "Uptime", value: "99.99%" },
    ],
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "nova-ai-orchestration",
    title: "Nova AI Enterprise Workflow Suite",
    client: "Enterprise Automation Corp",
    category: "AI & Cloud",
    industry: "Artificial Intelligence",
    description:
      "Autonomous AI agent platform that automates multi-step corporate compliance checks, document parsing, and unstructured data ingestion for global teams.",
    technologies: ["OpenAI APIs", "Python", "Next.js", "Vector DBs", "Docker"],
    metrics: [
      { label: "Efficiency Gain", value: "+340%" },
      { label: "Accuracy", value: "99.4%" },
      { label: "Cost Reduction", value: "62%" },
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "zenith-health-mobile",
    title: "Zenith TeleHealth & Patient Care",
    client: "Zenith Healthcare Network",
    category: "Mobile",
    industry: "Healthcare & MedTech",
    description:
      "HIPAA-compliant native iOS & Android mobile application for telemedicine consultations, biometric monitoring, and automated prescription management.",
    technologies: ["Flutter", "Kotlin", "Swift", "Node.js", "AWS"],
    metrics: [
      { label: "Active Patients", value: "180K+" },
      { label: "App Store Rating", value: "4.9 / 5.0" },
      { label: "Consultations", value: "500K+" },
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
];
