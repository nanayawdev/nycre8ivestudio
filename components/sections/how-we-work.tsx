"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Clock } from "lucide-react"
import type React from "react" // Import React

interface ProcessStep {
  number: string
  title: string
  description: string
  duration: string
  icon: React.ReactNode
  glowColor: string
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discuss Ideas &\nRequirements",
    description: "We collaborate with you to understand your goals, target audience, and project scope.",
    duration: "2 Hours",
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
    title: "From Concept to\nFinal Design",
    description:
      "We translate your vision into stunning concepts with your active involvement, iterating to achieve a flawless final design that resonates with your audience.",
    duration: "2-5 Days",
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
    title: "Development,\nTesting & Launch",
    description:
      "We transform design into a seamless digital experience, rigorously test across platforms, celebrate your success, ensure smooth rollout, and continuously optimize for growth.",
    duration: "2-4 Days",
    icon: (
      <div className="relative w-24 h-24">
        <div className="absolute right-0 w-16 h-16 bg-emerald-500/30 blur-2xl" />
        <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl" />
        <div className="absolute top-2 right-2 z-20 w-16 h-16 bg-emerald-500/50 rounded-2xl" />
      </div>
    ),
    glowColor: "from-emerald-500/20 via-emerald-500/10 to-transparent",
  },
]

function ProcessCard({ step }: { step: ProcessStep }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      ref={cardRef}
      style={{
        y,
        opacity,
        scale,
      }}
      className="relative"
    >
      <div className="bg-[#161616] rounded-3xl p-12 relative overflow-hidden group hover:bg-[#1a1a1a] transition-colors">
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-radial ${step.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 space-y-6">
            <div className="text-gray-500 text-xl">{step.number}</div>
            <h3 className="text-3xl md:text-4xl text-white whitespace-pre-line">{step.title}</h3>
            <p className="text-gray-400 max-w-2xl">{step.description}</p>
            <div className="inline-flex items-center text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 mr-2" />
              {step.duration}
            </div>
          </div>
          <div className="flex-shrink-0">{step.icon}</div>
        </div>
      </div>
    </motion.div>
  )
}

export function HowWeWork() {
  return (
    <section className="relative min-h-screen bg-[#111111] px-4 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm bg-[#222] border border-[#333]">
            My Projects
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="text-gray-500">My Recent</span> <span className="text-white">Projects</span>
          </h2>
        </div>

        <div className="space-y-8">
          {processSteps.map((step) => (
            <ProcessCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}

