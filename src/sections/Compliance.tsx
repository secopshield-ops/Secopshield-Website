import { motion } from 'framer-motion'
import { Shield, CheckCircle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

export default function Compliance() {
  const frameworks = [
    { name: 'NIST CSF', logo: '🔐', status: 'Full Coverage' },
    { name: 'ISO 27001', logo: '📋', status: 'Mapped' },
    { name: 'SOC 2 Type II', logo: '✓', status: 'Audited' },
    { name: 'PCI DSS', logo: '💳', status: 'Compliant' },
    { name: 'HIPAA', logo: '🏥', status: 'Ready' },
    { name: 'GDPR', logo: '🌍', status: 'Compliant' },
    { name: 'DPDP Act', logo: '🇮🇳', status: 'Compliant' },
    { name: 'MITRE ATT&CK', logo: '🎯', status: 'Mapped' },
  ]

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Enterprise Compliance Automation"
          subtitle="Continuous compliance across all major frameworks"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {frameworks.map((framework, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-lg p-6 text-center hover:border-primary-cyan/50 transition group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">{framework.logo}</div>
              <h3 className="text-lg font-bold text-white mb-2">{framework.name}</h3>
              <div className="flex items-center justify-center gap-2 text-sm text-status-success">
                <CheckCircle size={16} />
                <span>{framework.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Automated Reporting',
              points: [
                'Real-time compliance dashboards',
                'Automated evidence collection',
                'Executive compliance reports',
                'Audit trail for all changes',
              ],
            },
            {
              title: 'Continuous Monitoring',
              points: [
                'Policy compliance tracking',
                'Control gap identification',
                'Remediation automation',
                'Compliance scoring',
              ],
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-lg p-8"
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Shield size={24} className="text-primary-cyan" />
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={18} className="text-status-success flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
