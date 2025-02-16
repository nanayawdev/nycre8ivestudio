"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#111111] px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 sm:gap-16">
          {/* Left side */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/ny.jpg"
                  alt="Profile"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-display leading-none"
              >
                LET&apos;S<br />CONNECT!
              </motion.h2>
            </div>
            <div>
              <Link href="/" className="text-2xl text-white hover:text-gray-300 transition-colors">
                Ny Cre8ive Studio
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-8 sm:space-y-12">
            {/* Contact info with responsive text sizes */}
            <div className="space-y-3 sm:space-y-4">
              <div className="text-xs sm:text-sm text-gray-500">
                Email Address
              </div>
              <Link 
                href="mailto:nanayawisrael@gmail.com"
                className="text-xl xs:text-2xl sm:text-3xl text-white hover:text-gray-300 transition-colors"
              >
                me@nycre8ivestudio.com
              </Link>
            </div>

            <div className="space-y-4">
              <div className="text-sm text-gray-500">
                Contact
              </div>
              <Link 
                href="tel:+233599326736"
                className="text-2xl md:text-3xl text-white hover:text-gray-300 transition-colors"
              >
                +233599326736
              </Link>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link 
                href="https://linkedin.com/in/nanayawisrael"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-colors"
              >
                Linkedin
              </Link>
              <Link 
                href="https://twitter.com/nycre8ivestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-colors"
              >
                Twitter
              </Link>
              <Link 
                href="https://instagram.com/nanayaw.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-colors"
              >
                Instagram
              </Link>
              <Link 
                href="https://wa.me/233599326736"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-colors"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-24 sm:mt-32 pt-6 sm:pt-8 border-t border-white/10">
          <div className="text-sm text-gray-500">
            ©2025- All Rights Reserved
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  )
} 