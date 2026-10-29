import { useEffect, useRef } from 'react';
import './SpaceshipDashboard.css';

// ── SVG Icon Components ──
const Icons = {
  User: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Briefcase: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Flask: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6" />
      <path d="M10 9V3" />
      <path d="M14 9V3" />
      <path d="M6 21h12" />
      <path d="M10 9l-4 8a2 2 0 0 0 1.8 2.9h8.4A2 2 0 0 0 18 17l-4-8" />
    </svg>
  ),
  Mic: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  Layers: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Play: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  BarChart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
};

// ── Navigation Items ──
const navItems = [
  { icon: Icons.User, label: 'About Me', active: true },
  { icon: Icons.Briefcase, label: 'Portfolio' },
  { icon: Icons.Users, label: 'Clients' },
  { icon: Icons.Flask, label: 'Research' },
  { icon: Icons.Mic, label: 'Podcast' },
  { icon: Icons.Mail, label: 'Contact' },
];

// ── Stats Data ──
const stats = [
  { number: '12+', label: 'Projects\nShipped' },
  { number: '20+', label: 'Happy\nClients' },
  { number: '4+', label: 'Years\nExperience' },
];

// ── Project Tags ──
const projectTags = ['React', 'Node.js', 'PostgreSQL', '+2'];

export default function SpaceshipDashboard() {
  const badgeRef = useRef(null);

  useEffect(() => {
    document.title = 'Amiz — Portfolio';
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-frame">
        {/* HUD Corner Brackets */}
        <div className="hud-corner top-left" />
        <div className="hud-corner top-right" />
        <div className="hud-corner bottom-left" />
        <div className="hud-corner bottom-right" />

        <div className="dashboard-content">
          {/* ── Left Sidebar ── */}
          <nav className="sidebar-nav">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href="#"
                className={`nav-item ${item.active ? 'active' : ''} animate-in`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="nav-icon">
                  <item.icon />
                </span>
                <span>{item.label}</span>
              </a>
            ))}

            <div className="sidebar-bottom-text">
              <span>BUILD</span><br />
              <span>EXPLORE</span><br />
              <span>BEYOND</span>
            </div>
          </nav>

          {/* ── Main Area ── */}
          <div className="main-area">
            {/* Top Header Bar */}
            <header className="header-bar">
              <div className="header-left">
                <div className="header-tag">
                  <span>//</span> DEVELOPER
                </div>
                <div className="header-subtitle">
                  Turning ideas into reality
                </div>
              </div>

              <div className="header-center">
                <h1 className="header-title">PORTFOLIO</h1>
                <div className="header-tagline">
                  DEVELOP <span>/</span> CREATE <span>/</span> EXPLORE
                </div>
              </div>

              <div className="header-right">
                <div className="header-page-num">01</div>
                <div className="header-right-text">
                  SAME<br />
                  CURIOSITY<br />
                  DIFFERENT<br />
                  GALAXY
                </div>
              </div>
            </header>

            {/* Hero Section - Left */}
            <section className="hero-section">
              <div className="profile-image-wrapper">
                <div className="profile-glow-ring" />
                <img
                  className="profile-image"
                  src="/images/profile.webp"
                  alt="Jon Daniel - Developer"
                />
              </div>

              <div className="hero-name-section">
                <p className="hero-intro">I'm,</p>
                <h2 className="hero-name">Jon Daniel</h2>
                <p className="hero-tagline">
                  Building ideas for a<br />
                  better digital universe.
                </p>
                <div className="hero-status">
                  <span className="status-dot" />
                  AVAILABLE FOR WORK
                </div>
              </div>

              {/* Rotating Badge */}
              <div className="rotating-badge" ref={badgeRef}>
                <svg viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="rotating-badge-text">
                    <textPath href="#circlePath" startOffset="0%">
                      CODE • CREATE • EXPLORE •&nbsp;
                    </textPath>
                  </text>
                </svg>
                <div className="badge-center-text">
                  <div className="badge-est">EST.</div>
                  <div className="badge-year">2023</div>
                </div>
              </div>
            </section>

            {/* Middle Column */}
            <div className="middle-column">
              <div className="featured-project-card">
                <div className="project-image-container">
                  <img
                    src="/images/space-bg.jpg"
                    alt="Orbital AI Workspace"
                  />
                  <button className="project-play-btn" aria-label="Play video">
                    <Icons.Play />
                  </button>
                  <div className="project-hud-bracket" />
                </div>
                <div className="project-info">
                  <span className="project-label">Featured Project</span>
                  <h3 className="project-name">
                    Orbital<br />AI Workspace
                  </h3>
                  <p className="project-desc">
                    A modern AI workspace to organize ideas, documents and workflows.
                  </p>
                  <div className="project-footer">
                    <div className="project-tags">
                      {projectTags.map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <a href="#" className="project-view-link">
                      View Project
                      <Icons.ArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="right-column">
              {stats.map((stat) => (
                <div key={stat.number} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">
                    {stat.label.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i === 0 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Cards */}
            <div className="bottom-cards">
              <a href="#" className="bottom-card github">
                <div className="bottom-card-icon">
                  <Icons.GitHub />
                </div>
                <div className="bottom-card-content">
                  <div className="bottom-card-title">GitHub</div>
                  <div className="bottom-card-subtitle">Open Source & Experiments</div>
                </div>
                <span className="bottom-card-arrow">
                  <Icons.ArrowRight />
                </span>
              </a>

              <a href="#" className="bottom-card tech">
                <div className="bottom-card-icon">
                  <Icons.Layers />
                </div>
                <div className="bottom-card-content">
                  <div className="bottom-card-title">Technologies</div>
                  <div className="bottom-card-subtitle">Tools I Work With</div>
                </div>
                <span className="bottom-card-arrow">
                  <Icons.ArrowRight />
                </span>
              </a>

              <a href="#" className="bottom-card podcast">
                <div className="bottom-card-icon">
                  <Icons.Mic />
                </div>
                <div className="bottom-card-content">
                  <div className="bottom-card-title">Podcast</div>
                  <div className="bottom-card-subtitle">Thoughts & Conversations</div>
                </div>
                <span className="bottom-card-arrow">
                  <Icons.ArrowRight />
                </span>
              </a>
            </div>

            {/* Footer Text */}
            <div style={{ gridColumn: '1' }} />{/* spacer */}
            <div style={{ gridColumn: '2' }} />{/* spacer */}

            <div className="footer-right">
              LET'S BUILD<br />
              WHAT'S NEXT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
