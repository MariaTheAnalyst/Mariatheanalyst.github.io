"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, Github, MapPin, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
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

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    try {
      const response = await fetch("https://formspree.io/f/xleqnvkw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `Portfolio Contact from ${formData.name}`,
          _recipient: "mariaisagb27@gmail.com",
        }),
      })

      if (response.ok) {
        setFormStatus("success")
        setFormData({ name: "", email: "", message: "" })
        // Reset form status after 5 seconds
        setTimeout(() => setFormStatus("idle"), 5000)
      } else {
        setFormStatus("error")
        setTimeout(() => setFormStatus("idle"), 5000)
      }
    } catch (error) {
      setFormStatus("error")
      setTimeout(() => setFormStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding gradient-bg text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block animate-on-scroll">
          Get In Touch
          <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-white rounded"></span>
        </h2>
        <p className="max-w-3xl mb-12 text-white/90 animate-on-scroll">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <a href="mailto:mariaisagb27@gmail.com" className="text-white/80 hover:text-white transition-colors">
                    mariaisagb27@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Linkedin className="h-6 w-6 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/maria-gutierrez-69727b7a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    linkedin.com/in/maria-gutierrez-69727b7a
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Github className="h-6 w-6 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">GitHub</h3>
                  <a
                    href="https://github.com/MariaTheAnalyst"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    github.com/MariaTheAnalyst
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Location</h3>
                  <p className="text-white/80">Irving, TX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              {formStatus === "success" ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-md p-4 flex items-center mb-6">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                  <p>Thank you! Your message has been sent successfully.</p>
                </div>
              ) : formStatus === "error" ? (
                <div className="bg-red-500/20 border border-red-500/50 rounded-md p-4 flex items-center mb-6">
                  <AlertCircle className="h-5 w-5 mr-2 text-red-400" />
                  <p>There was an error sending your message. Please try again.</p>
                </div>
              ) : null}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className={`w-full bg-white text-primary-600 hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-colors ${
                    formStatus === "submitting" ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
