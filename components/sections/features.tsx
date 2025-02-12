"use client"

import { motion } from "framer-motion"

interface Feature {
  number: string
  title: string
  tags: string[]
}

const features: Feature[] = [
  {
    number: "01",
    title: "UI/UX Design",
    tags: ["More than just fancy UIs.", "We make life better."]
  },
  {
    number: "02",
    title: "Web Development",
    tags: ["Building robust solutions.", "Performance driven."]
  },
  {
    number: "03",
    title: "Brand Identity",
    tags: ["Creating distinctive visuals.", "Resonating with audience."]
  },
  {
    number: "04",
    title: "Digital Marketing",
    tags: ["Enhancing online presence.", "Strategic solutions."]
  }
]

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group border-t border-white/10 pt-12 pb-12"
    >
      <div className="space-y-8">
        <div className="flex items-start gap-8">
          {/* Number - now same size as title */}
          <div className="text-6xl md:text-7xl lg:text-8xl font-light text-orange-500">
            {feature.number}
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-6xl md:text-7xl lg:text-8xl text-gray-500 group-hover:text-white transition-colors">
              {feature.title}
            </h3>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-4">
              {feature.tags.map((tag, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-400"
                >
                  {tag}
                </div>
              ))}
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
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm bg-[#222] border border-[#333]">
            Services
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tight mt-4">
            <span className="text-gray-500">What I</span>{" "}
            <span className="text-white">Offer</span>
          </h2>
        </div>

        <div className="space-y-0">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

