"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { CAREER_POSITIONS } from "@/data/company";
import { JobListing } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JobApplicationModal } from "@/components/careers/JobApplicationModal";
import { cn } from "@/lib/utils";

export const CareersSection: React.FC = () => {
  const [activeDepartment, setActiveDepartment] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

  const departments = [
    "All",
    "Engineering",
    "Design",
    "Project Management",
    "QA",
  ];

  const filteredJobs =
    activeDepartment === "All"
      ? CAREER_POSITIONS
      : CAREER_POSITIONS.filter((j) => j.department === activeDepartment);

  return (
    <section
      id="careers"
      className="relative py-24 sm:py-32 bg-brand-black border-t border-brand-border/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="JOIN OUR TEAM"
            title="Build Your Future With Us"
            description="We're building a world-class team of engineers, designers, product thinkers and technology professionals who enjoy solving meaningful problems."
            className="mb-0"
          />

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-150 border",
                  activeDepartment === dept
                    ? "bg-brand-yellow text-brand-black border-brand-yellow font-bold shadow-yellow-sm"
                    : "bg-brand-dark/80 text-brand-gray-400 border-brand-border hover:text-white hover:border-brand-gray-600"
                )}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-7 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-yellow/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-yellow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <Badge variant="yellow">{job.department}</Badge>
                  <span className="text-xs font-mono text-brand-gray-400">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-brand-yellow transition-colors">
                  {job.title}
                </h3>

                <p className="mt-3 text-sm text-brand-gray-300 leading-relaxed">
                  {job.overview}
                </p>

                {/* Job Specs */}
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-mono text-brand-gray-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-yellow" />
                    <span>{job.experience}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-brand-border/60 flex items-center justify-between">
                <span className="text-xs font-mono text-brand-gray-500">
                  REF: {job.id.toUpperCase().slice(0, 12)}
                </span>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setSelectedJob(job)}
                  showArrow
                >
                  Apply Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Application Form */}
      <JobApplicationModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </section>
  );
};
