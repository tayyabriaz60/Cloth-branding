import {
  ShoppingBag,
  UtensilsCrossed,
  Stethoscope,
  GraduationCap,
  Building2,
  Factory,
  Rocket,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const industries = [
  { icon: ShoppingBag, name: "Retail", description: "E-commerce, inventory, and omnichannel retail solutions." },
  { icon: UtensilsCrossed, name: "Restaurants", description: "Online ordering, POS, and digital menu systems." },
  { icon: Stethoscope, name: "Healthcare", description: "Clinic websites, booking systems, and patient portals." },
  { icon: GraduationCap, name: "Education", description: "School platforms, LMS, and enrollment systems." },
  { icon: Building2, name: "Real Estate", description: "Property listings, lead generation, and virtual tours." },
  { icon: Factory, name: "Manufacturing", description: "B2B portals, supply chain, and automation tools." },
  { icon: Rocket, name: "Startups", description: "MVP development, branding, and go-to-market strategy." },
];

const IndustriesSection = () => (
  <section id="industries" className="section-padding bg-navy-dark/30">
    <div className="container-narrow mx-auto">
      <SectionHeader
        label="Industries We Serve"
        title="Built For Every Business Vertical"
        description="Whether you run a retail store, restaurant, clinic, or startup — we deliver industry-specific digital solutions that drive real results."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {industries.map((industry) => (
          <div
            key={industry.name}
            className="glass-panel p-6 hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-500 group cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <industry.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg text-foreground mb-2">{industry.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
