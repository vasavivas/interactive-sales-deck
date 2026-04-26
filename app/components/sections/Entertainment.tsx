"use client";

import { motion } from "framer-motion";

export default function Entertainment() {
  return (
    <section className="bg-[#faf7ef] text-[#111] py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="tracking-[0.35em] uppercase text-sm mb-6">
            Entertainment District
          </p>

          <h2 className="text-7xl font-light mb-8">
            Where Every Visit Becomes an Event
          </h2>

          <p className="max-w-2xl mx-auto text-neutral-600 text-lg">
            A vibrant destination filled with attractions, events and immersive moments.
          </p>
        </motion.div>


        {/* MASONRY MOSAIC */}
        <div className="grid md:grid-cols-12 gap-8">

          {/* tile 1 */}
          <div className="md:col-span-7 rounded-[36px] overflow-hidden min-h-[500px] relative group">
            <img
              src="/Entertainment1.png"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              alt=""
              loading="lazy"
            />

            <div className="absolute bottom-10 left-10 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-5xl font-light">250+</div>
              <div className="text-sm uppercase tracking-[0.3em] mt-3">
                Annual Events
              </div>
            </div>
          </div>



          {/* tile 2 */}
          <div className="md:col-span-5 bg-[#111] text-white rounded-[36px] p-14 flex flex-col justify-center">
            <h3 className="text-5xl font-light mb-8">
              Live
              Spectacle
            </h3>

            <p className="text-gray-400 text-lg">
              Concerts, fashion shows and destination-scale experiences.
            </p>
          </div>



          {/* tile 3 */}
          <div className="md:col-span-4 rounded-[36px] overflow-hidden min-h-[380px] relative">
            <img
              src="/Entertainment2.png"
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
              loading="lazy"
            />
          </div>


          {/* tile 4 */}
          <div className="md:col-span-8 bg-gradient-to-r from-orange-100 to-yellow-50 rounded-[36px] p-16">
            <p className="uppercase tracking-[0.3em] text-xs mb-6">
              Immersive Worlds
            </p>

            <h3 className="text-6xl font-light mb-8">
              Interactive
              Attractions
            </h3>

            <p className="text-neutral-700 text-lg max-w-2xl">
              Experiential zones blending technology, entertainment and discovery.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}