import { useState } from "react";
import { Check, Copy, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const socials = [
    { Icon: Github, label: "GitHub", href: profile.socials.github },
    { Icon: Linkedin, label: "LinkedIn", href: profile.socials.linkedin },
  ];

  return (
    <TooltipProvider delayDuration={150}>
      <section id="contact" className="relative flex items-center scroll-mt-24 py-18 sm:py-22">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--brand),var(--brand-2),transparent)] bg-[length:200%_100%] animate-gradient"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--brand) 40%, transparent), transparent 70%)",
          }}
          aria-hidden
        />

        <div className="mx-auto w-full max-w-3xl px-6 text-center animate-fade-up">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase gradient-text">
            Get in touch
          </span>

          <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground/90 sm:text-sm">
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_0_rgba(74,222,128,0.7)]"
            />
            <span>Open to opportunities</span>
          </div>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight leading-tight sm:text-4xl">
            Open to <span className="gradient-text">AI/ML</span> &amp; Software Engineering
            Opportunities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Open to AI/ML, Python backend, and software engineering opportunities.
          </p>

          <div className="mt-7 flex justify-center">
            <div className="group inline-flex items-center gap-3 rounded-full glass px-5 py-2.5 transition hover:shadow-lg">
              <span className="select-all text-sm font-medium sm:text-base">{profile.email}</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={copy}
                    aria-label="Copy email"
                    className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] text-white transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                  </button>
                </TooltipTrigger>
                <TooltipContent>{copied ? "Copied!" : "Copy Email"}</TooltipContent>
              </Tooltip>
            </div>
          </div>
          <p aria-live="polite" className="mt-2 h-4 text-xs text-emerald-400/90 transition-opacity">
            {copied ? "Copied!" : ""}
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full btn-primary btn-primary-hover px-6 py-2.5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
            >
              <Download size={15} />
              View Resume
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-foreground transition hover:translate-y-[-1px] hover:border-[var(--brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-foreground transition hover:translate-y-[-1px] hover:border-[var(--brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
            >
              <Mail size={15} />
              Email Me
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-muted-foreground transition hover:scale-[1.02] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
