"use client"

import { GraduationCap, Award } from "lucide-react"
import EducationCard from "./EducationCard"

const education = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    period: "2008-2011",
    icon: GraduationCap,
    description: "Advanced studies in computer applications and software development",
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    period: "2005-2008",
    icon: Award,
    description: "Foundation in computer science and programming fundamentals",
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-32 px-4 bg-slate-900/30 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Academic foundation and qualifications</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
