"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Calendar, ChevronDown } from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-300">Available for freelance work</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Pankaj
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Makwana
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer & Designer crafting exceptional digital experiences
          </p>

          <div className="flex items-center justify-center gap-4 text-slate-400 mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Rajkot, India</span>
            </div>
            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>12+ Years Experience</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-slate-600 bg-black text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 rounded-full text-lg font-medium backdrop-blur-sm"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-purple-400" />
      </div>
    </section>
  )
}
