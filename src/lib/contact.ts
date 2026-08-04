import { openCalendlyPopup } from "@/lib/calendly";

export const AGENCY_NAME = "The Gamma Agency";

export const WHATSAPP = {
  display: "+92 324 5278560",
  tel: "+923245278560",
  url: "https://wa.me/923245278560",
  defaultMessage:
    "Hello! I'd like to discuss digital transformation services with The Gamma Agency.",
};

export const BUSINESS_EMAIL = "gammaagency97@gmail.com";

export const OFFICE_ADDRESS = "Burj Al Saeed Plaza, Ichra, Lahore";

export const SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=61592058151561",
  instagram: "",
  linkedin: "",
};

export const CTA = {
  primary: "Book Your Free Consultation",
  secondaryWhatsApp: "Chat on WhatsApp",
};

export function scrollToContact(): void {
  const contactSection = document.getElementById("contact");
  if (!contactSection) return;
  contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Opens Calendly when configured, otherwise scrolls to the contact form. */
export function bookConsultation(): void {
  if (openCalendlyPopup()) return;
  scrollToContact();
}

export function openWhatsApp(message?: string): void {
  const text = encodeURIComponent(message ?? WHATSAPP.defaultMessage);
  window.open(`${WHATSAPP.url}?text=${text}`, "_blank", "noopener,noreferrer");
}
