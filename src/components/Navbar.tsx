import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from './Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Platform', href: '#' },
    { label: 'Solutions', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Company', href: '#' },
    { label: 'Docs', href: '#' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-primary-cyan rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">S</span>
            </div>
            <span className="text-white font-black text-lg">SecOpShield</span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                className="text-gray-400 hover:text-white transition relative group"
                whileHover={{ color: '#ffffff' }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-blue to-primary-cyan group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hidden md:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 bg-dark-card/50 backdrop-blur-sm"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    className="block text-gray-400 hover:text-white transition py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <Button variant="ghost" size="sm" className="flex-1">
                    Sign In
                  </Button>
                  <Button variant="primary" size="sm" className="flex-1">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
