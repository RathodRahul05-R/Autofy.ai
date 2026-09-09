import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView, animate, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Globe, Zap, Code2, Sparkles, ChevronRight,
  Database, Cpu, ClipboardList, Lightbulb, Hammer, Rocket,
  CheckCheck, Star, Quote, TrendingUp, Shield, Users, Award,
  MessageSquare, Play, Check
} from 'lucide-react'
import HeroVisual from '../components/HeroVisual'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

// ─── 1. HERO ─────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-50 to-indigo-50 blur-[120px] opacity-80" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-indigo-50 to-teal-50 blur-[100px] opacity-60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] gap-12 lg:gap-16 items-center">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="text-left">
            <motion.div variants={fadeUp} className="mb-6 inline-flex">
              <span className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold px-4 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-teal-500 animate-pulse" />
                Website Development & AI Automation
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display font-bold text-slate-900 leading-[1.08] mb-6 tracking-tight" style={{ fontSize: 'clamp(38px, 5.5vw, 68px)' }}>
              Automate. Elevate.<br />
              <span className="bg-gradient-to-r from-teal-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">Scale Your Business.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-light">
              We build premium websites, AI automations, and scalable software that help ambitious businesses grow faster.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mt-2">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-semibold text-base text-white tracking-wide transition-all duration-300 bg-slate-900 hover:bg-slate-800 shadow-[0_8px_25px_rgba(15,23,42,0.18)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.28)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link
                to="/websites"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-base text-slate-900 tracking-wide bg-white border-2 border-slate-200 hover:border-slate-800 hover:bg-slate-50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>See Our Work</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 pt-2 flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" alt="Priya Sharma" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=100&auto=format&fit=crop&q=80" alt="Kiran Reddy" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop&q=80" alt="Arjun Mehta" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80" alt="Sneha Patel" />
              </div>
              <p className="text-xs text-slate-600 font-medium">
                <strong className="font-semibold text-slate-900">Trusted by 30+ Businesses</strong> for web dev & AI.
              </p>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} className="w-full relative z-10">
            <div className="relative rounded-[28px] border border-slate-200/60 bg-white p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <HeroVisual />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



// ─── 3. SERVICES SNAPSHOT ────────────────────────────────────────────────────
const serviceCards = [
  { emoji: '🌐', title: 'Web Development', desc: 'High-performance websites and web apps built with Next.js, React. SEO-ready and blazing fast.', color: 'from-teal-400 to-emerald-500', light: 'bg-teal-50', hoverBg: 'hover:bg-teal-50/50', hoverBorder: 'hover:border-teal-300', shadowGlow: 'hover:shadow-[0_16px_36px_rgba(13,148,136,0.14)]' },
  { emoji: '🤖', title: 'AI Automation', desc: 'Intelligent workflows that eliminate repetitive tasks and connect your tools seamlessly.', color: 'from-violet-400 to-purple-500', light: 'bg-violet-50', hoverBg: 'hover:bg-violet-50/50', hoverBorder: 'hover:border-violet-300', shadowGlow: 'hover:shadow-[0_16px_36px_rgba(139,92,246,0.14)]' },
  { emoji: '📱', title: 'SaaS Products', desc: 'Ready-to-launch SaaS tools with auth, payments, and scalable cloud infrastructure.', color: 'from-blue-400 to-indigo-500', light: 'bg-blue-50', hoverBg: 'hover:bg-blue-50/50', hoverBorder: 'hover:border-blue-300', shadowGlow: 'hover:shadow-[0_16px_36px_rgba(59,130,246,0.14)]' },
  { emoji: '📊', title: 'Analytics & Dashboards', desc: 'Real-time data dashboards turning business metrics into clear, actionable insights.', color: 'from-amber-400 to-orange-500', light: 'bg-amber-50', hoverBg: 'hover:bg-amber-50/50', hoverBorder: 'hover:border-amber-300', shadowGlow: 'hover:shadow-[0_16px_36px_rgba(245,158,11,0.14)]' },
  { emoji: '🎨', title: 'Brand & Design', desc: 'Logo, identity, and creative strategy that makes your business unforgettable.', color: 'from-pink-400 to-rose-500', light: 'bg-pink-50', hoverBg: 'hover:bg-pink-50/50', hoverBorder: 'hover:border-pink-300', shadowGlow: 'hover:shadow-[0_16px_36px_rgba(236,72,153,0.14)]' },
  { emoji: '🚀', title: 'Growth Strategy', desc: 'SEO, content, and digital growth campaigns designed to attract and convert ideal customers.', color: 'from-emerald-400 to-teal-500', light: 'bg-emerald-50', hoverBg: 'hover:bg-emerald-50/50', hoverBorder: 'hover:border-emerald-300', shadowGlow: 'hover:shadow-[0_16px_36px_rgba(16,185,129,0.14)]' },
]

