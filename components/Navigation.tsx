"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with Profile Image */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400/50">
              <img src="/images/profile-pic.jpg" alt="Pankaj Makwana" className="w-full h-full object-cover" />
            </div>
            <div className="text-xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Pankaj Makwana
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {["home", "skills", "projects", "experience", "about", "education", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleScrollToSection(item)}
                className={`px-4 py-2 rounded-full capitalize transition-all duration-300 ${
                  activeSection === item
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open Menu"
            className="md:hidden p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-xl">
            {["home", "skills", "projects", "experience", "about", "education", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleScrollToSection(item)}
                className="block w-full text-left py-3 px-4 capitalize text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
