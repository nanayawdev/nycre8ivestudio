"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown, Loader2 } from "lucide-react"
import { useState } from "react"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

const services = [
  "UI/UX Design",
  "Web Development",
  "Brand Identity",
  "Digital Marketing",
]

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [isServiceOpen, setIsServiceOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log({ email, phone, service, message })
      onClose()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
        >
          <div className="min-h-screen flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-[#161616] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Form content */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl font-medium text-white mb-2">Get in Touch</h2>
                  <p className="text-sm sm:text-base text-gray-400">Let's discuss your project and make it happen.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Email field */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-white/20 focus:outline-none focus:ring-0 transition-colors"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    {/* Phone field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-white/20 focus:outline-none focus:ring-0 transition-colors"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  {/* Custom Service Dropdown */}
                  <div className="relative">
                    <label htmlFor="service" className="block text-sm text-gray-400 mb-2">
                      Service Needed
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsServiceOpen(!isServiceOpen)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-left flex items-center justify-between text-white focus:border-white/20 focus:outline-none transition-colors"
                    >
                      <span className={service ? "text-white" : "text-gray-500"}>
                        {service || "Select a service"}
                      </span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServiceOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isServiceOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-50 w-full mt-2 py-2 rounded-xl bg-[#1a1a1a] border border-white/10 shadow-xl"
                        >
                          {services.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => {
                                setService(s)
                                setIsServiceOpen(false)
                              }}
                              className={`w-full px-4 py-2 text-left hover:bg-white/5 transition-colors ${
                                service === s ? "text-white bg-white/5" : "text-gray-400"
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-white/20 focus:outline-none focus:ring-0 transition-colors min-h-[150px]"
                      placeholder="Tell me about your project"
                      required
                    />
                  </div>

                  {/* Submit button */}
                  <input 
                    type="hidden" 
                    name="service" 
                    value={service} 
                    required 
                  />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative w-full px-8 py-4 rounded-xl text-black transition-all duration-200 overflow-hidden group
                      ${isSubmitting ? 'bg-gray-200 cursor-not-allowed' : 'bg-white hover:bg-gray-100'}`}
                  >
                    {/* Button background shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    
                    {/* Button content */}
                    <div className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            →
                          </motion.div>
                        </>
                      )}
                    </div>

                    {/* Loading progress bar */}
                    {isSubmitting && (
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2 }}
                        className="absolute bottom-0 left-0 h-1 bg-black/10"
                      />
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 