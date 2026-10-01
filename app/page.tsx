"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import AnimatedBackground from "@/components/AnimatedBackground"
import HeroSection from "@/components/HeroSection"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSection from "@/components/ProjectsSection"
import ExperienceSection from "@/components/ExperienceSection"
import AboutSection from "@/components/AboutSection"
import EducationSection from "@/components/EducationSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "experience", "about", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      <AnimatedBackground mousePosition={mousePosition} />
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
