import { Instagram, Facebook, Linkedin, Copyright, ArrowUpRight, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import {
  AGENCY_NAME,
  CTA,
  BUSINESS_EMAIL,
  OFFICE_ADDRESS,
  WHATSAPP,
  SOCIAL,
  bookConsultation,
} from "@/lib/contact";

const Footer = () => {
  const quickLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#process", label: "Process" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#contact", label: "Contact" },
  ];

  const services = [
    "Website Development",
    "Mobile Apps",
    "AI Automation",
    "Meta Ads",
    "POS Systems",
  ];

  const socialLinks = [
    { icon: Facebook, href: SOCIAL.facebook, label: "Facebook" },
    { icon: Instagram, href: SOCIAL.instagram, label: "Instagram" },
    { icon: Linkedin, href: SOCIAL.linkedin, label: "LinkedIn" },
  ].filter((social) => social.href);

  return (
    <footer className="bg-navy-dark border-t border-border/40">
      <div className="container-narrow mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Logo size="md" />
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xs">
              Premium digital transformation agency helping physical businesses become successful
              digital brands. Everything under one roof.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">
              Connect
            </h4>
            <div className="space-y-3 mb-5">
              <a
                href={WHATSAPP.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                {WHATSAPP.display}
              </a>
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {BUSINESS_EMAIL}
              </a>
              <p className="text-xs text-muted-foreground/70">{OFFICE_ADDRESS}</p>
            </div>
            <button
              type="button"
              onClick={() => bookConsultation()}
              className="text-xs font-semibold text-primary hover:underline mb-4 block"
            >
              {CTA.primary} →
            </button>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-border/40 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            <Copyright className="w-4 h-4" />
            {new Date().getFullYear()} {AGENCY_NAME}. All rights reserved.
          </p>
          <p className="text-xs">Transforming businesses into digital brands worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
