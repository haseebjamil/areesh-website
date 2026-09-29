export type ServiceItem = {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  deliverables: string[];
  icon: string;
  badge: string;
  gradient?: string;
};

export type SolutionItem = {
  id: string;
  title: string;
  description: string;
  points: string[];
  iconName: string;
  tag: string;
};

export type WhyUsPillar = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  metric?: string;
};

export type TechCategory = {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    featured?: boolean;
  }[];
};

export type ProcessStep = {
  number: string;
  title: string;
  phase: string;
  description: string;
  deliverables: string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  client?: string;
  category: "Mobile" | "Web & SaaS" | "AI & Cloud" | "Enterprise";
  industry: string;
  description: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  image: string;
  featured?: boolean;
};

export type LeadershipMember = {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  focusAreas: string[];
  image?: string;
};

export type JobListing = {
  id: string;
  title: string;
  department: "Engineering" | "Design" | "Product" | "Project Management" | "QA" | "Business Development";
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote" | "Hybrid";
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  status: "OPEN" | "CLOSED";
};

export type CompanyStat = {
  value: string;
  label: string;
  caption: string;
  accent?: boolean;
};
