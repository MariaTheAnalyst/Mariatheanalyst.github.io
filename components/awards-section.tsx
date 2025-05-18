"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Award, Star, Trophy } from "lucide-react"

export default function AwardsSection() {
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

  const awards = [
    {
      title: "Dr. Keith Davis Graduate Scholar Award",
      date: "May 2025",
      description:
        "Recognized for academic excellence and research in pediatric healthcare AI through the 'PediMinds' project.",
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      image: "/sie-induction-new.jpeg",
    },
    {
      title: "Intelligage AI Agent Hackathon Winner",
      date: "October 2024",
      description:
        "Won first place for creating an AI agent 'PediMinds' that screens children for depression based on the PHQ-9 screener and provides resources for help.",
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      image: "/hackathon-winner.png",
    },
    {
      title: "Sigma Iota Epsilon (SIE) Inductee",
      date: "March 2024",
      description:
        "Inducted into the Sigma Iota Epsilon University of Dallas Chapter for outstanding academic performance.",
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      image: "/SIE-induction-MG.jpeg",
      link: "https://udallas.edu/academics/colleges-schools/college-of-business/students/student-orgs/ud-information-systems-security-association.php",
    },
    {
      title: "Women in STEM Leadership Member",
      date: "2023",
      description:
        "Selected as a student member of Women in STEM Leadership, promoting diversity and excellence in STEM fields.",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      image: "/women-in-stem.png",
    },
    {
      title: "ISSA Subchapter President",
      date: "2024",
      description:
        "Leading the Information Systems Security Association (ISSA) University of Dallas Subchapter, promoting cybersecurity awareness and education.",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      image: "/issa-group-new.jpeg",
      link: "https://udallas.edu/academics/colleges-schools/college-of-business/students/student-orgs/ud-information-systems-security-association.php",
    },
    {
      title: "Almacenes Siman Excellence Award",
      date: "2021",
      description:
        "Recognized for surpassing sales and inventory optimization targets, contributing to a 45% increase in sales revenue.",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      image: "/maria-award1.png",
    },
    {
      title: "Tops Crowley Award",
      date: "2015",
      description:
        "Awarded for exceptional performance, recognized for processing invoices with zero errors and the fastest turnaround time in the department.",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      image: "/crowley-award.png",
    },
  ]

  return (
    <section id="awards" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title animate-on-scroll">Awards & Honors</h2>
        <p className="text-gray-600 max-w-3xl mb-12 animate-on-scroll">
          Recognition for excellence in academics, professional achievements, and contributions to the field.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 w-full">
                <Image src={award.image || "/placeholder.svg"} alt={award.title} fill className="object-contain p-2" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  {award.icon}
                  <h3 className="text-xl font-bold text-gray-800 ml-3">{award.title}</h3>
                </div>
                <p className="text-primary-600 font-medium mb-2">{award.date}</p>
                <p className="text-gray-600">{award.description}</p>
                {award.link && (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 text-sm mt-2"
                  >
                    <span>Learn more</span>
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
