import { HeroSection } from "../../components/sections/hero-section"
import { WhatWeDo } from "../../components/sections/what-we-do"
import { HowWeWork } from "../../components/sections/how-we-work"
import { Highlights } from "../../components/sections/highlights"
import { Features } from "../../components/sections/features"
import { CTAButton } from "../../components/ui/cta-button"
import { TechStack } from "../../components/sections/tech-stack"
import { Footer } from "../../components/sections/footer"

export default function Home() {
  return (
    <main className="bg-[#111111] text-white">
      <HeroSection />
      <div className="-mt-24 sm:-mt-32">
        <Highlights />
      </div>
      <WhatWeDo />
      <HowWeWork />
      <TechStack />
      <Features />
      <div className="flex items-center justify-center py-24">
        <CTAButton text="Reach Out Here" />
      </div>
      <Footer />
    </main>
  )
}

