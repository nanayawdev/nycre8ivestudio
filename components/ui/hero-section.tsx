"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  description?: string
  badges?: Array<{
    text: string
    className?: string
  }>
}

export const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "We Speak",
      subtitle = "Fluent Design",
      description = "Love your digital look. We make it happen.",
      badges = [
        { text: "Framer Expert", className: "bg-orange-500" },
        { text: "Digital Design Agency", className: "bg-zinc-800" },
        { text: "Webflow Expert", className: "bg-red-500" },
      ],
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative min-h-screen bg-black overflow-hidden", className)} ref={ref} {...props}>
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base dark background */}
          <div className="absolute inset-0 bg-black" />

          {/* Primary glow layer */}
          <div className="glow-layer absolute inset-0 opacity-70">
            <div className="absolute inset-0 animate-primary-glow bg-[radial-gradient(circle_at_50%_50%,rgba(255,160,0,0.3),rgba(255,69,0,0.2)_30%,rgba(209,0,0,0.1)_50%,transparent_70%)]" />
          </div>

          {/* Secondary glow layer */}
          <div className="glow-layer absolute inset-0 opacity-60">
            <div className="absolute inset-0 animate-secondary-glow bg-[radial-gradient(circle_at_50%_50%,rgba(255,119,0,0.4),rgba(255,69,0,0.3)_30%,rgba(209,0,0,0.2)_50%,transparent_70%)]" />
          </div>

          {/* Intense core glow */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 animate-core-glow bg-[radial-gradient(circle_at_50%_50%,rgba(255,69,0,0.5),rgba(255,0,0,0.4)_30%,transparent_60%)] blur-2xl" />
          </div>

          {/* Moving ember effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 animate-ember-1 bg-[radial-gradient(circle_at_30%_40%,rgba(255,119,0,0.4),transparent_40%)] blur-xl" />
            <div className="absolute inset-0 animate-ember-2 bg-[radial-gradient(circle_at_70%_60%,rgba(255,69,0,0.4),transparent_40%)] blur-xl" />
          </div>

          {/* Overlay to enhance contrast */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-8">
            <div className="text-white font-bold text-2xl">NUTS DEV</div>
            <div className="flex items-center gap-8">
              <a href="#portfolio" className="text-gray-300 hover:text-white">
                Portfolio
              </a>
              <a href="#services" className="text-gray-300 hover:text-white">
                Services
              </a>
              <a href="#about" className="text-gray-300 hover:text-white">
                About
              </a>
              <button className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-100 transition-colors">
                Get in Touch
              </button>
            </div>
          </nav>

          <div className="max-w-6xl mx-auto text-center mt-20">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={cn("px-4 py-2 rounded-full text-sm text-white", badge.className)}
                >
                  {badge.text}
                </motion.div>
              ))}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-7xl font-bold text-white mb-4"
            >
              {title}
              <br />
              {subtitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-gray-400 mb-8"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center gap-4"
            >
              <button className="px-8 py-4 rounded-full bg-white text-black hover:bg-gray-100 transition-colors">
                Get in Touch
              </button>
              <button className="px-8 py-4 rounded-full border border-white text-white hover:bg-white/10 transition-colors">
                Our Portfolio
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

