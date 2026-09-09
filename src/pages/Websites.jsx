import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight, Sparkles, Check, Globe, Code2, Cpu, Zap, Star } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'GR STYLES',
    category: 'E-Commerce',
    description: 'A premium fashion e-commerce platform featuring a luxury shopping experience, secure online payments, responsive product catalogs, and SEO-optimized performance for modern retail brands.',
    metrics: '+180% Sales Growth',
    image: '/images/1.png',
    tags: ['Next.js', 'E-Commerce', 'Stripe', 'Supabase'],
    url: 'https://grrstyles-main.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'Explore the World — Travel Agency',
    category: 'Websites',
    description: 'Our travel agency offers personalized and hassle-free travel experiences, tailored to meet your unique preferences and needs with interactive booking portals.',
    metrics: 'Travel Portal',
    image: '/images/2.png',
    tags: ['React', 'Tailwind CSS', 'Travel Portal', 'Booking'],
    url: 'https://travel-agency-main-rouge.vercel.app/',
    featured: true,
  },
  {
    id: 3,
    title: 'Velora — Healthy Meals Delivered Fresh',
    category: 'E-Commerce',
    description: 'Healthy meals, delivered fresh every day. Custom subscription meal plans, nutritional tracking, chef-crafted menus, and fast doorstep delivery.',
    metrics: 'Fresh Subscription',
    image: '/images/3.png',
    tags: ['Next.js', 'Tailwind CSS', 'E-Commerce', 'Subscription'],
    url: 'https://velora-lilac-delta.vercel.app/',
    featured: true,
  },
  {
    id: 4,
    title: 'Velocity — Bicycle Showroom',
    category: 'Websites',
    description: 'Interactive luxury bicycle showroom featuring mountain, road, and electric bikes with custom specs presentation and high-speed visual styling.',
    metrics: 'Interactive Showcase',
    image: '/images/4.png',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Showroom'],
    url: 'https://bicycle-showroom.vercel.app/',
    featured: false,
  },
  {
    id: 5,
    title: 'Cooper Hospital & Medical Center',
    category: 'Websites',
    description: 'Comprehensive hospital and healthcare portal with online doctor appointment booking, department guides, and emergency medical services.',
    metrics: 'Healthcare Portal',
    image: '/images/5.png',
    tags: ['React', 'Tailwind CSS', 'Healthcare', 'Doctor Booking'],
    url: 'https://cooper-hospital-pnq8.vercel.app/',
    featured: false,
  },
  {
    id: 6,
    title: 'Swarnika Jewellers — Timeless Gold & Diamond',
    category: 'E-Commerce',
    description: 'Timeless Gold & Diamond Jewellery atelier displaying handcrafted luxury collections, certified gemstone catalogs, and personalized buyer consultations.',
    metrics: 'Luxury Gold & Diamond',
    image: '/images/6.png',
    tags: ['Next.js', 'E-Commerce', 'Tailwind CSS', 'Luxury'],
    url: 'https://swarnika-jewellery.vercel.app/',
    featured: false,
  },
  {
    id: 7,
    title: 'Serotoninn — Digital Brand Studio',
    category: 'Websites',
    description: 'Futuristic digital studio and modern brand platform designed to elevate online presence with high-impact visuals and creative interactive storytelling.',
    metrics: 'Brand Agency',
    image: '/images/7.png',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Brand Studio'],
    url: 'https://serotoninn.com/',
    featured: false,
  },
  {
    id: 8,
    title: 'LUMIÈRE — Luxury High Jewellery Atelier',
    category: 'E-Commerce',
    description: 'Timeless By Design — Luxury high jewellery atelier showcasing exquisite gem craftsmanship, private consultations, and fine jewellery catalog.',
    metrics: 'Haute Joaillerie',
    image: '/images/8.png',
    tags: ['Next.js', 'Tailwind CSS', 'Luxury UI', 'High Jewellery'],
    url: 'https://jewellery-two-delta.vercel.app/',
    featured: false,
  },
  {
    id: 9,
    title: 'Infranex Technologies',
    category: 'SaaS Platforms',
    description: 'Enterprise IT & technology platform delivering automated cloud solutions, software development, and scalable system architecture services.',
    metrics: 'Enterprise IT',
    image: '/images/9.png',
    tags: ['React', 'Tailwind CSS', 'SaaS Platform', 'IT Services'],
    url: 'https://www.infranextech.in/',
    featured: false,
  },
  {
    id: 10,
    title: 'THE HERITAGE TABLE — Royal Indian QR Menu',
    category: 'Websites',
    description: 'Royal Indian QR Menu and dining portal bringing authentic royal heritage recipes to life with digital ordering and contactless tableside experience.',
    metrics: 'Royal Dining QR Menu',
    image: '/images/10.png',
    tags: ['React', 'Tailwind CSS', 'QR Menu', 'Hospitality'],
    url: 'https://flavours1.netlify.app/',
    featured: false,
  },
]

const categories = ['All', 'Websites', 'SaaS Platforms', 'E-Commerce']

export default function Websites() {
  const [activeTab, setActiveTab] = useState('All')

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5 text-teal-500 animate-pulse" />
              Our Portfolio & Case Studies
            </span>
            <h1 className="font-display font-bold text-slate-900 leading-tight mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Websites & Software <span className="gradient-text">We've Built</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light mb-10">
              Explore our showcase of custom web applications, SaaS platforms, and digital platforms engineered for speed, conversion, and scale.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat
                    ? 'bg-slate-900 text-white shadow-md scale-105'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col"
                >
                  {/* Image Banner */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                      {project.category}
                    </span>
                    <span className="absolute top-4 right-4 bg-slate-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      {project.metrics}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-xl text-slate-900 mb-2.5 group-hover:text-teal-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* CTA Links */}
                      <div className="flex items-center justify-between gap-3 pt-2">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold hover:bg-teal-600 hover:text-white hover:border-teal-600 shadow-2xs transition-all duration-300 group/btn"
                        >
                          <span>View Website</span>
                          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>

                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors group/link"
                        >
                          <span>Build Similar</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-teal-400 font-semibold text-xs tracking-wider uppercase mb-3 block">Custom Built For You</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Need a Premium Website or Custom SaaS Platform?
          </h2>
          <p className="text-slate-400 text-base mb-8 max-w-2xl mx-auto font-light">
            We build modern digital platforms tailored to your business goals. Book a free consultation call to discuss your scope.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-base hover:bg-slate-100 shadow-lg hover:scale-105 transition-all"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
