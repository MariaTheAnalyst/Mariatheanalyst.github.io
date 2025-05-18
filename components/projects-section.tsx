"use client"

import { useEffect, useRef } from "react"
import { Brain, Database, LineChart, BarChart } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
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

  const projects = [
    {
      title: "PediMinds",
      description:
        "AI for pediatric mental health screening based on the PHQ-9 screener, providing resources for help. Winner of Intelligage AI Hackathon (1st place of 16 teams).",
      image: "/hackathon-winner.png",
      icon: <Brain className="h-10 w-10 text-primary-600" />,
      tags: ["AI", "Healthcare", "Python", "Mental Health"],
      videoId: "KMCEOtRH0rw",
      links: [
        {
          title: "University of Dallas News",
          url: "https://udallas.edu/news/2024/12-13-24-udallas-students-win-ai-hackathon.php",
        },
      ],
    },
    {
      title: "Medicare Fraud Detection",
      description:
        "Analyzed 19M+ Medicare records in BigQuery; flagged high-risk billing patterns by provider and code. Built fraud detection metrics for 'impossible workloads'.",
      image: "/placeholder.svg?height=300&width=500",
      icon: <Database className="h-10 w-10 text-primary-600" />,
      tags: ["BigQuery", "Data Analysis", "Healthcare", "Fraud Detection"],
    },
    {
      title: "Airline Forecasting with FRED",
      description:
        "Predicted Revenue Passenger Miles (RPM) using SARIMAX, Holt-Winters, ETS & VAR models. Included exogenous variables like CPI, income, and labor to improve model accuracy.",
      image: "/placeholder.svg?height=300&width=500",
      icon: <LineChart className="h-10 w-10 text-primary-600" />,
      tags: ["Forecasting", "Time Series", "R", "Aviation"],
    },
    {
      title: "Mental Health Classifier",
      description:
        "Explored factors impacting mental health using survey data (1,000+ responses); applied Logistic Regression, Random Forest, KNN, and XGBoost models.",
      image: "/placeholder.svg?height=300&width=500",
      icon: <BarChart className="h-10 w-10 text-primary-600" />,
      tags: ["Python", "Machine Learning", "Classification", "Healthcare"],
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title animate-on-scroll">Projects</h2>
        <p className="text-gray-600 max-w-3xl mb-12 animate-on-scroll">
          Here are some of the key projects I've worked on, showcasing my skills in data analysis, machine learning, and
          business intelligence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card animate-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
              {project.image && project.image.startsWith("/hackathon-winner") && (
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold text-gray-800 ml-4">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {project.videoId && (
                  <div className="mb-4 relative pt-[56.25%] w-full">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-md"
                      src={`https://www.youtube.com/embed/${project.videoId}`}
                      title={`${project.title} Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {project.links && project.links.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Related Links:</h4>
                    <ul className="space-y-1">
                      {project.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-800 text-sm inline-flex items-center"
                          >
                            <span>{link.title}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-1"
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
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
