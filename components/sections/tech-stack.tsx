"use client"

import { motion } from "framer-motion"

interface Technology {
  category: string
  name: string
  icon: React.ReactNode
}

const technologies: Technology[] = [
  {
    category: "Framework",
    name: "Next.js",
    icon: (
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 bg-white/5 rounded-xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16">
            <div className="w-full h-3 bg-white/20 rounded-full mb-3" />
            <div className="w-3/4 h-3 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>
    )
  },
  {
    category: "Library",
    name: "React.js",
    icon: (
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 bg-white/5 rounded-xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-white/20 rounded-full" />
        </div>
      </div>
    )
  },
  {
    category: "Build Tool",
    name: "Vite",
    icon: (
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 bg-white/5 rounded-xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 transform rotate-45" />
        </div>
      </div>
    )
  },
  {
    category: "Backend",
    name: "Express.js",
    icon: (
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 bg-white/5 rounded-xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-3 h-3 bg-white/20 rounded-sm" />
            <div className="w-3 h-3 bg-white/20 rounded-full" />
            <div className="w-3 h-3 bg-white/20 rounded-lg transform rotate-45" />
            <div className="w-3 h-3 bg-white/20 rounded-sm" />
          </div>
        </div>
      </div>
    )
  },
  {
    category: "Runtime",
    name: "Node.js",
    icon: (
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 bg-white/5 rounded-xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16">
            <div className="w-full h-3 bg-white/20 rounded-full mb-3" />
            <div className="w-2/3 h-3 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>
    )
  },
  {
    category: "Database",
    name: "Supabase",
    icon: (
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 bg-white/5 rounded-xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-white/20 rounded-sm" />
        </div>
      </div>
    )
  }
]

export function TechStack() {
  return (
    <section className="relative bg-[#111111] px-4 py-32">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-8xl font-display mb-24"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-t border-white/10 pt-12"
            >
              <div className="flex gap-12">
                <div className="flex-shrink-0">
                  {tech.icon}
                </div>
                <div className="flex-1">
                  <div className="text-base text-gray-500 mb-4">
                    {tech.category}
                  </div>
                  <h3 className="text-4xl md:text-6xl text-white group-hover:text-gray-300 transition-colors">
                    {tech.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 