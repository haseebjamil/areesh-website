"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAVIGATION_LINKS, COMPANY_INFO } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-brand-black/90 backdrop-blur-md border-b border-brand-border/60 py-3.5 shadow-card"
          : "bg-gradient-to-b from-brand-black/80 via-brand-black/30 to-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Lockup: Modern Monogram + Refined Tracking */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="Areesh Technologies Home"
          >
            {/* Minimalist Geometric Icon Mark */}
            <div className="relative w-8 h-8 rounded-lg bg-brand-surface border border-brand-border/80 flex items-center justify-center transition-all duration-300 group-hover:border-brand-yellow/80 group-hover:shadow-yellow-sm">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                className="w-4 h-4 text-brand-yellow"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 4L26 24H20L16 16L12 24H6L16 4Z"
                  fill="currentColor"
                />
                <circle cx="16" cy="19" r="1.5" fill="#0A0A0A" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight text-brand-yellow font-mono">
                  AREESH
                </span>
                <span className="text-xs font-normal tracking-[0.25em] text-white/90 uppercase font-sans">
                  TECHNOLOGIES
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-brand-dark/50 border border-brand-border/50 backdrop-blur-sm"
            aria-label="Main Navigation"
          >
            {NAVIGATION_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-brand-black font-semibold"
                      : "text-brand-gray-300 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-brand-yellow"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA: "Get in Touch" */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href="/contact"
              showArrow
              className="border-brand-border/80 hover:border-brand-yellow hover:text-brand-yellow hover:bg-brand-yellow/10 font-medium"
              onClick={(e) => {
                if (onOpenInquiry) {
                  e.preventDefault();
                  onOpenInquiry();
                }
              }}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-brand-surface border border-brand-border text-brand-gray-300 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-brand-yellow" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-brand-border bg-brand-black/98 backdrop-blur-xl px-4 pt-4 pb-6 overflow-hidden"
          >
            <nav className="flex flex-col gap-2 mb-5">
              {NAVIGATION_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150",
                      isActive
                        ? "bg-brand-yellow text-brand-black font-semibold"
                        : "text-brand-gray-300 hover:bg-brand-surface hover:text-white"
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-black" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 opacity-40" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-brand-border/60">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center font-medium"
                href="/contact"
                showArrow
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenInquiry) onOpenInquiry();
                }}
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
