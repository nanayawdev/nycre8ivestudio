"use client"

import { motion } from "framer-motion"

export function WhatWeDo() {
  return (
    <section className="relative min-h-screen bg-[#111111] flex items-center justify-center px-4 py-24">
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
          <div className="inline-block px-4 py-1.5 rounded-full text-sm bg-[#222] border border-[#333] mb-12">
            What We Do
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
            <span className="text-gray-500">We help businesses like yours</span>{" "}
            <span className="text-white">define what makes them unique</span>{" "}
            <span className="text-gray-500">and convert that into a</span>{" "}
            <span className="text-white">best-in-class digital experience.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

