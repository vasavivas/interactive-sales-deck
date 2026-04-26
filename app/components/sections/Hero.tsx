// components/Hero.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  return (
    <section ref={ref} id="hero" className="min-h-screen h-screen relative overflow-hidden">

      <motion.video
        ref={videoRef}
        style={{ scale }}
        src="/intro.mp4"
        preload="none"
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      />

<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 flex flex-col items-center justify-center text-center px-8 md:px-12 lg:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-5xl font-bold leading-tight text-white"
        >
          Not a Mall
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-5xl mt-4 text-white"
        >
          A Global Destination
        </motion.h2>

        <button
          onClick={() => {
            if (videoRef.current) {
              videoRef.current.muted = !muted;
              setMuted(!muted);
            }
          }}
          className="mt-8 p-3 rounded-full bg-white/40 backdrop-blur-md 
          border border-white/30 hover:border-white 
          transition-all duration-300 hover:scale-110"
          title={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </section>
  );
}