import React, {useState} from 'react'
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
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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

  return (
    <>
      <section className="relative h-screen w-full bg--black  px-16 py-6 overflow-hidden">
        <nav className="w-full flex justify-center">
          <div className="flex items-center gap-16 bg-blue-500/5 border border-white/10 backdrop-blur-md rounded-3xl px-6 py-2">
            <img src="/images/LOGO.png" alt="Logo" className="w-8" />

            <ul className="flex gap-8 text-sm text-gray-200">
              <li className="hover:text-white cursor-pointer">Projects</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>

            <button className="p-2 rounded-full text-blue-400 hover:bg-white/10 transition">
              <MdOutlineLightMode size={20} />
            </button>
          </div>
        </nav>
        <div className="mt-20 flex flex-col gap-8">
          <h1 className="text-7xl font-black leading-tight">
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
                <button class="w-full px-8 py-3 rounded-sm bg-black text-white text-sm font-medium">
                  Contact Me
                </button>
              </div>
            </div>
            <div class="relative inline-block w-[12%]">
              <div class=" w-full absolute inset-0 rounded-sm bg-gradient-to-br from-[#4079ff] to-[#40ffaa] blur-xl opacity-40"></div>

              <div class="relative inline-block w-full p-[1px] rounded-sm bg-gradient-to-br from-[#4079ff] to-[#40ffaa]">
                <button class="w-full px-8 py-3 rounded-sm bg-black text-white text-sm font-medium">
                  Github
                </button>
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
      <section className="relative w-screen h-screen bg-black px-16 py-6 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tl from-[#4079ff] to-[#40ffaa] blur-[200px]"></div>
        <div
          style={{ height: "600px" }}
          className="absolute bottom-35 right-30"
          onMouseEnter={() => {setIsPaused(true)}}
          onMouseLeave={() => {setIsPaused(false)}}
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
                    <a className=" flex justify-center items-center py-1 px-4 border-2 rounded-xl border-[#fff]">
                      <button>
                        <FaGithub size={20} />
                      </button>
                    </a>
                    <a className=" flex justify-center items-center py-1 px-4 border-2 rounded-xl bg-yellow-500">
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
                    <a className=" flex justify-center items-center px-3 border-2 rounded-xl border-[#fff]">
                      <button>
                        <FaGithub size={20} />
                      </button>
                    </a>
                    <a className=" flex justify-center items-center  px-3 border-2 rounded-xl bg-purple-500">
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
                    <a className=" flex justify-center items-center py-1 px-4 border-2 rounded-xl border-[#fff]">
                      <button>
                        <FaGithub size={20} />
                      </button>
                    </a>
                    <a className=" flex justify-center items-center py-1 px-4 border-2 rounded-xl bg-indigo-500">
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
    </>
  );
};

export default Hero;
