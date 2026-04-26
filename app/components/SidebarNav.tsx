// components/SidebarNav.tsx
"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "The Destination" },
  { id: "why", label: "Why Us" },
  { id: "retail", label: "Retail Ecosystem" },
  { id: "luxury", label: "Fashion Avenue" },
  { id: "dining", label: "Dining & Lifestyle" },
  { id: "events", label: "Events & Platforms" },
  { id: "opportunities", label: "Opportunities" },
  { id: "contact", label: "Connect" },
];

export default function SidebarNav() {
  const [active, setActive] = useState("hero");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const allSections = document.querySelectorAll("section");

      allSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.4) {
          setActive(sec.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">

      {sections.map((s) => (
        <div key={s.id} className="group flex items-center gap-3 cursor-pointer">
          
          {/* DOT */}
          <div
            onClick={() => scrollTo(s.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                active === s.id ? "bg-black border border-gray-300 scale-125 shadow-lg" : "bg-gray-400"
                }`}
          />

          {/* LABEL (appears on hover) */}
          <span
          onClick={() => scrollTo(s.id)}
            className={`text-xs uppercase tracking-widest transition-all duration-300 border border-gray-300 bg-white py-1 px-2 ${
              active === s.id
                ? "text-black-300 opacity-100"
                : "text-black-300 opacity-0 group-hover:opacity-100 "
            }`}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}