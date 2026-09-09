import { useState, useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Award, Users, Globe, Zap, Target, Eye,
  Lightbulb, Shield, ShieldCheck, TrendingUp, Heart, Sparkles, Handshake,
  Star, Check, Linkedin, Instagram, Github, Bot, IndianRupee, Scan, LayoutGrid,
  ChevronLeft, ChevronRight
} from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import { teamMembers } from '../data/teamMembers'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

function AnimatedCounter({ value }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [displayCount, setDisplayCount] = useState(0)

  const targetNumber = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, targetNumber, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setDisplayCount(Math.floor(latest))
      },
    })

    return () => controls.stop()
  }, [isInView, targetNumber])

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {displayCount}{suffix}
    </span>
  )
}



const advantages = [
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    desc: 'Modern stacks, AI integrations, and creative engineering tailored to solve complex business challenges.',
    gradient: 'from-amber-400 via-orange-500 to-amber-600',
    iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500 text-white',
    hoverBorder: 'hover:border-amber-300 hover:shadow-amber-500/15',
    tag: 'Cutting-Edge',
  },
  {
    icon: ShieldCheck,
    title: 'Long-term Partnership & Support',
    desc: '24/7 dedicated ongoing support, performance monitoring, continuous updates, and technical care post launch.',
    gradient: 'from-teal-400 via-emerald-500 to-indigo-500',
    iconBg: 'bg-gradient-to-br from-teal-400 to-emerald-500 text-white',
    hoverBorder: 'hover:border-teal-300 hover:shadow-teal-500/15',
    tag: '24/7 Dedicated',
  },
  {
    icon: TrendingUp,
    title: 'Results Driven',
    desc: 'Focused on high conversion rates, speed metrics, and measurable business growth for your bottom line.',
    gradient: 'from-pink-400 via-rose-500 to-purple-600',
    iconBg: 'bg-gradient-to-br from-pink-400 to-rose-500 text-white',
    hoverBorder: 'hover:border-pink-300 hover:shadow-pink-500/15',
    tag: 'Measurable ROI',
  },
  {
    icon: Users,
    title: 'Expert Team',
    desc: 'Passionate engineering leaders and UI designers dedicated to transforming ambitious ideas into flawless code.',
    gradient: 'from-blue-400 via-indigo-500 to-violet-600',
    iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-500 text-white',
    hoverBorder: 'hover:border-indigo-300 hover:shadow-indigo-500/15',
    tag: 'Senior Talent',
  },
]

const heroProblemCards = [
  {
    icon: Globe,
    iconBg: 'bg-blue-50 text-blue-600 border border-blue-200/60',
    borderColor: 'border-slate-200/80 hover:border-blue-400/80',
    shadowGlow: 'hover:shadow-2xl hover:shadow-blue-500/15',
    gradient: 'from-blue-500 via-indigo-500 to-teal-400',
    gradientLight: 'from-blue-50/50 to-indigo-50/20',
    question: 'No online presence?',
    questionColor: 'text-blue-600',
    solution: 'We build stunning websites that convert visitors into paying customers.',
    cornerIcon: Scan,
  },
  {
    icon: Bot,
    iconBg: 'bg-teal-50 text-teal-600 border border-teal-200/60',
    borderColor: 'border-slate-200/80 hover:border-teal-400/80',
    shadowGlow: 'hover:shadow-2xl hover:shadow-teal-500/15',
    gradient: 'from-teal-400 via-emerald-400 to-indigo-500',
    gradientLight: 'from-teal-50/50 to-emerald-50/20',
    question: 'Wasting hours on repetitive tasks?',
    questionColor: 'text-teal-600',
    solution: 'Our AI automations handle leads, invoices, follow-ups, and content — so you don\'t have to.',
    cornerIcon: null,
  },
  {
    icon: IndianRupee,
    iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-200/60',
    borderColor: 'border-slate-200/80 hover:border-emerald-400/80',
    shadowGlow: 'hover:shadow-2xl hover:shadow-emerald-500/15',
    gradient: 'from-emerald-400 via-teal-500 to-indigo-500',
    gradientLight: 'from-emerald-50/50 to-teal-50/20',
    question: 'Spending too much on tech?',
    questionColor: 'text-emerald-600',
    solution: 'Get enterprise-quality tools at a fraction of the cost — built specifically for growing businesses.',
    cornerIcon: null,
  },
]

