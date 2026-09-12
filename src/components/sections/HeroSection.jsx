import { socialLinks } from "../../data/social";
import { techMarquee } from "../../data/skills";
import HeroSphereBackground from "./HeroSphereBackground";

export default function HeroSection() {
  return (
    <section
      id="home"
      data-surface="primary"
      className="surface-primary relative min-h-screen w-full px-4 sm:px-8 md:px-16 pt-28 md:pt-32 pb-16 overflow-hidden"
    >
      <HeroSphereBackground />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start max-w-7xl mx-auto">
        <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">
          <p className="section-label">&lt;Full-stack Developer&gt;</p>

          <h1 className="font-display font-bold tracking-tighter leading-[0.95]">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              BUILDING FAST,
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              SCALABLE WEB
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl hero-gradient-text">
              EXPERIENCES
            </span>
          </h1>

          <p className="text-base md:text-lg max-w-xl opacity-60">
            Crafting modern, interactive web applications.
          </p>

          <div className="flex flex-wrap items-center gap-1 text-sm opacity-50">
            {socialLinks.map((link, i) => (
              <span key={link.label} className="flex items-center">
                {i > 0 && <span className="mx-2">/</span>}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {techMarquee.map((tech) => (
              <span
                key={tech.title}
                className="px-3 py-1 text-xs border rounded-full opacity-60"
                style={{ borderColor: "var(--primary-border)" }}
              >
                {tech.title}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-4">
          <div
            className="relative w-48 md:w-56 aspect-[3/4] overflow-hidden border"
            style={{ borderColor: "var(--primary-border)" }}
          >
            <img
              src="./images/profile.webp"
              alt="Amila Shan"
              className="w-full h-full object-cover grayscale"
              loading="eager"
            />
          </div>
          <p className="section-label">// Amila Shan</p>
        </div>
      </div>
    </section>
  );
}
