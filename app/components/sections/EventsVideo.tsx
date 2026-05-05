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

export default function EventsVideo() {
  return (
    <section
      id="events"
      className="bg-[#f7f2e9] text-[#111] overflow-hidden"
    >

      <div className="h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-hidden relative">

        {/* VIDEO REEL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[36px] overflow-hidden relative"
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

      </div>
    </section>
  );
}