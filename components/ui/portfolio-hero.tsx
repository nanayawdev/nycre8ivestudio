"use client"

import type * as React from "react"
import { cn } from "../../lib/utils"
import { Mail } from "lucide-react"

interface PortfolioHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  email?: string
  name?: string
  title?: string
  description?: string
  profileImage?: string
}

export function PortfolioHero({
  className,
  email = "hi@oguz.design",
  name = "Oguz",
  title = "Building digital products, brands, and experience.",
  description = "a Product Designer and Visual Developer in SF. I specialize in UI/UX Design, Responsive Web Design, and Visual Development.",
  profileImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-10%20at%209.38.32%E2%80%AFPM-PL0d5KcTozOqP3zlr8TdchqdYTMxaK.png",
  ...props
}: PortfolioHeroProps) {
  return (
    <div className={cn("min-h-screen bg-[#111111] text-white relative overflow-hidden", className)} {...props}>
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-[#111111]" />

        {/* Primary glow layer */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 animate-primary-glow"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,140,50,0.15) 0%, rgba(255,69,0,0.1) 25%, rgba(209,0,0,0.05) 50%, transparent 70%)",
            }}
          />
        </div>

        {/* Secondary glow layer */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 animate-secondary-glow"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,119,0,0.15) 0%, rgba(255,69,0,0.1) 25%, rgba(209,0,0,0.05) 50%, transparent 70%)",
            }}
          />
        </div>

        {/* Moving ember effects */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 animate-ember-1"
            style={{
              background: "radial-gradient(circle at 30% 40%, rgba(255,119,0,0.1), transparent 40%)",
              filter: "blur(50px)",
            }}
          />
          <div
            className="absolute inset-0 animate-ember-2"
            style={{
              background: "radial-gradient(circle at 70% 60%, rgba(255,69,0,0.1), transparent 40%)",
              filter: "blur(50px)",
            }}
          />
        </div>

        {/* Overlay to enhance contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center px-12 py-8">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5" />
            <span className="text-sm">{email}</span>
          </div>
          <div className="flex items-center space-x-12 text-sm">
            <a href="#works" className="hover:opacity-70 transition-opacity">
              Works
            </a>
            <a href="#resume" className="hover:opacity-70 transition-opacity">
              Resume
            </a>
            <a href="#services" className="hover:opacity-70 transition-opacity">
              Services
            </a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center px-4 text-center mt-24">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden mb-8 bg-white">
            <img src={profileImage || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
          </div>

          {/* Greeting */}
          <h2 className="text-2xl mb-8 tracking-tight">Hi, I'm {name}</h2>

          {/* Main Title */}
          <div className="relative max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight mb-8">{title}</h1>
          </div>

          {/* Description */}
          <p className="text-neutral-400 max-w-2xl text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

