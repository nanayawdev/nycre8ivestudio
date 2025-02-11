"use client"

import { motion } from "framer-motion"

export function Highlights() {
  const stats = [
    { 
      number: "15+", 
      label: "project completed",
      gradient: "from-blue-500/20 via-blue-500/5 to-transparent"
    },
    { 
      number: "10+", 
      label: "Awards achievement",
      gradient: "from-amber-500/20 via-amber-500/5 to-transparent"
    },
    { 
      number: "10+", 
      label: "Years of Experience",
      gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent"
    },
  ]

  return (
    <section className="relative bg-[#111111] px-4 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#161616] rounded-3xl p-12 space-y-4 hover:bg-[#181818] transition-colors duration-300 relative overflow-hidden group"
            >
              {/* Gradient background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-7xl md:text-8xl lg:text-9xl font-light text-white">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-500 font-light tracking-wide">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

