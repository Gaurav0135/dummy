import { skills } from "@/data/skills";
import { Code2, Layout, Server, Database, Brain, Wrench } from "lucide-react";

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Programming: Code2,
  Frontend: Layout,
  Backend: Server,
  Database,
  "Machine Learning": Brain,
  Tools: Wrench,
};

export function SkillsSection() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {skills.map((s, i) => {
        const Icon = icons[s.category] ?? Code2;
        return (
          <div
            key={s.category}
            className="glass rounded-2xl p-6 card-glow animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] text-white">
                <Icon size={18} />
              </div>
              <h4 className="font-semibold">{s.category}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-medium hover:border-transparent hover:bg-gradient-to-r hover:from-[var(--brand)] hover:to-[var(--brand-2)] hover:text-white transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
