import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function SectionTitle({ title, subtitle, children }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-heading-lg font-black text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-lg text-gray-400 max-w-2xl mx-auto mb-6">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  )
}
