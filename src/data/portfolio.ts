export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  role: string;
  description: string;
  stack: string[];
  image: string;
  featured: boolean;
  award?: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface Capability {
  index: string;
  title: string;
  description: string;
  technologies: string[];
}

export const siteMeta = {
  name: "Amila",
  handle: "Amiz",
  fullName: "Amila Shan",
  role: "Software Developer & Full-Stack Engineer",
  headline: "Building scalable web platforms, robust backend systems, and thoughtful digital experiences.",
  bio: "Full-stack software developer focused on performant web architecture, intuitive interfaces, and scalable full-stack applications. Winner of 1st Place for Design Excellence at Bookmark 3.0 UI/UX Competition.",
  location: "Colombo, Sri Lanka",
  timezone: "Asia/Colombo",
  utcOffset: "UTC+5:30",
  email: "lgmalshan@gmail.com",
  phone: "+94 71 375 0843",
  displayPhone: "071 375 0843",
  availableForWork: true,
  socials: {
    github: "https://github.com/Amiz001",
    linkedin: "https://www.linkedin.com/in/amila-dev/",
    instagram: "https://www.instagram.com/amila_shan__/"
  },
  emailJs: {
    serviceId: "service_pwdh8dv",
    templateId: "template_sob2bd7",
    publicKey: "pyzGjxmIsbO4feH1M"
  }
};

export const projects: Project[] = [
  {
    id: "parkbay",
    title: "ParkBay",
    subtitle: "Smart Parking & Space Management Platform",
    year: "2025",
    category: "Full-Stack Web App",
    role: "Full-Stack Development & Architecture",
    description: "A comprehensive smart parking platform built on the MERN stack to streamline slot reservations, real-time vehicle allocation, member subscriptions, and automated payment gateways.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/images/parkbay.webp",
    featured: true,
    githubUrl: "https://github.com/Amiz001/parking-management-system",
    demoUrl: "https://www.linkedin.com/in/amila-dev/"
  },
  {
    id: "suva-saviya",
    title: "Suva Saviya",
    subtitle: "AI Healthcare Assistant & Emergency Care Portal",
    year: "2025",
    category: "AI Product & UI/UX",
    role: "UI/UX Design & Frontend Engineering",
    description: "An intuitive emergency medical guidance tool and AI healthcare chatbot designed for rapid assistance and accessible elder care. Honored with 1st Place for Design Excellence at Bookmark 3.0.",
    stack: ["JavaScript", "HTML5", "CSS3", "Figma", "AI Workflows"],
    image: "/images/suvasaviya.webp",
    featured: true,
    award: "★ 1st Place — Bookmark 3.0 UI/UX Competition",
    githubUrl: "https://github.com/Amiz001/Suwa-saviya-ai",
    demoUrl: "https://suwa-saviya-ai.netlify.app"
  },
  {
    id: "corehr",
    title: "CoreHR",
    subtitle: "Enterprise Workforce & HR Management System",
    year: "2024",
    category: "Enterprise System",
    role: "Backend & Database Engineering",
    description: "An enterprise management system modernizing organizational human resources, employee records, attendance monitoring, and role-based administrative workflows.",
    stack: ["Java Servlets", "MySQL", "JavaScript", "HTML5", "CSS3"],
    image: "/images/corehr.webp",
    featured: true,
    githubUrl: "https://github.com/Amiz001/Employee-Management-System",
    demoUrl: "https://www.linkedin.com/in/amila-dev/"
  },
  {
    id: "autohire",
    title: "AutoHire",
    subtitle: "Vehicle Rental & Fleet Management System",
    year: "2024",
    category: "Web Platform",
    role: "Full-Stack Web Development",
    description: "A dynamic vehicle reservation platform that enables customers to search and book rentals while offering fleet managers live inventory control, billing, and utilization analytics.",
    stack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    image: "/images/autohire.webp",
    featured: true,
    githubUrl: "https://github.com/Amiz001/Vehicle-Rental-System",
    demoUrl: "https://www.linkedin.com/in/amila-dev/"
  },
  {
    id: "nexubi",
    title: "Nexubi AI",
    subtitle: "Intelligent Conversational Agent & Automation",
    year: "2025",
    category: "AI Integration",
    role: "Frontend & API Integration",
    description: "An interactive AI agent featuring contextual conversation memory, structured guidance workflows, and automated customer routing.",
    stack: ["React", "TypeScript", "Tailwind CSS", "OpenAI API"],
    image: "/images/suvasaviya.webp",
    featured: false,
    githubUrl: "https://github.com/Amiz001",
    demoUrl: "https://www.linkedin.com/in/amila-dev/"
  }
];

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Frontend Engineering",
    description: "Building responsive, accessible web applications and kinetic interfaces with strict type safety, modular design systems, and rapid page loads.",
    technologies: ["React", "Next.js", "Astro", "TypeScript", "Tailwind CSS", "GSAP", "Lenis"]
  },
  {
    index: "02",
    title: "Backend & Data Systems",
    description: "Designing RESTful APIs, relational and document database architectures, user authentication flows, and server-side services built for reliability.",
    technologies: ["Node.js", "Express", "Java Servlets", "PHP", "MongoDB", "MySQL", "REST APIs"]
  },
  {
    index: "03",
    title: "UI/UX & Product Design",
    description: "Translating complex product requirements into clean, user-centered digital interfaces with meticulous typographic hierarchy and Figma component libraries.",
    technologies: ["Figma", "Design Systems", "Interactive Prototyping", "Information Architecture", "Wireframing"]
  }
];

