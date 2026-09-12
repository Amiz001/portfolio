import { useRef, useEffect } from "react";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import StatsSection from "../components/sections/StatsSection";
import ContactSection from "../components/sections/ContactSection";
import { useActiveSection } from "../hooks/useScrollSurface";

const SECTION_IDS = [
  "home",
  "experience",
  "skills",
  "projects",
  "stats",
  "contact",
];

const SPLASH_KEY = "portfolio-splash-shown";

export default function Home() {
  const splashRef = useRef(null);

  useActiveSection(SECTION_IDS);

  useEffect(() => {
    if (sessionStorage.getItem(SPLASH_KEY)) {
      splashRef.current?.classList.add("hidden");
      return;
    }

    const timer = setTimeout(() => {
      splashRef.current?.classList.add("hidden");
      sessionStorage.setItem(SPLASH_KEY, "1");
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div ref={splashRef} className="splash-screen">
        <span className="splash-logo">AMIZ</span>
        <div className="splash-track">
          <div className="splash-bar" />
        </div>
      </div>

      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <StatsSection />
      <ContactSection />

      <section
        data-surface="alt"
        className="surface-alt w-full px-4 sm:px-8 md:px-16 py-16 md:py-24"
      >
        <div
          className="relative max-w-7xl mx-auto border rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{ borderColor: "var(--alt-border)" }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Let&apos;s make your next idea real
          </h2>
          <a
            href="#contact"
            className="inline-flex px-8 py-3 border-2 rounded-full font-semibold transition-colors hover:opacity-70"
            style={{ borderColor: "var(--alt-fg)", color: "var(--alt-fg)" }}
          >
            Contact Me
          </a>
        </div>
      </section>

      <Footer surface="alt" />
    </>
  );
}
