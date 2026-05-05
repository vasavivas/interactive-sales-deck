"use client";

import React from "react";
import { motion } from "framer-motion";

interface Experience {
  title: string;
  desc: string;
  img: string;
}

const items: Experience[] = [
  {
    title: "Fine Dining Experience",
    desc: "Michelin-inspired culinary storytelling in an intimate atmosphere.",
    img: "/Dining1.png"
  },
  {
    title: "Sky Lounge Nights",
    desc: "Elevated evenings with skyline views, music, and crafted cocktails.",
    img: "/Dining2.png"
  },
  {
    title: "Wellness Retreat",
    desc: "A sensory escape blending silence, spa, and natural harmony.",
    img: "/Dining3.png"
  }
];

export default function Dining() {
  return (
    <section id="dining" className="h-screen w-full relative bg-[#0b0b0f] text-white overflow-hidden flex flex-col justify-center px-8 md:px-16">

      {/* SOFT DIFFUSED LIGHT - Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[20%] w-[750px] h-[750px] bg-orange-400/10 blur-[220px] rounded-full" />
        <div className="absolute bottom-[-250px] right-[10%] w-[650px] h-[650px] bg-orange-300/5 blur-[240px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light">
            Dining <span className="text-orange-200">& Lifestyle</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            A fluid journey of taste, atmosphere, and sensory experience.
          </p>
        </motion.div>

        {/* 3-Column Grid Layout for Deck view */}
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Image Container with Hover Effect */}
              <div className="w-full h-[35vh] rounded-3xl overflow-hidden mb-6 bg-white/5 border border-white/10">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-2xl font-light text-orange-200 mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}