"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Create particles for background effect
    const createParticles = () => {
      const particles = document.querySelector(".particles")
      if (!particles) return

      particles.innerHTML = ""

      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div")
        particle.className = "particle"

        // Random position
        const posX = Math.random() * 100
        const posY = Math.random() * 100

        // Random size
        const size = Math.random() * 15 + 5

        // Random opacity
        const opacity = Math.random() * 0.5 + 0.1

        // Random animation delay
        const delay = Math.random() * 5

        particle.style.left = `${posX}%`
        particle.style.top = `${posY}%`
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.opacity = `${opacity}`
        particle.style.animationDelay = `${delay}s`

        particles.appendChild(particle)
      }
    }

    createParticles()

    // Handle window resize
    window.addEventListener("resize", createParticles)
    return () => window.removeEventListener("resize", createParticles)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg">
      <div className="particles"></div>
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Transforming data into
              <span className="block mt-2">decisions that matter.</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              I'm Maria the Analyst, a Salvadoran-born engineer and aspiring analytics leader.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#about"
                className="bg-white text-primary-700 hover:bg-primary-50 px-6 py-3 rounded-full font-medium transition-colors"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/30">
              <Image
                src="/maria-headshot.png"
                alt="Maria the Analyst"
                fill
                className="object-cover object-top scale-[0.85]"
                priority
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-white" size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}
