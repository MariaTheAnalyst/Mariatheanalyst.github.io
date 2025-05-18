"use client"

import { useEffect, useRef } from "react"
import { Database, Code, BarChart3, LineChart, PieChart, Layers } from "lucide-react"

export default function SkillsSection() {
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

  const skillCategories = [
    {
      title: "Data Analysis",
      icon: <BarChart3 className="h-8 w-8 text-primary-600" />,
      skills: ["SQL", "Excel", "Google BigQuery", "Alteryx", "Snowflake"],
    },
    {
      title: "Programming",
      icon: <Code className="h-8 w-8 text-primary-600" />,
      skills: ["Python", "Bash", "HTML/CSS", "JavaScript"],
    },
    {
      title: "Visualization",
      icon: <PieChart className="h-8 w-8 text-primary-600" />,
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
    },
    {
      title: "Machine Learning",
      icon: <Layers className="h-8 w-8 text-primary-600" />,
      skills: ["Scikit-learn", "XGBoost", "K-Nime Analytics", "Regression Models", "Classification"],
    },
    {
      title: "Databases",
      icon: <Database className="h-8 w-8 text-primary-600" />,
      skills: ["SQL Server", "Oracle Retail", "Google Cloud", "Asset Panda"],
    },
    {
      title: "Business Intelligence",
      icon: <LineChart className="h-8 w-8 text-primary-600" />,
      skills: ["Forecasting", "Time Series Analysis", "KPI Development", "Business Metrics"],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title animate-on-scroll">Skills</h2>
        <p className="text-gray-600 max-w-3xl mb-12 animate-on-scroll">
          My technical toolkit and expertise across various domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-800 ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md p-8 animate-on-scroll">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">All Skills</h3>
          <div className="flex flex-wrap justify-center">
            {[
              "Python",
              "SQL",
              "Alteryx",
              "Tableau",
              "Bash",
              "BigQuery",
              "Power BI",
              "Snowflake",
              "HTML/CSS",
              "GitHub",
              "Scikit-learn",
              "Excel",
              "Google Cloud",
              "K-Nime Analytics",
              "Oracle Retail",
              "Asset Panda",
              "Intelligage",
              "eclinicalworks",
              "Forecasting",
              "Time Series Analysis",
              "Classification",
              "Regression",
            ].map((skill, index) => (
              <span key={index} className="skill-tag m-1.5">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center animate-on-scroll">
          <a
            href="https://public.tableau.com/app/profile/maria.gutierrez7040/vizzes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
          >
            <span>View my Tableau Public Visualizations</span>
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
    </section>
  )
}
