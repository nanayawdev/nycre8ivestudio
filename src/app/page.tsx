import { Hero } from "../../components/ui/hero"
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
      <Hero />
      <Highlights />
      <WhatWeDo />
      <HowWeWork />
      <TechStack />
      <Features />
      <div className="flex items-center justify-center py-24">
        <CTAButton text="Let's Get Started" href="/contact" />
      </div>
      <Footer />
    </main>
  )
}

