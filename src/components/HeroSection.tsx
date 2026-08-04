import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackLead } from "@/lib/metaPixel";
import { CTA, openWhatsApp, bookConsultation } from "@/lib/contact";

const HeroSection = () => {
  const handleConsultation = () => {
    trackLead({ content_name: CTA.primary });
    bookConsultation();
  };

  const handleWhatsApp = () => {
    trackLead({ content_name: CTA.secondaryWhatsApp });
    openWhatsApp();
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-var(--header-height))] flex items-center justify-center overflow-hidden scroll-mt-[var(--header-height)]"
    >
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl animate-float" />

      <div className="relative z-10 container-narrow mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel text-sm font-medium text-foreground/90 mb-8 animate-fade-up"
            style={{ animationDelay: "0s", animationFillMode: "forwards" }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            Premium Digital Transformation Agency
          </div>

          <h1
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-normal text-foreground leading-[1.1] mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            Transform Your Business Into A{" "}
            <span className="text-gradient-gold italic">Digital Brand</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            End-to-end digital solutions for your business. From offline to online — websites,
            mobile apps, AI automation, POS systems, and Meta Ads. Everything under one roof.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <Button variant="hero" size="lg" onClick={handleConsultation}>
              {CTA.primary}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              {CTA.secondaryWhatsApp}
            </Button>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-border/40 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            {[
              { value: "8+", label: "Core Services" },
              { value: "7", label: "Industries Served" },
              { value: "5-Step", label: "Proven Process" },
              { value: "100%", label: "Client Focused" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-serif text-primary mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float opacity-50">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse-gentle" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
