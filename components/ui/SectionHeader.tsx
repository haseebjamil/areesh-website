import React from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  badgeDot?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  badgeDot = true,
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("mb-4", align === "center" && "flex justify-center")}>
          <Badge variant="yellow" dot={badgeDot}>
            {eyebrow}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-balance leading-[1.15]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-brand-gray-400 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
};
