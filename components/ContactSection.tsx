"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MessageCircle, ExternalLink } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with professional web development
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Get in touch</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you need a full-stack web
                application or want to discuss your next big idea, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div
                className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
                onClick={() => window.open("mailto:imail2pankaj@gmail.com", "_blank")}
              >
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <Mail className="text-purple-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="text-white hover:text-purple-400 transition-colors">imail2pankaj@gmail.com</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-pink-400/50 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open("tel:+919427940785", "_blank")}
                >
                  <div className="p-3 bg-pink-500/20 rounded-xl">
                    <Phone className="text-pink-400" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Phone</div>
                    <div className="text-white hover:text-pink-400 transition-colors text-sm">+91 9427940785</div>
                  </div>
                </div>

                <div
                  className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open("https://wa.me/919427940785", "_blank")}
                >
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <MessageCircle className="text-green-400" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">WhatsApp</div>
                    <div className="text-white hover:text-green-400 transition-colors text-sm">Chat Now</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white backdrop-blur-sm bg-transparent"
                    onClick={() => window.open("https://github.com/imail2pankaj", "_blank")}
                  >
                    <Github size={20} className="mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white backdrop-blur-sm bg-transparent"
                    onClick={() => window.open("https://www.linkedin.com/in/the-pankaj-makwana/", "_blank")}
                  >
                    <Linkedin size={20} className="mr-2" />
                    LinkedIn
                  </Button>
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white backdrop-blur-sm bg-transparent"
                    onClick={() => window.open("https://www.upwork.com/freelancers/~0166b9147d25ba756b", "_blank")}
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Upwork
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white backdrop-blur-sm bg-transparent"
                    onClick={() => window.open("https://contra.com/pankaj_makwana/", "_blank")}
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Contra
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
