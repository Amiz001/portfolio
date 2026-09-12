import { useRef } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef(null);

  const handleToggle = (e) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : e.clientX;
    const y = rect ? rect.top + rect.height / 2 : e.clientY;
    const nextTheme = theme === "dark" ? "light" : "dark";

    const overlay = document.createElement("div");
    overlay.className = "theme-spread-overlay";
    overlay.style.left = `${x}px`;
    overlay.style.top = `${y}px`;
    overlay.style.backgroundColor = nextTheme === "light" ? "#ffffff" : "#000000";
    overlay.style.clipPath = "circle(0% at 50% 50%)";
    overlay.style.transition = "clip-path 0.55s ease-in-out";
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.clipPath = "circle(150% at 50% 50%)";
    });

    overlay.addEventListener(
      "transitionend",
      () => {
        setTheme(nextTheme);
        overlay.remove();
      },
      { once: true }
    );
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleToggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`p-2 rounded-full opacity-70 hover:opacity-100 hover:bg-[var(--fg)]/10 transition-all cursor-pointer ${className}`}
    >
      {theme === "dark" ? (
        <MdOutlineLightMode size={20} />
      ) : (
        <MdOutlineDarkMode size={20} />
      )}
    </button>
  );
}
