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
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-4 inset-x-0 z-50 mx-auto max-w-sm px-4"
        >
          <div className="relative bg-[#161616] rounded-lg p-4 shadow-xl border border-white/10">
            <div className="flex items-start gap-3">
              <p className="text-xs text-gray-400 flex-1">
                We use cookies to enhance your experience. 
                <button onClick={handleAccept} className="text-white hover:underline ml-1">
                  Accept
                </button>
                {" or "}
                <button onClick={handleDecline} className="text-gray-500 hover:text-gray-400">
                  decline
                </button>
              </p>
              <button
                onClick={handleDecline}
                className="text-gray-500 hover:text-white p-1"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 