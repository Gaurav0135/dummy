import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Carousel } from "./Carousel";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 text-center mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase gradient-text">
          Portfolio
        </span>
        <h2 className="mt-2 text-4xl sm:text-5xl font-bold">Featured Projects</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          A selection of things I've built — swipe, click, or use the arrows to explore.
        </p>
      </div>

      <Carousel
        ariaLabel="Featured projects carousel"
        items={projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      />
    </section>
  );
}
