
import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, ChevronRight, Check, Zap, Globe, Cpu, Database, Palette, TrendingUp,
  ClipboardList, Lightbulb, Code, Rocket, Clock, Infinity as InfinityIcon
} from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const services = [
  {
    emoji: '🌐', icon: Globe,
    title: 'Web Development',
    desc: 'High-performance websites and web apps built with Next.js, React, and modern stacks. SEO-ready and lightning fast.',
    tags: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    gradient: 'from-teal-400 to-emerald-500',
    light: 'bg-teal-50', border: 'border-teal-200', hoverBg: 'hover:bg-teal-50/50', hoverBorder: 'hover:border-teal-300',
    features: ['Custom UI/UX Design', 'SEO Optimisation', 'Mobile Responsive', 'Core Web Vitals 95+'],
  },
  {
    emoji: '🤖', icon: Cpu,
    title: 'AI Automation',
    desc: 'Intelligent workflows that eliminate repetitive tasks, connect your tools, and let your team focus on what matters.',
    tags: ['n8n', 'Make', 'GPT-4', 'Zapier'],
    gradient: 'from-violet-400 to-purple-500',
    light: 'bg-violet-50', border: 'border-violet-200', hoverBg: 'hover:bg-violet-50/50', hoverBorder: 'hover:border-violet-300',
    features: ['Workflow Automation', 'LLM Integration', 'API Orchestration', 'Bot Development'],
  },
  {
    emoji: '📱', icon: Database,
    title: 'SaaS Products',
    desc: 'Ready-to-launch SaaS tools with authentication, payments, and scalable cloud infrastructure built in.',
    tags: ['Supabase', 'Stripe', 'AWS', 'Auth'],
    gradient: 'from-blue-400 to-indigo-500',
    light: 'bg-blue-50', border: 'border-blue-200', hoverBg: 'hover:bg-blue-50/50', hoverBorder: 'hover:border-blue-300',
    features: ['Auth & Billing', 'Multi-Tenancy', 'Admin Dashboard', 'Cloud Deployment'],
  },
  {
    emoji: '📊', icon: TrendingUp,
    title: 'Analytics & Dashboards',
    desc: 'Real-time data dashboards that turn your business metrics into clear, actionable insights.',
    tags: ['Charts', 'APIs', 'Live Data', 'Postgres'],
    gradient: 'from-amber-400 to-orange-500',
    light: 'bg-amber-50', border: 'border-amber-200', hoverBg: 'hover:bg-amber-50/50', hoverBorder: 'hover:border-amber-300',
    features: ['Real-time Updates', 'Custom KPIs', 'Data Pipelines', 'Export & Reports'],
  },
  {
    emoji: '🎨', icon: Palette,
    title: 'Brand & Design',
    desc: 'Logo design, brand identity, and creative strategy that makes your business unforgettable.',
    tags: ['Branding', 'UI/UX', 'Motion', 'Figma'],
    gradient: 'from-pink-400 to-rose-500',
    light: 'bg-pink-50', border: 'border-pink-200', hoverBg: 'hover:bg-pink-50/50', hoverBorder: 'hover:border-pink-300',
    features: ['Logo & Identity', 'Design System', 'UI/UX Prototypes', 'Brand Guidelines'],
  },
  {
    emoji: '🚀', icon: Zap,
    title: 'Growth Strategy',
    desc: 'Content marketing, SEO, and digital growth campaigns designed to attract and convert your ideal customers.',
    tags: ['SEO', 'Content', 'Funnels', 'Analytics'],
    gradient: 'from-emerald-400 to-teal-500',
    light: 'bg-emerald-50', border: 'border-emerald-200', hoverBg: 'hover:bg-emerald-50/50', hoverBorder: 'hover:border-emerald-300',
    features: ['Technical SEO', 'Content Strategy', 'Funnel Optimisation', 'Conversion CRO'],
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Scoping',
    subtitle: '1–2 days',
    desc: 'We begin with a focused intake session — mapping your goals, existing stack, user flows, and success metrics to define a clear project scope.',
    icon: ClipboardList,
    theme: 'teal',
    tagIcon: Clock,
  },
  {
    step: '02',
    title: 'Strategy & Architecture',
    subtitle: '2–4 days',
    desc: 'Our engineers design the technical blueprint — choosing the right stack, API integrations, and scalability patterns before a line of code is written.',
    icon: Lightbulb,
    theme: 'violet',
    tagIcon: Clock,
  },
  {
    step: '03',
    title: 'Development & Iteration',
    subtitle: '1–3 weeks',
    desc: 'We bring the design to life with clean, scalable code — keeping you in the loop with regular updates and demos.',
    icon: Code,
    theme: 'teal',
    tagIcon: Clock,
  },
  {
    step: '04',
    title: 'Testing & Launch',
    subtitle: '3–5 days',
    desc: 'We rigorously test for performance, security, and edge cases before launching — ensuring a smooth and reliable release.',
    icon: Rocket,
    theme: 'violet',
    tagIcon: Clock,
  },
  {
    step: '05',
    title: 'Support & Growth',
    subtitle: 'Ongoing',
    desc: "Our partnership doesn't end at launch. We provide ongoing support, monitor performance, and help you scale further.",
    icon: TrendingUp,
    theme: 'teal',
    tagIcon: InfinityIcon,
  },
]

