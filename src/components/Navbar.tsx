import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const products = [
    { name: 'Unified Endpoint Management', href: '#' },
    { name: 'Endpoint Security (EDR/XDR)', href: '#' },
    { name: 'Vulnerability & Patch Management', href: '#' },
    { name: 'AI Security Copilot', href: '#' },
    { name: 'Threat Intelligence', href: '#' },
    { name: 'Compliance & Governance', href: '#' },
    { name: 'Asset Intelligence', href: '#' },
    { name: 'Network Visibility', href: '#' },
  ]

  const solutions = [
    { name: 'Security Operations (SOC)', href: '#' },
    { name: 'IT Operations (NOC)', href: '#' },
    { name: 'Executive Dashboard', href: '#' },
    { name: 'Managed Security Services', href: '#' },
    { name: 'Compliance Automation', href: '#' },
    { name: 'Zero Trust', href: '#' },
    { name: 'Incident Response', href: '#' },
  ]

  const resources = [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Knowledge Base', href: '#' },
    { name: 'Whitepapers', href: '#' },
    { name: 'Threat Reports', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Trust Center', href: '#' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-dark-card/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-primary-cyan rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">S</span>
            </div>
            <span className="text-white font-black text-lg hidden sm:inline">SecOpShield</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Products */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveMenu('products')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-white transition">
                Products
                <ChevronDown size={16} />
              </button>
              {activeMenu === 'products' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-dark-card/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl p-2"
                >
                  {products.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Solutions */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveMenu('solutions')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-white transition">
                Solutions
                <ChevronDown size={16} />
              </button>
              {activeMenu === 'solutions' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-dark-card/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl p-2"
                >
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Industries */}
            <a href="#industries" className="text-gray-300 hover:text-white transition">
              Industries
            </a>

            {/* Resources */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveMenu('resources')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-white transition">
                Resources
                <ChevronDown size={16} />
              </button>
              {activeMenu === 'resources' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-dark-card/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl p-2"
                >
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Company */}
            <a href="#company" className="text-gray-300 hover:text-white transition">
              Company
            </a>

            {/* Pricing */}
            <a href="#pricing" className="text-gray-300 hover:text-white transition">
              Pricing
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="btn-ghost">Contact Sales</button>
            <button className="btn-primary">Book Demo</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 py-4 space-y-4"
          >
            <div className="px-4">
              <p className="text-xs uppercase text-gray-500 font-semibold mb-2">Products</p>
              {products.map((item) => (
                <a key={item.name} href={item.href} className="block py-2 text-gray-300 hover:text-white">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="px-4">
              <p className="text-xs uppercase text-gray-500 font-semibold mb-2">Solutions</p>
              {solutions.map((item) => (
                <a key={item.name} href={item.href} className="block py-2 text-gray-300 hover:text-white">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="px-4 pt-4 border-t border-white/10 space-y-2">
              <a href="#industries" className="block py-2 text-gray-300 hover:text-white">
                Industries
              </a>
              <a href="#pricing" className="block py-2 text-gray-300 hover:text-white">
                Pricing
              </a>
              <button className="w-full btn-primary">Book Demo</button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
