import { Download, FolderGit2, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  const roleText = profile.roles[0] ?? "AI/ML Engineer | Full-Stack Developer";

  return (
    <section id="home" className="relative flex min-h-screen items-center pb-16 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </span>

          <h1 className="mt-5 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl xl:text-7xl">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>

          <div className="mt-4 max-w-xl text-lg font-semibold leading-tight text-foreground/80 sm:text-xl md:text-2xl">
            <span className="gradient-text">{roleText}</span>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Computer Science Engineer focused on Python, machine learning, backend development, and
            modern web applications. I build practical, scalable products that combine intelligent
            systems with reliable software engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn-primary btn-primary-hover inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
            >
              <FolderGit2 size={16} /> View Projects
            </a>
            <a
              href={profile.resume}
              download
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.02]"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-[var(--brand)] hover:text-foreground"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          <p className="mt-6 max-w-xl text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/80 sm:text-xs">
            Python • AI/ML • FastAPI • React • SQL
          </p>

          <div className="mt-8 flex items-center gap-3">
            {[
              { href: profile.socials.github, Icon: Github, label: "GitHub" },
              { href: profile.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl glass transition hover:-translate-y-0.5 hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto w-full max-w-[420px] animate-float">
            <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--brand)]/40 via-[var(--brand-2)]/30 to-pink-400/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/20 p-3 shadow-[0_30px_80px_-30px_rgba(75,85,255,0.55)] backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-background">
                <img
                  src={profile.image}
                  alt={profile.name}
                  width={768}
                  height={768}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -left-2 top-8 rounded-2xl glass px-3 py-2 text-xs font-semibold shadow-lg">
              ✨ AI/ML
            </div>
            <div className="absolute -bottom-2 right-2 rounded-2xl glass px-3 py-2 text-xs font-semibold shadow-lg">
              💻 Full Stack
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
