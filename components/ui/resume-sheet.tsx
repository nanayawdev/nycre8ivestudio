"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Github, Linkedin, Twitter, Mail, Download } from "lucide-react"
import { CTAButton } from "./cta-button"
import Image from "next/image"
import { useState } from "react"

interface ResumeSheetProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeSheet({ isOpen, onClose }: ResumeSheetProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const response = await fetch('/resume.pdf')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = "NanaYawIsrael-Resume.pdf"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed right-0 top-0 z-50 h-screen w-full xs:w-[90%] sm:w-[440px] md:w-[500px] lg:w-[600px] bg-[#161616] shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-medium text-white">Resume</h2>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="h-[calc(100vh-5rem)] overflow-y-auto p-4 sm:p-6">
              <div className="space-y-8 sm:space-y-12">
                {/* About */}
                <section className="space-y-4 sm:space-y-6">
                  {/* Profile Image */}
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden">
                    <Image
                      src="/ny.jpg"
                      alt="Nana Yaw Israel"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 96px, 128px"
                      priority
                    />
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl text-white">Nana Yaw Israel</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      Full-stack developer with expertise in modern web technologies and a passion for creating exceptional digital experiences.
                    </p>
                  </div>

                  {/* Social Media Links */}
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href="https://github.com/nanayawisrael"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/nanayawisrael"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com/nanayawisrael"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:nanayawisrael@gmail.com"
                      className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </section>

                {/* Experience */}
                <section className="space-y-6">
                  <h3 className="text-lg text-white/80">Experience</h3>
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <h4 className="text-white">Freelance Developer</h4>
                        <span className="text-gray-500">2020 - Present</span>
                      </div>
                      <p className="text-gray-400">Building custom web solutions and digital experiences for clients worldwide.</p>
                    </div>
                    {/* Add more experience items */}
                  </div>
                </section>

                {/* Skills */}
                <section className="space-y-6">
                  <h3 className="text-lg text-white/80">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React", "Next.js", "TypeScript", "Node.js",
                      "TailwindCSS", "PostgreSQL", "AWS", "Git"
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-white/5 text-gray-300 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section className="space-y-6">
                  <h3 className="text-lg text-white/80">Education</h3>
                  <div className="space-y-2">
                    <h4 className="text-white">Computer Science</h4>
                    <p className="text-gray-400">University of Ghana, 2016-2020</p>
                  </div>
                </section>

                {/* Contact */}
                <section className="space-y-6">
                  <h3 className="text-lg text-white/80">Contact</h3>
                  <div className="space-y-4">
                    <div className="space-y-2 text-gray-400">
                      <p>nanayawisrael@gmail.com</p>
                      <p>+233 599 326 736</p>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="pt-4">
                      <CTAButton text="Let's Work Together" />
                    </div>
                  </div>
                </section>

                {/* Download Resume Button */}
                <div className="pt-6">
                  <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isDownloading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Download Resume
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 