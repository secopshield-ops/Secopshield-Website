import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'

export default function CTA() {
  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-blue/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Ready to modernize your
            <br />
            <span className="gradient-text">security operations?</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join enterprise leaders in replacing tool sprawl with unified security operations.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="primary" className="group">
              Book Demo Today
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition" />
            </Button>
            <Button size="lg" variant="secondary">
              Contact Sales
            </Button>
            <Button size="lg" variant="ghost">
              Start Free Trial
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="pt-8 border-t border-white/10 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-500 mb-6">Trusted by enterprise security leaders</p>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { emoji: '🏆', label: 'G2 Leader' },
                { emoji: '⭐', label: 'SOC2 Certified' },
                { emoji: '🔒', label: 'ISO 27001' },
                { emoji: '✓', label: 'FedRAMP Ready' },
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 text-gray-400"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl">{badge.emoji}</span>
                  <span className="text-sm">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