function ServicesSnapshot() {
  return (
    <section className="py-28 bg-transparent border-t border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-50/50 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3 block">What We Offer</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 leading-tight">
            Services Built to <span className="gradient-text">Scale Your Business</span>
          </h2>
          <p className="text-slate-500 mt-4 text-base leading-relaxed">
            From design to deployment — everything you need to dominate your market online.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.25 } }}
              className={`group bg-white ${s.hoverBg} border border-slate-200/80 ${s.hoverBorder} rounded-3xl p-7 shadow-sm ${s.shadowGlow} transition-all duration-300 relative overflow-hidden flex flex-col justify-between`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div>
                <div className={`w-14 h-14 rounded-2xl ${s.light} flex items-center justify-center mb-5 text-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}>
                  {s.emoji}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-slate-950 transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">{s.desc}</p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 group-hover:text-teal-700 transition-colors group/link">
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-teal-300 hover:text-teal-700 transition-all duration-300">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── 4. HOW IT WORKS ─────────────────────────────────────────────────────────
const steps = [
  { number: '01', icon: ClipboardList, title: 'Discovery & Scoping', desc: 'We begin with a focused intake session — mapping your goals, existing stack, user flows, and success metrics to define a clear project scope.', accent: 'teal', detail: '1–2 days' },
  { number: '02', icon: Lightbulb, title: 'Strategy & Architecture', desc: 'Our engineers design the technical blueprint — choosing the right stack, API integrations, and scalability patterns before a line of code is written.', accent: 'indigo', detail: '2–3 days' },
  { number: '03', icon: Hammer, title: 'Build & Iterate', desc: 'We develop in sprints with full transparency. You get live previews, weekly demos, and direct GitHub access throughout the build cycle.', accent: 'violet', detail: 'Ongoing sprints' },
  { number: '04', icon: CheckCheck, title: 'QA & Optimisation', desc: 'Every deliverable goes through rigorous performance profiling, cross-device QA, accessibility checks, and load testing before handoff.', accent: 'amber', detail: '2–4 days' },
  { number: '05', icon: Rocket, title: 'Launch & Support', desc: 'We deploy to your preferred infrastructure and remain on call for the first 30 days post-launch with zero extra cost.', accent: 'teal', detail: 'Ongoing' },
]

const accentMap = {
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-200',   activeBorder: 'border-teal-400/90 shadow-[0_15px_45px_rgba(20,184,166,0.22)] ring-2 ring-teal-400/30',   icon: 'text-teal-600',   num: 'text-teal-400/20', activeNum: 'text-teal-500 font-extrabold opacity-100 scale-110 drop-shadow-[0_0_12px_rgba(45,212,191,0.6)]', badge: 'bg-teal-50 text-teal-700 border-teal-200' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', activeBorder: 'border-indigo-400/90 shadow-[0_15px_45px_rgba(99,102,241,0.22)] ring-2 ring-indigo-400/30', icon: 'text-indigo-600', num: 'text-indigo-400/20', activeNum: 'text-indigo-500 font-extrabold opacity-100 scale-110 drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]', badge: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', activeBorder: 'border-violet-400/90 shadow-[0_15px_45px_rgba(139,92,246,0.22)] ring-2 ring-violet-400/30', icon: 'text-violet-600', num: 'text-violet-400/20', activeNum: 'text-violet-500 font-extrabold opacity-100 scale-110 drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]', badge: 'bg-violet-50 text-violet-700 border-violet-200' },
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-200',  activeBorder: 'border-amber-400/90 shadow-[0_15px_45px_rgba(245,158,11,0.22)] ring-2 ring-amber-400/30',   icon: 'text-amber-600',  num: 'text-amber-400/20',  activeNum: 'text-amber-500 font-extrabold opacity-100 scale-110 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]',  badge: 'bg-amber-50 text-amber-700 border-amber-200' },
}

function StepCard({ step, Icon, a, isActive }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.025 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className={`group relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-7 transition-all duration-500 max-w-md w-full overflow-hidden ${
        isActive
          ? `${a.activeBorder} scale-[1.02]`
          : 'border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-teal-400/80 hover:shadow-[0_20px_45px_rgba(20,184,166,0.18)]'
      }`}
    >
      {/* Top Accent Line */}
      <div className={`absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 transition-opacity duration-500 ${
        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`} />

      {/* Step Number Watermark */}
      <span className={`absolute top-2.5 sm:top-5 right-3 sm:right-6 font-display font-black text-2xl sm:text-6xl leading-none select-none pointer-events-none transition-all duration-500 ${
        isActive ? a.activeNum : `${a.num} group-hover:scale-110 group-hover:text-teal-500/30`
      }`}>
        {step.number}
      </span>

      <div className="relative z-10">
        <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${a.bg} border ${a.border} flex items-center justify-center mb-2.5 sm:mb-5 shadow-sm transition-all duration-500 ${
          isActive ? 'rotate-6 scale-110 ring-2 ring-teal-400/40 shadow-md' : 'group-hover:rotate-6 group-hover:scale-110'
        }`}>
          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${a.icon}`} />
        </div>
        
        <h3 className={`font-display font-bold text-sm sm:text-xl mb-1.5 sm:mb-2 transition-colors leading-tight ${
          isActive ? 'text-teal-700' : 'text-slate-900 group-hover:text-teal-700'
        }`}>
          {step.title}
        </h3>
        
        <p className="hidden sm:block text-slate-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 font-normal">
          {step.desc}
        </p>

        <span className={`inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border ${a.badge}`}>
          <span className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-current ${isActive ? 'animate-ping opacity-100' : 'opacity-60 animate-pulse'}`} />
          {step.detail}
        </span>
      </div>
    </motion.div>
  )
}

