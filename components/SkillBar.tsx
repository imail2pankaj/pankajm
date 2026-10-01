"use client"

import { useState, useEffect } from "react"
import type { LucideIcon } from "lucide-react"

interface Skill {
  name: string
  percentage: number
  icon: LucideIcon
  color: string
}

interface SkillBarProps {
  skill: Skill
  index: number
}

export default function SkillBar({ skill, index }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedPercentage, setAnimatedPercentage] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          const timer = setTimeout(() => {
            let current = 0
            const increment = skill.percentage / 50
            const animate = () => {
              current += increment
              if (current >= skill.percentage) {
                setAnimatedPercentage(skill.percentage)
              } else {
                setAnimatedPercentage(Math.floor(current))
                requestAnimationFrame(animate)
              }
            }
            animate()
          }, index * 100)

          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById(`skill-${index}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [skill.percentage, index])

  const Icon = skill.icon

  return (
    <div
      id={`skill-${index}`}
      className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-20`}>
            <Icon size={24} className="text-white" />
          </div>
          <span className="font-semibold text-lg text-white">{skill.name}</span>
        </div>
        <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {animatedPercentage}%
        </span>
      </div>
      <div className="w-full bg-slate-700/50 rounded-full h-2">
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${animatedPercentage}%` : "0%",
          }}
        ></div>
      </div>
    </div>
  )
}
