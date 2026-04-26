
"use client";

import React from "react";
import { motion } from "framer-motion";

interface Experience {
  title: string;
  desc: string;
}

const items: Experience[] = [
  {
    title: "Fine Dining Experience",
    desc: "Michelin-inspired culinary storytelling in an intimate atmosphere."
  },
  {
    title: "Sky Lounge Nights",
    desc: "Elevated evenings with skyline views, music, and crafted cocktails."
  },
  {
    title: "Wellness Retreat",
    desc: "A sensory escape blending silence, spa, and natural harmony."
  }
];

export default function Dining() {
  return (
    <section id="dining" className="relative bg-[#0b0b0f] text-white py-32 px-6 overflow-hidden">

      {/* SOFT DIFFUSED LIGHT (key difference from luxury) */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[20%] w-[750px] h-[750px] bg-orange-400/10 blur-[220px] rounded-full" />
        <div className="absolute bottom-[-250px] right-[10%] w-[650px] h-[650px] bg-orange-300/5 blur-[240px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl font-light">
            Dining <span className="text-orange-200">& Lifestyle</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            A fluid journey of taste, atmosphere, and sensory experience.
          </p>
        </motion.div>

        <div className="space-y-32">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >

              {/* SOFT EXPERIENCE VISUAL (no harsh borders) */}
              <div className="w-full md:w-1/2 h-[340px] rounded-3xl bg-gradient-to-br from-orange-200/10 to-transparent backdrop-blur-xl" >
                <img
                  src={
                    i === 0
                      ? "/Dining1.png"
                      : i === 1
                        ? "/Dining2.png"
                        : "/Dining3.png"
                  }
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-light mb-4 text-orange-200">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}