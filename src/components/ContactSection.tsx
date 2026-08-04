import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail, type EmailParams } from "@/lib/sendEmail";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Loader2,
  CheckCircle,
  XCircle,
  RefreshCw,
  Send,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { trackLead } from "@/lib/metaPixel";
import {
  CTA,
  BUSINESS_EMAIL,
  OFFICE_ADDRESS,
  WHATSAPP,
  openWhatsApp,
} from "@/lib/contact";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    trackLead({ content_name: "Contact Form Submission" });

    const emailParams: EmailParams = {
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    const { success, error, message } = await sendEmail(emailParams);

    if (success) {
      setStatus("success");
      setErrorMessage(null);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      console.error("Failed to send email:", error);
      setErrorMessage(message ?? "Failed to send message.");
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: BUSINESS_EMAIL,
      href: `mailto:${BUSINESS_EMAIL}`,
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: WHATSAPP.display,
      href: WHATSAPP.url,
    },
    {
      icon: MapPin,
      label: "Office",
      value: OFFICE_ADDRESS,
      href: null,
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 Hours",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-navy-dark/30">
      <div className="container-narrow mx-auto">
        <SectionHeader
          label="Contact"
          title="Start Your Digital Transformation"
          description="Tell us about your business and goals. Our team will respond within 24 hours with a tailored strategy for your digital journey."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="card-premium">
            <h3 className="font-serif text-2xl text-foreground mb-2">{CTA.primary}</h3>
            <p className="text-sm text-muted-foreground mb-8">
              Fill out the form and we&apos;ll schedule a strategy call at your convenience.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl"
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="e.g. Website Development, Meta Ads, AI Automation"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell Us About Your Business
                </label>
                <Textarea
                  id="message"
                  placeholder="Describe your business, current challenges, and what you'd like to achieve digitally..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary min-h-[140px] rounded-xl"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>

              <Button
                type="button"
                variant="hero-outline"
                size="lg"
                className="w-full"
                onClick={() => openWhatsApp()}
              >
                {CTA.secondaryWhatsApp}
              </Button>

              {status === "success" && (
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-start gap-3 text-primary animate-in fade-in">
                  <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" />
                  <p className="text-sm font-medium">
                    Thank you! We&apos;ve received your message and will be in touch within 24 hours.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Failed to send. Please try again or WhatsApp us.</p>
                      {errorMessage && (
                        <p className="text-xs mt-1 opacity-90">{errorMessage}</p>
                      )}
                    </div>
                  </div>
                  <Button type="submit" variant="ghost" size="sm" className="shrink-0 w-fit">
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Retry
                  </Button>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="card-premium">
              <h3 className="font-serif text-xl text-foreground mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200 group">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                          {info.label}
                        </p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={info.label} href={info.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div className="glass-panel p-6 border-primary/20">
              <h4 className="font-serif text-lg text-foreground mb-3">Why Partner With Us?</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✦</span>
                  Free initial consultation — no obligation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✦</span>
                  Complete solutions under one roof
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✦</span>
                  Premium design and corporate-grade delivery
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✦</span>
                  Ongoing support and growth partnership
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
