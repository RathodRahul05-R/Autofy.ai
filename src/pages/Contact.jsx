import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Phone, Instagram, Linkedin, MapPin, MessageCircle, Github, Mail, Clock, Zap } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const whatsappMessage = `*New Project Inquiry from Autofy.ai* 👋\n\n` +
      `👤 *Name:* ${form.name.trim()}\n` +
      `📞 *Phone:* ${form.phone.trim() || 'Not provided'}\n` +
      `✉️ *Email:* ${form.email.trim()}\n` +
      `🛠️ *Service Needed:* ${form.service || 'Not specified'}\n` +
      `💰 *Budget Range:* ${form.budget || 'Not specified'}\n\n` +
      `📝 *Project Details:*\n${form.message.trim()}`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/919392472134?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')

    setSubmitted(true)
    setTimeout(() => { 
      setSubmitted(false); 
      setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' }) 
    }, 4000)
  }

  const primaryChannels = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      subtitle: 'Fastest Response (Instant)',
      details: '+91 93924 72134',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200/80',
      link: 'https://wa.me/919392472134',
    },
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Official Inquiry',
      details: 'autofy07@gmail.com',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200/80',
      link: 'mailto:autofy07@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      subtitle: 'Headquarters',
      details: 'Hyderabad, Telangana, India',
      color: 'text-rose-500',
      bg: 'bg-rose-50',
      border: 'border-rose-200/80',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Response Time',
      subtitle: 'Fast Turnaround',
      details: 'Within 30 minutes',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200/80',
      link: '#',
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* Hero */}
      <section className="relative pt-36 pb-14 overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-50/60 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-indigo-50/60 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-700 mb-4">
              <Zap className="w-3.5 h-3.5" /> 30-Minute Guaranteed Response
            </span>
            <h1 className="font-display font-bold text-slate-900 leading-tight mb-4" style={{ fontSize: 'clamp(34px, 5vw, 54px)' }}>
              Let's Build <span className="gradient-text">Something Great</span>
            </h1>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Ready to launch your website, AI solution, or custom digital product? Fill out the form or chat directly with our team on WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Left: Essential Channels & Trust Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="font-display font-bold text-xl text-slate-900 mb-4">Get in Touch Directly</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {primaryChannels.map((ch, idx) => {
                    const Icon = ch.icon
                    return (
                      <motion.a
                        key={idx}
                        href={ch.link}
                        target={ch.link !== '#' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.06 }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        className={`flex items-center gap-3.5 bg-white border ${ch.border} rounded-2xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer group`}
                      >
                        <div className={`${ch.bg} p-2.5 rounded-xl shrink-0 group-hover:scale-105 transition-transform`}>
                          <Icon className={`w-5 h-5 ${ch.color}`} />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-slate-900 text-sm truncate">{ch.title}</div>
                          <div className="text-slate-400 text-[11px] mb-0.5">{ch.subtitle}</div>
                          <div className="text-slate-700 text-xs font-semibold truncate">{ch.details}</div>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Direct WhatsApp Action Card */}
              <motion.a
                href="https://wa.me/919392472134"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex items-center justify-between gap-4 w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-5 shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5.5 h-5.5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm leading-tight">Need a quick call or chat?</div>
                    <div className="text-emerald-100 text-xs mt-0.5 font-medium">Click to chat instantly on WhatsApp</div>
                  </div>
                </div>
                <span className="text-xs font-bold bg-white/20 px-3 py-1.5 rounded-full uppercase tracking-wider group-hover:bg-white group-hover:text-emerald-800 transition-colors shrink-0">
                  Chat Now →
                </span>
              </motion.a>

              {/* Why Work With Us Card */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 text-sm mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                  Why work with Autofy?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Guaranteed 30-minute response time',
                    'Free technical discovery call & consultation',
                    'Transparent fixed pricing — no hidden fees',
                    'Direct collaboration with senior engineers',
                  ].map(p => (
                    <li key={p} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Cleaned Up Interactive Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-8 sm:p-10">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-display font-bold text-2xl text-slate-900">Send Us a Message</h2>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" /> Replies within 30 min
                  </span>
                </div>
                <p className="text-slate-500 text-sm mb-7">Fill in your requirements to generate a pre-filled WhatsApp message instantly.</p>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-14">
                    <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Redirected to WhatsApp!</h3>
                    <p className="text-slate-500 text-sm max-w-xs mx-auto">Your details have been pre-filled. Simply tap send in WhatsApp to get in touch!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Name *</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none text-sm bg-slate-50/70 focus:bg-white"
                          placeholder="Rahul Sharma" required />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none text-sm bg-slate-50/70 focus:bg-white"
                          placeholder="+91 93924 72134" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none text-sm bg-slate-50/70 focus:bg-white"
                        placeholder="hello@example.com" required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Service Needed</label>
                        <select name="service" value={form.service} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none text-sm bg-slate-50/70 focus:bg-white">
                          <option value="">Select a service...</option>
                          <option>Web Development</option>
                          <option>AI Automation</option>
                          <option>SaaS Development</option>
                          <option>Analytics Dashboard</option>
                          <option>Brand & Design</option>
                          <option>Growth Strategy</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Budget Range</label>
                        <select name="budget" value={form.budget} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none text-sm bg-slate-50/70 focus:bg-white">
                          <option value="">Select budget...</option>
                          <option>Under ₹50,000</option>
                          <option>₹50,000 – ₹1,50,000</option>
                          <option>₹1,50,000 – ₹5,00,000</option>
                          <option>₹5,00,000+</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Tell Us About Your Project *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none resize-none text-sm bg-slate-50/70 focus:bg-white"
                        placeholder="Describe your project, goals, and timeline..." required />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white justify-center py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      <span>Send Message via WhatsApp</span> <MessageCircle className="w-4.5 h-4.5" />
                    </motion.button>
                    <p className="text-center text-xs text-slate-500 font-medium">⚡ We typically respond within 30 minutes. No spam, ever.</p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

