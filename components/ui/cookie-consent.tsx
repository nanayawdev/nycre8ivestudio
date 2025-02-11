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
          className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6"
        >
          <div className="max-w-[90rem] mx-auto">
            <div className="relative bg-[#161616] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/10">
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/50 via-transparent to-transparent" />

              {/* Close button */}
              <button
                onClick={handleDecline}
                className="absolute -top-2 -right-2 p-1.5 sm:p-2 rounded-full bg-[#161616] border border-white/10 text-gray-500 hover:text-white transition-colors z-10"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>

              {/* Content */}
              <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
                <div className="flex-1 space-y-2 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-medium text-white">Cookie Settings</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-3xl">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 w-full lg:w-auto">
                  <button
                    onClick={handleDecline}
                    className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/20 transition-colors whitespace-nowrap"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm bg-white text-black hover:bg-gray-100 transition-colors whitespace-nowrap"
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