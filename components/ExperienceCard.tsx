"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  duration: string
  description: string
  skills: string[]
  icon: LucideIcon
}

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const Icon = experience.icon

  return (
    <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-shrink-0">
            <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/20">
              <Icon size={32} className="text-purple-400" />
            </div>
          </div>

          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{experience.title}</h3>
                <p className="text-purple-400 font-medium text-lg">{experience.company}</p>
              </div>
              <div>
                <Badge variant="outline" className="border-pink-400 text-pink-400">
                  {experience.period}
                </Badge>
              </div>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
