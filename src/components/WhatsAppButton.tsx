import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTA, WHATSAPP } from "@/lib/contact";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = WHATSAPP.tel,
  message = WHATSAPP.defaultMessage,
  position = "bottom-right",
  className,
}) => {
  const encodedMessage = encodeURIComponent(message);
  const digits = phoneNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${digits}?text=${encodedMessage}`;

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-24 right-6",
    "top-left": "top-24 left-6",
  };

  return (
    <div
      className={cn("fixed z-[100] flex items-center group", positionClasses[position], className)}
    >
      <div
        className={cn(
          "absolute px-3 py-1.5 bg-card border border-border rounded-xl shadow-lg text-sm font-medium text-foreground whitespace-nowrap transition-all duration-300 pointer-events-none opacity-0 group-hover:opacity-100",
          "hidden md:block",
          position.includes("right") ? "right-full mr-4" : "left-full ml-4"
        )}
      >
        {CTA.secondaryWhatsApp}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-card border-t border-r border-border rotate-45",
            position.includes("right") ? "-right-1" : "-left-1"
          )}
        />
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={CTA.secondaryWhatsApp}
        className={cn(
          "relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95",
          "after:content-[''] after:absolute after:inset-0 after:rounded-full after:bg-[#25D366] after:opacity-50 after:animate-ping-slow"
        )}
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-subtle opacity-40 -z-10" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
