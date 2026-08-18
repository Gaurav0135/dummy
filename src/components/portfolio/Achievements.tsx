import { Trophy } from "lucide-react";
import { achievements } from "@/data/skills";

export function Achievements() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {achievements.map((a, i) => (
        <div
          key={i}
          className="relative glass rounded-2xl p-6 card-glow animate-fade-up overflow-hidden"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-[var(--brand)]/30 to-[var(--brand-2)]/30 blur-2xl" />
          <div className="relative">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg">
              <Trophy size={18} />
            </div>
            <h4 className="mt-4 font-semibold">{a.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
