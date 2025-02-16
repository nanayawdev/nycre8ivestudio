"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#111111] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#111111]" />
        <div className="absolute w-full h-full bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[500px]">
          <div
            className="absolute bottom-0 left-[-20%] w-[600px] h-[600px]"
            style={{
              background: "radial-gradient(circle at center, rgba(255,140,50,0.15) 0%, rgba(255,69,0,0.1) 25%, rgba(209,0,0,0.05) 45%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute bottom-0 right-[-20%] w-[600px] h-[600px]"
            style={{
              background: "radial-gradient(circle at center, rgba(255,140,50,0.15) 0%, rgba(255,69,0,0.1) 25%, rgba(209,0,0,0.05) 45%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Navigation - Updated */}
        <nav className="flex items-center justify-center gap-12 px-6 sm:px-12 py-8">
          <Link 
            href="/"
            className="text-white font-bold text-xl tracking-tight"
          >
            NY<span className="font-light">CRE8IVE</span>
          </Link>
          <button 
            onClick={() => window.location.href = '/'}
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => window.location.href = '#portfolio'}
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Portfolio
          </button>
          <div className="flex items-center gap-6">
            {[
              { icon: Github, href: "https://github.com/nanayawisrael" },
              { icon: Twitter, href: "https://twitter.com/nycre8ivestudio" },
              { icon: Linkedin, href: "https://linkedin.com/in/nanayawisrael" },
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </nav>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-24 sm:pt-32 pb-24">
          <div className="space-y-16">
            {/* Main Heading */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full text-sm bg-[#222] border border-[#333]"
              >
                <span className="mr-2 inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Available for Projects
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight"
              >
                Crafting <span className="text-orange-500">Digital</span> <br className="hidden xs:block" />
                Experiences
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl text-gray-400 text-lg sm:text-xl"
              >
                I&apos;m a full-stack developer specialized in building exceptional digital experiences. 
                Currently focused on creating accessible, human-centered products.
              </motion.p>
            </div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col xs:flex-row gap-4"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors"
              >
                Let&apos;s Talk
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <button 
                onClick={() => window.location.href = '#portfolio'}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                View Portfolio
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 