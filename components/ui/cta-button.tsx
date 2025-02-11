"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface CTAButtonProps {
  text: string
  href: string
  className?: string
}

export function CTAButton({ text, href, className }: CTAButtonProps) {
  return (
    <motion.a
      href={href}
      className={`group relative inline-flex items-center gap-6 rounded-full bg-orange-600 px-12 py-8 text-xl md:text-2xl font-medium text-white hover:bg-orange-700 transition-all ${className}`}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{text}</span>
      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
        <ArrowRight className="h-6 w-6 text-orange-600" />
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 rounded-full bg-orange-600/50 blur-2xl transition-all duration-300 group-hover:blur-3xl group-hover:scale-110" />
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-600 to-red-600 opacity-0 blur transition-all duration-300 group-hover:opacity-30" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600/50 to-red-600/50 opacity-0 transition-all duration-300 group-hover:opacity-100" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-full border border-white/20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:animate-shine" />
    </motion.a>
  )
}

