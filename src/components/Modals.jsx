import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaTimes,
  FaAward,
  FaGraduationCap,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiGit,
  SiFigma,
  SiDocker,
  SiPostgresql,
} from "react-icons/si";
import emailjs from "@emailjs/browser";

export const ModalBackdrop = ({ children, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#18191e] border border-white/15 rounded-[28px] p-6 sm:p-8 shadow-2xl text-white custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <FaTimes size={18} />
        </button>
        {children}
      </div>
    </div>
  );
};

// 1. Projects Modal
export const ProjectsModal = ({ projects, onClose }) => {
  const [activeTag, setActiveTag] = useState("All");

  const allTags = ["All", "React", "Node", "MongoDB", "Tailwind", "Full Stack"];

  const filtered = activeTag === "All"
    ? projects
    : projects.filter((p) =>
        p.Stack.some((s) => s.toLowerCase().includes(activeTag.toLowerCase()))
      );

  return (
    <ModalBackdrop onClose={onClose}>
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2 text-[#9FE2D6] text-sm font-semibold uppercase tracking-wider mb-1">
            <FaCode /> Featured Work
          </div>
          <h2 className="text-3xl font-extrabold font-jakarta">Projects Showcase</h2>
          <p className="text-white/60 text-sm mt-1">
            Explore web applications, production systems, and creative prototypes built by Amila.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeTag === tag
                  ? "bg-[#747CD6] text-white shadow-md"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          {filtered.map((proj, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-[#747CD6]/50 hover:bg-white/[0.05] transition-all"
            >
              <div>
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-black/40 border border-white/5">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-[11px] font-mono text-white/90">
                    {proj.subtitle}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-jakarta text-white group-hover:text-[#9FE2D6] transition-colors">
                  {proj.name}
                </h3>
                <p className="text-white/70 text-xs mt-2 line-clamp-3 leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {proj.Stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/80 font-mono capitalize"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-5 mt-4 border-t border-white/10">
                {proj.githubLink && (
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold transition-all"
                  >
                    <FaGithub /> Repository
                  </a>
                )}
                {proj.demoLink && (
                  <a
                    href={proj.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#747CD6] hover:bg-[#656dc9] text-white text-xs font-semibold shadow-md transition-all"
                  >
                    <FaExternalLinkAlt size={11} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModalBackdrop>
  );
};

// 2. Experience & Clients Modal
export const ExperienceModal = ({ onClose }) => {
  return (
    <ModalBackdrop onClose={onClose}>
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2 text-[#FDBE65] text-sm font-semibold uppercase tracking-wider mb-1">
            <FaAward /> Track Record
          </div>
          <h2 className="text-3xl font-extrabold font-jakarta">Experience & Honors</h2>
          <p className="text-white/60 text-sm mt-1">
            Industry contributions, competition wins, and community leadership.
          </p>
        </div>

        {/* Awards Highlight */}
        <div className="bg-gradient-to-r from-[#747CD6]/20 via-[#9FE2D6]/10 to-transparent border border-[#747CD6]/30 rounded-2xl p-5 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#747CD6]/30 flex items-center justify-center text-white shrink-0">
            <FaAward size={22} className="text-[#FDBE65]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#FDBE65]/20 text-[#FDBE65] text-[10px] font-bold uppercase tracking-wider">
                1st Place Winner
              </span>
              <span className="text-xs text-white/50">SLIIT AIESEC</span>
            </div>
            <h3 className="text-lg font-bold font-jakarta mt-1">
              Bookmark 3.0 UI/UX Competition Champion
            </h3>
            <p className="text-white/70 text-xs mt-1 leading-relaxed">
              Awarded 1st place for design excellence and rapid frontend execution developing "Suva Saviya", an AI healthcare assistant interface.
            </p>
          </div>
        </div>

        {/* Volunteer & Experience Timeline */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/60">
            Community & Mentorship
          </h4>

          <div className="border-l-2 border-[#747CD6] pl-5 space-y-6">
            <div>
              <div className="flex justify-between items-center text-xs text-white/50">
                <span className="font-semibold text-white">Tech for Good Initiative</span>
                <span>2023 - Present</span>
              </div>
              <p className="text-sm font-semibold text-[#9FE2D6] mt-0.5">Full Stack Developer</p>
              <p className="text-xs text-white/70 mt-1">
                Engineered accessible web portals and administrative management tools for non-profit organizations.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs text-white/50">
                <span className="font-semibold text-white">Code Academy Mentor</span>
                <span>2022 - 2023</span>
              </div>
              <p className="text-sm font-semibold text-[#9FE2D6] mt-0.5">Programming Mentor</p>
              <p className="text-xs text-white/70 mt-1">
                Mentored over 50 aspiring junior developers in modern React, JavaScript, and responsive UI fundamentals.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs text-white/50">
                <span className="font-semibold text-white">Open Source Contributor</span>
                <span>2021 - Present</span>
              </div>
              <p className="text-sm font-semibold text-[#9FE2D6] mt-0.5">Community Developer</p>
              <p className="text-xs text-white/70 mt-1">
                Contributed to modern open-source toolkits, documentation, and UI components.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="pt-4 border-t border-white/10 flex items-start gap-3">
          <FaGraduationCap size={20} className="text-[#9FE2D6] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold">SLIIT (Sri Lanka Institute of Information Technology)</h4>
            <p className="text-xs text-white/60">BSc (Hons) in Information Technology — Software Engineering</p>
          </div>
        </div>
      </div>
    </ModalBackdrop>
  );
};

// 3. Skills & Lab Modal
export const SkillsModal = ({ onClose }) => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      color: "#9FE2D6",
      skills: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML5 / CSS3", icon: <SiHtml5 /> },
      ],
    },
    {
      title: "Backend & Databases",
      color: "#747CD6",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "PHP", icon: <SiPhp /> },
      ],
    },
    {
      title: "DevOps, Tools & Design",
      color: "#FDBE65",
      skills: [
        { name: "Git & GitHub", icon: <SiGit /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Figma UI/UX", icon: <SiFigma /> },
        { name: "REST APIs", icon: <FaCode /> },
      ],
    },
  ];

  return (
    <ModalBackdrop onClose={onClose}>
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2 text-[#9FE2D6] text-sm font-semibold uppercase tracking-wider mb-1">
            <FaCode /> Architecture & Tooling
          </div>
          <h2 className="text-3xl font-extrabold font-jakarta">Technical Stack</h2>
          <p className="text-white/60 text-sm mt-1">
            Core technologies and toolchains applied across production apps and research projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all"
            >
              <h3
                style={{ color: cat.color }}
                className="text-sm font-bold uppercase tracking-wider mb-4"
              >
                {cat.title}
              </h3>
              <div className="space-y-2.5">
                {cat.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs font-medium text-white/90 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-base text-white/70">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModalBackdrop>
  );
};

// 4. Contact Modal (Working EmailJS)
export const ContactModal = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_pwdh8dv",
        "template_sob2bd7",
        templateParams,
        "pyzGjxmIsbO4feH1M"
      )
      .then(
        () => {
          setIsSending(false);
          setStatus("Thank you! Your message has been sent successfully.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsSending(false);
          setStatus("Failed to send message. Please email me directly at lgmalshan@gmail.com");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <ModalBackdrop onClose={onClose}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#9FE2D6] text-sm font-semibold uppercase tracking-wider mb-1">
              <FaEnvelope /> Get In Touch
            </div>
            <h2 className="text-3xl font-extrabold font-jakarta">Let's build something remarkable.</h2>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              Have a project in mind, hiring opportunity, or technical inquiry? Send a direct message or connect across social channels.
            </p>

            <div className="space-y-4 mt-8">
              <a
                href="mailto:lgmalshan@gmail.com"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#747CD6]">
                  <FaEnvelope />
                </div>
                <span>lgmalshan@gmail.com</span>
              </a>
              <a
                href="tel:+94713750843"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#9FE2D6]">
                  <FaPhone />
                </div>
                <span>+94 71 375 0843</span>
              </a>
            </div>
          </div>

          <div className="flex gap-3 pt-6 border-t border-white/10 mt-6">
            <a
              href="https://github.com/Amiz001"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/amila-dev/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/amila_shan__/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Elon Musk"
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#747CD6]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1.5">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="elon@x.com"
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#747CD6]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1.5">
              Your Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or role..."
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#747CD6] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3 rounded-xl bg-[#747CD6] hover:bg-[#656dc9] text-white font-bold text-sm shadow-lg hover:shadow-[#747CD6]/30 transition-all cursor-pointer disabled:opacity-50"
          >
            {isSending ? "Sending Message..." : "Send Message"}
          </button>

          {status && (
            <p className="text-xs text-center text-[#9FE2D6] font-medium pt-2 flex items-center justify-center gap-1.5">
              <FaCheckCircle /> {status}
            </p>
          )}
        </form>
      </div>
    </ModalBackdrop>
  );
};

// 5. About Details Modal
export const AboutModal = ({ onClose }) => {
  return (
    <ModalBackdrop onClose={onClose}>
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2 text-[#747CD6] text-sm font-semibold uppercase tracking-wider mb-1">
            ✦ Bio & Philosophy
          </div>
          <h2 className="text-3xl font-extrabold font-jakarta">About Amila Shan</h2>
          <p className="text-white/60 text-sm mt-1">
            Software Developer based in Sri Lanka, passionate about performant web architectures and delightful UI experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-white/80 leading-relaxed">
          <div className="space-y-4">
            <p>
              I am an undergraduate Software Engineering student at SLIIT, specializing in full-stack web applications, responsive user interfaces, and cloud services.
            </p>
            <p>
              Over the past 3+ years, I've engineered comprehensive systems ranging from smart parking management platforms (ParkBay) to vehicle rental and enterprise HR platforms.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-3 text-xs">
            <div className="flex justify-between py-1.5 border-b border-white/10">
              <span className="text-white/50">Location:</span>
              <span className="font-semibold text-white">Sri Lanka</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/10">
              <span className="text-white/50">Primary Focus:</span>
              <span className="font-semibold text-white">Full Stack & Frontend Systems</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/10">
              <span className="text-white/50">Degree:</span>
              <span className="font-semibold text-white">BSc (Hons) IT - Software Engineering</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-white/50">Availability:</span>
              <span className="font-semibold text-[#9FE2D6]">Open to Roles & Collaborations</span>
            </div>
          </div>
        </div>
      </div>
    </ModalBackdrop>
  );
};
