import { useState } from "react";
import { MdOutlineLightMode, MdEmail, MdLocationOn } from "react-icons/md";
import { PiHandWavingFill } from "react-icons/pi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineSegment } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Popup = ({ index, image, length, status }) => {
  return (
    <div
      style={{ top: index * 110, left: length * 32 }}
      className={`absolute z-20 border-4 border-[#adff2f] w-[300px] h-[200px] overflow-hidden shadow-lg shadow-black ${
        status ? "visible" : "hidden"
      }`}
    >
      <img
        src={image}
        className="w-full h-full object-cover"
        alt="Project preview"
      />
    </div>
  );
};

const SkillCard = ({ category, skills }) => {
  return (
    <div className="border border-[#adff2f]/30 bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:border-[#adff2f] transition-all duration-300 hover:shadow-lg hover:shadow-[#adff2f]/20">
      <h3 className="text-2xl font-bold text-[#adff2f] mb-6">{category}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-[#adff2f]/10 border border-[#adff2f]/50 rounded-full text-gray-200 text-sm hover:bg-[#adff2f]/20 transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const VolunteerCard = ({ organization, role, period, description }) => {
  return (
    <div className="border-l-4 border-[#adff2f] pl-8 py-6 hover:bg-white/5 transition-all duration-300 rounded-r-lg">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-2xl font-bold text-white">{organization}</h3>
        <span className="text-[#adff2f] text-sm font-semibold">{period}</span>
      </div>
      <p className="text-xl text-[#adff2f]/80 mb-3">{role}</p>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

const Hero = () => {
  const [index, setIndex] = useState("");
  const [image, setImage] = useState("");
  const [length, setLength] = useState("");
  const [status, setStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sidebarStatus, setSidebarStatus] = useState(false);
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

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "HTML/CSS",
        "Next.js",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "Firebase", "CI/CD"],
    },
  ];

  const volunteerExperiences = [
    {
      organization: "Tech for Good Initiative",
      role: "Full Stack Developer",
      period: "2023 - Present",
      description:
        "Building accessible web applications for non-profit organizations, helping them reach wider audiences and manage their operations more efficiently.",
    },
    {
      organization: "Code Academy Mentor",
      role: "Programming Mentor",
      period: "2022 - 2023",
      description:
        "Mentored aspiring developers in web development fundamentals, helping over 50 students launch their careers in tech through one-on-one guidance.",
    },
    {
      organization: "Open Source Contributor",
      role: "Community Developer",
      period: "2021 - Present",
      description:
        "Active contributor to various open-source projects, focusing on improving documentation and building features that enhance developer experience.",
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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert("Message sent! (This is a demo)");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen sm:h-screen w-full bg-black p-10 sm:px-16 py-6 overflow-hidden">
        <nav className="w-full flex justify-center">
          <div className="sm:flex items-center gap-16 bg-blue-500/5 border border-white/10 backdrop-blur-md rounded-3xl px-6 py-2 hidden">
            <img src="/images/LOGO.png" alt="Logo" className="w-8" />
            <ul className="flex gap-8 text-sm text-gray-200">
              <li className="hover:text-white cursor-pointer">Projects</li>
              <li className="hover:text-white cursor-pointer">Skills</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
            <button className="p-2 rounded-full text-[#adff2f] hover:bg-white/10 transition">
              <MdOutlineLightMode size={20} />
            </button>
          </div>
        </nav>

        <div className="w-full flex justify-between sm:hidden items-center">
          <img src="/images/LOGO.png" alt="Logo" className="w-11" />
          <p
            className="text-3xl"
            onClick={() => {
              setSidebarStatus(true);
            }}
          >
            <MdOutlineSegment />
          </p>

          {sidebarStatus && (<div className="absolute top-0 left-0 w-full h-screen px-10 py-8 bg-white">
            <p
              className="absolute right-10 text-black text-3xl"
              onClick={() => {
                setSidebarStatus(false);
              }}
            >
              <IoMdClose />
            </p>
            <ul className="flex flex-col gap-6 text-3xl text-black">
              <li className="border-b-2 pb-3 border-black/20 cursor-pointer">
                Projects
              </li>
              <li className=" border-b-2 pb-3 border-black/20 cursor-pointer">
                Skills
              </li>
              <li className=" border-b-2 pb-3 border-black/20 cursor-pointer">
                About
              </li>
              <li className=" cursor-pointer">Contact</li>
            </ul>
          </div>)}
        </div>
        <div className="mt-20 flex flex-col gap-8">
          <h1 className="text-6xl sm:text-8xl font-bold uppercase leading-tight">
            <span className="flex items-center gap-2 text-base text-gray-300 font-light tracking-tight">
              <PiHandWavingFill size={26} /> Hey I'm Amila,
            </span>
            <span className="text-[#adff2f]">Creative</span>
            <span className="block text-gray-200 tracking-wide">Developer</span>
          </h1>
          <p className="text-md sm:text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Crafting modern, interactive web experiences.
          </p>
          <button className="w-fit bg-transparent border-2 hover:bg-transparent hover:border-2 border-[#adff2f] text-[#adff2f] px-8 py-3 sm:text-lg text-md rounded-3xl transition-all hover:shadow-sm hover:shadow-[#adff2f]">
            About me
          </button>
        </div>
        <div
          style={{ height: "600px" }}
          className="absolute bottom-0 right-0 sm:block hidden"
        >
          <div className="relative" style={{ width: "400px", height: "600px" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full p-2 bg-[#adff2f] transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/images/image1.jpg"
                  alt="Project showcase"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative h-screen w-full bg-white text-black px-16 overflow-hidden flex flex-col justify-center gap-8">
        <h2 className="text-6xl font-bold text-black mb-4">
              Latest <span className="text-[#adff2f]">Work</span>
            </h2>
        <ul className="text-2xl sm:text-5xl text-black">
          {projects.map((project) => (
            <li
              key={project.index}
              className="border-y-1 border-[#adff2f] py-4 px-10 hover:bg-[#adff2f] cursor-pointer transition-all"
              onMouseOver={() =>
                showPopup(
                  project.index,
                  project.image,
                  (project.name + project.description).length
                )
              }
              onMouseLeave={closePopup}
            >
              {project.name}{" "}
              <span className="opacity-55">{project.description}</span>
            </li>
          ))}
          <li className="text-xl text-[#878787] font-bold py-4 px-10 cursor-pointer hover:text-black">
            View All
          </li>
        </ul>
        <Popup index={index} image={image} length={length} status={status} />
      </section>

      {/* Skills Section */}
      <section className="relative min-h-screen w-full bg-black px-16 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl font-bold text-white mb-4">
              My <span className="text-[#adff2f]">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                category={category.category}
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering Section
      <section className="relative min-h-screen w-full bg-white px-16 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl font-bold text-black mb-4">
              Giving <span className="text-[#adff2f]">Back</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Community involvement and volunteer work that makes a difference
            </p>
          </div>
          <div className="space-y-8">
            {volunteerExperiences.map((experience, index) => (
              <VolunteerCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section> */}

      {/* About Me Section */}
      <section className="relative min-h-screen w-full bg-black px-16 py-24 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl font-bold text-white mb-8">
              About <span className="text-[#adff2f]">Me</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer with a love for creating
                beautiful, functional web experiences. With several years of
                experience in the industry, I've worked on everything from small
                business websites to large-scale enterprise applications.
              </p>
              <p>
                My approach to development is centered around clean code, user
                experience, and continuous learning. I believe that the best
                solutions come from understanding both the technical
                requirements and the human needs behind every project.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source
                projects, mentoring aspiring developers, or exploring new
                technologies that push the boundaries of what's possible on the
                web.
              </p>
            </div>
            <div className="flex gap-6 mt-8">
              <a
                href="#"
                className="p-3 border-2 border-[#adff2f] text-[#adff2f] rounded-full hover:bg-[#adff2f] hover:text-black transition-all"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="#"
                className="p-3 border-2 border-[#adff2f] text-[#adff2f] rounded-full hover:bg-[#adff2f] hover:text-black transition-all"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="p-3 border-2 border-[#adff2f] text-[#adff2f] rounded-full hover:bg-[#adff2f] hover:text-black transition-all"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-square border-4 border-[#adff2f] rounded-2xl overflow-hidden shadow-2xl shadow-[#adff2f]/20">
              <div className="w-full h-full bg-gradient-to-br from-[#adff2f]/20 to-transparent flex items-center justify-center">
                <img
                  src="./images/fiverr.png"
                  class="grayscale-100 opacity-80"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative min-h-screen w-full bg-white px-16 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-6xl font-bold text-black mb-4">
              Let's <span className="text-[#adff2f]">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from
              you
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-[#adff2f] focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-[#adff2f] focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-[#adff2f] focus:outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-[#adff2f] text-black font-bold px-8 py-4 text-lg rounded-xl hover:shadow-lg hover:shadow-[#adff2f]/50 transition-all"
              >
                Send Message
              </button>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-[#adff2f] pl-8 py-4">
                <div className="flex items-center gap-4 mb-2">
                  <MdEmail className="text-[#adff2f]" size={28} />
                  <h3 className="text-2xl font-bold text-black">Email</h3>
                </div>
                <p className="text-gray-600 text-lg">amila.dev@example.com</p>
              </div>
              <div className="border-l-4 border-[#adff2f] pl-8 py-4">
                <div className="flex items-center gap-4 mb-2">
                  <MdLocationOn className="text-[#adff2f]" size={28} />
                  <h3 className="text-2xl font-bold text-black">Location</h3>
                </div>
                <p className="text-gray-600 text-lg">Colombo, Sri Lanka</p>
              </div>
              <div className="border-l-4 border-[#adff2f] pl-8 py-4">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Social Media
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 border-2 border-[#adff2f] text-[#adff2f] rounded-full hover:bg-[#adff2f] hover:text-white transition-all"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="#"
                    className="p-3 border-2 border-[#adff2f] text-[#adff2f] rounded-full hover:bg-[#adff2f] hover:text-white transition-all"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="p-3 border-2 border-[#adff2f] text-[#adff2f] rounded-full hover:bg-[#adff2f] hover:text-white transition-all"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 px-16 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>© 2026 Amila. All rights reserved.</p>
          <p className="text-[#adff2f]">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
};

export default Hero;
