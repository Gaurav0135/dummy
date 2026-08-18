import { useState, type KeyboardEvent } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const navigate = useNavigate();
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = Boolean(project.image?.trim()) && !imageFailed;

  const openProject = () => {
    navigate({ to: "/projects/$slug", params: { slug: project.slug } });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={openProject}
      onKeyDown={handleKeyDown}
      className="project-card group relative h-full w-full cursor-pointer rounded-3xl glass p-4 text-left outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 card-glow"
      aria-label={`Open details for ${project.name}`}
    >
      <div className="project-image relative w-full overflow-hidden rounded-[24px] aspect-[16/9]">
        {hasImage ? (
          <img
            src={project.image}
            alt={project.name}
            onError={() => setImageFailed(true)}
            className="block h-full w-full object-contain"
          />
        ) : (
          <div
            className={`absolute inset-0 grid place-items-center bg-gradient-to-br ${project.gradient}`}
          >
            <Sparkles className="h-12 w-12 text-white/90 drop-shadow-lg" />
          </div>
        )}
      </div>

      <div className="project-content flex flex-1 flex-col p-2 pt-4">
        <div className="project-main flex flex-1 flex-col">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
            {project.category}
          </div>

          <h3 className="project-title min-h-[3.4rem] text-lg font-semibold leading-snug">
            {project.name}
          </h3>

          <p className="project-description mt-3 min-h-[4.8rem] text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {project.description}
          </p>

          <div className="project-tech mt-4 flex min-h-[3.2rem] flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 text-[10px] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="project-actions mt-auto pt-4">
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="flex-1 rounded-lg glass px-3 py-2 text-center text-xs font-semibold transition hover:scale-[1.02]"
            >
              <span className="inline-flex items-center justify-center gap-2">
                <Github size={14} /> GitHub
              </span>
            </a>

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="flex-1 rounded-lg btn-primary btn-primary-hover px-3 py-2 text-center text-xs font-semibold"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <ExternalLink size={14} /> Live Demo
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
