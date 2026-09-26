import React, { useRef, useState, useEffect } from "react";

import CardSwap, { Card } from "../components/CardSwap";
import GradientText from "../components/GradientText";
import { PiHandWavingFill } from "react-icons/pi";
import LogoLoop from "../components/LogoLoop";
import ProjectShowcase from "../components/ProjectShowcase";
import Contact from "./contact";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiGit,
  SiOpenai,
  SiFigma,
} from "react-icons/si";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaJava,
} from "react-icons/fa";
import { AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  /*{
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },*/
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiExpress />, title: "Express", href: "" },
  { node: <SiNodedotjs />, title: "Node js", href: "" },
  { node: <SiMongodb />, title: "Mongo", href: "" },
  { node: <SiMysql />, title: "Mysql", href: "" },
];

const techLogosAll = [
  { node: <SiHtml5 size={20} />, title: "html" },
  { node: <SiCss3 size={20} />, title: "css" },
  { node: <SiJavascript size={20} />, title: "javascript" },
  { node: <SiReact size={20} />, title: "react" },
  { node: <SiTailwindcss size={20} />, title: "tailwind css" },
  { node: <SiExpress size={20} />, title: "express js" },
  { node: <SiNodedotjs size={20} />, title: "node js" },
  { node: <SiMongodb size={20} />, title: "mongo" },
  { node: <SiMysql size={20} />, title: "mysql" },
  { node: <FaJava size={20} />, title: "java" },
  { node: <FaJava size={20} />, title: "java servlets" },
  { node: <SiPhp size={20} />, title: "php" },
  { node: <SiOpenai size={20} />, title: "open ai" },
  { node: <SiGit size={20} />, title: "git" },
  { node: <SiFigma size={20} />, title: "figma" },
];

function getIcon(icName) {
  for (let i = 0; i < techLogosAll.length; i++) {
    if (techLogosAll[i].title === icName) {
      return (
        <div className="flex justify-center gap-2 items-center bg-white/5 backdrop-blur-lg text-white font-bold w-auto h-8 px-2 rounded-sm border-1 border-white/20 text-sm">
          {techLogosAll[i].node} {techLogosAll[i].title}
        </div>
      );
    }
  }
}

