// components/SectionWrapper.tsx
"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({ children, id }: any) {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center px-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    </section>
  );
}