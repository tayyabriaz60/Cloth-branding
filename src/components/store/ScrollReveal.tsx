import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: "div" | "section" | "article";
}

export function ScrollReveal({ children, className, delay = 0, as: Tag = "div" }: ScrollRevealProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={cn(
        "reveal",
        visible && "reveal-visible",
        delay > 0 && `reveal-delay-${delay}`,
        className
      )}
    >
      {children}
    </Tag>
  );
}
