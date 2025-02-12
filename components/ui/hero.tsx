"use client"

import { useState, useEffect } from "react"
import type * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import { ResumeSheet } from "./resume-sheet"
import Link from "next/link"

interface HeroProps {
  className?: string;
}

export function Hero({ className, ...props }: HeroProps) {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [text, setText] = useState("")
  const fullText = "Digital"
  
  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 150) // Adjust speed here

    return () => clearInterval(interval)
  }, [])

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

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
        {/* Navigation - Horizontal centered positioning */}
        <nav className="flex items-center justify-center gap-12 px-8 py-8 md:px-12">
          <div className="text-white font-bold text-xl tracking-tight">
            NY<span className="font-light">CRE8IVE</span>
          </div>
          <button 
            onClick={() => setIsResumeOpen(true)}
            className="text-gray-300 hover:text-white text-sm transition-colors"
          >
            Resume
          </button>
          <Link 
            href="/videos"
            className="text-gray-300 hover:text-white text-sm transition-colors"
          >
            Videos
          </Link>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center mt-24 sm:mt-32 md:mt-48">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-3 sm:px-4 py-1.5 rounded-full text-white text-xs sm:text-sm bg-[#222] border border-[#333]"
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
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white mb-4 sm:mb-6 tracking-tight"
          >
            Crafting <span className="text-orange-500">{text}</span>
            <span className="text-orange-500 animate-blink">|</span> <br className="xs:hidden" />Dreams
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-xl mx-auto"
          >
            I am a passionate web developer specialized in <br className="hidden sm:block" /> 
            building sleek, high-performance websites and applications
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col xs:flex-row justify-center gap-4"
          >
            <button 
              onClick={scrollToPortfolio}
              className="px-8 py-4 rounded-full text-white border border-white/20 hover:bg-white/10 transition-colors"
            >
              View My Portfolio
            </button>
          </motion.div>
        </div>
      </div>

      <ResumeSheet 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  )
}

