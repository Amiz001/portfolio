import React from "react";

export const CornerMark = ({ className = "text-black/35", size = 14 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute top-4 right-4 pointer-events-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M4 3H13V12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CornerMark;
