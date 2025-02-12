"use client"

import { motion } from "framer-motion"
import { 
  LayoutTemplate, // Next.js
  Atom, // React
  Zap, // Vite
  Server, // Express
  Terminal, // Node.js
  Database // Supabase
} from "lucide-react"

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
      <div className="relative w-32 h-32 group">
        <div className="absolute inset-0 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <LayoutTemplate className="w-16 h-16 text-blue-500/40 group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700" />
        </div>
      </div>
    )
  },
  {
    category: "Library",
    name: "React.js",
    icon: (
      <div className="relative w-32 h-32 group">
        <div className="absolute inset-0 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Atom className="w-16 h-16 text-cyan-500/40 animate-spin-slow group-hover:text-cyan-400/60" />
        </div>
      </div>
    )
  },
  {
    category: "Build Tool",
    name: "Vite",
    icon: (
      <div className="relative w-32 h-32 group">
        <div className="absolute inset-0 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Zap className="w-16 h-16 text-purple-500/40 group-hover:scale-125 transition-all duration-300" />
        </div>
      </div>
    )
  },
  {
    category: "Backend",
    name: "Express.js",
    icon: (
      <div className="relative w-32 h-32 group">
        <div className="absolute inset-0 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Server className="w-16 h-16 text-green-500/40 group-hover:translate-y-[-4px] transition-all duration-300" />
        </div>
      </div>
    )
  },
  {
    category: "Runtime",
    name: "Node.js",
    icon: (
      <div className="relative w-32 h-32 group">
        <div className="absolute inset-0 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Terminal className="w-16 h-16 text-emerald-500/40 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
        </div>
      </div>
    )
  },
  {
    category: "Database",
    name: "Supabase",
    icon: (
      <div className="relative w-32 h-32 group">
        <div className="absolute inset-0 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Database className="w-16 h-16 text-orange-500/40 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
      </div>
    )
  }
]

export function TechStack() {
  return (
    <section className="relative bg-[#111111] px-4 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm bg-[#222] border border-[#333]">
            Technologies
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tight mt-4">
            <span className="text-gray-500">Tech</span>{" "}
            <span className="text-white">Stack</span>
          </h2>
        </div>

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