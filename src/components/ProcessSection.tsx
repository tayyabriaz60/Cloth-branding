import { Search, Map, Hammer, Rocket, TrendingUp } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "We analyze your business, audience, competitors, and goals to uncover digital opportunities.",
  },
  {
    icon: Map,
    step: "02",
    title: "Plan",
    description: "A tailored roadmap covering strategy, design, technology stack, timeline, and measurable KPIs.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Build",
    description: "Our team designs and develops your digital assets with premium quality and precision.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description: "We deploy, test, and optimize your solution for a flawless go-live across all channels.",
  },
  {
    icon: TrendingUp,
    step: "05",
    title: "Scale",
    description: "Continuous optimization, marketing, and growth strategies to expand your digital presence.",
  },
];

const ProcessSection = () => (
  <section id="process" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 grid-pattern opacity-20" />
    <div className="container-narrow mx-auto relative">
      <SectionHeader
        label="Our Process"
        title="From Vision to Digital Success"
        description="A proven five-step framework that transforms physical businesses into thriving digital brands."
      />

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((item, index) => (
            <div key={item.title} className="relative group">
              <div className="card-premium text-center h-full">
                <span className="text-xs font-bold text-primary/60 tracking-widest mb-4 block">
                  {item.step}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 z-10 -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
