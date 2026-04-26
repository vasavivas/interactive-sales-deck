// components/CTA.tsx
"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center px-8 md:px-12 lg:px-16">

      <h2 className="text-6xl mb-6">
        Build Your Presence
        At Global Scale
      </h2>

      <p className="mb-8 text-neutral-500 uppercase tracking-[0.25em] text-sm">
        Retail Leasing • Sponsorships • Venue Partnerships
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">

        <button className="px-10 py-4 rounded-full bg-black text-white hover:scale-105 transition">
          Lease Space
        </button>

        <button className="px-10 py-4 rounded-full border border-black/20 hover:bg-black/5 transition">
          Sponsorship Opportunities
        </button>

        <button className="px-10 py-4 rounded-full border border-black/20 hover:bg-black/5 transition">
          Book A Venue
        </button>

      </div>
    </section>
  );
}