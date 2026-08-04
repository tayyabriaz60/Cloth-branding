import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import ProjectModal from "./ProjectModal";
import { portfolioProjects, type PortfolioProject } from "@/data/portfolioProjects";

const ConceptBadge = () => (
  <span className="absolute top-4 right-4 z-10 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm border border-primary/30 shadow-lg">
    Concept Project
  </span>
);

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProject = (project: PortfolioProject) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container-narrow mx-auto relative">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          description="Explore concept solutions that demonstrate how The Gamma Agency transforms traditional businesses into successful digital businesses through complete end-to-end digital solutions."
        />

        <p className="text-center text-xs text-muted-foreground/80 -mt-10 mb-12 max-w-2xl mx-auto">
          All projects shown are premium concept demos showcasing our capabilities — not completed
          client work.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl overflow-hidden border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[var(--shadow-elevated),var(--shadow-gold)]"
            >
              <div className="relative aspect-video overflow-hidden bg-navy-dark">
                <ConceptBadge />
                <img
                  src={project.thumbnail}
                  alt={`${project.title} — concept project thumbnail`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-widest text-primary">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6 md:p-7">
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>
                <Button
                  variant="hero-outline"
                  size="default"
                  className="w-full group/btn"
                  onClick={() => openProject(project)}
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
};

export default PortfolioSection;
