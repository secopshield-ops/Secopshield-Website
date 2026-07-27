import { motion } from 'framer-motion'
import { TrendingDown, BarChart3, Eye, Zap } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

export default function Benefits() {
  const benefits = [
    {
      icon: <TrendingDown size={32} />,
      metric: '72%',
      title: 'Reduce MTTR',
      description: 'Automated threat response reduces mean time to remediation from hours to minutes',
    },
    {
      icon: <BarChart3 size={32} />,
      metric: '65%',
      title: 'Lower Total Cost of Ownership',
      description: 'Replace 10+ tools with one unified platform and eliminate tool sprawl overhead',
    },
    {
      icon: <Eye size={32} />,
      metric: '100%',
      title: 'Complete Visibility',
      description: 'Unified dashboard across endpoints, cloud, network, and email security',
    },
    {
      icon: <Zap size={32} />,
      metric: '8x',
      title: 'Faster Incident Response',
      description: 'Orchestrated automation cuts incident response time from days to hours',
    },
  ]

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Enterprise Benefits"
          subtitle="Proven ROI with measurable business impact"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-lg p-6 group hover:border-primary-cyan/50 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="text-primary-cyan mb-4 group-hover:text-primary-blue transition">
                {benefit.icon}
              </div>
              <div className="text-4xl font-black gradient-text mb-3">{benefit.metric}</div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
