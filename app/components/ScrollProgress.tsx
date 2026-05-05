"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll({
    container: typeof document !== 'undefined' ? { current: document.getElementById("deck-container") as HTMLElement } : undefined
  });

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-yellow-500 to-orange-400 origin-left z-[1000] shadow-[0_0_10px_rgba(234,179,8,0.5)]"
    />
  );
}