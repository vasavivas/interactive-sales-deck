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

const platforms = [
  {
    title: "Performing Arts",
    desc: "Concerts & live productions"
  },
  {
    title: "Expo Center",
    desc: "Conventions & trade shows"
  },
  {
    title: "Brand Activations",
    desc: "Launches & sponsorship moments"
  }
];

export default function EventsPlatformsList() {
  return (
    <section
      id="events"
      className="bg-[#f7f2e9] text-[#111] overflow-hidden"
    >

      <div className="h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-hidden relative">

        {/* PLATFORM OPPORTUNITIES */}
        <div className="border-t border-black/10">

          <div className="text-center mb-16">
            <h3 className="text-5xl font-light mb-6">
              Built For Global Programming
            </h3>

            <p className="max-w-2xl mx-auto text-neutral-600 text-lg">
              Flexible venue infrastructure for entertainment,
              brand activations and large-scale event hosting.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-10">

            {platforms.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1 }}
                className="text-center"
              >

                <h4 className="text-3xl font-light mb-5">
                  {item.title}
                </h4>

                <p className="text-neutral-600 mb-8">
                  {item.desc}
                </p>

                <button className="border border-black/15 rounded-full px-8 py-3 hover:bg-black hover:text-white transition">
                  Explore
                </button>

              </motion.div>
            ))}

          </div>

        </div>


      </div>
    </section>
  );
}