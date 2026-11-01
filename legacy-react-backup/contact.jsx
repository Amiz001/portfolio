import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import GradientText from '../components/GradientText'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        (response) => {
          setAnimate(false);
          setTimeout(() => setAnimate(true), 10);

          setStatus("Message sent! I'll get back to you soon.");
          console.log("SUCCESS:", response.status, response.text);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Try again!");
          console.log("FAILED:", error);
        }
      );
  };

  const contactInfo = [
    {
      icon: <FaPhone size={20} />,
      label: "Phone",
      value: "071 375 0843",
      href: "tel:+94713750843",
    },
    {
      icon: <FaEnvelope size={20} />,
      label: "Email",
      value: "lgmalshan@gmail.com",
      href: "mailto:lgmalshan@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      label: "GitHub",
      href: "https://github.com/Amiz001",
      color: "hover:text-gray-300",
    },
    {
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/amila-dev/",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaInstagram size={24} />,
      label: "Instagram",
      href: "https://www.instagram.com/amila_shan__/",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <div className="h-screen w-full bg-black px-4 sm:px-8 md:px-16 lg:px-32 py-12 md:py-20">
      <div className="absolute top-20 left-0 w-[60%] sm:w-[40%] h-[40%] bg-gradient-to-br from-[#4079ff] to-[#40ffaa] blur-[150px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-[60%] sm:w-[40%] h-[40%] bg-gradient-to-tl from-[#4079ff] to-[#40ffaa] blur-[150px] opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 flex justify-center">
           
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={20}
                showBorder={false}
                className="custom-class"
              >
                Get In Touch
              </GradientText>

          </h1>
          <p className="text-gray-300 text-base sm:text-sm max-w-2xl mx-auto w-[70%]"></p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="relative bg-gradient-to-br from-white/5 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4079ff] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4079ff] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4079ff] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <a className="w-full flex justify-center">
                <button className="w-full px-8 md:px-6 py-3 md:py-2 text-black border-2 font-bold hover:border-white rounded-lg bg-white/90 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                  Send Message
                </button>
              </a>

              {status && (
                <p
                  className={`text-center text-sm text-green-400 mt-4 ${
                    animate ? "fade-out" : ""
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info & Social*/}
          <div className=" hidden lg:flex sm:flex-col justify-center space-y-6">
            <div className="relative bg-gradient-to-br from-white/5 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 sm:py-10">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Connect With Me
              </h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all text-gray-300`}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
