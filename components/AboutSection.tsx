"use client"

import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl -rotate-6 opacity-20"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-2 border border-slate-700/50">
                <img
                  src="/images/profile-pic.jpg"
                  alt="Pankaj Makwana"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">Hello, I'm Pankaj Makwana</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                A passionate full-stack developer and designer from Rajkot with over 12 years of experience specializing
                in PHP, Laravel, CodeIgniter, Angular, ReactJS, VueJS, NextJS, NuxtJS, Webflow, Shopify, and
                SquareSpace.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                With a keen eye for design and a strong technical background, I enjoy crafting seamless and visually
                appealing web experiences. Currently, I'm delving deeper into the world of ReactNative and expanding my
                expertise in modern web technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="text-3xl font-bold text-pink-400 mb-2">12+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Full-Stack Development", "UI/UX Design", "Freelance Expert", "Team Leadership"].map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-slate-800/50 text-slate-300 border border-slate-700/50 px-4 py-2"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
