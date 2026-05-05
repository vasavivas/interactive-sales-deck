"use client";

import React from "react";
import { motion } from "framer-motion";

const attractions = [
  {
    title: "Destination Attractions",
    desc: "Immersive visitor magnets that turn the property into a full-day destination."
  },
  {
    title: "Experiential Entertainment",
    desc: "Interactive experiences designed to drive repeat footfall and engagement."
  },
  {
    title: "Family Experiences",
    desc: "Multi-generational attractions that broaden audience reach."
  }
];


export default function EventsIntro() {
  return (
    <section
      id="events"
      className="bg-[#f7f2e9] text-[#111] overflow-hidden"
    >

      <div className="h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-hidden relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="uppercase tracking-[0.35em] text-sm mb-6">
            Events & Platform
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-[1] mb-8">
            Where Destination
            Meets Spectacle
          </h2>

          <p className="max-w-3xl mx-auto text-neutral-600 text-lg leading-relaxed">
            From major attractions and live entertainment to global activations
            and venue opportunities, the property operates as a platform, not just a place.
          </p>
        </motion.div>



        {/* ATTRACTIONS */}
        <div className="grid md:grid-cols-3 gap-8">

          {attractions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .1 }}
              className="bg-white rounded-[30px] p-10 shadow-sm"
            >

              <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-8">
                Attraction
              </p>

              <h3 className="text-3xl font-light mb-6">
                {item.title}
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}