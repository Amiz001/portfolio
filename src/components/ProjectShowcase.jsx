import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "CoreHR",
    description:
      "CoreHR is a web-based employee management system designed to simplify and modernize the way organizations handle employee-related tasks and workflows.",
  },
  {
    name: "ParkBay",
    description:
      "ParkBay is an Smart Parking Management System using the MERN stack to make parking, membership, and payments simple and seamless for users and admins. This was our Second Year Second Semester academic project, where we combined design, backend logic, and user management into a full-featured solution.",
  },
  {
    name: "AutoHire",
    description:
      "AutoHire is a web-based platform that allows users to search and rent vehicles easily while admins manage users and listings. I developed the homepage, vehicle search page, and admin user management.",
  },
];

const ProjectShowcase = ({ paused = false }) => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (paused) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setAnimate(false); // start fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % projects.length); // next project
        setAnimate(true); // fade in
      }, 300);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const current = projects[index];

  return (
    <div className="w-full max-w-xl flex flex-col justify-center gap-3 text-left">
      <h2
        className={`text-5xl font-bold transition-all duration-700 ${
          animate
            ? "opacity-100 blur-0 translate-y-0"
            : "opacity-0 blur-sm translate-y-3"
        }`}
      >
        {current.name}
      </h2>

      <p
        className={`mt-4 text-gray-300 transition-all duration-700 delay-150 ${
          animate
            ? "opacity-100 blur-0 translate-y-0"
            : "opacity-0 blur-sm translate-y-3"
        }`}
      >
        {current.description}
      </p>
    </div>
  );
};

export default ProjectShowcase;
