"use client"

import { motion } from "framer-motion"
import { Palette, Code2, Layers, Megaphone } from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  glowColor: string
}

const features: Feature[] = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user experiences through thoughtful interface design and user-centered solutions.",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    glowColor: "from-blue-500/20 via-blue-500/5 to-transparent"
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "Building robust and scalable web applications using modern technologies and best practices.",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    glowColor: "from-amber-500/20 via-amber-500/5 to-transparent"
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Brand Identity",
    description: "Creating distinctive visual identities that communicate your brand's values and resonate with your audience.",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    glowColor: "from-emerald-500/20 via-emerald-500/5 to-transparent"
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Implementing strategic digital marketing solutions to enhance your online presence and reach.",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    glowColor: "from-purple-500/20 via-purple-500/5 to-transparent"
  },
]

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative overflow-hidden">
        {/* Main card */}
        <div className="relative bg-[#161616] rounded-3xl p-8 h-full border border-white/5 overflow-hidden">
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          {/* Content */}
          <div className="relative z-10 space-y-6">
            {/* Icon */}
            <div className={`inline-flex p-3.5 rounded-2xl border ${feature.color}`}>
              {feature.icon}
            </div>

            {/* Text content */}
            <div className="space-y-2">
              <h3 className="text-2xl font-medium text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Hover effect line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </div>
        </div>

        {/* Background glow effect */}
        <div className={`absolute -inset-px bg-gradient-to-r ${feature.glowColor} opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500 rounded-3xl`} />
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
          className="space-y-4 mb-24 max-w-2xl mx-auto text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full text-sm bg-[#222] border border-[#333]">
            Services
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="text-white">What I</span>{" "}
            <span className="text-gray-500">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

