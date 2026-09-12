/* eslint-disable react-refresh/only-export-components */
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
  SiOpenai,
  SiFigma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const techIconMap = {
  html: { node: <SiHtml5 size={20} />, title: "html" },
  css: { node: <SiCss3 size={20} />, title: "css" },
  javascript: { node: <SiJavascript size={20} />, title: "javascript" },
  react: { node: <SiReact size={20} />, title: "react" },
  "tailwind css": { node: <SiTailwindcss size={20} />, title: "tailwind css" },
  "express js": { node: <SiExpress size={20} />, title: "express js" },
  "node js": { node: <SiNodedotjs size={20} />, title: "node js" },
  mongo: { node: <SiMongodb size={20} />, title: "mongo" },
  mysql: { node: <SiMysql size={20} />, title: "mysql" },
  java: { node: <FaJava size={20} />, title: "java" },
  "java servlets": { node: <FaJava size={20} />, title: "java servlets" },
  php: { node: <SiPhp size={20} />, title: "php" },
  "open ai": { node: <SiOpenai size={20} />, title: "open ai" },
  git: { node: <SiGit size={20} />, title: "git" },
  figma: { node: <SiFigma size={20} />, title: "figma" },
};

const marqueeIconMap = {
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  Express: <SiExpress />,
  "Node.js": <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  MySQL: <SiMysql />,
};

export function TechBadge({ name, variant = "dark" }) {
  const tech = techIconMap[name];
  if (!tech) return null;

  const bg =
    variant === "light"
      ? "bg-black/5 border-black/10 text-black"
      : "bg-white/5 border-white/20 text-white";

  return (
    <div
      className={`flex justify-center gap-2 items-center backdrop-blur-lg font-bold w-auto h-8 px-2 rounded-sm border text-sm ${bg}`}
    >
      {tech.node} {tech.title}
    </div>
  );
}

export function getMarqueeLogos(items) {
  return items.map((item) => ({
    node: marqueeIconMap[item.title] || <SiReact />,
    title: item.title,
    href: item.href,
  }));
}
