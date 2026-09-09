import { motion } from 'framer-motion'
import { TrendingUp, Users, Star, Zap, CheckCircle, BarChart3 } from 'lucide-react'

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[620px] mx-auto select-none">
      {/* Glow blob background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      {/* Main browser mockup */}
      <motion.div
        className="animate-float-main"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
          {/* Browser bar */}
          <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 font-mono ml-2">
              Autofy.ai.agency/dashboard
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-5 bg-white">
            {/* Stat row */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: 'Revenue', value: '$48.2K', icon: TrendingUp, color: 'text-primary', bg: 'bg-teal-50' },
                { label: 'Users', value: '12.4K', icon: Users, color: 'text-accent', bg: 'bg-indigo-50' },
                { label: 'Rating', value: '4.9★', icon: Star, color: 'text-warm', bg: 'bg-amber-50' },
              ].map(({ label, value, icon: Icon, color, bg }) => (
                <div key={label} className={`rounded-xl p-3 ${bg}`}>
                  <Icon className={`w-4 h-4 ${color} mb-1.5`} />
                  <div className={`font-bold text-base font-display text-slate-800`}>{value}</div>
                  <div className="text-xs text-slate-500">{label}</div>
                </div>
              ))}
            </div>

            {/* Chart bar visualization */}
            <div className="bg-slate-50 rounded-xl p-4 mb-4">
              <div className="flex items-end gap-1.5 h-20">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md"
                    style={{
                      height: `${h}%`,
                      background: i === 11
                        ? 'linear-gradient(180deg,#0d9488,#6366f1)'
                        : i >= 9
                        ? 'rgba(13,148,136,0.4)'
                        : '#e2e8f0'
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-400">
                <span>Jan</span><span>Jun</span><span>Dec</span>
              </div>
            </div>

            {/* Recent projects */}
            <div className="space-y-2.5">
              {[
                { name: 'Business Website', status: 'Live', color: 'bg-teal-100 text-teal-700' },
                { name: 'AI Automation System', status: 'Live', color: 'bg-teal-100 text-teal-700' },
                { name: 'Saas Platform', status: 'In Dev', color: 'bg-amber-100 text-amber-700' },
              ].map(({ name, status, color }) => (
                <div key={name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent" />
                    <span className="text-xs font-medium text-slate-700">{name}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${color}`}>{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating card 1 - Performance */}
      <motion.div
        className="absolute -left-8 top-1/4 animate-float-card1 z-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="card-glass rounded-2xl px-4 py-3 shadow-xl border border-white/80 min-w-[140px]">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-warm" />
            <span className="text-xs font-semibold text-slate-700">Premium Quality</span>
          </div>
          <div className="text-2xl font-bold font-display text-slate-900">98/100</div>
          <div className="text-xs text-slate-400 mt-0.5">Built to Scale</div>
          <div className="mt-2 w-full bg-slate-100 rounded-full h-1.5">
            <div className="h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" style={{width:'98%'}} />
          </div>
        </div>
      </motion.div>

      {/* Floating card 2 - Projects Completed */}
      <motion.div
        className="absolute -right-6 top-8 animate-float-card2 z-10"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <div className="card-glass rounded-2xl px-4 py-3 shadow-xl border border-white/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm font-display">24/7 AI workflows</div>
              <div className="text-xs text-slate-400">Automations Running</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating card 3 - Client satisfaction */}
    

      {/* Floating card 4 - BarChart */}
      <motion.div
        className="absolute -left-4 bottom-1/4 animate-float-card1 z-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <div className="card-glass rounded-2xl px-4 py-3 shadow-xl border border-white/80">
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold text-slate-700">Business Growth</span>
          </div>
          <div className="text-xl font-bold font-display text-slate-900">+240%</div>
          <div className="text-xs text-slate-400">Revenue Growth</div>
        </div>

      </motion.div>
      
  
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      }}
      className="absolute bottom-4 right-4 z-20"
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.03,
        }}
        className="w-[260px] rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl p-4 shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
      >
        <div className="flex items-center gap-4">
          
          {/* Pie Chart */}
          <div className="relative flex items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-[conic-gradient(#2563eb_0_45%,#14b8a6_45%_75%,#8b5cf6_75%_90%,#facc15_90%_100%)]" />

            <div className="absolute h-10 w-10 rounded-full bg-white" />
          </div>

          {/* Stats */}
          <div className="flex-1 space-y-2">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                <span className="text-xs font-medium text-slate-700">
                  Web Apps
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-900">
                45%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-500"></span>
                <span className="text-xs font-medium text-slate-700">
                  Automation
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-900">
                30%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-500"></span>
                <span className="text-xs font-medium text-slate-700">
                  SaaS
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-900">
                15%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
                <span className="text-xs font-medium text-slate-700">
                  AI Tools
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-900">
                10%
              </span>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  
      
    </div>
  )


}
