import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saurav Patel | AI/ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Saurav Patel, an AI/ML Engineer and Full-Stack Developer specializing in Python, machine learning, FastAPI, React, and software engineering.",
      },
      { property: "og:title", content: "Saurav Patel | AI/ML Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Saurav Patel, an AI/ML Engineer and Full-Stack Developer specializing in Python, machine learning, FastAPI, React, and software engineering.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/profile/Saurav_image.jpeg" },
      { property: "og:image:alt", content: "Saurav Patel" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Saurav Patel | AI/ML Engineer" },
      {
        name: "twitter:description",
        content:
          "AI/ML Engineer and Full-Stack Developer building practical, scalable products with Python, machine learning, and modern web technologies.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