const heroStats = [
  { icon: Users, value: '30+', label: 'Happy Clients', color: 'text-indigo-600', bg: 'bg-indigo-50 border border-indigo-200/60', hoverBorder: 'hover:border-indigo-400/80 hover:ring-4 hover:ring-indigo-500/15 hover:shadow-indigo-500/10' },
  { icon: LayoutGrid, value: '20+', label: 'Websites Live', color: 'text-teal-600', bg: 'bg-teal-50 border border-teal-200/60', hoverBorder: 'hover:border-teal-400/80 hover:ring-4 hover:ring-teal-500/15 hover:shadow-teal-500/10' },
  { icon: Sparkles, value: '10+', label: 'Automations Running', color: 'text-violet-600', bg: 'bg-violet-50 border border-violet-200/60', hoverBorder: 'hover:border-violet-400/80 hover:ring-4 hover:ring-violet-500/15 hover:shadow-violet-500/10' },
  { icon: Star, value: '100%', label: 'Client Satisfaction', color: 'text-emerald-600', bg: 'bg-emerald-50 border border-emerald-200/60', hoverBorder: 'hover:border-emerald-400/80 hover:ring-4 hover:ring-emerald-500/15 hover:shadow-emerald-500/10' },
]

function AboutHero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-transparent">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[550px] h-[550px] rounded-full bg-teal-50/70 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] rounded-full bg-indigo-50/70 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Header Title & Subtitle */}
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-5 shadow-2xs">
            ABOUT AUTOFY.AI
          </span>
          
          <h1 className="font-display font-extrabold text-slate-900 leading-tight mb-5" style={{ fontSize: 'clamp(36px, 5.5vw, 62px)' }}>
            We Solve <span className="bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Business Problems.</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light mb-14">
            Whether you're a small business in India or a growing global brand — we build custom websites, AI automations, and digital tools that actually bring you more customers and save you time.
          </p>
        </motion.div>

        {/* 3 Problem-Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 text-left mb-16">
          {heroProblemCards.map((card, idx) => {
            const Icon = card.icon
            const CornerIcon = card.cornerIcon
            return (
              <motion.div
                key={card.question}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.025, transition: { duration: 0.25, ease: 'easeOut' } }}
                className={`group bg-white/95 backdrop-blur-xl border ${card.borderColor} ${card.shadowGlow} rounded-[24px] shadow-sm transition-all duration-300 relative flex flex-col justify-between overflow-hidden cursor-pointer`}
              >
                {/* Top Accent Gradient Line on Hover */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Subtle Background Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradientLight} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10`} />

                <div className="p-7">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${card.iconBg} flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-md transition-all duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {CornerIcon ? (
                      <div className="p-2 rounded-xl bg-slate-50 text-slate-400 border border-slate-200/50 group-hover:text-blue-600 group-hover:bg-blue-50 group-hover:rotate-90 group-hover:scale-110 transition-all duration-500">
                        <CornerIcon className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-teal-400 group-hover:scale-150 transition-all duration-300" />
                    )}
                  </div>

                  <span className={`${card.questionColor} font-semibold text-sm block mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300`}>
                    {card.question}
                  </span>

                  <h3 className="font-display font-bold text-slate-900 text-lg leading-snug group-hover:text-slate-950 transition-colors">
                    {card.solution}
                  </h3>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 4 Stats Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {heroStats.map((s, idx) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.35 + idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.04, transition: { duration: 0.25, ease: 'easeOut' } }}
                className={`group bg-white/90 backdrop-blur-xl border border-slate-200/80 ${s.hoverBorder} rounded-[22px] p-6 text-center shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center mx-auto mb-3 shadow-2xs group-hover:scale-115 group-hover:-translate-y-1 transition-all duration-300`}>
                  <Icon className={`w-5.5 h-5.5 ${s.color}`} />
                </div>
                <div className={`font-display font-extrabold text-3xl ${s.color} mb-1 tracking-tight group-hover:scale-108 transition-transform duration-300`}>
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="text-slate-500 text-xs font-medium group-hover:text-slate-700 transition-colors">{s.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MissionVision() {
  return (
    <section className="py-24 bg-transparent border-y border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-teal-50/60 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-50/60 blur-3xl -z-10" />
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3 block">Purpose & Direction</span>
          <h2 className="font-display font-bold text-4xl text-slate-900">Our Mission & <span className="gradient-text">Vision</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center mb-6 shadow-lg shadow-teal-200/40">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-5">
              To democratize access to world-class digital engineering — giving businesses of every size the tools, technology, and automation they need to compete at the highest level.
            </p>
            <ul className="space-y-2">
              {['Build with business metrics in mind', 'Deliver premium quality at fair pricing', 'Create lasting client partnerships'].map(p => (
                <li key={p} className="flex items-center gap-2 text-xs text-slate-600">
                  <Check className="w-3.5 h-3.5 text-teal-500 shrink-0" />{p}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-indigo-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center mb-6 shadow-lg shadow-indigo-200/40">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-5">
              To become a trusted global technology partner known for innovation, excellence, and transforming ambitious ideas into impactful digital experiences that drive real-world outcomes.
            </p>
            <ul className="space-y-2">
              {['Global reach, local understanding', 'AI-first engineering by default', 'Trusted by 100+ businesses by 2026'].map(p => (
                <li key={p} className="flex items-center gap-2 text-xs text-slate-600">
                  <Check className="w-3.5 h-3.5 text-indigo-500 shrink-0" />{p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-teal-50/40 via-indigo-50/40 to-violet-50/30 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-3 shadow-2xs"
          >
            OUR ADVANTAGES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight"
          >
            Why <span className="gradient-text">Choose Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 mt-3 text-base max-w-xl mx-auto font-light"
          >
            Four core pillars that set us apart and make us your dedicated long-term technology partner.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.025, transition: { duration: 0.25, ease: 'easeOut' } }}
                className={`group bg-white/95 backdrop-blur-xl border border-slate-200/80 ${item.hoverBorder} rounded-[24px] shadow-sm hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden cursor-pointer`}
              >
                {/* Top Accent Gradient Line on Hover */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-md shadow-teal-500/10 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg transition-all duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60 group-hover:bg-teal-50 group-hover:text-teal-700 group-hover:border-teal-200 transition-all">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-slate-900 mb-2.5 group-hover:text-slate-950 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-light">
                      {item.desc}
                    </p>
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

function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const socialIcons = { linkedin: Linkedin, instagram: Instagram, github: Github }

  const count = teamMembers.length

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % count)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + count) % count)
  }

  const activeMember = teamMembers[activeIndex]

  return (
    <section className="py-28 bg-transparent relative overflow-hidden">
      {/* Huge Decorative Background Watermark Text Floating Upward Above Header */}
      <div className="absolute -top-2 sm:-top-4 md:-top-6 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 w-full text-center overflow-hidden">
        <span className="font-display font-black text-6xl sm:text-8xl md:text-[140px] bg-gradient-to-b from-purple-700/55 via-purple-600/25 to-transparent bg-clip-text text-transparent tracking-[0.18em] uppercase block leading-none">
          OUR TEAM
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-3 shadow-2xs"
          >
            THE PEOPLE BEHIND AUTOFY.AI
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight mb-3"
          >
            Meet the <span className="gradient-text">Founders & Leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-sm md:text-base font-light leading-relaxed"
          >
            Click or use arrows to navigate through our engineering & creative leadership team.
          </motion.p>
        </div>

        {/* 3D Coverflow Card Carousel */}
        <div className="relative h-[340px] sm:h-[400px] md:h-[440px] flex items-center justify-center mb-10 overflow-visible">
          {/* Navigation Prev Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Team Member"
            className="absolute left-2 sm:left-6 md:left-12 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-purple-600/90 hover:bg-purple-700 text-white flex items-center justify-center shadow-lg shadow-purple-500/20 hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Stack Container */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            {teamMembers.map((member, idx) => {
              // Calculate relative offset from active index for circular looping
              let offset = idx - activeIndex
              if (offset < -Math.floor(count / 2)) offset += count
              if (offset > Math.floor(count / 2)) offset -= count

              const isActive = offset === 0

              // Dynamic 3D transform properties for 5 cards ribbon
              let translateX = '0%'
              let scale = 1
              let opacity = 1
              let zIndex = 30
              let filter = 'grayscale(0%)'

              if (offset === -1) {
                translateX = '-42%'
                scale = 0.88
                opacity = 0.85
                zIndex = 20
                filter = 'grayscale(100%)'
              } else if (offset === 1) {
                translateX = '42%'
                scale = 0.88
                opacity = 0.85
                zIndex = 20
                filter = 'grayscale(100%)'
              } else if (offset === -2) {
                translateX = '-78%'
                scale = 0.72
                opacity = 0.55
                zIndex = 10
                filter = 'grayscale(100%)'
              } else if (offset === 2) {
                translateX = '78%'
                scale = 0.72
                opacity = 0.55
                zIndex = 10
                filter = 'grayscale(100%)'
              } else if (Math.abs(offset) > 2) {
                translateX = offset < 0 ? '-95%' : '95%'
                scale = 0.5
                opacity = 0
                zIndex = 0
                filter = 'grayscale(100%)'
              }

              return (
                <motion.div
                  key={member.name}
                  onClick={() => setActiveIndex(idx)}
                  animate={{
                    x: translateX,
                    scale: isActive ? 1.05 : scale,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 28,
                  }}
                  className={`absolute w-[220px] sm:w-[280px] md:w-[320px] h-[290px] sm:h-[360px] md:h-[400px] rounded-[28px] overflow-hidden cursor-pointer border-4 transition-all duration-300 ${
                    isActive
                      ? 'border-white shadow-[0_20px_50px_rgba(99,102,241,0.3)] shadow-indigo-500/20 ring-2 ring-indigo-400/40'
                      : 'border-slate-200/60 shadow-md hover:opacity-90'
                  }`}
                  style={{ filter }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      objectPosition: member.objectPosition || 'center top',
                      transform: member.scale ? `scale(${member.scale})` : undefined,
                      transformOrigin: member.transformOrigin || 'center center',
                    }}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                </motion.div>
              )
            })}
          </div>

          {/* Navigation Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Team Member"
            className="absolute right-2 sm:right-6 md:right-12 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-900/90 hover:bg-slate-950 text-white flex items-center justify-center shadow-lg shadow-slate-900/20 hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Active Member Details Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMember.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Active Member Title & Lines */}
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-r from-transparent via-purple-500 to-indigo-500 rounded-full" />
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl tracking-tight flex items-center gap-2">
                <span className="text-purple-700">{activeMember.name.split(' ')[0]}</span>
                <span className="text-indigo-600">
                  {activeMember.name.split(' ').slice(1).join(' ')}
                </span>
              </h3>
              <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-l from-transparent via-purple-500 to-indigo-500 rounded-full" />
            </div>

            {/* Subtitle / Role */}
            <p className="text-slate-400 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
              {activeMember.role}
            </p>

            {/* Bio Paragraph */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light mb-6 max-w-2xl mx-auto">
              {activeMember.bio}
            </p>

            {/* Animated & Interactive Focus Skill Tags (Single Line Row) */}
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-7 max-w-4xl mx-auto overflow-x-auto whitespace-nowrap scrollbar-none py-1 px-2">
              {activeMember.skills.map((s, idx) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-indigo-950 bg-white/90 border border-indigo-200/80 shadow-2xs hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-50 hover:via-indigo-50 hover:to-teal-50 hover:shadow-md hover:shadow-purple-500/15 transition-all duration-300 backdrop-blur-md cursor-pointer group shrink-0"
                >
                  <Sparkles className="w-3 h-3 text-purple-500 group-hover:text-indigo-600 transition-colors group-hover:rotate-12 duration-300 shrink-0" />
                  <span className="whitespace-nowrap">{s}</span>
                </motion.span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-3">
              {Object.entries(activeMember.socials || {}).map(([key, url], idx) => {
                const Icon = socialIcons[key]
                return Icon && url ? (
                  <motion.a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.25 + idx * 0.08 }}
                    whileHover={{ scale: 1.15, y: -3, rotate: idx % 2 === 0 ? 4 : -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-2xl bg-white border border-slate-200/90 text-slate-600 hover:text-purple-600 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center transition-all duration-300 shadow-2xs"
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </motion.a>
                ) : null
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators / Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {teamMembers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-8 bg-purple-600 shadow-xs'
                  : 'w-2.5 bg-slate-200 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutCTA() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-teal-600/20 blur-[80px] pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-display font-bold text-4xl text-white mb-4">Want to Work With Us?</h2>
          <p className="text-slate-400 text-base mb-8">We're selective about the projects we take on — because we're committed to doing them exceptionally well.</p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <AboutHero />
      <MissionVision />
      <WhyChooseUs />
      <TeamSection />
    </motion.div>
  )
}
