"use client"

import { useEffect, useRef } from "react"
import { Quote } from "lucide-react"

export default function RecommendationsSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  const testimonials = [
    {
      quote:
        "Maria's analytical skills and dedication to data-driven decision making have been invaluable to our team. Her ability to transform complex data into actionable insights is remarkable.",
      author: "Daniel Gabay",
      title: "CEO, Inttrend Global Corp",
    },
    {
      quote:
        "I've had the pleasure of working with Maria on several projects. Her attention to detail and innovative approach to problem-solving consistently lead to exceptional results.",
      author: "Sarabdeep Singh",
      title: "Data Science Lead",
    },
    {
      quote:
        "Maria brings a unique perspective to analytics, combining technical expertise with a deep understanding of business needs. Her work has directly contributed to our operational improvements.",
      author: "Mayra Rodas",
      title: "Senior Business Analyst",
    },
    {
      quote:
        "As a colleague, Maria exemplifies professionalism and excellence. Her commitment to continuous learning and growth inspires everyone around her.",
      author: "Rene Fernando Salas Ibañez",
      title: "Project Manager",
    },
  ]

  return (
    <section id="recommendations" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title animate-on-scroll">Recommendations</h2>
        <p className="text-gray-600 max-w-3xl mb-12 animate-on-scroll">
          What colleagues and mentors have to say about working with me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 relative animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-12 w-12 text-primary-100 absolute top-6 left-6" />
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-6 pt-8 pl-6">"{testimonial.quote}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
