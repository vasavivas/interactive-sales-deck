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
<section id="luxury" className="h-screen w-full bg-[#080808] text-white overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center "
        >
          <p className="uppercase tracking-[0.35em] text-yellow-200 text-sm mb-4">
            Fashion Avenue
          </p>

          <h2 className="text-3xl md:text-5xl font-light leading-[1]">
            Brand Boulevard
          </h2>

          <p className="my-4 max-w-2xl mx-auto text-gray-400 text-lg">
            Walk through a curated avenue of global maisons,
            flagship experiences and architectural prestige.
          </p>
        </motion.div>



        {/* Main boulevard composition */}
        <div className="grid md:grid-cols-12 gap-8 items-center">

          {/* left boutique image */}
          <div className="md:col-span-4">
            <div className="rounded-[32px] overflow-hidden h-[45vh] group">
              <img
                src="/Luxury1.png"
                alt=""
                loading="lazy"
                className="w-full h-full object-cover object-left group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>


          {/* center typography brand wall */}
          <div className="md:col-span-4 text-center space-y-4">

            {brands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .08 }}
                className={`
        text-2xl md:text-3xl font-light
        ${i % 2 === 0 ? "ml-0" : "ml-0"}
        `}
              >
                {brand}
              </motion.div>
            ))}

          </div>


          {/* right boutique image */}
          <div className="md:col-span-4">
            <div className="rounded-[32px] overflow-hidden h-[45vh] group">
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
        <div className=" py-4 overflow-hidden">
          <div className="whitespace-nowrap text-3xl opacity-20 font-light animate-marquee">
            Haute Couture — Fine Jewelry — Designer Houses — Luxury Avenue —
          </div>
        </div>



        {/* bottom editorial line */}
        {/* <div className="mt-6 text-center">
          <p className="text-3xl font-light text-neutral-300 max-w-4xl mx-auto">
            Where luxury is experienced as a destination,
            not simply a collection of stores.
          </p>
        </div> */}

      </div>

    </section>
  )
}