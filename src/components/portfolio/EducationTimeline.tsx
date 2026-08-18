import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";

export function EducationTimeline() {
  return (
    <div className="relative pl-8 sm:pl-12">
      <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--brand)] via-[var(--brand-2)] to-transparent" />
      {education.map((e, i) => (
        <div
          key={i}
          className="relative mb-10 last:mb-0 animate-fade-up"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="absolute -left-6 sm:-left-8 top-2 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] shadow-lg">
            <GraduationCap size={14} className="text-white" />
          </div>
          <div className="glass rounded-2xl p-6 card-glow">
            <div className="flex flex-wrap justify-between gap-2">
              <h4 className="font-semibold text-lg">{e.degree}</h4>
              <span className="text-xs font-medium text-muted-foreground rounded-full glass px-3 py-1">
                {e.period}
              </span>
            </div>
            {e.school && <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>}
            <p className="mt-3 text-sm font-semibold gradient-text">{e.score}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
