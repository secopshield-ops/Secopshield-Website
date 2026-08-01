import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

export default function Platform() {
  const components = [
    {
      title: 'Lightweight Agent',
      description: 'Single agent for all endpoint operations',
      position: 'top-0 left-1/4',
    },
    {
      title: 'Secure API',
      description: 'Enterprise-grade API gateway',
      position: 'top-1/4 right-1/4',
    },
    {
      title: 'Processing Engine',
      description: 'High-performance data processing',
      position: 'top-1/2 left-1/3',
    },
    {
      title: 'AI Intelligence',
      description: 'Machine learning threat detection',
      position: 'top-1/2 right-1/3',
    },
    {
      title: 'Executive Dashboard',
      description: 'Real-time risk visualization',
      position: 'bottom-1/4 left-1/4',
    },
    {
      title: 'Automation Engine',
      description: 'Orchestrated response automation',
      position: 'bottom-1/4 right-1/4',
    },
  ]

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Enterprise Architecture"
          subtitle="Unified platform designed for scale, performance, and security"
        />

        {/* Architecture Diagram */}
        <motion.div
          className="relative h-96 mt-12 mb-8 glass rounded-lg p-8 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Center Circle */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-blue to-primary-cyan flex items-center justify-center">
              <div className="text-white font-black text-center text-xs">
                <div>Unified</div>
                <div>Platform</div>
              </div>
            </div>
          </motion.div>

          {/* Component Cards */}
          {components.map((comp, idx) => (
            <motion.div
              key={idx}
              className={`absolute ${comp.position} w-32`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-dark-bg/80 border border-primary-cyan/30 rounded-lg p-4 text-center hover:border-primary-cyan/80 transition cursor-pointer">
                <h3 className="text-sm font-bold text-white mb-2">{comp.title}</h3>
                <p className="text-xs text-gray-400">{comp.description}</p>
              </div>

              {/* Connection Lines */}
              <svg className="absolute w-full h-full top-0 left-0 pointer-events-none" style={{ overflow: 'visible' }}>
                <line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="60%"
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </svg>
            </motion.div>
          ))}

          {/* SVG Gradient Definition */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: '🎯',
              title: 'Single Agent',
              desc: 'Deploy once, secure everything. One lightweight agent for all endpoint operations.',
            },
            {
              icon: '📊',
              title: 'One Dashboard',
              desc: 'Unified visibility across security, IT, compliance, and governance in one interface.',
            },
            {
              icon: '🤖',
              title: 'One AI',
              desc: 'Intelligent threat detection, investigation, and automated response at scale.',
            },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              className="glass p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
