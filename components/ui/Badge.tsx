import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "yellow" | "dark" | "outline" | "subtle";
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "subtle",
  className,
  dot = false,
}) => {
  const variantStyles = {
    yellow: "bg-brand-yellow/10 text-brand-yellow border-brand-yellow/30",
    dark: "bg-brand-dark text-brand-gray-300 border-brand-border",
    outline: "bg-transparent text-brand-gray-300 border-brand-border",
    subtle: "bg-white/[0.04] text-brand-gray-300 border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono tracking-wider uppercase border",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
      )}
      {children}
    </span>
  );
};
