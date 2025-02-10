"use client"

import { motion } from "framer-motion"

export function HowWeWork() {
  return (
    <section className="relative min-h-screen bg-[#111111] flex items-center justify-center px-4 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full text-sm bg-[#222] border border-[#333]">
            How We Work
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="text-gray-500">How We Bring</span> <span className="text-white">Ideas to Life</span>
          </h2>

          <div className="bg-[#161616] rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/20 blur-[100px] -z-0" />

            <div className="relative z-10">
              <div className="text-gray-500 text-xl mb-6">01</div>
              <h3 className="text-3xl md:text-4xl text-white mb-4">Discuss Ideas & Requirements</h3>
              <p className="text-gray-400 mb-6">
                We collaborate with you to understand your goals, target audience, and project scope.
              </p>
              <div className="inline-flex items-center text-sm text-gray-400">
                <span className="w-4 h-4 bg-white/10 rounded-full mr-2" />2 Hours
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

