"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NavigationArrows() {
  const scroll = (dir: 'up' | 'down') => {
    const container = document.getElementById('deck-container');
    if (!container) return;
    const offset = dir === 'down' ? window.innerHeight : -window.innerHeight;
    container.scrollBy({ top: offset, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-1 shadow-2xl">
      {/* Previous Slide */}
      <button 
        onClick={() => scroll('up')}
        className="w-12 h-12 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" strokeWidth={1} />
      </button>
      
      {/* Separator Line */}
      <div className="w-[1px] h-6 bg-white/10 mx-1" />

      {/* Next Slide */}
      <button 
        onClick={() => scroll('down')}
        className="w-12 h-12 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={1} />
      </button>
    </div>
  );
}