import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { trackLead } from "@/lib/metaPixel";
import { CTA, openWhatsApp, bookConsultation } from "@/lib/contact";

const navLinks = [
  { href: "/#why-choose-us", label: "Why Us" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#industries", label: "Industries" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleConsultation = () => {
    trackLead({ content_name: `Header - ${CTA.primary}` });
    setIsMenuOpen(false);
    bookConsultation();
  };

  const handleWhatsApp = () => {
    trackLead({ content_name: `Header - ${CTA.secondaryWhatsApp}` });
    setIsMenuOpen(false);
    openWhatsApp();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container-narrow mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between gap-4 min-h-[var(--header-height)] py-3">
          <a href="/" aria-label="The Gamma Agency Home" className="shrink-0">
            <Logo size="sm" />
          </a>

          <div className="hidden xl:flex items-center gap-5 flex-1 justify-center min-w-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="h-9 px-3 text-xs border-primary/40"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden 2xl:inline">{CTA.secondaryWhatsApp}</span>
              <span className="2xl:hidden">WhatsApp</span>
            </Button>
            <Button variant="default" size="sm" className="h-9 px-3 text-xs" onClick={handleConsultation}>
              <span className="hidden 2xl:inline">{CTA.primary}</span>
              <span className="2xl:hidden">Consultation</span>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 text-foreground shrink-0"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="xl:hidden pb-5 border-t border-border/40 animate-fade-in max-h-[calc(100vh-var(--header-height))] overflow-y-auto">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="outline" size="lg" className="mt-4" onClick={handleWhatsApp}>
                <MessageCircle className="w-4 h-4" />
                {CTA.secondaryWhatsApp}
              </Button>
              <Button variant="default" size="lg" className="mt-2" onClick={handleConsultation}>
                {CTA.primary}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
