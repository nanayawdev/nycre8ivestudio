"use client"

import { motion } from "framer-motion"

export function Highlights() {
  const stats = [
    { number: "120+", label: "Projects Completed", color: "bg-orange-500" },
    { number: "10+", label: "Years in Design", color: "bg-amber-500" },
    { number: "100%", label: "Job Success on UpWork", color: "bg-emerald-500" },
  ]

  return (
    <section className="relative min-h-screen bg-[#111111] flex items-center justify-center px-4 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full text-sm bg-[#222] border border-[#333]">Highlights</div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="text-gray-500">Numbers that</span> <span className="text-white">Speak Volumes</span>
          </h2>

          <div className="grid gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-4"
              >
                <div className={`w-3 h-3 rounded-full ${stat.color}`} />
                <div className="text-6xl md:text-8xl text-white font-light">{stat.number}</div>
                <div className="text-2xl text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

