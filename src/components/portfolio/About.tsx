import { AboutNavigation } from "./AboutNavigation";
import { EducationTimeline } from "./EducationTimeline";
import { SkillsSection } from "./SkillsSection";
import { Experience } from "./Experience";
import { Achievements } from "./Achievements";
import { profile } from "@/data/profile";

function SubHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <span className="text-xs font-semibold tracking-widest uppercase gradient-text">{label}</span>
      <h3 className="mt-2 text-3xl sm:text-4xl font-bold">{title}</h3>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest gradient-text">
            About Me
          </span>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">A little about my journey</h2>
        </div>

        <AboutNavigation />

        <div id="overview" className="scroll-mt-40 mb-24">
          <SubHeading label="01" title="Overview" />
          <div className="glass rounded-3xl p-8 sm:p-10 animate-fade-up">
            <p className="text-lg leading-relaxed text-foreground/80">
              I&apos;m a Computer Science Engineer focused on Python, machine learning, backend
              development, and full-stack software engineering. I enjoy turning ideas into
              practical, scalable products by combining clean APIs, data-driven systems, and
              thoughtful user experiences.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              My work spans machine learning applications, REST APIs, database-driven systems, and
              modern web development. I focus on writing maintainable code, understanding problems
              deeply, and building solutions that are useful beyond the demo stage.
            </p>
          </div>
        </div>

        <div id="education" className="scroll-mt-40 mb-24">
          <SubHeading label="02" title="Education" />
          <EducationTimeline />
        </div>

        <div id="skills" className="scroll-mt-40 mb-24">
          <SubHeading label="03" title="Skills" />
          <SkillsSection />
        </div>

        <div id="experience" className="scroll-mt-40 mb-24">
          <SubHeading label="04" title="Experience" />
          <Experience />
        </div>

        <div id="achievements" className="scroll-mt-40">
          <SubHeading label="05" title="Achievements" />
          <Achievements />
        </div>
      </div>
    </section>
  );
}
