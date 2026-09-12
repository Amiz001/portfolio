import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineTool,
} from "react-icons/ai";

const homeSectionLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isTools = location.pathname === "/tools";
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (!isHome) return;

    const handler = (e) => setActiveSection(e.detail.sectionId);
    window.addEventListener("section-change", handler);
    return () => window.removeEventListener("section-change", handler);
  }, [isHome]);

  const ctaClass =
    "hidden lg:inline-flex px-4 py-2 rounded-full text-sm font-bold border transition-opacity hover:opacity-70";

  const routeLinkClass = (active) =>
    `transition-opacity ${active ? "font-bold opacity-100" : "opacity-50 hover:opacity-80"}`;

  return (
    <>
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-4xl justify-center px-4">
        <div
          className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 w-full border backdrop-blur-lg rounded-full px-5 py-3"
          style={{
            backgroundColor: "var(--nav-bg)",
            borderColor: "var(--nav-border)",
            color: "var(--fg)",
          }}
        >
          <Link to="/" className="flex items-center gap-2 shrink-0 justify-self-start">
            <span className="font-mono text-sm opacity-50">//</span>
            <span className="font-display font-bold text-sm tracking-tight">
              Amiz
            </span>
          </Link>

          {isHome ? (
            <ul className="flex gap-6 text-sm justify-self-center">
              {homeSectionLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={routeLinkClass(activeSection === link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/tools" className={routeLinkClass(false)}>
                  Tools
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex gap-6 text-sm justify-self-center">
              <li>
                <Link to="/" className={routeLinkClass(isHome)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tools" className={routeLinkClass(isTools)}>
                  Tools
                </Link>
              </li>
            </ul>
          )}

          <div className="flex items-center gap-3 shrink-0 justify-self-end">
            <ThemeToggle />
            {isHome ? (
              <a href="#contact" className={ctaClass} style={{ borderColor: "var(--fg)" }}>
                Let&apos;s Collaborate
              </a>
            ) : (
              <Link to="/#contact" className={ctaClass} style={{ borderColor: "var(--fg)" }}>
                Let&apos;s Collaborate
              </Link>
            )}
          </div>
        </div>
      </nav>

      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t backdrop-blur-lg"
        style={{
          backgroundColor: "var(--nav-bg)",
          borderColor: "var(--nav-border)",
          color: "var(--fg)",
        }}
      >
        <ul className="flex justify-around items-center py-3 px-2">
          {isHome ? (
            <>
              {[
                { id: "home", href: "#home", icon: AiOutlineHome, label: "Home" },
                { id: "projects", href: "#projects", icon: AiOutlineProject, label: "Work" },
                { id: "contact", href: "#contact", icon: AiOutlineMail, label: "Contact" },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <li key={item.id}>
                    <a href={item.href} className="flex flex-col items-center gap-1">
                      <ItemIcon
                        size={22}
                        className={activeSection === item.id ? "opacity-100" : "opacity-40"}
                      />
                      <span
                        className={`text-xs ${
                          activeSection === item.id ? "font-semibold opacity-100" : "opacity-40"
                        }`}
                      >
                        {item.label}
                      </span>
                    </a>
                  </li>
                );
              })}
              <li>
                <Link to="/tools" className="flex flex-col items-center gap-1">
                  <AiOutlineTool size={22} className="opacity-40" />
                  <span className="text-xs opacity-40">Tools</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" className="flex flex-col items-center gap-1">
                  <AiOutlineHome size={22} className="opacity-40" />
                  <span className="text-xs opacity-40">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/tools" className="flex flex-col items-center gap-1">
                  <AiOutlineTool size={22} className="opacity-100" />
                  <span className="text-xs font-semibold">Tools</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
