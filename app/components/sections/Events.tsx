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

export default function EventsPlatform() {
  return (
    <section
      id="events"
      className="bg-[#f7f2e9] text-[#111] overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[0.35em] text-sm mb-6">
            Events & Platform
          </p>

          <h2 className="text-6xl md:text-8xl font-light leading-[1] mb-8">
            Where Destination
            Meets Spectacle
          </h2>

          <p className="max-w-3xl mx-auto text-neutral-600 text-lg leading-relaxed">
            From major attractions and live entertainment to global activations
            and venue opportunities, the property operates as a platform, not just a place.
          </p>
        </motion.div>



        {/* ATTRACTIONS */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">

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



        {/* VIDEO REEL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[36px] overflow-hidden relative mb-32"
        >

          <video
          poster="/luxury1.png"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[75vh] object-cover"
          >
            <source src="/Dubai.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/35 flex items-end">
            <div className="p-12 md:p-16 text-white max-w-3xl">
              <h3 className="text-5xl md:text-6xl font-light mb-6">
                Signature Events At Global Scale
              </h3>

              <p className="text-white/85 text-lg leading-relaxed">
                Concerts, cultural programming, launches and destination-wide
                moments designed to draw audiences and elevate partnerships.
              </p>
            </div>
          </div>

        </motion.div>



        {/* PLATFORM OPPORTUNITIES */}
        <div className="border-t border-black/10 pt-20">

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