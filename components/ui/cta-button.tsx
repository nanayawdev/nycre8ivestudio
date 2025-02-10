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
      className={`group relative inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-white hover:bg-orange-700 transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{text}</span>
      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white">
        <ArrowRight className="h-4 w-4 text-orange-600" />
      </div>
      <div className="absolute inset-0 rounded-full bg-orange-600/50 blur-xl" />
    </motion.a>
  )
}

