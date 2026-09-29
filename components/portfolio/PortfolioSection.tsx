"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Eye } from "lucide-react";
import { PROJECTS_DATA } from "@/data/company";
import { ProjectItem } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { cn } from "@/lib/utils";

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Mobile", "Web & SaaS", "AI & Cloud", "Enterprise"];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 bg-brand-black border-t border-brand-border/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="PROVEN EXECUTION"
            title="Selected Work"
            description="A curated selection of high-impact platforms, enterprise systems, and digital products engineered by our team."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-150 border",
                  activeCategory === cat
                    ? "bg-brand-yellow text-brand-black border-brand-yellow font-bold shadow-yellow-sm"
                    : "bg-brand-dark/80 text-brand-gray-400 border-brand-border hover:text-white hover:border-brand-gray-600"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-yellow/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-yellow-sm cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div className="relative w-full h-52 sm:h-56 bg-brand-dark overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 filter grayscale contrast-110 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/20 to-transparent" />

                {/* Top Overlay Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <Badge variant="yellow">{project.category}</Badge>
                  <div className="p-1.5 rounded-lg bg-brand-dark/80 border border-brand-border text-brand-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5 text-brand-yellow" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-brand-gray-400 uppercase tracking-wider mb-1.5">
                    {project.industry}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-brand-yellow transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-brand-gray-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Highlights */}
                <div className="mt-5 pt-4 border-t border-brand-border/60 grid grid-cols-3 gap-2 text-center">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-1.5 rounded-lg bg-brand-dark/60">
                      <div className="text-xs font-mono font-bold text-brand-yellow">
                        {m.value}
                      </div>
                      <div className="text-[9px] font-mono text-brand-gray-400 uppercase truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-4 pt-3 border-t border-brand-border/40 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-brand-dark text-[10px] font-mono text-brand-gray-400 border border-brand-border truncate"
                      >
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-mono text-brand-gray-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-brand-gray-400 group-hover:text-brand-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="md" href="/contact?type=portfolio" showArrow>
            Discuss Your Project Requirements
          </Button>
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
