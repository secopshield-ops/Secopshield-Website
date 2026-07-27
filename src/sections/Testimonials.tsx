import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'SecOpShield reduced our MTTR from 4 hours to 12 minutes. The unified dashboard eliminated tool sprawl complexity.',
      author: 'Sarah Chen',
      role: 'CISO',
      company: 'Global Financial Services',
      avatar: 'SC',
    },
    {
      quote: 'The AI Copilot has transformed how our SOC team investigates threats. It\'s like having a senior analyst on every ticket.',
      author: 'Michael Rodriguez',
      role: 'VP Security Operations',
      company: 'Healthcare Enterprise',
      avatar: 'MR',
    },
    {
      quote: 'Compliance reporting that used to take 2 weeks now takes 2 hours. SecOpShield changed our compliance game.',
      author: 'Priya Patel',
      role: 'Chief Compliance Officer',
      company: 'Fintech Company',
      avatar: 'PP',
    },
    {
      quote: 'One agent instead of five. One dashboard instead of twelve. The cost savings alone justified our investment in 6 months.',
      author: 'James Wilson',
      role: 'IT Director',
      company: 'Manufacturing Corp',
      avatar: 'JW',
    },
    {
      quote: 'The platform\'s automation capabilities freed up our team to focus on strategic initiatives instead of firefighting.',
      author: 'Lisa Thompson',
      role: 'CTO',
      company: 'Enterprise Software',
      avatar: 'LT',
    },
    {
      quote: 'Government-grade security with zero compliance headaches. SecOpShield is in a league of its own.',
      author: 'Robert Williams',
      role: 'Security Architect',
      company: 'Government Agency',
      avatar: 'RW',
    },
  ]

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Trusted by Enterprise Leaders"
          subtitle="See what security executives say about SecOpShield"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-lg p-6 flex flex-col h-full hover:border-primary-cyan/50 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-status-warning text-status-warning" />
                ))}
              </div>

              {/* Quote */}
              <div className="flex gap-3 mb-4">
                <Quote size={20} className="text-primary-cyan/40 flex-shrink-0 mt-1" />
                <p className="text-gray-300 leading-relaxed flex-grow">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-white/10 pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-cyan rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
