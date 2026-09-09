import { Link } from 'react-router-dom'
import { Linkedin, Instagram, Github, Mail, MapPin, Phone, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0f17] text-slate-200 border-t border-slate-800/90 overflow-hidden">
      {/* Top subtle silver-cyan gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 via-slate-400/30 to-transparent pointer-events-none" />

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3.5 mb-5 group inline-flex">
              <div className="p-2.5 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-cyan-500/10 group-hover:shadow-cyan-500/25 group-hover:scale-105 transition-all duration-300 flex items-center justify-center shrink-0">
                <img
                  src="/image.png"
                  alt="Autofy.ai"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl tracking-tight text-white block leading-none mb-1">
                  AUTOFY<span className="text-cyan-400">.AI</span>
                </span>
                <span className="text-xs text-cyan-400 font-semibold tracking-wider uppercase block">
                  Web Development Agency
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
              Premium AI & web engineering studio crafting digital experiences that drive real business growth.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/rathod-rahul-63ab542b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all duration-300 shadow-sm hover:scale-105"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.instagram.com/rathodspeaks1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-pink-500/50 flex items-center justify-center text-slate-300 hover:text-pink-400 transition-all duration-300 shadow-sm hover:scale-105"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://github.com/rathodrahul"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-sm hover:scale-105"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-bold text-white mb-6 text-xs tracking-widest uppercase border-b border-slate-800 pb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-sm bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)] inline-block"></span>
              Company
            </h4>
            <ul className="space-y-3.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="font-bold text-white mb-6 text-xs tracking-widest uppercase border-b border-slate-800 pb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-sm bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)] inline-block"></span>
              Services
            </h4>
            <ul className="space-y-3.5">
              {[
                'Web Development',
                'AI Automation',
                'SaaS Products',
                'Analytics & Dashboards',
                'Brand & Design',
                'Growth Strategy',
              ].map(s => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 text-xs tracking-widest uppercase border-b border-slate-800 pb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-sm bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)] inline-block"></span>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-cyan-400 transition-all duration-200 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:autofy07@gmail.com"
                  className="text-slate-200 group-hover:text-cyan-300 text-sm font-semibold transition-colors"
                >
                  autofy07@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-cyan-400 transition-all duration-200 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+919392472134"
                  className="text-slate-200 group-hover:text-cyan-300 text-sm font-semibold transition-colors"
                >
                  +91 93924 72134
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-cyan-400 transition-all duration-200 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-slate-200 text-sm font-semibold">
                  Hyderabad, Telangana, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm font-medium">
            © 2026 Autofy.ai Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/contact"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


