import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  icon: ReactNode
  title: string
  description: string
  hover?: boolean
  children?: ReactNode
}

export default function Card({ icon, title, description, hover = false, children }: CardProps) {
  return (
    <motion.div
      className={`glass rounded-lg p-6 transition ${
        hover ? 'hover:border-primary-cyan/50 hover:bg-white/5' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8 } : {}}
    >
      <div className="text-primary-cyan mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
      {children}
    </motion.div>
  )
}
