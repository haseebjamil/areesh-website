import React from "react";
import Link from "next/link";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  isLoading?: boolean;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      showArrow = false,
      isLoading = false,
      children,
      disabled,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black disabled:pointer-events-none disabled:opacity-50 select-none group";

    const variantStyles = {
      primary:
        "bg-brand-yellow text-brand-black hover:bg-brand-yellow-hover font-semibold shadow-yellow-sm hover:shadow-yellow-md hover:-translate-y-0.5 active:translate-y-0",
      secondary:
        "bg-brand-surface text-white hover:bg-brand-border border border-brand-border hover:border-brand-gray-700 hover:text-brand-yellow",
      outline:
        "bg-transparent text-white border border-brand-border hover:border-brand-yellow/60 hover:text-brand-yellow hover:bg-brand-yellow/5",
      dark:
        "bg-brand-dark text-white border border-brand-border hover:border-brand-yellow hover:bg-brand-surface",
      ghost:
        "bg-transparent text-brand-gray-300 hover:text-white hover:bg-white/5",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-md gap-1.5 tracking-wide",
      md: "text-sm px-5 py-2.5 rounded-lg gap-2 tracking-normal",
      lg: "text-base px-7 py-3.5 rounded-lg gap-2.5 font-semibold",
    };

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
        ) : null}
        <span>{children}</span>
        {showArrow && !isLoading && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current" />
        )}
      </>
    );

    if (href) {
      const isExternal = href.startsWith("http");
      return (
        <Link
          href={href}
          target={target || (isExternal ? "_blank" : undefined)}
          rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
          className={cn(
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            className
          )}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
