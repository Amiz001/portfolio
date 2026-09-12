import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { socialLinks, contactInfo } from "../../data/social";

export default function Footer({ surface = "alt" }) {
  const isAlt = surface === "alt";
  const borderVar = isAlt ? "var(--alt-border)" : "var(--primary-border)";
  const mutedVar = isAlt ? "var(--alt-muted)" : "var(--primary-muted)";

  return (
    <footer
      data-surface={surface}
      className={`w-full border-t px-4 sm:px-8 md:px-16 py-12 md:py-16 ${
        isAlt ? "surface-alt" : "surface-primary"
      }`}
      style={{ borderColor: borderVar }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-12 md:mb-16">
          THANK YOU
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="flex flex-col gap-4">
            <img src="/images/LOGO.png" alt="Logo" className="w-10 opacity-80" loading="lazy" />
            <p className="text-sm max-w-xs" style={{ color: mutedVar }}>
              Building modern web experiences with precision.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Quick Links</h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <a href="/#home" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
                Home
              </a>
              <a href="/#projects" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
                Projects
              </a>
              <Link to="/tools" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
                Tools
              </Link>
              <a href="/#contact" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Connect</h3>
            <div className="flex gap-3">
              <a href="https://github.com/Amiz001" className="opacity-50 hover:opacity-100 p-2 transition-opacity" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/amila-dev/" className="opacity-50 hover:opacity-100 p-2 transition-opacity" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.instagram.com/amila_shan__/" className="opacity-50 hover:opacity-100 p-2 transition-opacity" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href={`mailto:${contactInfo.email}`} className="opacity-50 hover:opacity-100 p-2 transition-opacity" aria-label="Email">
                <FaEnvelope size={20} />
              </a>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm opacity-50">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-100">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm opacity-40" style={{ borderColor: borderVar }}>
          © {new Date().getFullYear()} Amila. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
