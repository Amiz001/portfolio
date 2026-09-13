import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaPlay,
  FaGithub,
  FaExternalLinkAlt,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaAward,
  FaCheck,
} from "react-icons/fa";
import { SiApple, SiGithub } from "react-icons/si";

import CornerMark from "../components/CornerMark";
import VinylBadge from "../components/VinylBadge";
import SphereCanvas from "../components/SphereCanvas";
import {
  ProjectsModal,
  ExperienceModal,
  SkillsModal,
  ContactModal,
  AboutModal,
} from "../components/Modals";

// Preserved Project Data
const projectsData = [
  {
    name: "ParkBay",
    subtitle: "Smart Parking Management System",
    color: "indigo-500",
    image: "/images/parkbay.png",
    description:
      "A smart parking management platform engineered with the MERN stack for seamless slot booking, vehicle tracking, payments, and admin monitoring.",
    Stack: ["react", "express js", "node js", "mongo", "tailwind css"],
    githubLink: "https://github.com/Amiz001/parking-management-system",
    demoLink: "https://www.linkedin.com/in/amila-dev/",
  },
  {
    name: "CoreHR",
    subtitle: "Enterprise HR & Workforce System",
    color: "purple-500",
    image: "/images/corehr.png",
    description:
      "Enterprise web-based employee management solution designed to streamline workforce tasks, attendance tracking, and administrative workflows.",
    Stack: ["html", "css", "javascript", "java servlets", "mysql"],
    githubLink: "https://github.com/Amiz001/Employee-Management-System",
    demoLink: "https://www.linkedin.com/in/amila-dev/",
  },
  {
    name: "AutoHire",
    subtitle: "Vehicle Rental & Fleet Management",
    color: "yellow-500",
    image: "/images/autohire.png",
    description:
      "Vehicle rental marketplace enabling real-time search, booking, fleet status, and secure role-based administrative management.",
    Stack: ["html", "css", "javascript", "php", "mysql"],
    githubLink: "https://github.com/Amiz001/Vehicle-Rental-System",
    demoLink: "https://www.linkedin.com/in/amila-dev/",
  },
  {
    name: "Suva Saviya",
    subtitle: "SLIIT AIESEC 1st Place UI/UX",
    color: "pink-500",
    image: "/images/suvasaviya.jpg",
    description:
      "Award-winning healthcare chatbot interface awarded 1st Place for design excellence and rapid UI execution in Bookmark 3.0.",
    Stack: ["html", "css", "javascript", "figma"],
    githubLink: "https://github.com/Amiz001/Suwa-saviya-ai",
    demoLink: "https://suwa-saviya-ai.netlify.app",
  },
];

