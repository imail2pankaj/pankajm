"use client"

import { Code, Palette, Server, Database, Globe } from "lucide-react"
import SkillBar from "./SkillBar"

const skills = [
  { name: "HTML, CSS", percentage: 95, icon: Code, color: "from-orange-400 to-red-500" },
  { name: "PHP", percentage: 95, icon: Server, color: "from-purple-400 to-indigo-600" },
  { name: "WEB DESIGN", percentage: 85, icon: Palette, color: "from-pink-400 to-rose-500" },
  { name: "LARAVEL", percentage: 80, icon: Database, color: "from-red-400 to-orange-500" },
  { name: "NODEJS", percentage: 75, icon: Server, color: "from-green-400 to-emerald-600" },
  { name: "WordPress", percentage: 75, icon: Globe, color: "from-blue-400 to-cyan-500" },
  { name: "REACTJS / NEXTJS", percentage: 70, icon: Code, color: "from-cyan-400 to-blue-500" },
  { name: "VUE.JS / NUXT.JS", percentage: 70, icon: Code, color: "from-emerald-400 to-green-500" },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-4 bg-slate-900/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Proven skills in modern technologies that deliver results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
