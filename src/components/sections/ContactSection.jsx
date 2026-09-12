import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { socialLinks, contactInfo } from "../../data/social";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_pwdh8dv",
        "template_sob2bd7",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "pyzGjxmIsbO4feH1M"
      )
      .then(() => {
        setStatus("Message sent.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Failed to send. Try again."));
  };

  const inputClass =
    "w-full px-4 py-3 bg-transparent border rounded-lg placeholder:opacity-40 focus:outline-none transition-colors";

  return (
    <section
      id="contact"
      data-surface="primary"
      className="surface-primary relative w-full px-4 sm:px-8 md:px-16 py-20 md:py-28"
    >
      <div className="relative max-w-7xl mx-auto">
        <p className="section-label mb-6">&lt;Contact&gt;</p>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <form
            onSubmit={handleSubmit}
            className="border rounded-2xl p-6 md:p-8 space-y-5"
            style={{ borderColor: "var(--primary-border)" }}
          >
            <div>
              <label htmlFor="name" className="block text-sm mb-2 opacity-60">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
                style={{ borderColor: "var(--primary-border)" }}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2 opacity-60">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
                style={{ borderColor: "var(--primary-border)" }}
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-2 opacity-60">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputClass} resize-none`}
                style={{ borderColor: "var(--primary-border)" }}
                placeholder="Brief message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-bold transition-opacity hover:opacity-80 cursor-pointer"
              style={{
                backgroundColor: "var(--primary-fg)",
                color: "var(--primary-bg)",
              }}
            >
              Send Message
            </button>
            {status && (
              <p className="text-center text-sm opacity-70">{status}</p>
            )}
          </form>

          <div className="flex flex-col justify-center gap-8">
            <div>
              <p className="text-sm opacity-60 mb-1">Email</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="font-display text-xl font-semibold hover:opacity-70 transition-opacity"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 border rounded-lg hover:opacity-70 transition-opacity text-sm"
                  style={{ borderColor: "var(--primary-border)" }}
                >
                  {social.label === "GitHub" && <FaGithub size={18} />}
                  {social.label === "LinkedIn" && <FaLinkedin size={18} />}
                  {social.label === "Instagram" && <FaInstagram size={18} />}
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
