"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface Education {
  degree: string
  short: string
  period: string
  icon: LucideIcon
  description: string
}

interface EducationCardProps {
  education: Education
  index: number
}

export default function EducationCard({ education, index }: EducationCardProps) {
  const Icon = education.icon

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
                <h3 className="text-xl font-semibold text-white mb-2">{education.degree}</h3>
                <p className="text-purple-400 font-medium text-lg">{education.short}</p>
              </div>
              <div>
                <Badge variant="outline" className="border-pink-400 text-pink-400">
                  {education.period}
                </Badge>
              </div>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">{education.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
