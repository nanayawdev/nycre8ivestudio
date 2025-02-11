"use client"

import { motion } from "framer-motion"

export function Highlights() {
  const stats = [
    { number: "235+", label: "project completed" },
    { number: "120+", label: "Awards achievement" },
    { number: "135+", label: "Years of Experience" },
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
              className="bg-[#161616] rounded-3xl p-12 space-y-4 hover:bg-[#181818] transition-colors duration-300"
            >
              <div className="text-7xl md:text-8xl lg:text-9xl font-light text-white">
                {stat.number}
              </div>
              <div className="text-xl text-gray-500 font-light tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

