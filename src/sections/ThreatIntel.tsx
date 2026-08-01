import { motion } from 'framer-motion'
import { Globe, MapPin } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

export default function ThreatIntel() {
  const threats = [
    { region: 'North America', count: 234, level: 'High' },
    { region: 'Europe', count: 156, level: 'Medium' },
    { region: 'Asia Pacific', count: 289, level: 'Critical' },
    { region: 'LATAM', count: 78, level: 'Medium' },
  ]

  const mitre = [
    { tactic: 'Initial Access', techniques: 8 },
    { tactic: 'Execution', techniques: 12 },
    { tactic: 'Persistence', techniques: 15 },
    { tactic: 'Privilege Escalation', techniques: 11 },
  ]

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Advanced Threat Intelligence"
          subtitle="Real-time threat feeds, MITRE ATT&CK mapping, and geopolitical insights"
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Map Section */}
          <motion.div
            className="glass rounded-lg p-8 h-96 flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Globe size={24} className="text-primary-cyan" />
              <h3 className="text-lg font-bold text-white">Global Threat Map</h3>
            </div>

            <div className="flex-1 flex items-center justify-center mb-6">
              <div className="w-full h-full bg-dark-bg/50 rounded-lg border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <Globe size={48} className="text-primary-cyan/50 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Real-time threat visualization</p>
                </div>
              </div>
            </div>

            {/* Threat Stats */}
            <div className="space-y-2">
              {threats.map((threat, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center justify-between p-2 bg-dark-bg/30 rounded hover:bg-dark-bg/50 transition"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary-cyan" />
                    <span className="text-sm text-gray-300">{threat.region}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-white">{threat.count}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        threat.level === 'Critical'
                          ? 'bg-status-danger/20 text-status-danger'
                          : threat.level === 'High'
                          ? 'bg-status-warning/20 text-status-warning'
                          : 'bg-status-success/20 text-status-success'
                      }`}
                    >
                      {threat.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* MITRE ATT&CK Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-heading-md font-black text-white mb-4">MITRE ATT&CK Mapping</h3>
              <p className="text-gray-400 text-lg mb-6">
                Automated mapping of detected threats to MITRE ATT&CK framework for standardized threat analysis.
              </p>
            </div>

            <div className="space-y-3">
              {mitre.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="glass p-4 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{item.tactic}</h4>
                    <span className="text-primary-cyan font-bold">{item.techniques} techniques</span>
                  </div>
                  <div className="w-full bg-dark-bg/50 rounded-full h-2">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-blue to-primary-cyan rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.techniques / 15) * 100}%` }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              {[
                { label: 'Active Threats', value: '1,247' },
                { label: 'CVE Feed', value: '32 new' },
                { label: 'Threat Actors', value: '89 tracked' },
                { label: 'Last Updated', value: '2 mins ago' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-2xl font-black gradient-text">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
