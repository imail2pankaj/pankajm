"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  github: string
  live: string
  category: string
  featured: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
  featured: boolean
}

export default function ProjectCard({ project, index, featured }: ProjectCardProps) {
  return (
    <Card
      className={`bg-slate-800/30 backdrop-blur-sm border-slate-700/50 overflow-hidden group hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 ${featured ? "ring-2 ring-purple-500/20" : ""}`}
    >
      <div className="relative overflow-hidden">
        <Image
          loading="lazy"
          height="80"
          width="120"
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge variant="secondary" className="bg-slate-900/80 text-slate-300 backdrop-blur-sm">
            {project.category}
          </Badge>
          {featured && <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Live</Badge>}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-3">
            {project.github !== "#" && (
              <Button
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github size={16} className="mr-2" />
                Code
              </Button>
            )}
            {project.live !== "#" && (
              <Button
                size="sm"
                className="bg-purple-500 hover:bg-purple-600"
                onClick={() => window.open(project.live, "_blank")}
              >
                <ExternalLink size={16} className="mr-2" />
                Live
              </Button>
            )}
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
        <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
