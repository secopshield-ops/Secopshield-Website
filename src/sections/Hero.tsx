import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Lock } from 'lucide-react'
import Button from './Button'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark-bg via-dark-card/30 to-dark-bg py-20">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-primary-blue/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 bg-primary-cyan/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
                variants={itemVariants}
              >
                Autonomous Security.
                <br />
                <span className="gradient-text">Unified Control.</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-400 max-w-lg"
                variants={itemVariants}
              >
                AI-powered cybersecurity platform that unifies endpoint management, security operations, governance, compliance, and threat intelligence into one intelligent enterprise platform.
              </motion.p>
            </div>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {[
                { icon: Shield, text: 'One Agent' },
                { icon: Zap, text: 'One Dashboard' },
                { icon: Lock, text: 'One AI' },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="glass px-4 py-2 rounded-full flex items-center gap-2 text-sm text-gray-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon size={16} className="text-primary-cyan" />
                  {feature.text}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <Button size="lg" variant="primary" className="group">
                Book Demo
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition" />
              </Button>
              <Button size="lg" variant="secondary">
                Start Free Trial
              </Button>
              <Button size="lg" variant="ghost">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Dashboard Mockup */}
          <motion.div
            variants={itemVariants}
            className="relative h-full min-h-[500px] hidden lg:block"
          >
            {/* Animated Dashboard */}
            <motion.div
              className="absolute inset-0 glass rounded-lg border border-white/20 p-6 overflow-hidden"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-white font-bold text-lg">Security Dashboard</h3>
                  <p className="text-xs text-gray-500">Real-time threat intelligence</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-status-success"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-cyan"></div>
                  <div className="w-3 h-3 rounded-full bg-status-warning"></div>
                </div>
              </div>

              {/* Dashboard Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Critical Threats', value: '3', color: 'text-status-danger' },
                  { label: 'Vulnerabilities', value: '24', color: 'text-status-warning' },
                  { label: 'Endpoints', value: '2,847', color: 'text-primary-cyan' },
                  { label: 'MTTR (avg)', value: '12m', color: 'text-status-success' },
                ].map((metric, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-dark-bg/50 rounded-lg p-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                  >
                    <p className="text-xs text-gray-500 mb-2">{metric.label}</p>
                    <p className={`text-2xl font-black ${metric.color}`}>{metric.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Activity Feed */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500 font-semibold">Recent Activity</p>
                {[
                  'Malware detected on endpoint-042',
                  'Patch deployed to 1,200 devices',
                  'Compliance scan completed',
                  'Critical CVE published',
                ].map((activity, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-gray-400 p-2 rounded hover:bg-white/5 transition"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-cyan mt-1 flex-shrink-0"></div>
                    <span>{activity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
