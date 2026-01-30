  import React, { useState } from "react";
  import CircularText from "../components/CircularText";
  import CardSwap, { Card } from "../components/CardSwap";
  import FloatingLines from "../components/FloatingLines";
  import Plasma from "../components//Plasma";
  import DarkVeil from "../components/DarkVeil";
  import LightPillar from "../components/LightPiller";
  import GradientText from "../components/GradientText";

  import { MdOutlineLightMode } from "react-icons/md";
  import { PiHandWavingFill } from "react-icons/pi";
  import LogoLoop from "../components/LogoLoop";
  import ProjectShowcase from "../components/ProjectShowcase";

  import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
  } from "react-icons/si";
  import {
    FaGithub,
    FaExternalLinkAlt,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaEnvelope,
  } from "react-icons/fa";

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  const Hero = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [active, setActive] = useState("hero");

    return (
      <div>
        <section
          id="hero"
          className="relative h-screen w-full bg--black  px-16 py-6"
        >
          <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-100 w-full flex justify-center">
            <div className="flex items-center gap-12 bg-gradient-to-br from-white/5 to-black border border-white/20 backdrop-blur-lg rounded-3xl px-6 py-4 overflow-hidden">
              <img src="/images/LOGO.png" alt="Logo" className="w-8" />

              <ul className="relative flex gap-8 text-sm text-gray-200 px-4">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-[#4079ff] to-[#40ffaa] rounded-full"></div>
                <a
                  href="#hero"
                  onClick={() => {
                    setActive("hero");
                  }}
                >
                  <li
                    className={
                      active == "hero"
                        ? "hover:text-white cursor-pointer font-bold"
                        : "hover:text-white/80 cursor-pointer"
                    }
                  >
                    Home
                  </li>
                </a>
                <a
                  href="#projects"
                  onClick={() => {
                    setActive("projects");
                  }}
                >
                  <li
                    className={
                      active == "projects"
                        ? "hover:text-white cursor-pointer font-bold"
                        : "hover:text-white/80 cursor-pointer"
                    }
                  >
                    Projects
                  </li>
                </a>
                <a
                  href="#contact"
                  onClick={() => {
                    setActive("contact");
                  }}
                >
                  <li
                    className={
                      active == "contact"
                        ? "hover:text-white cursor-pointer font-bold"
                        : "hover:text-white/80 cursor-pointer"
                    }
                  >
                    Contact
                  </li>
                </a>
              </ul>
            </div>
          </nav>
          <div className="mt-20 flex flex-col gap-8">
            <h1
              style={{ fontFamily: "Poppins" }}
              className="text-7xl font-black leading-tight"
            >
              <span className="flex items-center gap-2 text-base text-gray-300 font-light tracking-tight">
                <PiHandWavingFill size={26} /> Hey I’m Amila,
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

            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Crafting modern, interactive web experiences.
            </p>

            <div className="w-[45%]">
              <div
                style={{
                  height: "200px",
                  position: "relative",
                  overflow: "hidden",
                }}
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

            <div className="flex gap-10 -mt-28">
              <div class="relative inline-block w-[12%]">
                <div class=" w-full absolute inset-0 rounded-sm bg-gradient-to-br from-[#dedede] to-[#3c3c3c] blur-xl opacity-40"></div>

                <div class="relative inline-block w-full p-[1px] rounded-sm bg-gradient-to-br from-[#dedede] to-[#3c3c3c]">
                  <a href="#contact">
                    <button class="w-full px-8 py-3 rounded-sm bg-black text-white text-sm font-medium">
                      Contact Me
                    </button>
                  </a>
                </div>
              </div>
              <div class="relative inline-block w-[12%]">
                <div class=" w-full absolute inset-0 rounded-sm bg-gradient-to-br from-[#4079ff] to-[#40ffaa] blur-xl opacity-40"></div>

                <div class="relative inline-block w-full p-[1px] rounded-sm bg-gradient-to-br from-[#4079ff] to-[#40ffaa]">
                  <a href="https://github.com/Amiz001">
                    <button class="w-full px-8 py-3 rounded-sm bg-black text-white text-sm font-medium">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute right-0 -bottom-2 w-[42%] z-0 opacity-5"
            src="./images/LOGO.png"
          />
          <img
            className="absolute right-0 bottom-0 w-[35%] z-10 brightness-80"
            src="./images/fiverr.png"
          />
        </section>
        <section
          id="projects"
          className="relative w-screen h-screen bg-black px-16 py-6 overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tl from-[#4079ff] to-[#40ffaa] blur-[200px] opacity-80"></div>
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-tl from-[#4079ff] to-[#40ffaa] blur-[150px] sm:blur-[200px] opacity-20" />
          <div
            style={{ height: "600px" }}
            className="absolute bottom-35 right-30"
            onMouseEnter={() => {
              setIsPaused(true);
            }}
            onMouseLeave={() => {
              setIsPaused(false);
            }}
          >
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
            >
              <Card>
                <div className=" flex flex-col justify-start gap-10 w-full h-95 rounded-xl overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tl from-[#4079ff] to-[#40ffaa] blur-[100px] opacity-30"></div>
                  <img src="./images/autohire.png" className="w-auto" />
                  <div className="flex gap-10">
                    <div className="flex flex-col justify-center px-10 py-auto">
                      <h1 className="flex justify-start text-2xl font-bold">
                        AutoHire
                      </h1>
                      <p className="text-md text-gray-200">
                        Vehicle Rental System
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <a
                        href="https://github.com/Amiz001/Vehicle-Rental-System"
                        className="flex justify-center items-center py-1 px-4 border-2 rounded-xl border-[#fff] bg-transparent hover:bg-white/10"
                      >
                        <button>
                          <FaGithub size={20} />
                        </button>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/amila-dev/details/projects/"
                        className=" flex justify-center items-center py-1 px-4 border-2 rounded-xl bg-yellow-500 hover:bg-yellow-500/90"
                      >
                        <button>
                          <FaExternalLinkAlt size={20} />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
              <Card>
                <div className=" flex flex-col justify-start gap-7 w-full h-95 rounded-xl overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tl from-[#4079ff] to-[#40ffaa] blur-[100px] opacity-30"></div>
                  <img src="./images/corehr.png" className="w-auto" />
                  <div className="flex gap-10">
                    <div className="flex flex-col justify-center px-10 py-auto">
                      <h1 className="flex justify-start text-2xl font-bold">
                        CoreHr
                      </h1>
                      <p className="text-md text-md text-gray-200">
                        Employee Management System
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/Amiz001/Employee-Management-System"
                        className=" flex justify-center items-center px-3 border-2 rounded-xl bg-transparent border-[#fff] hover:bg-white/10"
                      >
                        <button>
                          <FaGithub size={20} />
                        </button>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/amila-dev/details/projects/"
                        className=" flex justify-center items-center  px-3 border-2 rounded-xl bg-purple-500 hover:bg-purple-500/90"
                      >
                        <button>
                          <FaExternalLinkAlt size={20} />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
              <Card>
                <div className=" flex flex-col justify-start gap-10 w-full h-95 rounded-xl overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tl from-[#4079ff] to-[#40ffaa] blur-[100px] opacity-30"></div>
                  <img src="./images/parkbay.png" className="w-auto" />
                  <div className="flex gap-10">
                    <div className="flex flex-col justify-center px-10 py-auto">
                      <h1 className="flex justify-start text-2xl font-bold">
                        ParkBay
                      </h1>
                      <p className="text-md text-gray-200">
                        Parking Management System
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <a
                        href="https://github.com/Amiz001/parking-management-system"
                        className=" flex justify-center items-center py-1 px-4 border-2 rounded-xl bg-transparent border-[#fff] hover:bg-white/10"
                      >
                        <button>
                          <FaGithub size={20} />
                        </button>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/amila-dev/details/projects/"
                        className=" flex justify-center items-center py-1 px-4 border-2 rounded-xl bg-indigo-500 hover:bg-indigo-500/90"
                      >
                        <button>
                          <FaExternalLinkAlt size={20} />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>

          <div className="h-full flex flex-col items-start justify-start gap-10 mt-40">
            <h1 className="text-xl font-normal flex justify-center gap-2 py-3 border-b-1 border-[#ffffff5d] w-[10%] opacity-80">
              Recent
              <span className="font-bold">Work</span>
            </h1>

            <div>
              <ProjectShowcase paused={isPaused} />
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full h-130 px-32 py-16 bg-black flex justify-center items-center "
        >
          <div className="relative w-full h-full bg-black/50 rounded-4xl border-1 border-white/10 overflow-hidden">
            <div className="absolute right-0 w-30 h-30 bg-gradient-to-br rounded-4xl from-[#4079ff] to-[#40ffaa] blur-[150px]"></div>
            <div className="absolute left-0 bottom-0 w-30 h-30 bg-gradient-to-br rounded-4xl from-[#4079ff] to-[#40ffaa] blur-[150px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-12">
              <h1 className="w-100 text-4xl font-bold text-center">
                <span className="bg-gradient-to-br from-[#4079ff] to-[#40ffaa] text-transparent bg-clip-text">
                  {" "}
                  Let's make
                </span>{" "}
                your next big idea
                <span className="bg-gradient-to-br from-[#4079ff] to-[#40ffaa] text-transparent bg-clip-text">
                  {" "}
                  Real
                </span>
              </h1>
              <a href="https://www.linkedin.com/in/amila-dev/">
                <button className="w-40 px-6 py-2 text-white border-2 font-medium border-white rounded-4xl hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                  Contact Me
                </button>
              </a>
            </div>
          </div>
        </section>
        <footer className="w-full bg-black border-t border-white/10 px-4 sm:px-8 md:px-16 py-8 sm:py-12">
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
                    href="#projects"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="#about"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    About
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
                    aria-label="Twitter profile"
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
