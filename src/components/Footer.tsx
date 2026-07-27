import { Link } from 'react-router-dom'
import { Mail, Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-primary-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">S</span>
              </div>
              <span className="text-white font-black">SecOpShield</span>
            </div>
            <p className="text-gray-400 text-sm">
              Enterprise cybersecurity operations unified.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Endpoint Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  EDR/XDR
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Vulnerability Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  AI Copilot
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Threat Intelligence
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Security Operations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  IT Operations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Zero Trust
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Incident Response
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Whitepapers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Trust Center
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            <p>&copy; 2024 SecOpShield. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-primary-cyan transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-cyan transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-cyan transition">
              <Github size={20} />
            </a>
            <a href="mailto:hello@secopshield.com" className="text-gray-400 hover:text-primary-cyan transition">
              <Mail size={20} />
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
