import React from "react";

export const VinylBadge = ({
  text = "★ AMILA SHAN ★ SOFTWARE DEVELOPER ★ 2025 PORTFOLIO ",
  size = 110,
  className = "",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{ width: size, height: size }}
      className={`relative select-none cursor-pointer group transition-transform duration-300 hover:scale-105 ${className}`}
      title="Amila Shan - Software Developer"
    >
      {/* Vinyl Disc Background */}
      <div className="absolute inset-0 rounded-full bg-[#111115] shadow-lg flex items-center justify-center p-1.5 border border-white/10">
        {/* Subtle Vinyl Grooves */}
        <div className="absolute inset-2 rounded-full border border-white/10 opacity-40 pointer-events-none" />
        <div className="absolute inset-4 rounded-full border border-white/5 opacity-50 pointer-events-none" />
        <div className="absolute inset-7 rounded-full border border-white/10 opacity-30 pointer-events-none" />

        {/* Center Label & Spindle Hole */}
        <div className="w-9 h-9 rounded-full bg-[#202028] border border-white/20 flex items-center justify-center shadow-inner z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-white/90 shadow-sm" />
        </div>

        {/* Rotating SVG with circular curved text */}
        <svg
          viewBox="0 0 160 160"
          className="absolute inset-0 w-full h-full animate-spin-slow group-hover:[animation-play-state:paused]"
        >
          <defs>
            <path
              id="vinylTextCircle"
              d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
            />
          </defs>
          <text
            className="text-[10.5px] uppercase font-mono font-bold tracking-[0.24em] fill-white/80"
          >
            <textPath
              href="#vinylTextCircle"
              startOffset="0%"
            >
              {text}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default VinylBadge;
