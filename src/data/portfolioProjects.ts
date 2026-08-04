import thumbRetail from "@/assets/portfolio/portfolio-01-retail-ecommerce.png";
import thumbRestaurant from "@/assets/portfolio/portfolio-02-restaurant-ordering.png";
import thumbHealthcare from "@/assets/portfolio/portfolio-03-healthcare-portal.png";
import thumbAiBot from "@/assets/portfolio/portfolio-04-ai-support-bot.png";
import thumbRealEstate from "@/assets/portfolio/portfolio-05-real-estate-leads.png";
import thumbManufacturing from "@/assets/portfolio/portfolio-06-manufacturing-b2b.png";

export interface PortfolioProject {
  id: string;
  category: string;
  title: string;
  badge: "Concept Project";
  description: string;
  thumbnail: string;
  overview: string;
  challenge: string;
  solution: string;
  services: string[];
  technologies: string[];
  results: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "luxury-retail-ecommerce",
    category: "Retail • Website",
    title: "Luxury Retail E-Commerce",
    badge: "Concept Project",
    description:
      "Premium multi-vendor e-commerce platform featuring inventory synchronization, secure checkout, customer accounts, analytics dashboard, payment gateway integration, and Meta Ads integration.",
    thumbnail: thumbRetail,
    overview:
      "A concept luxury retail platform demonstrating how traditional brick-and-mortar stores can launch a premium digital storefront with enterprise-grade commerce capabilities.",
    challenge:
      "Physical retail businesses struggle with fragmented inventory, limited online reach, and disconnected marketing channels that fail to reflect their premium in-store experience.",
    solution:
      "We designed a unified e-commerce ecosystem with real-time inventory sync, elegant product discovery, secure payments, customer loyalty accounts, and integrated Meta Ads performance tracking.",
    services: [
      "Website Development",
      "Meta Ads Management",
      "Business Digital Transformation",
      "Landing Pages",
    ],
    technologies: ["React", "Node.js", "Stripe", "Meta Pixel", "Analytics Dashboard", "Cloud CDN"],
    results: [
      "Projected 3× increase in online revenue channels",
      "Unified inventory across physical and digital storefronts",
      "Premium brand experience matching luxury retail standards",
      "Data-driven ad optimization via integrated analytics",
    ],
  },
  {
    id: "restaurant-ordering-system",
    category: "Restaurant • Mobile App + POS",
    title: "Restaurant Ordering System",
    badge: "Concept Project",
    description:
      "Complete restaurant ordering solution with customer mobile application, QR ordering, integrated POS system, kitchen display, online payments, and order management.",
    thumbnail: thumbRestaurant,
    overview:
      "A concept end-to-end restaurant digitization suite showing how dining businesses can streamline ordering from table to kitchen.",
    challenge:
      "Restaurants face order errors, long wait times, manual POS workflows, and no unified system connecting dine-in, takeaway, and delivery channels.",
    solution:
      "We architected a mobile ordering app with QR table ordering, a integrated POS, kitchen display system, and real-time order tracking with online payment support.",
    services: [
      "Mobile App Development",
      "POS Systems",
      "Website Development",
      "Business Consultation",
    ],
    technologies: ["React Native", "POS API", "Kitchen Display", "Payment Gateway", "QR System"],
    results: [
      "Projected 40% reduction in order processing time",
      "Seamless dine-in and takeaway from a single platform",
      "Real-time kitchen coordination and order visibility",
      "Increased average order value through digital upselling",
    ],
  },
  {
    id: "healthcare-clinic-portal",
    category: "Healthcare • Web Platform",
    title: "Healthcare Clinic Portal",
    badge: "Concept Project",
    description:
      "Modern healthcare management portal including appointment booking, telehealth, patient records, reminders, and secure dashboard.",
    thumbnail: thumbHealthcare,
    overview:
      "A concept healthcare platform illustrating how clinics can modernize patient engagement with secure, accessible digital tools.",
    challenge:
      "Clinics rely on phone-based booking, paper records, and disconnected communication — leading to missed appointments and poor patient experience.",
    solution:
      "We designed a HIPAA-aware portal with online booking, telehealth video sessions, digital patient records, automated reminders, and role-based dashboards for staff and doctors.",
    services: [
      "Website Development",
      "AI Automation",
      "Business Digital Transformation",
      "Business Consultation",
    ],
    technologies: ["Secure Web App", "Telehealth API", "Calendar System", "SMS/Email Automation"],
    results: [
      "Projected 50% reduction in no-show appointments",
      "24/7 online booking accessibility for patients",
      "Streamlined doctor and admin workflows",
      "Enhanced patient trust through modern digital touchpoints",
    ],
  },
  {
    id: "ai-customer-support-bot",
    category: "AI Automation",
    title: "AI Customer Support Bot",
    badge: "Concept Project",
    description:
      "AI-powered chatbot with workflow automation, WhatsApp integration, lead qualification, live agent handoff, and intelligent customer support.",
    thumbnail: thumbAiBot,
    overview:
      "A concept AI automation platform demonstrating intelligent customer support that scales without sacrificing quality.",
    challenge:
      "Growing businesses cannot scale manual support — response times increase, leads are lost, and teams burn out handling repetitive inquiries.",
    solution:
      "We built an AI chatbot with natural language understanding, WhatsApp integration, automated lead qualification workflows, and seamless handoff to live agents when needed.",
    services: ["AI Automation", "Mobile App Development", "Business Consultation"],
    technologies: ["AI/NLP Engine", "WhatsApp API", "Workflow Automation", "CRM Integration"],
    results: [
      "Projected 60% reduction in support ticket volume",
      "24/7 instant response across web and WhatsApp",
      "Automated lead qualification and routing",
      "Lower operational costs with maintained service quality",
    ],
  },
  {
    id: "real-estate-lead-engine",
    category: "Real Estate • Landing Pages",
    title: "Real Estate Lead Engine",
    badge: "Concept Project",
    description:
      "High-converting landing pages with CRM integration, Meta Pixel tracking, lead forms, analytics dashboard, and conversion optimization.",
    thumbnail: thumbRealEstate,
    overview:
      "A concept real estate marketing engine showing how property businesses can capture and convert high-intent leads at scale.",
    challenge:
      "Real estate agencies waste ad spend on generic websites with poor conversion, no CRM integration, and zero visibility into campaign performance.",
    solution:
      "We created luxury property landing pages with optimized lead forms, Meta Pixel event tracking, CRM auto-sync, and a real-time analytics dashboard for agents.",
    services: [
      "Landing Pages",
      "Meta Ads Management",
      "Website Development",
      "Business Consultation",
    ],
    technologies: ["Next.js", "Meta Pixel", "CRM API", "A/B Testing", "Analytics Dashboard"],
    results: [
      "Projected 4× improvement in lead conversion rates",
      "Full-funnel visibility from ad click to CRM entry",
      "Premium property presentation matching luxury market",
      "Reduced cost per qualified lead through optimization",
    ],
  },
  {
    id: "manufacturing-b2b-portal",
    category: "Manufacturing • Digital Transformation",
    title: "Manufacturing B2B Portal",
    badge: "Concept Project",
    description:
      "Enterprise supplier portal with inventory management, production tracking, warehouse system, purchase orders, reporting, and automation.",
    thumbnail: thumbManufacturing,
    overview:
      "A concept B2B portal demonstrating complete digital transformation for manufacturing and supply chain operations.",
    challenge:
      "Manufacturers depend on manual processes, phone-based ordering, and disconnected inventory systems that limit scalability and visibility.",
    solution:
      "We designed an enterprise supplier portal with inventory management, production tracking, warehouse dashboards, automated purchase orders, and comprehensive reporting.",
    services: [
      "Business Digital Transformation",
      "Website Development",
      "AI Automation",
      "POS Systems",
      "Business Consultation",
    ],
    technologies: ["Enterprise Web Portal", "Inventory API", "Reporting Engine", "Workflow Automation"],
    results: [
      "Projected 35% improvement in supply chain efficiency",
      "Real-time inventory and production visibility",
      "Automated purchase order workflows",
      "Data-driven decision making via executive dashboards",
    ],
  },
];
