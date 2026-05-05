"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const opportunities = [
    {
        title: "Retail Leasing",
        desc: "Flagship, pop-up and premium leasing opportunities designed for high visibility.",
        tag: "Leasing"
    },
    {
        title: "Brand Sponsorships",
        desc: "Activate through partnerships, campaigns and destination-wide brand moments.",
        tag: "Sponsorship"
    },
    {
        title: "Venue Bookings",
        desc: "Host launches, concerts, conventions and large-scale experiences.",
        tag: "Events"
    }
];

export default function Opportunities() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <section
            id="opportunities"
            className="h-screen w-full bg-[#f3eee4] text-[#111] overflow-hidden flex flex-col justify-center px-8 md:px-16 relative"
        >
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-8">
                    <p className="uppercase tracking-[0.35em] text-sm mb-4">Opportunities</p>
                    <h2 className="text-2xl md:text-4xl font-light mb-6">Partner With The Destination</h2>
                    <p className="max-w-2xl mx-auto text-neutral-600 text-lg">
                        Multiple pathways to establish presence, activate your brand or host unforgettable events.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {opportunities.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * .1 }}
                            className="bg-white rounded-[32px] p-10 shadow-lg group hover:bg-black hover:text-white transition-colors duration-500"
                        >
                            <p className="uppercase tracking-[0.3em] text-xs mb-6 text-neutral-500 group-hover:text-neutral-400">
                                {item.tag}
                            </p>
                            <h3 className="text-3xl font-light mb-6">{item.title}</h3>
                            <p className="text-neutral-600 group-hover:text-neutral-300 leading-relaxed mb-8">
                                {item.desc}
                            </p>
                            <button 
                                onClick={() => setActive(i)}
                                className="group flex items-center gap-3 border border-black/20 group-hover:border-white/40 rounded-full px-8 py-3 transition-all"
                            >
                                Explore
                                <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal - popup */}
            {active !== null && (
                <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white max-w-2xl w-full rounded-[40px] p-12 relative"
                    >
                        <button onClick={() => setActive(null)} className="absolute top-8 right-8 text-4xl font-light">×</button>
                        <p className="text-orange-600 uppercase tracking-widest text-xs mb-4">{opportunities[active].tag}</p>
                        <h3 className="text-4xl font-light mb-6">{opportunities[active].title}</h3>
                        <p className="text-neutral-600 text-lg mb-10 leading-relaxed">
                            {active === 0 && "Dedicated leasing pathways for flagship, luxury, and pop-up concepts with tailored placement."}
                            {active === 1 && "Sponsorship packages spanning experiential activations and destination-wide media integrations."}
                            {active === 2 && "Venue booking for concerts, conventions, and large-scale programmed events."}
                        </p>
                        <button className="bg-black text-white rounded-full px-10 py-4 hover:scale-105 transition">Start Conversation</button>
                    </motion.div>
                </div>
            )}
        </section>
    );
}