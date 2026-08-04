import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackLead } from "@/lib/metaPixel";
import { CTA, openWhatsApp, bookConsultation } from "@/lib/contact";

const CTASection = () => {
  const handleConsultation = () => {
    trackLead({ content_name: `CTA - ${CTA.primary}` });
    bookConsultation();
  };

  const handleWhatsApp = () => {
    trackLead({ content_name: `CTA - ${CTA.secondaryWhatsApp}` });
    openWhatsApp();
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-navy-dark to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-narrow mx-auto relative">
        <div className="glass-panel p-10 md:p-16 text-center max-w-4xl mx-auto border-primary/20">
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-primary" />
            Ready to Transform?
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Let&apos;s Build Your <span className="text-gradient-gold italic">Digital Future</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            From strategy to launch — The Gamma Agency delivers everything you need to transform
            your physical business into a successful digital brand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" onClick={handleConsultation}>
              {CTA.primary}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              {CTA.secondaryWhatsApp}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
