"use client";

import React, { useState } from "react";
import { CAREER_POSITIONS } from "@/data/company";
import { JobListing } from "@/types";
import { Button } from "@/components/ui/Button";
import { JobApplicationModal } from "@/components/careers/JobApplicationModal";
import { ArrowRight, MapPin, Clock, Sparkles, Laptop, Zap, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const perks = [
  {
    title: "Remote & Hybrid Autonomy",
    description: "Work with flexible hours and high ownership from anywhere in the world.",
    icon: Laptop,
  },
  {
    title: "Continuous Learning Stipend",
    description: "Annual budget for cloud certifications, tech conferences, and books.",
    icon: Zap,
  },
  {
    title: "High-Impact Engineering",
    description: "Build production software deployed to international enterprise clients.",
    icon: Sparkles,
  },
  {
    title: "Radical Transparency",
    description: "Zero bureaucracy, direct access to leadership, and open architectural reviews.",
    icon: Users,
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [activeDept, setActiveDept] = useState<string>("All");

  const departments = ["All", "Engineering", "Design", "Project Management", "QA"];

  const filteredJobs =
    activeDept === "All"
      ? CAREER_POSITIONS
      : CAREER_POSITIONS.filter((j) => j.department === activeDept);

  return (
    <div className="bg-brand-black min-h-screen text-white">
      {/* Hero Header */}
      <div className="pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span className="text-xs font-mono tracking-widest text-brand-yellow uppercase">
              TALENT & CULTURE
            </span>
          </div>
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white leading-[1.05]">
            Work On What Matters.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brand-gray-300 leading-relaxed">
            We are looking for passionate software engineers, product thinkers, and systems architects who take pride in technical craftsmanship and scalable digital products.
          </p>
        </div>
      </div>

      {/* Culture & Philosophy Banner (WHITE SECTION) */}
      <section className="py-24 bg-white text-brand-black border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gray-500 font-bold">
              CULTURE & BENEFITS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-black mt-2">
              Engineering Built on Trust.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center text-brand-black mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-black mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-brand-gray-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Horizontal Rows (BLACK SECTION - NO CARDS) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-brand-border/60">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow font-bold">
              OPEN POSITIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
              Join the Engineering Group
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border",
                  activeDept === dept
                    ? "bg-brand-yellow text-brand-black border-brand-yellow font-bold"
                    : "bg-brand-surface text-brand-gray-400 border-brand-border hover:text-white"
                )}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Horizontal Rows */}
        <div className="divide-y divide-brand-border/60">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group cursor-pointer hover:bg-white/[0.01] px-4 rounded-xl transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-brand-yellow font-bold uppercase">
                    {job.department}
                  </span>
                  <span className="text-brand-gray-600">•</span>
                  <span className="text-xs font-mono text-brand-gray-400">
                    {job.type}
                  </span>
                  <span className="text-brand-gray-600">•</span>
                  <span className="text-xs font-mono text-brand-gray-400">
                    {job.experience}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-brand-yellow transition-colors">
                  {job.title}
                </h3>

                <p className="mt-2 text-sm text-brand-gray-400 max-w-3xl leading-relaxed">
                  {job.overview}
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <span className="text-xs font-mono text-brand-gray-400 hidden lg:inline-block">
                  {job.location}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-brand-border group-hover:border-brand-yellow group-hover:text-brand-yellow"
                  showArrow
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedJob(job);
                  }}
                >
                  Apply
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      <JobApplicationModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </div>
  );
}
