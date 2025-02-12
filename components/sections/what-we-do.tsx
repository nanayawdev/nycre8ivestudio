"use client"

import { motion } from "framer-motion"

export function WhatWeDo() {
  return (
    <section className="relative bg-[#111111] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.2]">
        <div className="absolute w-full h-full bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm bg-[#222] border border-[#333] mb-6 sm:mb-8">
            My Specialty
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
            <span className="text-gray-500">I develop stunning websites</span>{" "}
            <span className="text-white">and mobile apps</span>{" "}
            <span className="text-gray-500">that redefine how people</span>{" "}
            <span className="text-white">interact with technology.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

