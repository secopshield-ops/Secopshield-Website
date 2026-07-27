import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

export default function Dashboard() {
  const dashboards = [
    {
      name: 'Executive Dashboard',
      desc: 'Risk score, compliance status, and business impact',
      metrics: ['Risk Score: 4.2/10', 'Compliance: 94%', 'MTTR: 12m'],
      color: 'from-primary-blue',
    },
    {
      name: 'SOC Dashboard',
      desc: 'Threats, incidents, and automation status',
      metrics: ['Active Threats: 23', 'SIEM Events: 2.4M/day', 'Response Rate: 87%'],
      color: 'from-status-danger',
    },
    {
      name: 'Asset Dashboard',
      desc: 'Endpoint inventory, compliance, and health',
      metrics: ['Total Endpoints: 2,847', 'Compliant: 2,756', 'Patching: 98%'],
      color: 'from-primary-cyan',
    },
    {
      name: 'Compliance Dashboard',
      desc: 'Regulatory posture and audit readiness',
      metrics: ['SOC2: 100%', 'ISO27001: 98%', 'GDPR: 99%'],
      color: 'from-status-success',
    },
  ]

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Executive-Grade Dashboards"
          subtitle="Real-time visualization for every stakeholder"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {dashboards.map((dashboard, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-lg p-6 hover:border-white/30 transition group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{dashboard.name}</h3>
                  <p className="text-sm text-gray-400">{dashboard.desc}</p>
                </div>
                <div className={`bg-gradient-to-br ${dashboard.color} to-primary-cyan p-3 rounded-lg`}>
                  <BarChart3 size={20} className="text-white" />
                </div>
              </div>

              {/* Mock Chart */}
              <div className="bg-dark-bg/50 rounded-lg p-4 mb-4 h-32 flex items-end justify-between gap-1">
                {[65, 78, 45, 92, 38, 85, 72].map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary-blue to-primary-cyan rounded-t opacity-70 group-hover:opacity-100 transition"
                    style={{ height: `${height}%` }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.6 }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>

              {/* Metrics */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                {dashboard.metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle size={14} className="text-status-success flex-shrink-0" />
                    <span className="text-gray-300">{metric}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Live Dashboard Preview */}
        <motion.div
          className="mt-12 glass rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Browser Header */}
          <div className="bg-dark-bg border-b border-white/10 p-4 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-status-danger"></div>
              <div className="w-3 h-3 rounded-full bg-status-warning"></div>
              <div className="w-3 h-3 rounded-full bg-status-success"></div>
            </div>
            <p className="text-xs text-gray-500 ml-4">Executive Risk Dashboard - Live</p>
          </div>

          {/* Dashboard Content */}
          <div className="p-8">
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Risk Score', value: '4.2', icon: '📊', color: 'text-status-warning' },
                { label: 'Threats', value: '23', icon: '⚠️', color: 'text-status-danger' },
                { label: 'Compliance', value: '94%', icon: '✓', color: 'text-status-success' },
                { label: 'MTTR', value: '12m', icon: '⏱️', color: 'text-primary-cyan' },
              ].map((kpi, idx) => (
                <motion.div
                  key={idx}
                  className="bg-dark-card rounded-lg p-4 border border-white/10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-2">{kpi.icon}</div>
                  <p className="text-xs text-gray-400 mb-1">{kpi.label}</p>
                  <p className={`text-2xl font-black ${kpi.color}`}>{kpi.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Activity Feed */}
            <div className="border-t border-white/10 pt-6">
              <h4 className="text-sm font-semibold text-white mb-4">Recent Activity</h4>
              <div className="space-y-3">
                {[
                  { time: '2 mins ago', event: 'Critical vulnerability detected on 12 endpoints', severity: 'danger' },
                  { time: '15 mins ago', event: 'Patch deployment completed: 2,847 endpoints updated', severity: 'success' },
                  { time: '1 hour ago', event: 'Compliance report generated - SOC2 audit readiness: 100%', severity: 'success' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-dark-card/50 rounded"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        item.severity === 'danger' ? 'bg-status-danger' : 'bg-status-success'
                      }`}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-300 mb-1">{item.event}</p>
                      <p className="text-xs text-gray-500">{item.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
