"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clock, ChevronLeft, ChevronRight } from "lucide-react"
import type React from "react"

interface ProcessStep {
  number: string
  title: string
  description: string
  duration: string
  url: string
  icon: React.ReactNode
  glowColor: string
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Healthier BT\nSolutions",
    description: "A comprehensive healthcare solutions platform focused on providing better healthcare services and solutions.",
    duration: "View Project",
    url: "https://healthierbtsolutions.com",
    icon: (
      <div className="relative w-24 h-24">
        <div className="absolute right-0 w-16 h-24 bg-red-500/30 blur-2xl" />
        <div className="relative z-10 w-16 h-24 bg-white/10 backdrop-blur-xl rounded-2xl" />
        <div className="absolute top-2 right-2 z-20 w-16 h-24 bg-red-500/50 rounded-2xl" />
      </div>
    ),
    glowColor: "from-red-500/20 via-red-500/10 to-transparent",
  },
  {
    number: "02",
    title: "Thomisia Travel\n& Tour",
    description: "A modern travel and tour website showcasing destinations and booking services for adventurous travelers.",
    duration: "View Project",
    url: "https://thomisiatravelandtour.com",
    icon: (
      <div className="relative w-24 h-24">
        <div className="absolute right-0 w-16 h-16 bg-amber-500/30 blur-2xl" />
        <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl" />
        <div className="absolute top-2 right-2 z-20 w-16 h-16 bg-amber-500/50 rounded-2xl" />
      </div>
    ),
    glowColor: "from-amber-500/20 via-amber-500/10 to-transparent",
  },
  {
    number: "03",
    title: "NY Cre8ive\nStudio",
    description: "A creative digital agency portfolio showcasing web development and design services.",
    duration: "View Project",
    url: "https://nycre8ivestudio.com",
    icon: (
      <div className="relative w-24 h-24">
        <div className="absolute right-0 w-16 h-16 bg-emerald-500/30 blur-2xl" />
        <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl" />
        <div className="absolute top-2 right-2 z-20 w-16 h-16 bg-emerald-500/50 rounded-2xl" />
      </div>
    ),
    glowColor: "from-emerald-500/20 via-emerald-500/10 to-transparent",
  },
  {
    number: "04",
    title: "Urban\nTickets",
    description: "A dynamic platform for buying and selling tickets for events.",
    duration: "View Project",
    url: "https://www.urbantickets.app",
    icon: (
      <div className="relative w-24 h-24">
        <div className="absolute right-0 w-16 h-16 bg-blue-500/30 blur-2xl" />
        <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl" />
        <div className="absolute top-2 right-2 z-20 w-16 h-16 bg-blue-500/50 rounded-2xl" />
      </div>
    ),
    glowColor: "from-blue-500/20 via-blue-500/10 to-transparent",
  },
  {
    number: "05",
    title: "Atinka\nNews",
    description: "A dynamic news platform delivering the latest updates and stories to readers.",
    duration: "View Project",
    url: "https://atinkanews.net",
    icon: (
      <div className="relative w-24 h-24">
        <div className="absolute right-0 w-16 h-16 bg-blue-500/30 blur-2xl" />
        <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl" />
        <div className="absolute top-2 right-2 z-20 w-16 h-16 bg-blue-500/50 rounded-2xl" />
      </div>
    ),
    glowColor: "from-blue-500/20 via-blue-500/10 to-transparent",
  },
]

function ProcessCard({ step }: { step: ProcessStep }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="shrink-0 w-[calc(100vw-2rem)] md:w-[640px] snap-center px-4"
    >
      <div className="bg-[#161616] rounded-2xl sm:rounded-3xl overflow-hidden group hover:bg-[#1a1a1a] transition-colors">
        <div className="p-6 sm:p-8 space-y-4 sm:space-y-6 relative z-10">
          <div className="text-xl sm:text-2xl text-gray-500">{step.number}</div>

          <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white whitespace-pre-line">
            {step.title}
          </h3>

          <p className="text-sm sm:text-base text-gray-400">
            {step.description}
          </p>

          <div className="flex-shrink-0">
            {step.icon}
          </div>

          <div className="pt-4 border-t border-white/10">
            <a 
              href={step.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs sm:text-sm text-gray-400 bg-white/5 px-3 sm:px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Clock className="w-4 h-4 mr-2" />
              View Project →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scrollTo = (direction: 'left' | 'right') => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    })
  }

  const handleScroll = () => {
    if (!containerRef.current) return

    const container = containerRef.current
    const maxScroll = container.scrollWidth - container.clientWidth

    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(container.scrollLeft < maxScroll - 1) // -1 for rounding errors
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      handleScroll() // Check initial scroll position
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="portfolio" className="relative bg-[#111111] py-32">
      {/* Section Header */}
      <div className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm bg-[#222] border border-[#333]">
            My Projects
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tight mt-4">
            <span className="text-gray-500">My Recent</span>{" "}
            <span className="text-white">Projects</span>
          </h2>
        </div>
      </div>

      {/* Scroll Container */}
      <div className="relative">
        {/* Left Scroll Button */}
        {canScrollLeft && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => scrollTo('left')}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        )}

        {/* Right Scroll Button */}
        {canScrollRight && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => scrollTo('right')}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        )}

        {/* Cards Container */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={handleScroll}
        >
          {/* Initial Padding */}
          <div className="shrink-0 w-4 md:w-[max(2rem,calc((100vw-80rem)/2))]" />

          {processSteps.map((step) => (
            <ProcessCard key={step.number} step={step} />
          ))}

          {/* Final Padding */}
          <div className="shrink-0 w-4 md:w-[max(2rem,calc((100vw-80rem)/2))]" />
        </div>
      </div>

      {/* Custom Scrollbar (optional) */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

