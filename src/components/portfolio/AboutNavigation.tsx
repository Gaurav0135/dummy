import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
];

export function AboutNavigation() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const els = tabs.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="sticky top-24 z-30 mb-10 flex justify-center">
      <div className="glass rounded-full p-1.5 flex gap-1 overflow-x-auto max-w-full">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() =>
              document.getElementById(t.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className={cn(
              "px-4 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition-all",
              active === t.id
                ? "text-white shadow-lg bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)]"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
