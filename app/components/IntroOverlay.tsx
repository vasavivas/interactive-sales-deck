// components/sections/IntroOverlay.tsx
"use client";
import { useState, useRef } from "react";

export default function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="fixed inset-0 z-[2000] bg-[#0a0a0a] flex items-center justify-center p-4">
      
      <div className="relative w-full max-w-5xl h-[70vh] bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
        
        <video 
          ref={videoRef}
          autoPlay 
          muted={isMuted}
          playsInline 
          className="w-full h-full object-cover"
          onEnded={onComplete}
          preload="none"
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>

        <div className="absolute bottom-6 right-6 flex flex-col gap-3">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="px-6 py-2 border border-white/30 text-white text-[10px] tracking-widest uppercase bg-black/40 backdrop-blur-md hover:bg-white hover:text-black transition-all"
          >
            {isMuted ? "Sound On" : "Sound Off"}
          </button>
          <button 
            onClick={onComplete}
            className="px-6 py-2 border border-white/30 text-white text-[10px] tracking-widest uppercase bg-black/40 backdrop-blur-md hover:bg-white hover:text-black transition-all"
          >
            Skip Intro
          </button>
        </div>
      </div>
    </div>
  );
}