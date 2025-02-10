"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface HeroProps {
  className?: string;
}

export function Hero({ className, ...props }: HeroProps) {
  return (
    <div className={cn("relative min-h-screen bg-[#111111] overflow-hidden", className)} {...props}>
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-[#111111]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.2]">
          <div className="absolute w-full h-full bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        {/* Glowing gradients */}
        <div className="absolute bottom-0 left-0 right-0 h-[800px]">
          <div
            className="absolute bottom-0 left-[-20%] w-[800px] h-[800px] animate-glow-1"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,140,50,0.25) 0%, rgba(255,69,0,0.15) 25%, rgba(209,0,0,0.1) 45%, transparent 65%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-0 right-[-20%] w-[800px] h-[800px] animate-glow-2"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,140,50,0.25) 0%, rgba(255,69,0,0.15) 25%, rgba(209,0,0,0.1) 45%, transparent 65%)",
              filter: "blur(80px)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center px-8 py-8 md:px-12">
          <div className="text-white font-bold text-xl tracking-tight">
            NYCRE8IVE <span className="font-light">STUDIO</span>
          </div>
          <div className="flex items-center gap-6 md:gap-10">
            <a href="#portfolio" className="text-gray-300 hover:text-white text-sm transition-colors">
              Portfolio
            </a>
            <a href="#services" className="text-gray-300 hover:text-white text-sm transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-300 hover:text-white text-sm transition-colors">
              About
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center px-4 text-center mt-48">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-4 py-1.5 rounded-full text-white text-sm bg-[#222] border border-[#333]"
            >
              <span className="mr-2 inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Digital Design Agency
            </motion.div>
          </div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-8xl font-normal text-white mb-6 tracking-tight"
          >
            Crafting Digital <br />Experiences
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg mb-12"
          >
            I am a passionate web developer specialized in <br /> building sleek, high-performance websites and applications
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-4 rounded-full bg-white text-black hover:bg-gray-100 transition-colors">
              Get in Touch
            </button>
            <button className="px-8 py-4 rounded-full text-white border border-white/20 hover:bg-white/10 transition-colors">
              Our Portfolio
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

