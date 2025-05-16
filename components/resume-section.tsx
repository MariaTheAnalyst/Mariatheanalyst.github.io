"use client"

import { useEffect, useRef } from "react"
import { FileText, Briefcase, GraduationCap, Download } from "lucide-react"

export default function ResumeSection() {
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

  const experiences = [
    {
      title: "Business Analyst Consultant",
      company: "Healthcare Clinics, Dallas, TX",
      period: "May 2025 - Present",
      description:
        "Deliver data-driven insights and lead analytics projects evaluating weekend clinic hours, assessing patient volume, staffing, and resource allocation.",
    },
    {
      title: "IT/AV Support",
      company: "University of Dallas, Irving, TX",
      period: "Oct 2023 - Present",
      description:
        "Resolved data discrepancies in inventory software, improving data integrity. Prepared and configured new equipment for faculty, ensuring seamless onboarding and readiness.",
    },
    {
      title: "Media Buyer TCCC",
      company: "EssenceMediacom, San Salvador, El Salvador",
      period: "June 2022 - July 2023",
      description:
        "Analyzed advertising campaign data to optimize strategies and improve ROI. Created detailed post-campaign reports for Coca-Cola Company Costa Rica to guide future marketing efforts.",
    },
    {
      title: "Senior Regional Buyer",
      company: "Almacenes Siman, San Salvador, El Salvador",
      period: "April 2019 - May 2022",
      description:
        "Two-time recipient of the Almacenes Siman Excellence Award for surpassing sales and inventory optimization targets. Spearheaded initiatives that resulted in a 45% increase in sales revenue and 55% gross margin growth.",
    },
  ]

  const education = [
    {
      degree: "MS in Business Analytics",
      institution: "University of Dallas, Irving, TX",
      period: "Expected November 2025",
      description: "Focusing on advanced analytics, data visualization, and business intelligence.",
    },
    {
      degree: "BS in Industrial Engineering",
      institution: "Universidad Dr. José Matías Delgado, El Salvador",
      period: "October 2012",
      description: "Specialized in process optimization and operational efficiency.",
    },
  ]

  return (
    <section id="resume" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="section-title animate-on-scroll">Resume</h2>
          <a
            href="https://mariatheanalyst.github.io/Maria%20G%20Resume%202025%20Final%20version%20May.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 md:mt-0 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors animate-on-scroll"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary-600 rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                  <p className="text-primary-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            </div>

            <div className="space-y-8 mb-12">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary-600 rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                  <p className="text-primary-600 font-medium">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Leadership</h3>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-primary-200 pl-5 relative">
                <div className="absolute w-3 h-3 bg-primary-600 rounded-full -left-[7px] top-1.5"></div>
                <h4 className="text-xl font-semibold text-gray-800">President</h4>
                <p className="text-primary-600 font-medium">
                  Information Systems Security Association (ISSA), University of Dallas Subchapter
                </p>
                <p className="text-sm text-gray-500 mb-2">Aug 2024 - Present</p>
              </div>

              <div className="border-l-2 border-primary-200 pl-5 relative">
                <div className="absolute w-3 h-3 bg-primary-600 rounded-full -left-[7px] top-1.5"></div>
                <h4 className="text-xl font-semibold text-gray-800">Board Member, Project Manager</h4>
                <p className="text-primary-600 font-medium">International Students Association, University of Dallas</p>
                <p className="text-sm text-gray-500 mb-2">Aug 2024 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
