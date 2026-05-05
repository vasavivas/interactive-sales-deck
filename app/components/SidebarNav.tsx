// components/SidebarNav.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "The Destination" },
  { id: "why", label: "Why Us" },
  { id: "retail", label: "Retail Ecosystem" },
  { id: "luxury", label: "Fashion Avenue" },
  { id: "dining", label: "Dining & Lifestyle" },
  { id: 'events-intro', label: 'Events Overview' },
  { id: "opportunities", label: "Opportunities" },
  { id: "cta", label: "Connect" },
];

export default function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Scroll Tracking
  useEffect(() => {
    const container = document.getElementById("deck-container");
    const handleScroll = () => {
      if (!container) return;
      sections.forEach((s) => {
        const sec = document.getElementById(s.id);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top >= -window.innerHeight / 2 && rect.top <= window.innerHeight / 2) {
            setActive(s.id);
          }
        }
      });
    };
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Button - Fixed Top Left like Boston Example */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 left-8 z-[200] p-3 bg-black/20 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all shadow-xl"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-xl flex flex-col justify-center p-20"
          >
            <div className="flex flex-col gap-6">
              {sections.map((s, index) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollTo(s.id)}
                  className={`text-2xl md:text-4xl font-extralight cursor-pointer tracking-tighter hover:pl-4 transition-all duration-300 ${
                    active === s.id ? "text-yellow-400" : "text-white/40 hover:text-white"
                  }`}
                >
                  {s.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Simple Active Dot - Just to show progress visually without text */}
      {!isOpen && (
        <div className="fixed left-10 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4">
          {sections.map((s) => (
            <div 
              key={s.id}
              className={`w-1 h-1 rounded-full transition-all duration-500 ${
                active === s.id ? "bg-white scale-[2.5] shadow-[0_0_8px_white]" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}