export default function Services() {
  const heroRef = useRef(null)
  const processRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ['start 60%', 'end 85%']
  })
  // 1:1 Smooth Direct Mouse Scroll Tracking (Zero Delay / Zero Spring Inertia)
  const pathLength = useSpring(processProgress, { stiffness: 350, damping: 35, restDelta: 0.0001 })
  const mobileLineHeight = useTransform(processProgress, [0, 1], ['0%', '100%'])

  // Step 1: 0.0 -> 0.15
  const step1Opacity = useTransform(processProgress, [0.0, 0.15], [0, 1])
  const step1Scale = useTransform(processProgress, [0.0, 0.15], [0.92, 1])
  const step1Y = useTransform(processProgress, [0.0, 0.15], [25, 0])

  // Step 2: 0.15 -> 0.35
  const step2Opacity = useTransform(processProgress, [0.15, 0.35], [0, 1])
  const step2Scale = useTransform(processProgress, [0.15, 0.35], [0.92, 1])
  const step2Y = useTransform(processProgress, [0.15, 0.35], [25, 0])

  // Step 3: 0.35 -> 0.55
  const step3Opacity = useTransform(processProgress, [0.35, 0.55], [0, 1])
  const step3Scale = useTransform(processProgress, [0.35, 0.55], [0.92, 1])
  const step3Y = useTransform(processProgress, [0.35, 0.55], [25, 0])

  // Step 4: 0.55 -> 0.75
  const step4Opacity = useTransform(processProgress, [0.55, 0.75], [0, 1])
  const step4Scale = useTransform(processProgress, [0.55, 0.75], [0.92, 1])
  const step4Y = useTransform(processProgress, [0.55, 0.75], [25, 0])

  // Step 5: 0.75 -> 0.95
  const step5Opacity = useTransform(processProgress, [0.75, 0.95], [0, 1])
  const step5Scale = useTransform(processProgress, [0.75, 0.95], [0.92, 1])
  const step5Y = useTransform(processProgress, [0.75, 0.95], [25, 0])

  const stepAnimations = [
    { opacity: step1Opacity, scale: step1Scale, y: step1Y },
    { opacity: step2Opacity, scale: step2Scale, y: step2Y },
    { opacity: step3Opacity, scale: step3Scale, y: step3Y },
    { opacity: step4Opacity, scale: step4Scale, y: step4Y },
    { opacity: step5Opacity, scale: step5Scale, y: step5Y },
  ]

  // Animated sight line laser beam paths shooting out smoothly in 1:1 sync with mouse scroll
  const sightLine1 = useTransform(processProgress, [0.0, 0.15], [0, 1])
  const sightLine2 = useTransform(processProgress, [0.15, 0.35], [0, 1])
  const sightLine3 = useTransform(processProgress, [0.35, 0.55], [0, 1])
  const sightLine4 = useTransform(processProgress, [0.55, 0.75], [0, 1])
  const sightLine5 = useTransform(processProgress, [0.75, 0.95], [0, 1])

  const sightLineSpring1 = useSpring(sightLine1, { stiffness: 350, damping: 35 })
  const sightLineSpring2 = useSpring(sightLine2, { stiffness: 350, damping: 35 })
  const sightLineSpring3 = useSpring(sightLine3, { stiffness: 350, damping: 35 })
  const sightLineSpring4 = useSpring(sightLine4, { stiffness: 350, damping: 35 })
  const sightLineSpring5 = useSpring(sightLine5, { stiffness: 350, damping: 35 })

  const [activeSteps, setActiveSteps] = useState([true, false, false, false, false])

  useEffect(() => {
    const unsubscribe = processProgress.on('change', v => {
      setActiveSteps([
        v >= 0.0,
        v >= 0.18,
        v >= 0.38,
        v >= 0.58,
        v >= 0.78
      ])
    })
    return () => unsubscribe()
  }, [processProgress])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* Hero */}
      <section ref={heroRef} className="relative pt-36 pb-20 overflow-hidden bg-transparent">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-50/60 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-50/60 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            style={{ y: titleY }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 }
              }
            }}
            className="text-center mb-6"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
              }}
              className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-4 block"
            >
              What We Offer
            </motion.span>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.215, 0.61, 0.355, 1] } }
              }}
              className="font-display font-bold leading-tight mb-5 text-slate-900"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            >
              Services Built to <span className="gradient-text">Scale Your Business</span>
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
              }}
              className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-light"
            >
              From design to development and beyond — everything you need to dominate your market online.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map(({ emoji, title, desc, gradient, light, hoverBg, hoverBorder, features }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.25 } }}
                className={`group bg-white ${hoverBg} rounded-[24px] overflow-hidden border border-slate-200/80 ${hoverBorder} shadow-sm hover:shadow-xl transition-all duration-300 relative`}
              >
                <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl ${light} flex items-center justify-center mb-5 text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}>{emoji}</div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-3 group-hover:text-slate-950 transition-colors">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 font-light">{desc}</p>
                  <ul className="space-y-2 mb-6">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-teal-500 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 group-hover:text-teal-700 transition-colors group/link">
                    <span>Get Started</span>
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section - Pinned 3-Column Alternating Snake Timeline */}
      <section ref={processRef} className="relative h-[300vh] bg-transparent border-t border-slate-100/80">
        
        {/* Pinned Sticky Viewport Container */}
        <div className="sticky top-12 md:top-16 min-h-[90vh] flex flex-col justify-center overflow-hidden py-6">
          
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-teal-100/30 via-violet-100/30 to-indigo-100/20 blur-3xl rounded-full pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto px-6 lg:px-8 relative w-full">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 relative">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-semibold text-xs tracking-widest uppercase mb-3 shadow-2xs"
              >
                OUR PROCESS
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display font-bold text-3xl md:text-5xl text-slate-900 leading-tight mb-2"
              >
                From Idea <span className="gradient-text">to Life</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-500 text-sm md:text-base font-light leading-relaxed"
              >
                A transparent five-stage process built for speed, quality, and zero surprises.
              </motion.p>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative max-w-5xl mx-auto">

              {/* Desktop & Mobile Center Straight Ribbon Overlay (Spans entire 5-step timeline height) */}
              <div className="block absolute top-0 bottom-0 left-[calc(50%-35px)] sm:left-[calc(50%-50px)] md:left-[calc(50%-70px)] w-[70px] sm:w-[100px] md:w-[140px] pointer-events-none z-0">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 140 1000"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="services-straight-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="25%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#2dd4bf" />
                      <stop offset="75%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>

                  {/* 100% Clearly Visible Baseline Continuous Solid Track */}
                  <line
                    x1="70" y1="30" x2="70" y2="970"
                    stroke="#94a3b8"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <line
                    x1="70" y1="30" x2="70" y2="970"
                    stroke="url(#services-straight-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                  />

                  {/* Intermittent Connection Dots - Clear & High Contrast */}
                  <circle cx="70" cy="200" r="4.5" fill="#64748b" />
                  <circle cx="70" cy="400" r="4.5" fill="#64748b" />
                  <circle cx="70" cy="600" r="4.5" fill="#64748b" />
                  <circle cx="70" cy="800" r="4.5" fill="#64748b" />

                  {/* Horizontal Sight Lines Drawing Smoothly from Central Node to Card as Scroll Arrives */}
                  <motion.path d="M 70 100 L 0 100" fill="none" stroke="#2dd4bf" strokeWidth="3.5" strokeDasharray="5 5" style={{ pathLength: sightLineSpring1 }} className="drop-shadow-[0_0_12px_#2dd4bf]" />
                  <motion.path d="M 70 300 L 140 300" fill="none" stroke="#6366f1" strokeWidth="3.5" strokeDasharray="5 5" style={{ pathLength: sightLineSpring2 }} className="drop-shadow-[0_0_12px_#6366f1]" />
                  <motion.path d="M 70 500 L 0 500" fill="none" stroke="#2dd4bf" strokeWidth="3.5" strokeDasharray="5 5" style={{ pathLength: sightLineSpring3 }} className="drop-shadow-[0_0_12px_#2dd4bf]" />
                  <motion.path d="M 70 700 L 140 700" fill="none" stroke="#8b5cf6" strokeWidth="3.5" strokeDasharray="5 5" style={{ pathLength: sightLineSpring4 }} className="drop-shadow-[0_0_12px_#8b5cf6]" />
                  <motion.path d="M 70 900 L 0 900" fill="none" stroke="#14b8a6" strokeWidth="3.5" strokeDasharray="5 5" style={{ pathLength: sightLineSpring5 }} className="drop-shadow-[0_0_12px_#14b8a6]" />

                  {/* Outer Glowing Tube (Active Scroll Beam Overlay) */}
                  <motion.line
                    x1="70" y1="30" x2="70" y2="970"
                    stroke="url(#services-straight-gradient)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    opacity="0.35"
                    style={{ pathLength }}
                    className="drop-shadow-[0_0_24px_rgba(20,184,166,0.95)]"
                  />

                  {/* Main Animated Central Solid Laser Beam */}
                  <motion.line
                    x1="70" y1="30" x2="70" y2="970"
                    stroke="url(#services-straight-gradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    style={{ pathLength }}
                    className="drop-shadow-[0_0_18px_rgba(20,184,166,0.9)]"
                  />

                  {/* Inner White Core Energy Line */}
                  <motion.line
                    x1="70" y1="30" x2="70" y2="970"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeDasharray="6 12"
                    style={{ pathLength }}
                  />
                </svg>

                {/* Traveling Neon Energy Head Orb (Perfect distortion-free circle moving smoothly step-to-step) */}
                <motion.div
                  style={{
                    top: useTransform(pathLength, [0, 1], ['10%', '90%']),
                  }}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-teal-400/40 flex items-center justify-center pointer-events-none z-30 shadow-[0_0_22px_#2dd4bf]"
                >
                  <div className="w-4 h-4 rounded-full bg-teal-300 shadow-[0_0_14px_#2dd4bf] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#ffffff]" />
                  </div>
                </motion.div>
              </div>

              {/* 5-Step Process Rows */}
              <div className="space-y-4 md:space-y-6">
                {processSteps.map((p, idx) => {
                  const isLeft = idx % 2 === 0
                  const isTeal = p.theme === 'teal'
                  const anim = stepAnimations[idx]
                  const isActive = activeSteps[idx]

                  const notes = [
                    { text: 'Scroll to explore' },
                    { text: 'Ideas take shape' },
                    { text: 'Built with precision' },
                    { text: 'Ready for impact' },
                    { text: 'Grow together' }
                  ]

                  return (
                    <div key={p.step} className="relative z-10">
                      
                      {/* 3-Column CSS Grid: [Left Slot | Center Node Track (60px-140px) | Right Slot] */}
                      <div className="grid grid-cols-[1fr_60px_1fr] sm:grid-cols-[1fr_100px_1fr] md:grid-cols-[1fr_140px_1fr] gap-1.5 sm:gap-4 md:gap-0 items-center">
                        
                        {/* COLUMN 1: LEFT CARD / SKETCHY NOTE SLOT */}
                        <div>
                          {isLeft ? (
                            <motion.div
                              style={{ opacity: anim.opacity, scale: anim.scale, y: anim.y }}
                              className={`bg-white/95 backdrop-blur-xl rounded-[16px] sm:rounded-[24px] p-3 sm:p-5 md:p-6 transition-all duration-500 relative group overflow-hidden ${
                                isActive
                                  ? `${isTeal ? 'border-teal-400/90 shadow-[0_10px_30px_rgba(20,184,166,0.2)] ring-2 ring-teal-400/30' : 'border-indigo-400/90 shadow-[0_10px_30px_rgba(99,102,241,0.2)] ring-2 ring-indigo-400/30'} scale-[1.01]`
                                  : `border ${isTeal ? 'border-teal-100/90 hover:border-teal-300' : 'border-indigo-100/90 hover:border-indigo-300'} shadow-xs`
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1.5 sm:mb-3">
                                <span className={`font-display font-black text-xl sm:text-3xl md:text-4xl transition-all duration-500 select-none tracking-tighter ${
                                  isActive
                                    ? `${isTeal ? 'text-teal-500 drop-shadow-[0_0_10px_rgba(45,212,191,0.6)]' : 'text-indigo-500 drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]'} scale-105 opacity-100`
                                    : `${isTeal ? 'text-teal-300/80 group-hover:text-teal-400' : 'text-indigo-300/80 group-hover:text-indigo-400'}`
                                }`}>
                                  {p.step}
                                </span>
                                <div className={`w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${isTeal ? 'bg-teal-50 text-teal-600' : 'bg-indigo-50 text-indigo-600'} flex items-center justify-center font-bold border transition-all duration-500 ${
                                  isActive ? 'ring-2 ring-teal-400/40 shadow-sm rotate-3 scale-105' : ''
                                }`}>
                                  <p.icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                                </div>
                              </div>

                              <h3 className={`font-display font-bold text-xs sm:text-base md:text-xl mb-1 sm:mb-2 leading-snug transition-colors ${
                                isActive ? (isTeal ? 'text-teal-700' : 'text-indigo-700') : 'text-slate-900 group-hover:text-teal-600'
                              }`}>
                                {p.title}
                              </h3>

                              <p className="text-slate-500 text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-relaxed mb-2 sm:mb-4 font-normal line-clamp-2 md:line-clamp-none">
                                {p.desc}
                              </p>

                              <div className="flex items-center justify-start gap-1">
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-semibold ${isTeal ? 'bg-teal-50 text-teal-800 border-teal-200/60' : 'bg-indigo-50 text-indigo-800 border-indigo-200/60'} border`}>
                                  <p.tagIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                  {p.subtitle}
                                </span>
                              </div>
                            </motion.div>
                          ) : (
                            <div className="hidden lg:flex flex-col items-end pr-6">
                              <span className="font-serif italic text-slate-400/90 text-sm tracking-wide select-none drop-shadow-2xs">
                                {notes[idx].text}
                              </span>
                              <svg className="w-10 h-10 text-slate-300 stroke-current fill-none mt-1" viewBox="0 0 50 50">
                                <path d="M 35 10 C 25 15, 20 25, 25 38" strokeWidth="2" strokeLinecap="round" />
                                <path d="M 18 30 L 25 38 L 32 32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* COLUMN 2: CENTER TIMELINE TRACK & NODE BADGE */}
                        <div className="flex flex-col items-center justify-center relative min-h-[90px] sm:min-h-[120px]">
                          {/* Node Circle Badge */}
                          <motion.div
                            style={{ opacity: anim.opacity, scale: anim.scale }}
                            className="relative z-20"
                          >
                            <motion.div
                              animate={isActive ? { scale: [1, 1.35, 1], opacity: [0.8, 0.2, 0.8] } : { scale: 1, opacity: 0.3 }}
                              transition={{ duration: 1.8, repeat: isActive ? Infinity : 0 }}
                              className={`absolute inset-0 rounded-full ${isTeal ? 'bg-teal-400' : 'bg-indigo-400'} -z-10 blur-xs`}
                            />
                            <div className={`w-9 h-9 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full bg-white transition-all duration-500 flex items-center justify-center font-bold ${
                              isActive
                                ? `scale-110 sm:scale-125 ${isTeal ? 'border-2 sm:border-3 border-teal-400 text-teal-600 shadow-[0_0_20px_rgba(20,184,166,0.85)] ring-2 sm:ring-4 ring-teal-400/40' : 'border-2 sm:border-3 border-indigo-400 text-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.85)] ring-2 sm:ring-4 ring-indigo-400/40'}`
                                : `border sm:border-2 ${isTeal ? 'border-teal-200 text-slate-400 shadow-xs' : 'border-indigo-200 text-slate-400 shadow-xs'}`
                            }`}>
                              <p.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-500 ${isActive ? (isTeal ? 'text-teal-600 scale-110 drop-shadow-[0_0_8px_rgba(20,184,166,0.9)]' : 'text-indigo-600 scale-110 drop-shadow-[0_0_8px_rgba(99,102,241,0.9)]') : 'text-slate-400'}`} />
                            </div>
                          </motion.div>

                        </div>

                        {/* COLUMN 3: RIGHT CARD / SKETCHY NOTE SLOT */}
                        <div>
                          {!isLeft ? (
                            <motion.div
                              style={{ opacity: anim.opacity, scale: anim.scale, y: anim.y }}
                              className={`bg-white/95 backdrop-blur-xl rounded-[16px] sm:rounded-[24px] p-3 sm:p-5 md:p-6 transition-all duration-500 relative group overflow-hidden ${
                                isActive
                                  ? `${isTeal ? 'border-teal-400/90 shadow-[0_10px_30px_rgba(20,184,166,0.2)] ring-2 ring-teal-400/30' : 'border-indigo-400/90 shadow-[0_10px_30px_rgba(99,102,241,0.2)] ring-2 ring-indigo-400/30'} scale-[1.01]`
                                  : `border ${isTeal ? 'border-teal-100/90 hover:border-teal-300' : 'border-indigo-100/90 hover:border-indigo-300'} shadow-xs`
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1.5 sm:mb-3">
                                <div className={`w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${isTeal ? 'bg-teal-50 text-teal-600' : 'bg-indigo-50 text-indigo-600'} flex items-center justify-center font-bold border transition-all duration-500 ${
                                  isActive ? 'ring-2 ring-indigo-400/40 shadow-sm rotate-3 scale-105' : ''
                                }`}>
                                  <p.icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                                </div>
                                <span className={`font-display font-black text-xl sm:text-3xl md:text-4xl transition-all duration-500 select-none tracking-tighter ${
                                  isActive
                                    ? `${isTeal ? 'text-teal-500 drop-shadow-[0_0_10px_rgba(45,212,191,0.6)]' : 'text-indigo-500 drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]'} scale-105 opacity-100`
                                    : `${isTeal ? 'text-teal-300/80 group-hover:text-teal-400' : 'text-indigo-300/80 group-hover:text-indigo-400'}`
                                }`}>
                                  {p.step}
                                </span>
                              </div>

                              <h3 className={`font-display font-bold text-xs sm:text-base md:text-xl mb-1 sm:mb-2 leading-snug transition-colors ${
                                isActive ? (isTeal ? 'text-teal-700' : 'text-indigo-700') : 'text-slate-900 group-hover:text-indigo-600'
                              }`}>
                                {p.title}
                              </h3>

                              <p className="text-slate-500 text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-relaxed mb-2 sm:mb-4 font-normal line-clamp-2 md:line-clamp-none">
                                {p.desc}
                              </p>

                              <div className="flex items-center justify-start gap-1">
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-semibold ${isTeal ? 'bg-teal-50 text-teal-800 border-teal-200/60' : 'bg-indigo-50 text-indigo-800 border-indigo-200/60'} border`}>
                                  <p.tagIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                  {p.subtitle}
                                </span>
                              </div>
                            </motion.div>
                          ) : (
                            <div className="hidden lg:flex flex-col items-start pl-6">
                              <span className="font-serif italic text-slate-400/90 text-sm tracking-wide select-none drop-shadow-2xs">
                                {notes[idx].text}
                              </span>
                              <svg className="w-10 h-10 text-slate-300 stroke-current fill-none mt-1" viewBox="0 0 50 50">
                                <path d="M 15 10 C 25 15, 30 25, 25 38" strokeWidth="2" strokeLinecap="round" />
                                <path d="M 18 32 L 25 38 L 30 30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          )}
                        </div>

                      </div>

                    </div>
                  )
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-transparent">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4">Not sure which service is right for you?</h2>
            <p className="text-slate-500 mb-8 text-base">Book a free 30-minute discovery call. We'll assess your needs and recommend the best path forward.</p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}



