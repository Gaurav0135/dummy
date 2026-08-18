import { Briefcase } from "lucide-react";
import { experience } from "@/data/skills";

export function Experience() {
  return (
    <div className="grid gap-5">
      {experience.map((e, i) => (
        <div key={i} className="glass rounded-2xl p-6 card-glow animate-fade-up">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] text-white">
              <Briefcase size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap justify-between gap-2">
                <h4 className="font-semibold text-lg">{e.role}</h4>
                {e.period && <span className="text-xs text-muted-foreground">{e.period}</span>}
              </div>
              <p className="text-sm gradient-text font-semibold">{e.company}</p>
              <p className="mt-3 text-sm text-muted-foreground">{e.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {e.tech.map((t) => (
                  <span key={t} className="rounded-full glass px-3 py-1 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
