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
            className="bg-[#f3eee4] py-32 text-[#111]"
        >

            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">

                <div className="text-center mb-24">
                    <p className="uppercase tracking-[0.35em] text-sm mb-6">
                        Opportunities
                    </p>

                    <h2 className="text-6xl md:text-7xl font-light mb-8">
                        Partner With
                        The Destination
                    </h2>

                    <p className="max-w-2xl mx-auto text-neutral-600 text-lg">
                        Multiple pathways to establish presence,
                        activate your brand or host unforgettable events.
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
                            className="bg-white rounded-[32px] p-12 shadow-lg"
                        >

                            <p className="uppercase tracking-[0.3em] text-xs mb-8 text-neutral-500">
                                {item.tag}
                            </p>

                            <h3 className="text-4xl font-light mb-6">
                                {item.title}
                            </h3>

                            <p className="text-neutral-600 leading-relaxed mb-10">
                                {item.desc}
                            </p>

                            <button className="group flex items-center gap-3 border rounded-full px-8 py-3">

                                Explore

                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>

                            </button>

                        </motion.div>
                    ))}

                </div>

            </div>
            {active !== null && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">

                    <div className="bg-white max-w-3xl w-full rounded-[32px] p-12 relative">

                        <button
                            onClick={() => setActive(null)}
                            className="absolute top-6 right-8 text-3xl"
                        >
                            ×
                        </button>

                        <h3 className="text-5xl font-light mb-8">
                            {opportunities[active].title}
                        </h3>

                        <p className="text-neutral-600 text-lg leading-relaxed mb-10">
                            {active === 0 &&
                                "Dedicated leasing pathways for flagship, luxury, pop-up and food concepts with tailored placement opportunities."
                            }

                            {active === 1 &&
                                "Sponsorship packages spanning experiential activations, media integrations and destination partnerships."
                            }

                            {active === 2 &&
                                "Venue booking opportunities for concerts, conventions, launches and large-scale programmed events."
                            }
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-10">

                            <div>
                                <h4 className="text-xl mb-3">Audience</h4>
                                <p>High-value visitors</p>
                            </div>

                            <div>
                                <h4 className="text-xl mb-3">Formats</h4>
                                <p>Flexible opportunity types</p>
                            </div>

                            <div>
                                <h4 className="text-xl mb-3">Support</h4>
                                <p>Dedicated partnership team</p>
                            </div>

                        </div>

                        <button className="bg-black text-white rounded-full px-8 py-4">
                            Start Conversation
                        </button>

                    </div>

                </div>
            )}
        </section>
    )
}