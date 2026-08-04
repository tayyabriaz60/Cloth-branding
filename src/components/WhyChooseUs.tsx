import { Shield, Layers, TrendingUp, Headphones, Zap, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";

const reasons = [
  {
    icon: Layers,
    title: "Everything Under One Roof",
    description:
      "Websites, apps, AI, POS, ads, and strategy — one team, one vision, zero fragmentation.",
  },
  {
    icon: TrendingUp,
    title: "Business-First Approach",
    description:
      "We don't just build technology. We engineer growth systems that turn offline businesses into digital powerhouses.",
  },
  {
    icon: Shield,
    title: "Premium Quality Standards",
    description:
      "Corporate-grade design, clean code, and scalable architecture built for long-term success.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "Structured process from discovery to launch. We move quickly without compromising on quality.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Your success is our priority. Ongoing consultation, optimization, and partnership at every stage.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Trusted by retailers, restaurants, clinics, schools, and startups across multiple industries.",
  },
];

const WhyChooseUs = () => (
  <section id="why-choose-us" className="section-padding relative">
    <div className="absolute inset-0 bg-navy-dark/50" />
    <div className="container-narrow mx-auto relative">
      <SectionHeader
        label="Why Choose Us"
        title="Why Choose The Gamma Agency"
        description="We don't just build websites. We transform businesses into digital brands — with strategy, design, technology, and marketing aligned under one premium agency."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            className="card-premium group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
              <reason.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-xl text-foreground mb-3">{reason.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
