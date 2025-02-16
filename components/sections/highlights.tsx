"use client"

import { motion } from "framer-motion"
import { Code2, Gem, Rocket } from "lucide-react"

export function Highlights() {
  const stats = [
    { 
      icon: Code2,
      number: "15+", 
      label: "Projects Completed",
      description: "Delivering high-quality web applications and digital solutions",
      gradient: "from-blue-500/20 via-blue-500/5 to-transparent"
    },
    { 
      icon: Gem,
      number: "10+", 
      label: "Years Experience",
      description: "Building modern and scalable web applications",
      gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent"
    },
    { 
      icon: Rocket,
      number: "100%", 
      label: "Client Satisfaction",
      description: "Committed to exceeding client expectations",
      gradient: "from-orange-500/20 via-orange-500/5 to-transparent"
    },
  ]

  return (
    <section className="relative bg-[#111111] px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-[#161616] rounded-2xl p-6 h-full overflow-hidden">
                {/* Gradient Background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white/80" />
                  </div>

                  {/* Stats */}
                  <div className="space-y-2">
                    <div className="flex items-end gap-2">
                      <div className="text-5xl font-light text-white">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-lg text-white/80">
                      {stat.label}
                    </div>
                    <p className="text-sm text-gray-400">
                      {stat.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

