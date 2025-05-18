"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Award, BookOpen, Lightbulb, Link } from "lucide-react"

export default function AboutSection() {
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

  const strengths = [
    {
      title: "Achiever",
      icon: <Award className="h-6 w-6 text-primary-600" />,
      description: "Driven by accomplishment and a strong work ethic",
    },
    {
      title: "Developer",
      icon: <Lightbulb className="h-6 w-6 text-primary-600" />,
      description: "Recognizing and cultivating potential in others",
    },
    {
      title: "Responsibility",
      icon: <BookOpen className="h-6 w-6 text-primary-600" />,
      description: "Taking psychological ownership of commitments",
    },
    {
      title: "Learner",
      icon: <BookOpen className="h-6 w-6 text-primary-600" />,
      description: "Continuous growth through acquiring new skills",
    },
    {
      title: "Connectedness",
      icon: <Link className="h-6 w-6 text-primary-600" />,
      description: "Believing in the interconnectedness of all things",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title animate-on-scroll">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="animate-on-scroll">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/maria-professional2.png"
                  alt="Maria the Analyst with colleagues"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-primary-50 p-3 text-sm text-gray-700">
                My first job at Crowley with a great leader, Tom Crowley.
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              I'm Maria the Analyst, a Salvadoran-born engineer and aspiring analytics leader.
            </h3>
            <p className="text-gray-600 mb-6">
              I believe in using data with purpose. As an Industrial Engineer pursuing a Master of Science in Business
              Analytics at the University of Dallas, I'm committed to transforming data into meaningful decisions that
              drive impact in healthcare, business, and society.
            </p>
            <p className="text-gray-600 mb-6">
              My journey as an immigrant woman in tech has shaped my perspective and fueled my passion for using
              analytics to solve complex problems and create positive change.
            </p>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">My Strengths</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="mt-1">{strength.icon}</div>
                    <div>
                      <h5 className="font-medium text-gray-800">{strength.title}</h5>
                      <p className="text-sm text-gray-600">{strength.description}</p>
                    </div>
                  </div>
                ))}
                <div className="mt-6">
                  <a
                    href="https://udallas.edu/academics/programs/cybersecurity/center-for-cybersecurity/cybersecurity-competitions.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                  >
                    <span>Learn about UD Cybersecurity Competitions</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
