// components/sections/StartScreen.tsx
"use client";
import { motion } from "framer-motion";

export default function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="h-screen w-full relative bg-black flex items-center justify-center overflow-hidden">
      {/* Background Video for Initial Feel */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-50">
        <source src="/Dubai.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 text-center text-white px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="uppercase tracking-[0.6em] text-sm mb-4 font-light"
        >
          A Global Platform
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extralight tracking-tighter mb-12"
        >
          DUBAI MALL
        </motion.h1>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-12 py-4 bg-white text-black rounded-full text-lg tracking-widest font-medium hover:bg-yellow-400 transition-colors"
        >
          START EXPERIENCE
        </motion.button>
      </div>
    </div>
  );
}