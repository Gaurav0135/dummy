import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetailRoute,
});

function ProjectDetailRoute() {
  const { slug } = Route.useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
        <div className="glass max-w-lg rounded-3xl p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Project not found
          </p>
          <h1 className="mt-3 text-3xl font-bold">This project could not be found.</h1>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="mt-8 grid gap-8 rounded-[2rem] glass p-5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/20 bg-background/40 p-3 shadow-[0_30px_80px_-30px_rgba(75,85,255,0.35)]">
            <div
              className={`relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-gradient-to-br ${project.gradient}`}
            >
              <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {project.category}
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{project.name}</h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl btn-primary btn-primary-hover px-5 py-3 text-sm font-semibold"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              ) : null}

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div className="glass rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{project.longDescription}</p>
          </div>

          <div className="glass rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Key Features</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 text-[var(--brand)]">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Technical Highlights</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 text-[var(--brand-2)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold">My Contribution</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{project.contribution}</p>
          </div>

          {project.challenges && project.challenges.length > 0 ? (
            <div className="glass rounded-3xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">Challenges & Solutions</h2>
              <div className="mt-5 space-y-5">
                {project.challenges.map((item) => (
                  <div
                    key={item.challenge}
                    className="rounded-2xl border border-border bg-background/40 p-4"
                  >
                    <p className="text-sm font-semibold text-foreground">Challenge</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.challenge}</p>
                    <p className="mt-4 text-sm font-semibold text-foreground">Solution</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="glass rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Architecture</h2>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {project.architecture.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs font-medium text-foreground">
                    {step}
                  </span>
                  {index < project.architecture.length - 1 ? (
                    <span className="text-muted-foreground">↓</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
