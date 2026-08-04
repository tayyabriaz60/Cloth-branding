import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    question: "What services does The Gamma Agency offer?",
    answer:
      "We provide complete end-to-end digital solutions including website development, mobile app development, AI automation, POS systems, Meta Ads management, landing pages, business digital transformation, and strategic consultation — all under one roof.",
  },
  {
    question: "Who is The Gamma Agency best suited for?",
    answer:
      "We work with business owners, retail stores, restaurants, clinics, schools, manufacturers, startups, and small to medium businesses looking to transform from offline to online with premium digital solutions.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope. A landing page may take 1–2 weeks, a corporate website 3–6 weeks, and full digital transformation projects 2–4 months. We provide a detailed timeline during the discovery phase.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer maintenance packages, performance optimization, ad management retainers, and strategic consultation to ensure your digital business continues to grow and scale.",
  },
  {
    question: "How does the free consultation work?",
    answer:
      "Book a free consultation through our contact form. We'll discuss your business goals, current challenges, and recommend the best digital strategy — with no obligation to proceed.",
  },
  {
    question: "Can you manage our Meta (Facebook/Instagram) advertising?",
    answer:
      "Absolutely. Our Meta Ads management service includes campaign strategy, creative development, audience targeting, A/B testing, and performance reporting to maximize your ROI.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative">
      <div className="container-narrow mx-auto max-w-3xl">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with The Gamma Agency."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-border/60 bg-card/60 overflow-hidden transition-all duration-300 hover:border-primary/20"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-primary shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
