"use client"

import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "AgencyOra",
    description:
      "Direct discovery platform that connects businesses with manually vetted agencies without broker fees, lead-selling, or hidden contact details",
    tech: ["Next.js", "React.js", "Postgres", "Vercel", "Supabase"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agencyora-homepage-zI0oWLnxbaDtcUBuE2RuNjfv3FsdbV.png",
    github: "#",
    live: "https://agencyora.in",
    category: "Agency Platform",
    featured: true,
  },
  {
    title: "PitchGen",
    description:
      "AI-powered SaaS platform that helps startups create compelling pitch decks in minutes with intelligent content generation, design templates, and investor-ready exports",
    tech: ["AI", "React", "Ruby on Rails", "Next.js", "PostgreSQL", "SaaS"],
    image: "/images/pitchgen.jpg",
    github: "#",
    live: "https://pitchgen.io/",
    category: "SaaS Product",
    featured: true,
  },
  {
    title: "Phily AI",
    description:
      "AI-powered business phone assistant that operates 24/7 to handle inbound calls, manage bookings, capture leads, and prevent revenue loss from missed opportunities with advanced voice AI integration",
    tech: ["AI", "n8n", "Ruby on Rails", "Supabase", "ElevenLabs", "Retell", "React"],
    image: "/images/phily-ai.jpg",
    github: "#",
    live: "https://phily.lovable.app/",
    category: "SaaS Product",
    featured: true,
  },
  {
    title: "Strings Dating App",
    description:
      "Modern dating application with advanced matching algorithms, real-time chat, and user verification features",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "AWS"],
    image: "/images/strings.png",
    github: "#",
    live: "https://testthatsite.site",
    category: "Full-Stack App",
    featured: true,
  },
  {
    title: "Admin Strings Dating App",
    description:
      "Comprehensive admin dashboard for managing users, monitoring activities, and analytics for the dating platform",
    tech: ["React", "Node.js", "Charts.js", "Admin Panel"],
    image: "/images/strings-admin.png",
    github: "#",
    live: "https://admin.testthatsite.site",
    category: "Admin Dashboard",
    featured: true,
  },
  {
    title: "Super Vet Doc",
    description: "Veterinary management system for pet healthcare, appointment booking, and medical records management",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    image: "/images/super-vet-doc-foundation.jpg",
    github: "#",
    live: "https://supervetdoc.bg",
    category: "Healthcare Platform",
    featured: true,
  },
  {
    title: "Admin Super Vet Doc",
    description:
      "Administrative interface for veterinary clinic management, staff coordination, and business analytics",
    tech: ["Laravel", "PHP", "MySQL", "Admin Dashboard"],
    image: "/images/super-vet-doc-foundation.jpg",
    github: "#",
    live: "https://admin.supervetdoc.bg",
    category: "Admin Dashboard",
    featured: true,
  },
  {
    title: "Luxury Beauty Website",
    description:
      "Elegant e-commerce platform for luxury beauty products with modern design and seamless user experience",
    tech: ["Next.js", "React", "Tailwind CSS", "E-commerce"],
    image: "/placeholder.svg?height=250&width=400",
    github: "#",
    live: "https://luxurybeauty.vercel.app/",
    category: "E-commerce",
    featured: true,
  },
  {
    title: "Majmaah University",
    description:
      "Educational gaming platform for university students to participate in competitions and play educational games",
    tech: ["Laravel", "VueJS", "MySQL"],
    image: "/images/maajmah.jpg",
    github: "#",
    live: "https://majmaah.01skills.com/web/",
    category: "Educational Platform",
    featured: true,
  },
  {
    title: "Saudi WRO-V",
    description:
      "Educational gaming platform for students to participate in robotics competitions and play educational games",
    tech: ["Laravel", "VueJS", "MySQL"],
    image: "/images/saudi-wrov.jpg",
    github: "#",
    live: "https://saudi.wro-v.com/web/",
    category: "Educational Platform",
    featured: true,
  },
  {
    title: "Best Buy Website Deal",
    description:
      "Budget-friendly, professional websites that help businesses grow and succeed online with modern design solutions",
    tech: ["Bootstrap", "Figma", "PHP"],
    image: "/images/bestbuy.jpg",
    github: "#",
    live: "https://www.best-buy.in/",
    category: "Business Website",
    featured: true,
  },
  {
    title: "Mind Talk",
    description:
      "Mental health platform for navigating therapy with expert professionals, redefining thoughts that shape your life",
    tech: ["Webflow", "Figma"],
    image: "/images/mind-talk.jpg",
    github: "#",
    live: "https://www.mindtalk.in/",
    category: "Healthcare Platform",
    featured: true,
  },
  {
    title: "Cadabams",
    description:
      "Leading psychiatric and mental health hospital in Bangalore for comprehensive treatment of mental disorders and diseases",
    tech: ["Webflow", "Figma"],
    image: "/images/cadabams.jpg",
    github: "#",
    live: "https://www.cadabams.org/",
    category: "Healthcare Platform",
    featured: true,
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real applications serving users worldwide - click to explore
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} featured={true} />
          ))}
        </div>
      </div>
    </section>
  )
}
