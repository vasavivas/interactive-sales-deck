"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
  "Hermès",
  "Cartier",
  "Dior",
  "Louis Vuitton",
  "Prada",
  "Rolex"
];

export default function Luxury() {
  return (
    <section id="luxury" className="bg-[#080808] text-white py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[0.35em] text-yellow-200 text-sm mb-6">
            Fashion Avenue
          </p>

          <h2 className="text-6xl md:text-8xl font-light leading-[1]">
            Brand Boulevard
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-gray-400 text-lg">
            Walk through a curated avenue of global maisons,
            flagship experiences and architectural prestige.
          </p>
        </motion.div>



        {/* Main boulevard composition */}
        <div className="grid md:grid-cols-12 gap-8 items-center">

          {/* left boutique image */}
          <div className="md:col-span-4">
            <div className="rounded-[32px] overflow-hidden h-[520px] group">
              <img
                src="/Luxury1.png"
                alt=""
                loading="lazy"
                className="w-full h-full object-cover object-left group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>


          {/* center typography brand wall */}
          <div className="md:col-span-4 text-center space-y-10">

            {brands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .08 }}
                className={`
        text-4xl md:text-6xl font-light
        ${i % 2 === 0 ? "ml-0" : "ml-0"}
        `}
              >
                {brand}
              </motion.div>
            ))}

          </div>


          {/* right boutique image */}
          <div className="md:col-span-4">
            <div className="rounded-[32px] overflow-hidden h-[520px] group">
              <img
                src="/Luxury2.png"
                alt=""
                loading="lazy"
                className="w-full h-full object-cover object-right group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>

        </div>



        {/* boulevard strip */}
        <div className="mt-24 border-y border-white/10 py-8 overflow-hidden">
          <div className="whitespace-nowrap text-4xl opacity-20 font-light animate-marquee">
            Haute Couture — Fine Jewelry — Designer Houses — Luxury Avenue —
          </div>
        </div>



        {/* bottom editorial line */}
        <div className="mt-20 text-center">
          <p className="text-3xl font-light text-neutral-300 max-w-4xl mx-auto">
            Where luxury is experienced as a destination,
            not simply a collection of stores.
          </p>
        </div>

      </div>

    </section>
  )
}