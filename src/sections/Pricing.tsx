import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      desc: 'For small teams and pilots',
      price: 'Custom',
      features: [
        'Up to 250 endpoints',
        'EDR core capabilities',
        'Email security',
        'Basic threat intelligence',
        'Email support',
        'Knowledge base access',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Professional',
      desc: 'For growing enterprises',
      price: 'Custom',
      features: [
        'Up to 2,500 endpoints',
        'Complete EDR/XDR',
        'Patch management',
        'Asset discovery',
        'Advanced threat intel',
        'AI Copilot access',
        'Priority support',
        'Custom integrations',
      ],
      cta: 'Book Demo',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      desc: 'For large-scale deployments',
      price: 'Custom',
      features: [
        'Unlimited endpoints',
        'All modules included',
        'Cloud & SaaS security',
        'Network visibility',
        'Compliance automation',
        'Executive dashboards',
        '24/7 dedicated support',
        'Professional services',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Flexible Pricing Plans"
          subtitle="Choose the plan that fits your enterprise needs"
        />

        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`rounded-lg p-8 transition ${
                plan.highlighted
                  ? 'glass border-2 border-primary-cyan/50 shadow-lg shadow-primary-cyan/20'
                  : 'glass border border-white/10'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={plan.highlighted ? { scale: 1.05 } : {}}
            >
              {plan.highlighted && (
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary-cyan/20 text-primary-cyan text-xs font-bold rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.desc}</p>

              <div className="mb-6">
                <div className="text-4xl font-black gradient-text mb-1">{plan.price}</div>
                <p className="text-sm text-gray-500">Contact for custom pricing</p>
              </div>

              <Button
                variant={plan.highlighted ? 'primary' : 'secondary'}
                className="w-full mb-8"
              >
                {plan.cta}
              </Button>

              <div className="border-t border-white/10 pt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Check size={18} className="text-status-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 mb-4">Not sure which plan is right for you?</p>
          <Button variant="ghost">View Detailed Comparison</Button>
        </motion.div>
      </div>
    </section>
  )
}