const projects = [
  {
    name: "ParkBay",
    subtitle: "Parking Management System",
    color: "indigo-500",
    image: "./images/parkbay.webp",
    description:
      "ParkBay is an Smart Parking Management System using the MERN stack to make parking, membership, and payments simple and seamless for users and admins. This was our Second Year Second Semester academic project, where we combined design, backend logic, and user management into a full-featured solution.",
    Stack: ["react", "express js", "node js", "mongo", "tailwind css"],
    githubLink: "https://github.com/Amiz001/parking-management-system",
    demoLink: "https://www.linkedin.com/in/amila-dev/",
  },
  {
    name: "CoreHR",
    subtitle: "Employee Management System",
    color: "purple-500",
    image: "./images/corehr.webp",
    description:
      "CoreHR is a web-based employee management system designed to simplify and modernize the way organizations handle employee-related tasks and workflows.",
    Stack: ["html", "css", "javascript", "java servlets", "mysql"],
    githubLink: "https://github.com/Amiz001/Employee-Management-System",
    demoLink: "https://www.linkedin.com/in/amila-dev/",
  },
  {
    name: "AutoHire",
    subtitle: "Vehicle Rental System",
    color: "yellow-500",
    image: "./images/autohire.webp",
    description:
      "AutoHire is a web-based platform that allows users to search and rent vehicles easily while admins manage users and listings. I developed the homepage, vehicle search page, and admin user management.",
    Stack: ["html", "css", "javascript", "php", "mysql"],
    githubLink: "https://github.com/Amiz001/Vehicle-Rental-System",
    demoLink: "https://www.linkedin.com/in/amila-dev/",
  },
  {
    name: "Suva Saviya",
    subtitle: "AI Chatbot",
    color: "purple-500",
    image: "./images/suvasaviya.webp",
    description:
      "Suva Saviya is a chatbot interface designed for a Bookmark 3.0 (UI/UX competition) organized by SLIIT AIESEC club. Focused on an intuitive and responsive UI, our team won 1st place for design excellence. Tech Stack: HTML, CSS, JavaScript",
    Stack: ["html", "css", "javascript", "figma"],
    githubLink: "https://github.com/Amiz001/Suwa-saviya-ai",
    demoLink: "https://suwa-saviya-ai.netlify.app",
  },
];

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [active, setActive] = useState("hero");
  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const intervalRef = useRef(null);

  const current = projects[index];

  useEffect(() => {
    if (isPaused) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % projects.length);
        setAnimate(true);
      }, 300);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.utils.toArray(".reveal-section").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.95, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
              markers: false,
            },
          }
        );
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.utils.toArray(".reveal-section").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.95, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              end: "bottom 0%",
              toggleActions: "play reverse play reverse",
              markers: false,
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="pb-20 md:pb-0 overflow-hidden">
      <div className="fixed z-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-600 to-green-400 h-[2000px] w-[2000px] flex justify-center items-center overflow-hidden visible fade-out2">
        <div className="loader absolute z-200"></div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-100 w-full justify-center">
        <div className="flex items-center gap-12 bg-gradient-to-br from-white/5 to-black border border-white/20 backdrop-blur-lg rounded-3xl px-6 py-4 overflow-hidden">
          <img src="/images/LOGO.webp" alt="Logo" className="w-8" />

          <ul className="relative flex gap-8 text-sm text-gray-200 px-4">
            {active === "home" && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-[#4079ff] to-[#40ffaa] rounded-full"></div>
            )}
            {active === "projects" && (
              <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-[#4079ff] to-[#40ffaa] rounded-full"></div>
            )}
            {active === "contact" && (
              <div className="absolute left-[65%] top-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-[#4079ff] to-[#40ffaa] rounded-full"></div>
            )}

            {["home", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`capitalize cursor-pointer ${active === section
                  ? "font-bold text-white/90"
                  : "hover:text-white/80 text-white/70"
                  }`}
                onClick={() => {
                  setActive(section);
                }}
              >
                {section}
              </a>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black via-black/95 to-black/80 border-t border-white/20 backdrop-blur-lg">
        <ul className="flex justify-around items-center py-4 px-4">
          <a
            href="#home"
            onClick={() => setActive("home")}
            className="flex flex-col items-center gap-1"
          >
            <AiOutlineHome
              size={24}
              className={active === "home" ? "text-white" : "text-gray-400"}
            />
            <span
              className={`text-xs ${active === "home" ? "text-white font-semibold" : "text-gray-400"
                }`}
            >
              Home
            </span>
          </a>
          <a
            href="#projects"
            onClick={() => setActive("projects")}
            className="flex flex-col items-center gap-1"
          >
            <AiOutlineProject
              size={24}
              className={active === "projects" ? "text-white" : "text-gray-400"}
            />
            <span
              className={`text-xs ${active === "projects"
                ? "text-white font-semibold"
                : "text-gray-400"
                }`}
            >
              Projects
            </span>
          </a>
          <a
            href="#contact"
            onClick={() => setActive("contact")}
            className="flex flex-col items-center gap-1"
          >
            <AiOutlineMail
              size={24}
              className={active === "contact" ? "text-white" : "text-gray-400"}
            />
            <span
              className={`text-xs ${active === "contact"
                ? "text-white font-semibold"
                : "text-gray-400"
                }`}
            >
              Contact
            </span>
          </a>
        </ul>
      </nav>

      <section
        id="home"
        className="reveal-section relative min-h-screen w-full bg-black px-4 sm:px-8 md:px-16 py-6 overflow-hidden"
      >
        <div className="mt-12 md:mt-20 flex flex-col sm:items-start items-center gap-6 md:gap-8">
          <h1
            style={{ fontFamily: "Poppins" }}
            className="text-6xl sm:text-5xl md:text-7xl font-black leading-tight"
          >
            <span className="flex items-center gap-2 text-sm sm:text-base text-gray-300 font-light tracking-tight">
              <PiHandWavingFill size={20} className="sm:w-[26px] sm:h-[26px]" />{" "}
              Hey I'm Amila,
            </span>

            <span className="block text-gray-200 tracking-wide">Software</span>
            <span>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={20}
                showBorder={false}
                className="custom-class"
              >
                Developer
              </GradientText>
            </span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Crafting modern, interactive web experiences.
          </p>

          <div className="w-[80%] md:w-[45%]">
            <div
              style={{
                height: "150px",
                position: "relative",
                overflow: "hidden",
              }}
              className="sm:h-[200px]"
            >
              <LogoLoop
                logos={techLogos}
                speed={40}
                direction="left"
                logoHeight={40}
                gap={50}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#000000"
                ariaLabel="Technology partners"
              />
            </div>
          </div>

          <div className="w-[70%] sm:w-full flex flex-col sm:flex-row gap-4 sm:gap-10 -mt-16 sm:-mt-8">
            <div className="relative inline-block w-full sm:w-[50%] md:w-[12%]">
              <div className="w-full absolute inset-0 rounded-sm bg-gradient-to-br from-[#dedede] to-[#3c3c3c] blur-xl opacity-0 sm:opacity-40"></div>

              <div className="relative inline-block w-full p-[1px] rounded-sm bg-gradient-to-br from-[#dedede] to-[#3c3c3c]">
                <a href="#contact">
                  <button className="w-full px-6 sm:px-8 py-3 rounded-sm bg-black text-white text-sm font-medium cursor-pointer hover:bg-black/95 active:bg-black/90">
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
            <div className="relative inline-block w-full sm:w-[50%] md:w-[12%]">
              <div className="w-full absolute inset-0 rounded-sm bg-gradient-to-br from-[#4079ff] to-[#40ffaa] blur-xl opacity-40 sm:opacity-40"></div>

              <div className="relative inline-block w-full p-[1px] rounded-sm bg-gradient-to-br from-[#4079ff] to-[#40ffaa]">
                <a href="https://github.com/Amiz001">
                  <button className="w-full px-6 sm:px-8 py-3 rounded-sm bg-black text-white text-sm font-medium cursor-pointer hover:bg-black/95  active:bg-black/90">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute hidden sm:block right-0 -bottom-2 w-[60%] sm:w-[50%] md:w-[42%] z-0 opacity-5"
          src="./images/LOGO.webp"
        />
        <img
          className="hidden md:block absolute right-0 bottom-0 w-[35%] z-10 brightness-80"
          src="./images/profile.webp"
        />
      </section>

      <section
        id="projects"
        className="reveal-section relative w-screen min-h-screen bg-black px-4 sm:px-8 md:px-16 py-6 overflow-hidden"
      >
        <div className="hidden sm:block absolute bottom-0 left-0 w-[60%] sm:w-[50%] md:w-[40%] h-[40%] bg-gradient-to-tl from-[#4079ff] to-[#40ffaa] blur-[150px] sm:blur-[200px] opacity-20"></div>
        <div className="hidden sm:block absolute top-0 right-0 w-[60%] sm:w-[50%] md:w-[40%] h-[40%] bg-gradient-to-tl from-[#4079ff] to-[#40ffaa] blur-[150px] sm:blur-[200px] opacity-20" />

        {/* Desktop Card Swap */}
        <div
          style={{ height: "600px" }}
          className="hidden md:block absolute bottom-35 right-30"
          onMouseEnter={() => {
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            setIsPaused(false);
          }}
        >
          <CardSwap
            cardDistance={50}
            verticalDistance={70}
            delay={4000}
            pauseOnHover={true}
          >
            {projects.map((project) => (
              <Card>
                <div className="flex flex-col justify-start gap-10 w-full h-95 rounded-xl overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tl from-[#4079ff] to-[#40ffaa] blur-[100px] opacity-30"></div>
                  <img src={project.image} className="w-auto" />
                  <div className="flex gap-10">
                    <div className="flex flex-col justify-center px-10 py-auto">
                      <h1 className="flex justify-start text-2xl font-bold">
                        {project.name}
                      </h1>
                      <p className="text-md text-gray-200">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <a
                        href={project.githubLink}
                        className="flex justify-center items-center py-1 px-4 border-2 rounded-xl border-[#fff] bg-transparent hover:bg-white/10"
                      >
                        <button>
                          <FaGithub size={20} />
                        </button>
                      </a>
                      <a
                        href={project.demoLink}
                        className={`flex justify-center items-center py-1 px-4 border-2 rounded-xl ${"bg-" +
                          project.color +
                          " hover:bg-" +
                          project.color +
                          "/90"
                          }`}
                      >
                        <button>
                          <FaExternalLinkAlt size={20} />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>

        {/* Mobile Project Cards */}
        <div className="md:hidden flex flex-col items-center gap-6 -mt-10">
          <h1 className="text-lg font-normal flex justify-center gap-2 py-3 border-b-1 border-[#ffffff5d] w-[80%] opacity-80 sm:hidden">
            Recent
            <span className="font-bold">Work</span>
          </h1>

          {projects.map((project) => (
            <div className="relative flex flex-col justify-start w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#4079ff30] to-[#40ffaa30] backdrop-blur-sm p-[1px]">
              <div className="relative flex flex-col justify-start gap-4 w-full rounded-xl overflow-hidden bg-black/95 backdrop-blur-sm p-4">
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tl from-[#4079ff] to-[#40ffaa] blur-[80px] opacity-20"></div>
                <img src={project.image} className="w-full rounded-lg" />
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold">{project.name}</h1>
                    <p className="text-sm text-gray-300">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      className="flex justify-center items-center py-2 px-4 border-2 rounded-xl border-[#fff] bg-transparent hover:bg-white/10 flex-1"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={project.demoLink}
                      className={`flex justify-center items-center py-2 px-4 border-2 rounded-xl ${"bg-" +
                        project.color +
                        " hover:bg-" +
                        project.color +
                        "/90"
                        } flex-1`}
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden h-full md:flex sm:flex-col items-start justify-start gap-6 md:gap-10 mt-20 md:mt-20">
          <h1 className="text-lg md:text-xl font-normal flex justify-center gap-2 py-3 border-b-1 border-[#ffffff5d] w-auto md:w-[10%] opacity-80">
            Recent
            <span className="font-bold">Work</span>
          </h1>

          <div className="w-full">
            <div className="w-full max-w-xl flex flex-col justify-center gap-3 text-left">
              <h2
                style={{ fontFamily: "Poppins" }}
                className={`text-5xl font-bold transition-all duration-700 ${animate
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-0 blur-sm translate-y-3"
                  }`}
              >
                {current.name}
              </h2>

              <p
                className={`mt-4 text-gray-300 transition-all duration-700 delay-150 ${animate
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-0 blur-sm translate-y-3"
                  }`}
              >
                {current.description}
              </p>

              <div className="flex flex-col gap-5 mt-10">
                <p className={`font-bold ? "fade-in" : ""}`}>Main Stack</p>
                <div className="w-full flex flex-wrap gap-5">
                  {current.Stack.map((s, i) => {
                    return (
                      <div
                        className={`${animate ? "fade-in" : ""}`}
                        style={{ animationDuration: `${i * 0.5}s` }}
                      >
                        {getIcon(s)}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="reveal-section relative w-full h-screen sm:px-32 py-16 sm:mb-0 bg-black flex justify-center items-center "
      >
        <Contact />
      </section>

      <section
        id=""
        className="w-full min-h-[50vh] md:h-130 mt-4 sm:mt-20 md:mt-40 px-4 sm:px-8 md:px-32 py-8 md:py-16 bg-black flex justify-center items-center overflow-hidden"
      >
        <div className="reveal-section relative w-full h-full bg-black/50 rounded-2xl md:rounded-4xl border border-white/10 overflow-hidden p-8 md:p-0">
          <div className="horizontal-light-bar"></div>
          <div className="vertical-light-bar"></div>
          <div className="absolute right-0 w-20 h-20 md:w-30 md:h-30 bg-gradient-to-br rounded-4xl from-[#4079ff] to-[#40ffaa] blur-[100px] md:blur-[150px]"></div>
          <div className="absolute left-0 bottom-0 w-20 h-20 md:w-30 md:h-30 bg-gradient-to-br rounded-4xl from-[#4079ff] to-[#40ffaa] blur-[100px] md:blur-[150px]"></div>
          <div className="relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col justify-center items-center gap-8 md:gap-12 h-full">
            <h1 className="w-full md:w-100 text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4">
              <span className="bg-gradient-to-br from-[#4079ff] to-[#40ffaa] text-transparent bg-clip-text">
                Let's make
              </span>{" "}
              your next big idea
              <span className="bg-gradient-to-br from-[#4079ff] to-[#40ffaa] text-transparent bg-clip-text">
                {" "}
                Real
              </span>
            </h1>
            <a href="#contact">
              <button className="w-auto px-8 md:px-6 py-3 md:py-2 text-white border-2 font-medium border-white rounded-2xl md:rounded-4xl hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </section>

      <footer className="reveal-section w-full bg-black border-t border-white/10 px-4 sm:px-8 md:px-16 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col gap-4">
              <img src="/images/LOGO.png" alt="Logo" className="w-10" />
              <p className="text-sm text-gray-400 max-w-xs">
                Building modern web experiences with passion and precision.
              </p>
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-sm">Quick Links</h3>
              <nav
                className="flex flex-col gap-2"
                aria-label="Footer navigation"
              >
                <a
                  href="#home"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="#projects"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-sm">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Amiz001"
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                  aria-label="GitHub profile"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/amila-dev/"
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/amila_shan__/"
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                  aria-label="Instagram profile"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="mailto:lgmalshan@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                  aria-label="Email contact"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Amila. v1.0. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
