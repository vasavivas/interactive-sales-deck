// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

  const sections = [
    "hero",
    "why",
    "retail",
    "luxury",
    "dining",
    "entertainment",
    "events",
  ];
// inside Navbar.tsx


    const [active, setActive] = useState("");

    useEffect(() => {
    const handler = () => {
        const sections = document.querySelectorAll("section");
        sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < 200 && rect.bottom > 200) {
            setActive(sec.id);
        }
        });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
    }, []);
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center gap-6 p-4 bg-black/40 backdrop-blur">
      {sections.map((s) => (
        <button
          key={s}
          onClick={() => scrollTo(s)}
          className={`text-xs uppercase tracking-widest transition-all ${
            active === s ? "text-white scale-110" : "text-gray-400"
            }`}
        >
          {s}
        </button>
      ))}
    </div>
  );
}