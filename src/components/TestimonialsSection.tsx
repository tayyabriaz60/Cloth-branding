import { Star, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Mitchell Retail Group",
    content:
      "The Gamma Agency completely transformed our retail business. Our new e-commerce platform and Meta Ads strategy increased online sales by 340% in six months.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    role: "CEO, Spice Route Restaurants",
    content:
      "From POS integration to a custom ordering app — they handled everything. Professional, fast, and truly understood our business needs.",
    rating: 5,
  },
  {
    name: "Dr. Emily Chen",
    role: "Director, Wellness Clinic",
    content:
      "Our patient booking system and website redesign elevated our brand completely. Patients constantly compliment how premium and easy everything feels.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "Founder, TechStart Solutions",
    content:
      "As a startup, we needed speed and quality. Gamma delivered our MVP, landing pages, and ad campaigns — all under one roof. Exceptional partnership.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Operations Manager, BuildCorp Manufacturing",
    content:
      "The digital transformation project streamlined our entire supply chain. Their AI automation alone saved us 20 hours per week.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Principal, Horizon Academy",
    content:
      "They built our enrollment platform and school website with incredible attention to detail. Parents love the new digital experience.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-navy-dark/30">
    <div className="container-narrow mx-auto">
      <SectionHeader
        label="Testimonials"
        title="Trusted By Business Leaders"
        description="Hear from business owners who partnered with us to transform their operations and accelerate digital growth."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="card-premium relative">
            <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/90 leading-relaxed mb-6 text-sm italic">
              &ldquo;{testimonial.content}&rdquo;
            </p>
            <div className="border-t border-border/40 pt-4">
              <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
