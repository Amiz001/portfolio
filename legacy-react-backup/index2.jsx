import { useState } from "react";
import CircularText from "../components/CircularText";
import CardSwap, { Card } from "../components/CardSwap";
import FloatingLines from "../components/FloatingLines";
import Plasma from "../components//Plasma";
import DarkVeil from "../components/DarkVeil";
import LightPillar from "../components/LightPiller";
import GradientText from "../components/GradientText";
import CurvedLoop from "../components/CurvedLoop";
import MagicBento from "../components/MagicBento";

import { MdOutlineLightMode } from "react-icons/md";
import { PiHandWavingFill } from "react-icons/pi";

const Popup = ({ index, image, length, status }) => {
  return (
    <div
      style={{ top: index * 110, left: length * 32 }}
      className={`absolute z-20  border-4 border-[#adff2f] w-[300px] h-[200px] overflow-hidden shadow-lg shadow-black ${
        status ? "visible" : "hidden"
      }`}
    >
      <img src={image} className="w-full"></img>
    </div>
  );
};
const Hero = () => {
  const [index, setIndex] = useState("");
  const [image, setImage] = useState("");
  const [length, setLength] = useState("");
  const [status, setStatus] = useState(false);

  const projects = [
    {
      index: 1,
      name: "AutoHire - ",
      description: "Vehicle Rental System",
      image: "./images/image1.jpg",
    },
    {
      index: 2,
      name: "CoreHR - ",
      description: "Employee Management System",
      image: "./images/image1.jpg",
    },
    {
      index: 3,
      name: "ParkBay - ",
      description: "Parking Management System",
      image: "./images/image1.jpg",
    },
    {
      index: 4,
      name: "Nexubi - ",
      description: "Ai chatbot",
      image: "./images/image1.jpg",
    },
  ];

  const showPopup = (index, image, length) => {
    setIndex(index);
    setImage(image);
    setLength(length);
    setStatus(true);
  };

  const closePopup = () => {
    setIndex("");
    setImage("");
    setLength("");
    setStatus(false);
  };

  return (
    <>
      <section className="relative h-screen w-full bg-black px-16 py-6 overflow-hidden">
        <nav className="w-full flex justify-center">
          <div className="flex items-center gap-16 bg-blue-500/5 border border-white/10 backdrop-blur-md rounded-3xl px-6 py-2">
            <img src="/images/LOGO.png" alt="Logo" className="w-8" />

            <ul className="flex gap-8 text-sm text-gray-200">
              <li className="hover:text-white cursor-pointer">Projects</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>

            <button className="p-2 rounded-full text-[#adff2f] hover:bg-white/10 transition">
              <MdOutlineLightMode size={20} />
            </button>
          </div>
        </nav>
        <div className="mt-20 flex flex-col gap-8">
          <h1 className="text-8xl font-bold uppercase leading-tight">
            <span className="flex items-center gap-2 text-base text-gray-300 font-light tracking-tight">
              <PiHandWavingFill size={26} /> Hey I’m Amila,
            </span>

            <span className="text-[#adff2f]">Creative</span>

            <span className="block text-gray-200 tracking-wide">Developer</span>
          </h1>

          <p className="text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Crafting modern, interactive web experiences.
          </p>

          <button className="w-fit bg-transparent border-2 hover:bg-transparent hover:border-2 border-[#adff2f] text-[#adff2f] px-8 py-3 text-lg rounded-3xl transition-all hover:shadow-sm hover:shadow-[#adff2f]">
            About me
          </button>

          {/*
        <div className="flex items-center gap-6">
          <hr className="bottom-0 flex-1 border-white/20" />
          <CircularText text=" SCROLL DOWN SCROLL DOWN " spinDuration={20} />
        </div>
        */}
        </div>
        <div style={{ height: "600px" }} className="absolute bottom-0 right-0">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={true}
          >
            <Card>
              <div className="w-full p-2 bg-[#adff2f]">
                <img src="/images/image1.jpg" alt="Logo" className="w-full" />
              </div>
            </Card>
            <Card>
              <div className="w-full p-2 bg-[#adff2f]">
                <img src="/images/image2.png" alt="Logo" className="w-full" />
              </div>
            </Card>
            <Card>
              <div className="w-full p-2 bg-[#adff2f]">
                <img src="/images/image2.png" alt="Logo" className="w-full" />
              </div>
            </Card>
          </CardSwap>
        </div>
      </section>
      <section className="relative h-screen w-full bg-white text-black px-16 overflow-hidden flex flex-col justify-center gap-8">
        <h1 className="text-2xl">Latest projects</h1>
        <ul className="text-5xl text-black">
          {projects.map((project) => {
            return (
              <li
                className="border-y-1 border-[#adff2f] py-4 px-10 hover:bg-[#adff2f]"
                onMouseOver={() => {
                  showPopup(
                    project.index,
                    project.image,
                    (project.name + project.description).length
                  );
                }}
                onMouseLeave={() => {
                  closePopup();
                }}
              >
                {project.name}{" "}
                <span className="opacity-55">{project.description}</span>
              </li>
            );
          })}
          <li className="text-2xl text-[#878787] font-bold py-4 px-10">
            View All
          </li>
        </ul>

        <Popup index={index} image={image} length={length} status={status} />
      </section>
      <section className="relative h-screen w-full bg-black p-16 overflow-hidden flex flex-col justify-between items-center gap-8">
        <CurvedLoop
          marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
          speed={0.5}
          curveAmount={0}
          direction="right"
          interactive={true}
          className="custom-text-style"
        />
      </section>
    </>
  );
};

export default Hero;
