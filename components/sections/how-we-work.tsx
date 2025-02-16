"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  color: string
}

const projects: Project[] = [
  {
    title: "Healthier BT Solutions",
    description: "A comprehensive healthcare platform revolutionizing patient care and medical services.",
    image: "/projects/healthier.jpg",
    tags: ["Next.js", "TailwindCSS", "Supabase"],
    link: "https://healthierbtsolutions.com",
    color: "from-blue-500/20 via-blue-500/10 to-transparent"
  },
  {
    title: "Thomisia Travel & Tour",
    description: "Modern travel platform showcasing destinations and seamless booking experiences.",
    image: "/projects/thomisia.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://thomisiatravelandtour.com",
    color: "from-amber-500/20 via-amber-500/10 to-transparent"
  },
  {
    title: "Atinka News",
    description: "Dynamic news platform delivering real-time updates with modern UI/UX.",
    image: "/projects/atinka.jpg",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    link: "https://atinkanews.net",
    color: "from-emerald-500/20 via-emerald-500/10 to-transparent"
  }
]

export function HowWeWork() {
  return (
    <section id="portfolio" className="relative bg-[#111111] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-sm bg-[#222] border border-[#333]"
          >
            Featured Projects
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium"
          >
            <span className="text-white">Recent</span>{" "}
            <span className="text-gray-500">Work</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-[#161616] rounded-2xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                  {/* Project Image */}
                  <div className="w-full md:w-1/2 aspect-video relative rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="w-full md:w-1/2 space-y-6">
                    <h3 className="text-2xl sm:text-3xl text-white">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 rounded-full text-sm bg-white/5 text-gray-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