export const PortfolioDashboard = () => {
  // Active navigation view or open modal
  const [activeNav, setActiveNav] = useState("about");
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Modals state
  const [modalType, setModalType] = useState(null); // 'projects' | 'experience' | 'skills' | 'contact' | 'about'

  const currentProject = projectsData[currentProjectIdx];

  const handleNextProject = (e) => {
    e.stopPropagation();
    setCurrentProjectIdx((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrevProject = (e) => {
    e.stopPropagation();
    setCurrentProjectIdx((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText("lgmalshan@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navItems = [
    { id: "clients", label: "Clients", onClick: () => setModalType("experience") },
    { id: "research", label: "Research", onClick: () => setModalType("skills") },
    { id: "portfolio", label: "Portfolio", onClick: () => setModalType("projects") },
    { id: "github", label: "GitHub", onClick: () => window.open("https://github.com/Amiz001", "_blank") },
    { id: "contact", label: "Contact", onClick: () => setModalType("contact") },
  ];

  // Motion variants for spring-loaded staggered entry
  const cardVariant = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 24,
        delay: custom * 0.09,
      },
    }),
  };

  return (
    <main className="min-h-screen w-full bg-[#E5E7EB] flex items-center justify-center p-3 sm:p-6 md:p-10 font-jakarta antialiased selection:bg-[#747CD6] selection:text-white">
      {/* Outer Dashboard Window Frame replicating reference proportions */}
      <div className="relative w-full max-w-[1240px] bg-white rounded-[32px] sm:rounded-[40px] md:rounded-[46px] p-4 sm:p-7 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.08)] border border-black/5 overflow-hidden">
        
        {/* Top Header Row above Hero */}
        <header className="flex items-center justify-between mb-3 sm:mb-4 pl-1 sm:pl-3">
          {/* Top Left 'About Me' Tab Button */}
          <button
            onClick={() => {
              setActiveNav("about");
              setModalType("about");
            }}
            className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-black/80 hover:text-black transition-colors cursor-pointer group"
          >
            {/* Exact 4-circle diamond motif from reference */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="text-black/60 group-hover:text-black transition-transform group-hover:rotate-45"
            >
              <circle cx="8" cy="3" r="1.6" />
              <circle cx="13" cy="8" r="1.6" />
              <circle cx="8" cy="13" r="1.6" />
              <circle cx="3" cy="8" r="1.6" />
            </svg>
            <span>About Me</span>
          </button>

          {/* Mobile Navigation Dropdown/Pills */}
          <div className="flex md:hidden items-center gap-2 overflow-x-auto py-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={item.onClick}
                className="px-3 py-1 rounded-full text-[11px] font-semibold bg-black/5 text-black/70 active:bg-black active:text-white transition-all whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>
        </header>

        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ================= LEFT COLUMN: Navigation Rail + Hero Card ================= */}
          <div className="lg:col-span-5 flex gap-3 sm:gap-4 md:gap-5 items-stretch">
            
            {/* Left Vertical Navigation Rail (Desktop) */}
            <nav
              aria-label="Side Navigation"
              className="hidden md:flex flex-col items-center justify-between py-6 select-none shrink-0"
            >
              <div className="flex flex-col items-center gap-9">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveNav(item.id);
                      item.onClick();
                    }}
                    className={`writing-vertical text-[13px] tracking-wide capitalize font-medium transition-all duration-200 cursor-pointer ${
                      activeNav === item.id
                        ? "text-black font-extrabold scale-105"
                        : "text-black/50 hover:text-black hover:scale-105"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* ================= PURPLE / LILAC HERO CARD ================= */}
            <motion.div
              custom={0}
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="relative flex-1 bg-[#747CD6] text-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_35px_rgba(116,124,214,0.3)] min-h-[480px] sm:min-h-[520px] md:min-h-[540px]"
              style={{
                clipPath: "polygon(0 44px, 44px 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              {/* Subtle top-left notch styling highlight */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

              {/* Top Section: Framed Circular Developer Portrait */}
              <div className="flex justify-center pt-2 sm:pt-4">
                <div className="relative group cursor-pointer" onClick={() => setModalType("about")}>
                  {/* Outer Pink/Magenta Ring */}
                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full border-[5px] sm:border-[6px] border-[#E88AB8] flex items-center justify-center p-1.5 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                    {/* Inner White Ring */}
                    <div className="w-full h-full rounded-full border-[3px] border-white overflow-hidden bg-gradient-to-b from-[#2A2B3D] to-[#12131C] relative flex items-end justify-center">
                      <img
                        src="/images/profile.webp"
                        alt="Amila Shan"
                        className="w-[88%] h-auto object-cover translate-y-1 brightness-105 contrast-105 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Typography & Spinning Vinyl Badge */}
              <div className="flex items-end justify-between pt-6 mt-auto">
                <div className="flex-1 pr-3">
                  <span className="block text-2xl sm:text-3xl font-bold tracking-tight text-white/95">
                    Im,
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-[44px] font-black tracking-tight leading-[1.05] text-white">
                    Amila
                    <br />
                    Shan
                  </h1>

                  {/* Dotted Divider */}
                  <div className="w-full border-b-2 border-dotted border-white/35 my-3" />

                  {/* Clickable Email */}
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-2 text-xs sm:text-sm text-white/90 hover:text-white font-medium group transition-all text-left"
                    title="Click to copy email address"
                  >
                    <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-white">
                      lgmalshan@gmail.com
                    </span>
                    {copiedEmail ? (
                      <span className="flex items-center gap-1 text-[11px] bg-white text-[#747CD6] px-1.5 py-0.5 rounded font-bold">
                        <FaCheck size={10} /> Copied!
                      </span>
                    ) : (
                      <FaEnvelope size={13} className="text-white/80 group-hover:scale-110 transition-transform" />
                    )}
                  </button>
                </div>

                {/* Spinning Vinyl Record Badge */}
                <div className="shrink-0 pl-1">
                  <VinylBadge
                    size={96}
                    text="★ FULL STACK DEVELOPER ★ 2025 PORTFOLIO "
                    onClick={() => setModalType("about")}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: Header + Bento Grid ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Top Large "Portfolio⌝" Heading */}
            <div className="flex items-baseline justify-start">
              <h2 className="relative inline-flex items-start text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight text-black leading-none font-jakarta">
                Portfolio
                <span className="text-black ml-1 text-4xl sm:text-5xl font-light transform -translate-y-2 select-none">
                  ⌝
                </span>
              </h2>
            </div>

            {/* Central Row: Large Featured Project Card + Stacked Stat Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
              
              {/* ================= CARD 1: Large Central Featured Project ================= */}
              <motion.div
                custom={1}
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                onClick={() => setModalType("projects")}
                className="group relative sm:col-span-8 bg-[#15161C] rounded-[28px] overflow-hidden cursor-pointer shadow-lg min-h-[220px] sm:min-h-[240px] flex items-center justify-center border border-black/10"
              >
                {/* Project Screenshot Background with smooth overlay */}
                <img
                  src={currentProject.image}
                  alt={currentProject.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-75"
                />

                {/* Soft Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                <CornerMark className="text-white/80 group-hover:text-white" size={16} />

                {/* Frosted Glass Play/Inspect Button */}
                <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/35 backdrop-blur-md border border-white/60 flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/50">
                  <FaPlay size={18} className="translate-x-0.5" />
                </div>

                {/* Bottom Project Info Bar */}
                <div className="absolute bottom-3 left-4 right-4 z-10 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#9FE2D6] font-bold">
                      Featured Project
                    </span>
                    <h3 className="text-white text-lg sm:text-xl font-bold font-jakarta leading-tight">
                      {currentProject.name}
                    </h3>
                    <p className="text-white/70 text-xs line-clamp-1">
                      {currentProject.subtitle}
                    </p>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md rounded-full p-1 border border-white/10">
                    <button
                      onClick={handlePrevProject}
                      className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center text-xs transition-colors"
                      title="Previous project"
                    >
                      <FaChevronLeft size={10} />
                    </button>
                    <button
                      onClick={handleNextProject}
                      className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center text-xs transition-colors"
                      title="Next project"
                    >
                      <FaChevronRight size={10} />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* ================= STACKED STAT PILLS (Top Right) ================= */}
              <div className="sm:col-span-4 flex flex-col gap-4 justify-between">
                
                {/* Upper Pill: Mint/Pastel Teal (Projects Count) */}
                <motion.div
                  custom={2}
                  variants={cardVariant}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -3, transition: { duration: 0.25 } }}
                  onClick={() => setModalType("projects")}
                  className="group relative bg-[#9FE2D6] text-black rounded-[24px] p-5 flex flex-col justify-between cursor-pointer shadow-sm min-h-[110px]"
                >
                  <CornerMark className="text-black/40 group-hover:text-black" size={14} />
                  <div>
                    <span className="text-3xl sm:text-4xl font-extrabold font-jakarta tracking-tight block">
                      25+
                    </span>
                    <span className="text-sm font-semibold text-black/80 mt-0.5 block">
                      Projects
                    </span>
                  </div>
                </motion.div>

                {/* Lower Pill: Soft Pastel Purple (Awards & Achievements) */}
                <motion.div
                  custom={3}
                  variants={cardVariant}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -3, transition: { duration: 0.25 } }}
                  onClick={() => setModalType("experience")}
                  className="group relative bg-[#8B7FE8] text-white rounded-[24px] p-5 flex flex-col justify-between cursor-pointer shadow-sm min-h-[110px]"
                >
                  <CornerMark className="text-white/40 group-hover:text-white" size={14} />
                  <div>
                    <span className="text-3xl sm:text-4xl font-extrabold font-jakarta tracking-tight block">
                      156+
                    </span>
                    <span className="text-sm font-semibold text-white/90 mt-0.5 block">
                      Awards & PRs
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Row: Dark Graphite Card + Split 3D Sphere Card */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
              
              {/* ================= CARD 4: Dark Graphite (Clients / Experience) ================= */}
              <motion.div
                custom={4}
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
                onClick={() => setModalType("experience")}
                className="group relative sm:col-span-5 bg-[#3E3E42] text-white rounded-[28px] p-6 flex flex-col justify-between cursor-pointer shadow-md min-h-[150px]"
              >
                <CornerMark className="text-white/30 group-hover:text-white" size={14} />

                {/* Tech & Client Icon */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                    <SiApple size={24} />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                    <SiGithub size={22} />
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-base font-bold text-white/95 group-hover:text-white transition-colors">
                    Clients & Exp
                  </span>
                  <span className="block text-xs text-white/50">
                    SLIIT • Tech for Good • Freelance
                  </span>
                </div>
              </motion.div>

              {/* ================= CARD 5: Split Card (3D Sphere + Peach Stat) ================= */}
              <motion.div
                custom={5}
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
                onClick={() => setModalType("skills")}
                className="group relative sm:col-span-7 rounded-[28px] overflow-hidden flex shadow-md min-h-[150px] cursor-pointer"
              >
                {/* Left Side: Dark Background with 3D Iridescent Sphere */}
                <div className="w-[45%] bg-[#0E0F14] flex items-center justify-center p-2 relative overflow-hidden">
                  <SphereCanvas className="w-full h-full" />
                </div>

                {/* Right Side: Warm Golden Peach with Global Excellence Metric */}
                <div className="flex-1 bg-[#FDBE65] text-black p-6 flex flex-col justify-between relative">
                  <CornerMark className="text-black/35 group-hover:text-black" size={14} />

                  <div>
                    <span className="text-3xl sm:text-4xl font-extrabold font-jakarta tracking-tight block">
                      172+
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-black/85 leading-snug mt-1 block">
                      Global Code Quality & Engineering Standards.
                    </span>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-black/60 font-bold">
                    Learn More →
                  </span>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= INTERACTIVE MODALS ================= */}
      <AnimatePresence>
        {modalType === "projects" && (
          <ProjectsModal
            projects={projectsData}
            onClose={() => setModalType(null)}
          />
        )}
        {modalType === "experience" && (
          <ExperienceModal onClose={() => setModalType(null)} />
        )}
        {modalType === "skills" && (
          <SkillsModal onClose={() => setModalType(null)} />
        )}
        {modalType === "contact" && (
          <ContactModal onClose={() => setModalType(null)} />
        )}
        {modalType === "about" && (
          <AboutModal onClose={() => setModalType(null)} />
        )}
      </AnimatePresence>
    </main>
  );
};

export default PortfolioDashboard;
