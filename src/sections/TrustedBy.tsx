import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

export default function TrustedBy() {
  const logos = [
    { name: 'Fortune 500', initials: 'F500' },
    { name: 'Global Enterprise', initials: 'GE' },
    { name: 'Tech Leader', initials: 'TL' },
    { name: 'Financial Corp', initials: 'FC' },
    { name: 'Healthcare Plus', initials: 'HP' },
    { name: 'Government Agency', initials: 'GA' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Trusted by Enterprise Leaders" />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-lg flex items-center justify-center h-32 group cursor-pointer"
            >
              <div className="text-center">
                <div className="text-2xl font-black text-primary-cyan group-hover:text-primary-blue transition mb-2">
                  {logo.initials}
                </div>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition">{logo.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: '500+', label: 'Enterprise Customers' },
            { number: '100M+', label: 'Endpoints Protected' },
            { number: '99.99%', label: 'Uptime SLA' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-black gradient-text mb-2">{stat.number}</div>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
