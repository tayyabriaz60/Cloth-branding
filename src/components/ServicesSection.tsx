import {
  Globe,
  Smartphone,
  Bot,
  CreditCard,
  Megaphone,
  RefreshCw,
  Layout,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Premium, high-converting websites that establish your brand authority and drive measurable business results.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications designed for engagement, retention, and seamless user experience.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Intelligent workflows, chatbots, and automation systems that reduce costs and accelerate operations.",
  },
  {
    icon: CreditCard,
    title: "POS Systems",
    description:
      "Modern point-of-sale solutions integrated with inventory, analytics, and digital payment infrastructure.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads Management",
    description:
      "Data-driven Facebook and Instagram advertising campaigns that generate leads, sales, and brand awareness.",
  },
  {
    icon: RefreshCw,
    title: "Business Digital Transformation",
    description:
      "Complete offline-to-online transformation — strategy, systems, branding, and technology aligned for growth.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "Conversion-optimized landing pages built for campaigns, product launches, and high-intent lead generation.",
  },
  {
    icon: Briefcase,
    title: "Business Consultation",
    description:
      "Expert digital strategy sessions to identify opportunities, reduce risk, and build your roadmap to success.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-navy-dark/30">
    <div className="container-narrow mx-auto">
      <SectionHeader
        label="Our Services"
        title="Complete Digital Solutions"
        description="From strategy to execution — every service you need to build, launch, and scale your digital business."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service) => (
          <div key={service.title} className="card-premium group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg text-foreground mb-3 pr-6">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn more <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
