"use client"

import { Briefcase, Star, Code } from "lucide-react"
import ExperienceCard from "./ExperienceCard"

const experience = [
  {
    title: "Freelancer Designer and Developer",
    company: "Self Employed",
    period: "March 2021 - Present",
    duration: "3+ years",
    description:
      "Providing end-to-end web development services including custom website design, e-commerce solutions, and web application development for diverse clients across various industries.",
    skills: ["Web Design", "Full-Stack Development", "Client Management", "Project Planning"],
    icon: Briefcase,
  },
  {
    title: "Sr. Software Engineer",
    company: "Wings Tech Solutions",
    period: "2013 - 2021",
    duration: "8 years",
    description:
      "Led development teams in creating scalable web applications, mentored junior developers, and architected solutions for enterprise clients while maintaining high code quality standards.",
    skills: ["Team Leadership", "System Architecture", "Code Review", "Technical Mentoring"],
    icon: Star,
  },
  {
    title: "Software Engineer",
    company: "DNB Management Applications",
    period: "2012 - 2013",
    duration: "1 year",
    description:
      "Developed and maintained web applications, collaborated with cross-functional teams, and contributed to software design and implementation in an agile environment.",
    skills: ["Web Development", "Database Design", "API Integration", "Testing"],
    icon: Code,
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-4 bg-slate-900/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            12+ years of delivering exceptional results for clients and companies
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.title} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
