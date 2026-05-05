"use client";

import { motion } from "framer-motion";

export default function Retail() {
  const items = [
    {
      title: "Flagship Stores",
      desc: "Prime locations for global brands",
      img: "/retail 1.png",
    },
    {
      title: "Global Brands",
      desc: "Home to industry leaders",
      img: "/retail 4.png",
    },
    {
      title: "High Footfall",
      desc: "Massive daily customer flow",
      img: "/retail 3.png",
    },
  ];

  return (
    <section
      id="retail"
      className="bg-[#f5f5f5] h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-hidden relative"
    >
      {/* HEADER */}
      <div className="max-w-3xl">
        <h2 className="text-5xl text-black mb-4">Retail Ecosystem</h2>

        <p className="text-gray-600">
          A powerful mix of global brands, flagship stores, and high-performing retail spaces.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-10 mt-20">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-2xl shadow-md bg-white"
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="w-full h-[220px] object-cover"
            />

            {/* TEXT */}
            <div className="p-5">
              <h3 className="text-lg text-black">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}