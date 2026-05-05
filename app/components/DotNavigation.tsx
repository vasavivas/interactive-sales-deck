"use client";
import React from 'react';

const sections = ['hero', 'why', 'retail', 'luxury', 'dining', 'entertainment', 'events', 'cta'];

export default function DotNavigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="w-3 h-3 rounded-full bg-gray-500 hover:bg-white hover:scale-125 transition-all duration-300"
          title={`Go to ${id}`}
        />
      ))}
    </div>
  );
}