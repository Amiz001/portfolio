export default function HeroSphereBackground() {
  const latitudes = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5];

  return (
    <div className="hero-sphere-bg" aria-hidden="true">
      <div className="hero-sphere hero-sphere-main">
        <svg viewBox="0 0 500 500" className="hero-sphere-svg">
          <circle
            cx="250"
            cy="250"
            r="220"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="hero-sphere-outline"
          />
          <g className="hero-sphere-spin">
            {latitudes.map((deg) => (
              <ellipse
                key={deg}
                cx="250"
                cy="250"
                rx="220"
                ry="72"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                transform={`rotate(${deg} 250 250)`}
              />
            ))}
          </g>
          <g className="hero-sphere-spin-reverse">
            {[0, 45, 90, 135].map((deg) => (
              <ellipse
                key={`v-${deg}`}
                cx="250"
                cy="250"
                rx="72"
                ry="220"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                transform={`rotate(${deg} 250 250)`}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="hero-sphere hero-sphere-secondary">
        <svg viewBox="0 0 300 300" className="hero-sphere-svg">
          <circle
            cx="150"
            cy="150"
            r="120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="hero-sphere-outline"
          />
          <g className="hero-sphere-spin-slow">
            {[0, 30, 60, 90, 120, 150].map((deg) => (
              <ellipse
                key={deg}
                cx="150"
                cy="150"
                rx="120"
                ry="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                transform={`rotate(${deg} 150 150)`}
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}
