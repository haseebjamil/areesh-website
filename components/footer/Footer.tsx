"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Dribbble, ArrowRight, Check, Send } from "lucide-react";
import { COMPANY_INFO, NAVIGATION_LINKS, SERVICES_DATA } from "@/data/company";
import { Button } from "@/components/ui/Button";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to subscribe. Please try again.");
      }

      setStatus("success");
      setMessage("Subscribed to Areesh Technologies engineering briefings.");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Failed to subscribe.");
    }
  };

  return (
    <footer className="bg-brand-black border-t border-brand-border/80 pt-20 pb-12 text-brand-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-brand-border/60">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-brand-yellow font-mono tracking-tight">
                AREESH
              </span>
              <span className="text-sm font-semibold tracking-widest text-white/90 uppercase">
                TECHNOLOGIES
              </span>
            </Link>

            <p className="text-sm text-brand-gray-300 leading-relaxed max-w-sm">
              International software and technology company delivering mobile applications, modern web platforms, AI systems, and cloud architectures for enterprises worldwide.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-yellow block mb-2">
                Tech & Engineering Briefings
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-white text-xs sm:text-sm focus:outline-none focus:border-brand-yellow"
                />
                <Button
                  variant="primary"
                  size="sm"
                  type="submit"
                  isLoading={status === "loading"}
                  className="font-bold"
                >
                  Join
                </Button>
              </form>
              {message && (
                <div
                  className={`text-xs mt-2 ${
                    status === "success" ? "text-brand-yellow" : "text-red-400"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-yellow transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.id}`}
                    className="hover:text-brand-yellow transition-colors truncate block"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-brand-yellow transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-yellow transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand-yellow transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-yellow transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © 2026 {COMPANY_INFO.name}. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 text-brand-gray-400">
            <a
              href={COMPANY_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-surface border border-brand-border hover:text-brand-yellow hover:border-brand-yellow/50 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-surface border border-brand-border hover:text-brand-yellow hover:border-brand-yellow/50 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_INFO.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-surface border border-brand-border hover:text-brand-yellow hover:border-brand-yellow/50 transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_INFO.socials.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-surface border border-brand-border hover:text-brand-yellow hover:border-brand-yellow/50 transition-colors"
              aria-label="Dribbble Portfolio"
            >
              <Dribbble className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
