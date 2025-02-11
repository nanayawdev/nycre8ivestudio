"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Rocket, Zap } from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  delay: number
}

const features: Feature[] = [
  {
    icon: <Code2 className="w-10 h-10" />,
    title: "Clean & Efficient Code",
    description: "Writing clean, maintainable code that follows best practices and industry standards.",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    delay: 0.2
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Lightning Performance",
    description: "Building lightning-fast applications optimized for speed and efficiency.",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    delay: 0.4
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: "Creative Design",
    description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences.",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    delay: 0.6
  },
  {
    icon: <Rocket className="w-10 h-10" />,
    title: "Modern Innovation",
    description: "Staying ahead with modern technologies and innovative solutions.",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    delay: 0.8
  },
]

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: feature.delay }}
      className="group relative"
    >
      <div className="relative p-1">
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-border" />
        
        {/* Card content */}
        <div className="relative bg-[#161616] rounded-3xl p-8 h-full">
          <div className="space-y-6">
            {/* Icon with colored background */}
            <div className={`inline-flex p-4 rounded-2xl border ${feature.color}`}>
              {feature.icon}
            </div>

            {/* Title with hover line effect */}
            <div className="relative">
              <h3 className="text-2xl font-medium text-white group-hover:text-white/90 transition-colors pb-2">
                {feature.title}
              </h3>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white/0 via-white/50 to-white/0 group-hover:w-full transition-all duration-300" />
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>

            {/* Hover arrow */}
            <div className="flex items-center text-sm text-gray-500 group-hover:text-white transition-colors">
              Learn more 
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Features() {
  return (
    <section className="relative bg-[#111111] px-4 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-4 mb-24 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full text-sm bg-[#222] border border-[#333]">
            Core Features
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="text-white">Expertise</span>{" "}
            <span className="text-gray-500">& Services</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

