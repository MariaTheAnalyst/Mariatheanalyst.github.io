document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    { threshold: 0.1 },
  )

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el)
  })

  // Particle animation for hero section
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
})
