"use client"

import { motion } from "framer-motion"
import { Sparkles, Settings, Code, MessageSquare } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Creative Excellence",
      description: "Experience our team's creative expertise in innovative, compelling design solutions.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Customized Solutions",
      description: "We customize services for your unique business needs with a personal touch.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Expertise",
      description: "One team, all your needs. Development, design, and everything in between.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Transparent Communication",
      description: "Stay informed and involved with clear, open communication during the project.",
    },
  ]

  return (
    <section className="relative min-h-screen bg-[#111111] flex items-center justify-center px-4 py-24 overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/20 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center tracking-tight leading-tight">
            <span className="text-gray-500">We prioritize</span>{" "}
            <span className="text-white">exceptional customer service,</span>{" "}
            <span className="text-gray-500">meeting every client's needs throughout development and design.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

