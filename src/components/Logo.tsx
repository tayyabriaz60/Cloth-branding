import { cn } from "@/lib/utils";

export const LOGO_SRC = "/gamma_agency_logo.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { image: "h-9 w-9", text: "text-lg" },
  md: { image: "h-11 w-11", text: "text-xl" },
  lg: { image: "h-16 w-16", text: "text-2xl" },
};

const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const s = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src={LOGO_SRC}
        alt="The Gamma Agency logo"
        className={cn("rounded-full object-cover shrink-0", s.image)}
      />
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn("font-serif font-semibold text-foreground tracking-tight", s.text)}>
            The Gamma
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-sans font-semibold mt-0.5">
            Agency
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
