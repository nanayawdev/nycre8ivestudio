"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown, Loader2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

const services = [
  "UI/UX Design",
  "Web Development",
  "Brand Identity",
  "Digital Marketing",
  "Collaboration",
  "Mentorship"
]

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isServiceOpen, setIsServiceOpen] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')

      toast.success('Message sent successfully!', {
        description: 'Check your email for confirmation. I\'ll get back to you soon.',
      })

      setFormData({
        email: "",
        phone: "",
        service: "",
        message: ""
      })
      
      onClose()
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Failed to send message', {
        description: 'Please try again or contact me directly via email.',
      })
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
                  <p className="text-sm sm:text-base text-gray-400">Let&apos;s discuss your project and make it happen.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-white/20 focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-white/20 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="service" className="block text-sm text-gray-400 mb-2">
                      Service Needed
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsServiceOpen(!isServiceOpen)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-left flex items-center justify-between text-white focus:border-white/20 focus:outline-none"
                    >
                      <span className={formData.service ? "text-white" : "text-gray-500"}>
                        {formData.service || "Select a service"}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServiceOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isServiceOpen && (
                      <div className="absolute z-50 w-full mt-2 py-2 rounded-xl bg-[#1a1a1a] border border-white/10 shadow-xl">
                        {services.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, service })
                              setIsServiceOpen(false)
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-white/5 transition-colors"
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-white/20 focus:outline-none"
                      rows={4}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl bg-white text-black hover:bg-gray-100 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 