function HowItWorks() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 85%']
  })

  const pathLength = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })

  // Animated scroll progress signals for each of the 5 steps
  const step1ActiveVal = useTransform(scrollYProgress, [0.0, 0.15], [0, 1])
  const step2ActiveVal = useTransform(scrollYProgress, [0.15, 0.35], [0, 1])
  const step3ActiveVal = useTransform(scrollYProgress, [0.35, 0.55], [0, 1])
  const step4ActiveVal = useTransform(scrollYProgress, [0.55, 0.75], [0, 1])
  const step5ActiveVal = useTransform(scrollYProgress, [0.75, 0.95], [0, 1])

  // Animated sight line laser beam paths shooting out as scroll arrives at each step
  const sightLine1 = useTransform(scrollYProgress, [0.0, 0.12], [0, 1])
  const sightLine2 = useTransform(scrollYProgress, [0.15, 0.32], [0, 1])
  const sightLine3 = useTransform(scrollYProgress, [0.35, 0.52], [0, 1])
  const sightLine4 = useTransform(scrollYProgress, [0.55, 0.72], [0, 1])
  const sightLine5 = useTransform(scrollYProgress, [0.75, 0.92], [0, 1])

  const sightLineSpring1 = useSpring(sightLine1, { stiffness: 120, damping: 20 })
  const sightLineSpring2 = useSpring(sightLine2, { stiffness: 120, damping: 20 })
  const sightLineSpring3 = useSpring(sightLine3, { stiffness: 120, damping: 20 })
  const sightLineSpring4 = useSpring(sightLine4, { stiffness: 120, damping: 20 })
  const sightLineSpring5 = useSpring(sightLine5, { stiffness: 120, damping: 20 })

  const [activeSteps, setActiveSteps] = useState([true, false, false, false, false])

  useEffect(() => {
    const u1 = step1ActiveVal.on('change', v => setActiveSteps(p => [v > 0.2, p[1], p[2], p[3], p[4]]))
    const u2 = step2ActiveVal.on('change', v => setActiveSteps(p => [p[0], v > 0.2, p[2], p[3], p[4]]))
    const u3 = step3ActiveVal.on('change', v => setActiveSteps(p => [p[0], p[1], v > 0.2, p[3], p[4]]))
    const u4 = step4ActiveVal.on('change', v => setActiveSteps(p => [p[0], p[1], p[2], v > 0.2, p[4]]))
    const u5 = step5ActiveVal.on('change', v => setActiveSteps(p => [p[0], p[1], p[2], p[3], v > 0.2]))

    return () => { u1(); u2(); u3(); u4(); u5(); }
  }, [step1ActiveVal, step2ActiveVal, step3ActiveVal, step4ActiveVal, step5ActiveVal])

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-transparent border-t border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-teal-400/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-indigo-400/5 blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-20">
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3 block">Our Process</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight">
            How We Bring Your <span className="gradient-text">Vision to Life</span>
          </h2>
          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">A transparent five-stage process built for speed, quality, and zero surprises.</p>
        </div>

        {/* 3-Column Timeline Layout (Mobile & Desktop) */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Thick SVG Snake Curve Path spanning column 2 */}
          <div className="block absolute top-0 bottom-0 left-[calc(50%-30px)] sm:left-[calc(50%-50px)] md:left-[calc(50%-60px)] w-[60px] sm:w-[100px] md:w-[120px] pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 120 1000"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="home-snake-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              {/* Background Guide Line */}
              <path
                d="M 60 100 C 115 150, 115 250, 60 300 C 5 350, 5 450, 60 500 C 115 550, 115 650, 60 700 C 5 750, 5 850, 60 900"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="4"
                strokeDasharray="6 6"
              />

              {/* Horizontal Sight Lines Connecting Nodes to Cards */}
              <motion.path d="M 60 100 L 0 100" fill="none" stroke="#14b8a6" strokeWidth="3" strokeDasharray="5 5" style={{ pathLength: sightLineSpring1 }} className="drop-shadow-[0_0_10px_#14b8a6]" />
              <motion.path d="M 60 300 L 120 300" fill="none" stroke="#6366f1" strokeWidth="3" strokeDasharray="5 5" style={{ pathLength: sightLineSpring2 }} className="drop-shadow-[0_0_10px_#6366f1]" />
              <motion.path d="M 60 500 L 0 500" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="5 5" style={{ pathLength: sightLineSpring3 }} className="drop-shadow-[0_0_10px_#8b5cf6]" />
              <motion.path d="M 60 700 L 120 700" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="5 5" style={{ pathLength: sightLineSpring4 }} className="drop-shadow-[0_0_10px_#f59e0b]" />
              <motion.path d="M 60 900 L 0 900" fill="none" stroke="#14b8a6" strokeWidth="3" strokeDasharray="5 5" style={{ pathLength: sightLineSpring5 }} className="drop-shadow-[0_0_10px_#14b8a6]" />

              {/* Thicker Glowing Outer Aura Path */}
              <motion.path
                d="M 60 100 C 115 150, 115 250, 60 300 C 5 350, 5 450, 60 500 C 115 550, 115 650, 60 700 C 5 750, 5 850, 60 900"
                fill="none"
                stroke="url(#home-snake-gradient)"
                strokeWidth="20"
                strokeLinecap="round"
                opacity="0.35"
                style={{ pathLength }}
                className="drop-shadow-[0_0_20px_rgba(20,184,166,0.9)]"
              />

              {/* Main Thicker Snake Ribbon */}
              <motion.path
                d="M 60 100 C 115 150, 115 250, 60 300 C 5 350, 5 450, 60 500 C 115 550, 115 650, 60 700 C 5 750, 5 850, 60 900"
                fill="none"
                stroke="url(#home-snake-gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                style={{ pathLength }}
                className="drop-shadow-[0_0_16px_rgba(20,184,166,0.9)]"
              />

              {/* Inner Bright Energy Line */}
              <motion.path
                d="M 60 100 C 115 150, 115 250, 60 300 C 5 350, 5 450, 60 500 C 115 550, 115 650, 60 700 C 5 750, 5 850, 60 900"
                fill="none"
                stroke="#ffffff"
                strokeWidth="3"
                strokeDasharray="5 10"
                style={{ pathLength }}
              />

              {/* Traveling Energy Orb Aura */}
              <motion.circle
                r="15"
                fill="#2dd4bf"
                opacity="0.85"
                style={{
                  offsetPath: `path("M 60 100 C 115 150, 115 250, 60 300 C 5 350, 5 450, 60 500 C 115 550, 115 650, 60 700 C 5 750, 5 850, 60 900")`,
                  offsetDistance: useTransform(pathLength, [0, 1], ['0%', '100%'])
                }}
              />

              {/* Traveling Energy Orb Core */}
              <motion.circle
                r="7"
                fill="#ffffff"
                className="drop-shadow-[0_0_14px_#2dd4bf]"
                style={{
                  offsetPath: `path("M 60 100 C 115 150, 115 250, 60 300 C 5 350, 5 450, 60 500 C 115 550, 115 650, 60 700 C 5 750, 5 850, 60 900")`,
                  offsetDistance: useTransform(pathLength, [0, 1], ['0%', '100%'])
                }}
              />
            </svg>
          </div>

          <div className="space-y-8 sm:space-y-12 md:space-y-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const a = accentMap[step.accent] || accentMap.teal
              const isEven = idx % 2 === 0
              const isActive = activeSteps[idx]

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55 }}
                  className="grid grid-cols-[1fr_60px_1fr] sm:grid-cols-[1fr_100px_1fr] md:grid-cols-[1fr_120px_1fr] items-center"
                >
                  {/* Left Column */}
                  {isEven ? (
                    <div className="flex justify-end pr-1 sm:pr-4">
                      <StepCard step={step} Icon={Icon} a={a} isActive={isActive} />
                    </div>
                  ) : (
                    <div className="block" />
                  )}

                  {/* Center Node Icon with Dynamic Glow Activation */}
                  <div className="flex justify-center items-center relative z-10">
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 absolute rounded-full transition-all duration-500 ${
                      isActive 
                        ? 'bg-teal-400/40 blur-md scale-150 animate-pulse shadow-[0_0_30px_#2dd4bf]' 
                        : `${a.bg}/20 animate-ping`
                    }`} />

                    <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-white relative z-10 transition-all duration-500 ${
                      isActive
                        ? `scale-125 border-2 border-teal-400 shadow-[0_0_25px_rgba(20,184,166,0.8)] ring-4 ring-teal-400/30`
                        : `${a.bg} border-2 ${a.border} shadow-lg`
                    }`}>
                      <Icon className={`w-4 h-4 sm:w-6 sm:h-6 transition-all duration-500 ${
                        isActive
                          ? 'text-teal-600 scale-110 drop-shadow-[0_0_8px_rgba(20,184,166,0.9)]'
                          : a.icon
                      }`} />
                    </div>
                  </div>

                  {/* Right Column */}
                  {!isEven ? (
                    <div className="flex justify-start pl-1 sm:pl-4">
                      <StepCard step={step} Icon={Icon} a={a} isActive={isActive} />
                    </div>
                  ) : (
                    <div className="block" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center mt-16 relative z-10">
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── 5. WHY CHOOSE AUTOFY ────────────────────────────────────────────────────
const outcomes = [
  {
    icon: Zap,
    title: 'Outcomes-First Logic',
    desc: 'We build with business metrics, retention rates, and conversion pipelines in mind — not just clean code.',
    accent: 'teal',
    topGradient: 'from-teal-400 to-emerald-500',
    hoverBorder: 'hover:border-teal-300',
    hoverShadow: 'hover:shadow-[0_20px_45px_rgba(20,184,166,0.16)]',
    iconBg: 'bg-teal-50',
    iconBorder: 'border-teal-100',
    iconColor: 'text-teal-600',
    glowColor: 'bg-teal-400/20',
    badge: 'Growth Focused'
  },
  {
    icon: Code2,
    title: 'Modern Stack & AI Native',
    desc: 'React, Next.js, and autonomous LLM workflows to keep your digital systems future-proof and competitive.',
    accent: 'indigo',
    topGradient: 'from-indigo-400 to-violet-500',
    hoverBorder: 'hover:border-indigo-300',
    hoverShadow: 'hover:shadow-[0_20px_45px_rgba(99,102,241,0.16)]',
    iconBg: 'bg-indigo-50',
    iconBorder: 'border-indigo-100',
    iconColor: 'text-indigo-600',
    glowColor: 'bg-indigo-400/20',
    badge: 'AI & Next.js'
  },
  {
    icon: Globe,
    title: 'Long-Term Partnership',
    desc: 'Dedicated support, routine security auditing, and continuous updates so your digital systems never decay.',
    accent: 'cyan',
    topGradient: 'from-cyan-400 to-teal-500',
    hoverBorder: 'hover:border-cyan-300',
    hoverShadow: 'hover:shadow-[0_20px_45px_rgba(6,182,212,0.16)]',
    iconBg: 'bg-cyan-50',
    iconBorder: 'border-cyan-100',
    iconColor: 'text-cyan-600',
    glowColor: 'bg-cyan-400/20',
    badge: 'Ongoing Support'
  },
]

function WhyChooseAutofy() {
  return (
    <section className="py-28 bg-transparent relative border-t border-slate-100 overflow-hidden">
      {/* Background Decorative Ambient Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-teal-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3 block">Why Partner With Us</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 leading-tight">
            Engineered for <span className="gradient-text">Real Growth</span>
          </h2>
          <p className="text-slate-500 mt-4 text-base max-w-xl mx-auto leading-relaxed">
            We bypass cookie-cutter formats and deliver premium, hyper-optimized infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {outcomes.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`group relative rounded-3xl p-8 bg-white/90 backdrop-blur-xl border border-slate-200/80 ${item.hoverBorder} ${item.hoverShadow} transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-sm`}
              >
                {/* Top Accent Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.topGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Corner Glow Effect */}
                <div className={`absolute -right-8 -bottom-8 w-36 h-36 rounded-full ${item.glowColor} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${item.iconBg} border ${item.iconBorder} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 mb-3 group-hover:text-slate-950 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100/60 flex items-center justify-between text-xs font-semibold text-teal-600 group-hover:text-teal-700">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Production Ready</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── 6. STATS / COMPANY HIGHLIGHTS ──────────────────────────────────────────
function CounterNumber({ value }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  
  const numericVal = parseFloat(value.replace(/[^0-9.]/g, '')) || 0
  const suffix = value.replace(/^[0-9.]+/, '') || ''
  const isDecimal = value.includes('.')
  
  const [displayVal, setDisplayVal] = useState('0')

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericVal, {
        duration: 2,
        ease: [0.215, 0.61, 0.355, 1],
        onUpdate: (latest) => {
          if (isDecimal) {
            setDisplayVal(latest.toFixed(1))
          } else {
            setDisplayVal(Math.floor(latest).toString())
          }
        }
      })
      return () => controls.stop()
    }
  }, [isInView, numericVal, isDecimal])

  return (
    <span ref={ref}>
      {displayVal}{suffix}
    </span>
  )
}

const highlights = [
  {
    value: '30+',
    label: 'Projects Delivered',
    desc: 'Websites, SaaS products, dashboards, and automation systems built for real-world businesses.',
    icon: Rocket,
    gradient: 'from-teal-400 to-emerald-400',
    iconBg: 'bg-teal-500/10',
    iconBorder: 'border-teal-500/20',
    iconColor: 'text-teal-400',
    glow: 'bg-teal-500/20'
  },
  {
    value: '20K+',
    label: 'Community Reach',
    desc: 'Sharing insights on technology, AI, and digital growth with a growing audience.',
    icon: Users,
    gradient: 'from-indigo-400 to-violet-400',
    iconBg: 'bg-indigo-500/10',
    iconBorder: 'border-indigo-500/20',
    iconColor: 'text-indigo-400',
    glow: 'bg-indigo-500/20'
  },
  {
    value: '100%',
    label: 'Client Commitment',
    desc: 'Focused on quality execution, transparent communication, and long-term partnerships.',
    icon: CheckCheck,
    gradient: 'from-cyan-400 to-teal-400',
    iconBg: 'bg-cyan-500/10',
    iconBorder: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
    glow: 'bg-cyan-500/20'
  },
]

function CompanyHighlights() {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-teal-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-teal-400 font-semibold text-xs tracking-wider uppercase mb-2 block">The Autofy Benchmark</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">
            Trusted by Businesses, <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">Built for Growth</span>
          </h2>
          <p className="text-slate-400 mt-2.5 text-sm font-light max-w-xl mx-auto leading-relaxed">
            Helping startups, creators, and businesses launch modern websites, AI solutions, and scalable digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/60 hover:border-teal-500/50 rounded-2xl p-6 sm:p-7 text-center transition-all duration-300 overflow-hidden shadow-md hover:shadow-[0_15px_35px_rgba(20,184,166,0.18)] flex flex-col justify-between"
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Corner Blur Glow */}
                <div className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full ${item.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} border ${item.iconBorder} flex items-center justify-center mx-auto mb-4 shadow-2xs group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>

                  <div className={`font-display font-black text-3xl sm:text-4xl bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300 select-none`}>
                    <CounterNumber value={item.value} />
                  </div>

                  <div className="font-bold text-white text-base mb-1.5 group-hover:text-teal-300 transition-colors">
                    {item.label}
                  </div>

                  <div className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── 7. TESTIMONIALS ─────────────────────────────────────────────────────────
// ─── 7. TESTIMONIALS (CONSTELLATION DESIGN) ────────────────────────────────────
// ─── 7. TESTIMONIALS (CONSTELLATION DESIGN) ────────────────────────────────────
const clientStories = [
  {
    id: 1,
    name: 'Tahsin Ahmed',
    role: 'FINTECH • CEO',
    quote: 'The AI automation workflow they engineered cut our manual processing time by 70%. Exceptional team and zero friction.',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&auto=format&fit=crop&q=80',
    top: '6%',
    left: '38%',
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    role: 'AI STARTUP • FOUNDER',
    quote: 'Autofy built an LLM pipeline that handles 10,000+ daily customer queries automatically. Game changer for our operations.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80',
    top: '6%',
    left: '58%',
  },
  {
    id: 3,
    name: 'Kiran Reddy',
    role: 'SAAS • CTO',
    quote: 'From architecture to deployment in 3 weeks. The code quality is outstanding and communication was 100% transparent throughout.',
    avatar: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=300&auto=format&fit=crop&q=80',
    top: '20%',
    left: '74%',
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'BRANDING • DIRECTOR',
    quote: 'Sleek, responsive, and blazing fast. Our bounce rate dropped instantly post-launch. Highly recommended web agency!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    top: '52%',
    left: '88%',
  },
  {
    id: 5,
    name: 'Sneha Patel',
    role: 'HEALTHCARE • VP GROWTH',
    quote: 'Flawless execution. The team deployed security auditing, rate limiting, and custom analytics dashboards seamlessly.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
    top: '78%',
    left: '60%',
  },
  {
    id: 6,
    name: 'Sabbir Rahman',
    role: 'E-COMMERCE • FOUNDER',
    quote: 'Our conversion rate jumped 40% after they redesigned and rebuilt our platform. They genuinely understand what drives revenue.',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80',
    top: '84%',
    left: '42%',
  },
  {
    id: 7,
    name: 'Ananya Gupta',
    role: 'CREATIVE • LEAD DESIGNER',
    quote: 'The design language and motion aesthetics transformed our brand identity completely. World class craftsmanship!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    top: '52%',
    left: '12%',
  },
  {
    id: 8,
    name: 'Rohan Joshi',
    role: 'PRODUCT • LEAD ENGINEER',
    quote: 'Superb Next.js architecture and clean codebases. They feel like a natural extension of our in-house engineering team.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    top: '18%',
    left: '22%',
  }
]

function Testimonials() {
  const [activeId, setActiveId] = useState(6)
  const activeStory = clientStories.find(s => s.id === activeId) || clientStories[0]

  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-teal-50/60 via-indigo-50/40 to-lime-50/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl sm:text-5xl text-slate-900 leading-tight mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed"
          >
            Real journeys, real words — hover or tap a partner in the constellation to read their story.
          </motion.p>
        </div>

        {/* Wide Ellipse Constellation Stage (Matching User Reference Image 100%) */}
        <div className="relative min-h-[480px] sm:min-h-[580px] w-full max-w-[1240px] mx-auto flex items-center justify-center overflow-visible">
          
          {/* Soft Ambient Glow */}
          <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full bg-lime-300/10 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          {/* Central Glowing Icon Node (Outer White Circle with Inner Lime Badge) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-slate-100 flex items-center justify-center">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#84cc16] text-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(132,204,22,0.5)] animate-pulse">
                <MessageSquare className="w-5 h-5 fill-slate-950 text-slate-950" />
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Floating Constellation Profiles */}
          <div className="hidden sm:block absolute inset-0 pointer-events-none">
            {clientStories.map((s) => {
              const isActive = s.id === activeId
              const topVal = parseInt(s.top)
              const leftVal = parseInt(s.left)

              let placementClass = ''
              let arrowClass = ''

              if (topVal > 65) {
                // Bottom avatars -> card appears ABOVE avatar
                placementClass = 'bottom-full mb-4 left-1/2 -translate-x-1/2'
                arrowClass = 'absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white drop-shadow-sm'
              } else if (topVal < 35) {
                // Top avatars -> card appears BELOW avatar
                placementClass = 'top-full mt-4 left-1/2 -translate-x-1/2'
                arrowClass = 'absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white drop-shadow-sm'
              } else if (leftVal > 50) {
                // Right avatars -> card appears to the LEFT of avatar
                placementClass = 'right-full mr-4 top-1/2 -translate-y-1/2'
                arrowClass = 'absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white drop-shadow-sm'
              } else {
                // Left avatars -> card appears to the RIGHT of avatar
                placementClass = 'left-full ml-4 top-1/2 -translate-y-1/2'
                arrowClass = 'absolute top-1/2 -translate-y-1/2 -left-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white drop-shadow-sm'
              }

              return (
                <motion.div
                  key={s.id}
                  style={{ top: s.top, left: s.left }}
                  animate={{
                    y: [0, -14, 0, 12, 0],
                    x: [0, 8, -6, 0]
                  }}
                  transition={{
                    duration: 4.5 + (s.id % 4) * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: s.id * 0.3
                  }}
                  className={`absolute pointer-events-auto -translate-x-1/2 -translate-y-1/2 group ${
                    isActive ? 'z-50' : 'z-20'
                  }`}
                >
                  <button
                    onClick={() => setActiveId(s.id)}
                    onMouseEnter={() => setActiveId(s.id)}
                    className={`relative rounded-full transition-all duration-300 ${
                      isActive
                        ? 'ring-4 ring-[#84cc16] ring-offset-2 scale-110 shadow-[0_0_30px_rgba(132,204,22,0.6)] z-50'
                        : 'hover:scale-110 hover:ring-2 hover:ring-[#84cc16]/50 opacity-90 hover:opacity-100 shadow-md'
                    }`}
                  >
                    <img
                      src={s.avatar}
                      alt={s.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white shadow-lg"
                    />
                  </button>

                  {/* Active Speech Bubble Card (Matching Image 2 Reference) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className={`absolute z-50 w-72 sm:w-80 bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 ${placementClass}`}
                      >
                        <Quote className="w-5 h-5 text-[#84cc16] fill-[#84cc16] mb-2" />
                        <h4 className="font-display font-bold text-slate-900 text-lg leading-tight mb-1">
                          {s.name}
                        </h4>
                        <div className="text-[10px] font-mono font-bold text-[#84cc16] tracking-wider uppercase mb-3">
                          {s.role}
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm font-light italic leading-relaxed">
                          "{s.quote}"
                        </p>

                        {/* Speech Bubble Pointer Arrow */}
                        <div className={arrowClass} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile Display: Clean Active Card + Horizontal Selector */}
          <div className="sm:hidden w-full relative z-20 flex flex-col items-center gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-white rounded-3xl p-6 shadow-xl border border-slate-100 text-left"
              >
                <Quote className="w-5 h-5 text-teal-500 fill-teal-500 mb-2" />
                <h4 className="font-display font-bold text-slate-900 text-lg mb-1">
                  {activeStory.name}
                </h4>
                <div className="text-[10px] font-mono font-bold text-teal-600 tracking-wider uppercase mb-3">
                  {activeStory.role}
                </div>
                <p className="text-slate-600 text-xs font-light italic leading-relaxed">
                  "{activeStory.quote}"
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center flex-wrap gap-3">
              {clientStories.map(s => (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={`rounded-full transition-all duration-300 ${
                    s.id === activeId ? 'ring-4 ring-teal-400 scale-110' : 'opacity-60'
                  }`}
                >
                  <img src={s.avatar} alt={s.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

// ─── 8. FAQ ──────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Timeline depends on project scope, but our rapid-sprint delivery framework ensures high-converting landing pages and business websites launch in 5–7 business days. Full-scale custom web platforms, SaaS applications, and AI integrations typically deploy in 2–5 weeks with zero compromise on code quality.'
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes! We partner with ambitious startups, growing businesses, and global enterprises across North America, Europe, Asia, and Australia. We maintain flexible working hours aligned with UTC, EST, and PST time zones alongside seamless async communication via Slack, Loom, and Notion.'
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer transparent, fixed-scope project pricing with zero hidden fees, as well as dedicated monthly retainers for ongoing development and AI automation. Every proposal includes clear milestone deliverables and full source code ownership so you retain complete control over your assets.'
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Absolutely. Every project includes 30 days of complimentary post-launch warranty, bug fixes, and performance tuning. We also offer dedicated SLA maintenance plans that cover uptime monitoring, continuous security patches, server optimization, and on-demand feature upgrades.'
  },
  {
    q: 'Can you integrate AI into my existing product?',
    a: 'Yes, seamlessly! We specialize in embedding production-ready AI features—such as custom LLM chatbots, intelligent document processing, predictive workflows, and automated API pipelines—directly into your current web application, mobile app, or cloud stack without operational disruption.'
  },
]

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="pt-8 pb-20 sm:pt-12 sm:pb-24 bg-transparent relative">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3 block">Got Questions?</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`border rounded-2xl overflow-hidden bg-white transition-all duration-300 ${
                open === idx
                  ? 'border-teal-500/50 shadow-md shadow-teal-500/5'
                  : 'border-slate-200/80 hover:border-slate-300 shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
              >
                <span className={`font-semibold text-sm sm:text-base transition-colors ${
                  open === idx ? 'text-teal-600' : 'text-slate-900 group-hover:text-teal-600'
                }`}>
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center font-light text-base transition-all duration-300 ${
                    open === idx
                      ? 'border-teal-300 bg-teal-50 text-teal-600 rotate-45'
                      : 'border-slate-200 bg-slate-50 text-slate-500 group-hover:border-teal-300 group-hover:bg-teal-50 group-hover:text-teal-600'
                  }`}
                >
                  +
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === idx ? 'auto' : 0, opacity: open === idx ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/60 pt-4">
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 9. CONTACT CTA ─────────────────────────────────────────────────────────
const serviceTickerItems = [
  "Blockchain Technology",
  "Cloud & DevOps",
  "UI/UX",
  "Logo Designing",
  "Code Architecture",
  "Rapid Prototyping and MVPs",
  "Digital Marketing & SEO",
  "Brand Strategy",
  "Visual Identity",
  "AI Automations",
  "Full-Stack Web Dev",
]

function ContactCTA() {
  const marqueeItems = [...serviceTickerItems, ...serviceTickerItems, ...serviceTickerItems]

  return (
    <section className="py-10 sm:py-20 px-3 sm:px-6 md:px-8 lg:px-10 bg-[#f4f4f6] relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto">
        {/* Floating Dark Card Container with Expanded Width */}
        <div className="bg-[#111113] rounded-[28px] sm:rounded-[40px] md:rounded-[48px] pt-10 sm:pt-20 pb-8 sm:pb-14 px-4 sm:px-10 md:px-14 text-center shadow-2xl relative overflow-hidden border border-slate-200/20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-medium text-xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6 sm:mb-8"
          >
            You've reached the end — now let's start something new!
          </motion.h2>

          {/* Animated Let's Connect Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 sm:mb-12 flex justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block rounded-full p-[2px] bg-gradient-to-r from-teal-400 via-indigo-500 via-purple-500 to-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.35)]"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 sm:px-9 sm:py-4 rounded-full bg-white text-slate-950 font-extrabold text-sm sm:text-base hover:bg-slate-50 transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-teal-600 fill-teal-600 animate-pulse" />
                <span>Let's Connect</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Inner Ticker Box with Full Width Span */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full bg-[#1a1a1e] border border-neutral-800/90 rounded-2xl sm:rounded-3xl pt-6 pb-8 sm:pt-8 sm:pb-10 px-2 sm:px-8 relative overflow-hidden shadow-xl"
          >
            <p className="text-neutral-300 font-medium text-xs sm:text-base mb-4 sm:mb-6 text-center tracking-wide">
              Trust us we are good at this :)
            </p>

            {/* Marquee Ticker Wrapper */}
            <div className="relative w-full overflow-hidden flex items-center py-2">
              {/* Left and Right Fade Gradients */}
              <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-36 bg-gradient-to-r from-[#1a1a1e] to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-36 bg-gradient-to-l from-[#1a1a1e] to-transparent z-10 pointer-events-none" />

              {/* Compact Center Spotlight Badge: Autofy... */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center">
                {/* Left open curved bracket line ] */}
                <svg className="w-3 sm:w-4 h-10 sm:h-14 text-white opacity-95 fill-none -mr-1 shrink-0" viewBox="0 0 20 60">
                  <path d="M 4 4 C 16 18, 16 42, 4 56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                
                {/* Center Dark Badge */}
                <div className="px-3.5 sm:px-7 py-1.5 sm:py-3 rounded-lg bg-[#242429]/95 border border-neutral-700/90 text-white font-semibold text-xs sm:text-base shadow-[0_0_30px_rgba(0,0,0,0.85)] backdrop-blur-md whitespace-nowrap mx-0.5 sm:mx-1 flex items-center gap-1.5 sm:gap-2.5">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-teal-400 rotate-45 shrink-0 shadow-[0_0_8px_#2dd4bf]" />
                  <span className="tracking-wide">Autofy...</span>
                </div>

                {/* Right open curved bracket line [ */}
                <svg className="w-3 sm:w-4 h-10 sm:h-14 text-white opacity-95 fill-none -ml-1 shrink-0" viewBox="0 0 20 60">
                  <path d="M 16 4 C 4 18, 4 42, 16 56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              {/* Dense Left-to-Right Scrolling Ticker with compact spacing */}
              <motion.div
                animate={{ x: ['-50%', '0%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 25,
                }}
                className="flex items-center gap-2.5 sm:gap-4 w-max"
              >
                {marqueeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-800/90 bg-neutral-900/80 text-neutral-300 text-[11px] sm:text-sm font-medium whitespace-nowrap shrink-0 hover:border-neutral-700 hover:text-white transition-all shadow-sm"
                  >
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-neutral-600 flex items-center justify-center shrink-0">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-neutral-400" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="bg-transparent">
      <Hero />
      <ServicesSnapshot />
      <HowItWorks />
      <WhyChooseAutofy />
      <CompanyHighlights />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </motion.div>
  )
}
