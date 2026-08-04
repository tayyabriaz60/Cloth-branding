import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolioProjects";
import { CTA, openWhatsApp, bookConsultation } from "@/lib/contact";
import { trackLead } from "@/lib/metaPixel";

interface ProjectModalProps {
  project: PortfolioProject | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectModal = ({ project, open, onOpenChange }: ProjectModalProps) => {
  if (!project) return null;

  const handleConsultation = () => {
    trackLead({ content_name: `Portfolio Modal - ${project.title}` });
    onOpenChange(false);
    bookConsultation();
  };

  const handleWhatsApp = () => {
    trackLead({ content_name: `Portfolio WhatsApp - ${project.title}` });
    openWhatsApp(
      `Hello! I'm interested in a solution similar to "${project.title}" (Concept Project).`
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-4xl max-h-[92vh] overflow-y-auto p-0 gap-0 border-border/60 bg-card sm:rounded-2xl"
        overlayClassName="bg-black/70 backdrop-blur-sm"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-navy-dark">
          <img
            src={project.thumbnail}
            alt={`${project.title} — concept project preview`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm border border-primary/30">
            {project.badge}
          </span>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <DialogHeader className="text-left space-y-3">
            <Badge
              variant="outline"
              className="w-fit border-primary/30 text-primary bg-primary/5 uppercase tracking-wider text-[10px]"
            >
              {project.category}
            </Badge>
            <DialogTitle className="font-serif text-2xl md:text-3xl font-normal text-foreground leading-tight">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
              {project.overview}
            </DialogDescription>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-5 border-border/40">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                Business Challenge
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>
            <div className="glass-panel p-5 border-border/40">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                Our Solution
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Services Included
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-muted text-muted-foreground border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Expected Business Results
            </h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.results.map((result) => (
                <li
                  key={result}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {result}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-muted-foreground/70 italic border-t border-border/40 pt-4">
            This is a concept project created to showcase The Gamma Agency&apos;s capabilities. It
            is not a completed client engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button variant="hero" size="lg" className="flex-1" onClick={handleConsultation}>
              {CTA.primary}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero-outline" size="lg" className="flex-1" onClick={handleWhatsApp}>
              <MessageCircle className="w-4 h-4" />
              {CTA.secondaryWhatsApp}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
