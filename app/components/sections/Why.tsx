"use client";

import { motion } from "framer-motion";
import Counter from "../Counter";

export default function Why() {
  const stats = [
    { value: 100, suffix: "M+", label: "Annual Visitors" },
    { value: 1200, suffix: "+", label: "Retail Outlets" },
    { value: 5, suffix: "M+", label: "Sq Ft Space" },
  ];

  return (
    <section
      id="why"
      className="bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20"
    >
      <h2 className="text-5xl text-white mb-6">Why This Property</h2>

      <p className="text-gray-400 text-center max-w-2xl">
        A destination attracting millions globally with unmatched visibility and scale.
      </p>

      <div className="grid md:grid-cols-3 gap-16 mt-16">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="text-center"
          >
            <h3 className="text-6xl font-bold text-white">
              <Counter end={s.value} />
              {s.suffix}
            </h3>

            <p className="text-gray-400 mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}