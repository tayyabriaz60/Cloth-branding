import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeader = ({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) => (
  <div
    className={cn(
      "max-w-3xl mb-16",
      align === "center" && "mx-auto text-center",
      className
    )}
  >
    <span className="section-label">
      <span className="w-8 h-px bg-primary" />
      {label}
      <span className="w-8 h-px bg-primary" />
    </span>
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-6 leading-tight">
      {title}
    </h2>
    {description && (
      <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
    )}
  </div>
);

export default SectionHeader;
