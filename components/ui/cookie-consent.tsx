"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useState, useEffect } from "react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      // Show after a small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[#161616] rounded-2xl p-6 shadow-xl border border-white/10">
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-800/50 via-transparent to-transparent" />

              {/* Close button - adjusted positioning */}
              <button
                onClick={handleDecline}
                className="absolute -top-2 -right-2 p-2 rounded-full bg-[#161616] border border-white/10 text-gray-500 hover:text-white transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Content */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-medium text-white">Cookie Settings</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={handleDecline}
                    className="px-6 py-2.5 rounded-full text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-6 py-2.5 rounded-full text-sm bg-white text-black hover:bg-gray-100 transition-colors"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 