"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { ProjectItem } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireSimilar?: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireSimilar,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-brand-surface border border-brand-border rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-dark/80 border border-brand-border text-brand-gray-300 hover:text-white hover:border-brand-yellow focus:outline-none transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image Banner */}
          <div className="relative w-full h-64 sm:h-80 bg-brand-dark">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-black/50" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-2">
              <Badge variant="yellow">{project.category}</Badge>
              <Badge variant="dark">{project.industry}</Badge>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              {project.client && (
                <span className="text-xs font-mono text-brand-gray-400 uppercase">
                  Client: {project.client}
                </span>
              )}
            </div>

            <p className="text-base text-brand-gray-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Performance Metrics */}
            <div className="grid grid-cols-3 gap-4 p-5 rounded-xl bg-brand-dark/70 border border-brand-border/80 mb-6">
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-brand-yellow">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-mono text-brand-gray-400 uppercase mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="mb-8">
              <h4 className="text-xs font-mono text-brand-gray-400 uppercase tracking-wider mb-3">
                Architecture & Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-brand-dark border border-brand-border text-xs font-mono text-brand-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-brand-gray-400">
                Interested in building a similar solution?
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button variant="outline" size="sm" onClick={onClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  href={`/contact?project=${encodeURIComponent(project.title)}`}
                  showArrow
                  onClick={() => {
                    onClose();
                    if (onInquireSimilar) onInquireSimilar(project.title);
                  }}
                >
                  Inquire Similar Architecture
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
