import { motion } from 'framer-motion'
import { MessageCircle, Send } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

export default function Copilot() {
  const prompts = [
    'Show me all critical vulnerabilities',
    'Why did risk score increase?',
    'Generate compliance report',
    'Investigate this endpoint threat',
  ]

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="AI Security Copilot"
          subtitle="Your intelligent security assistant powered by enterprise-grade AI"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Left: Chat Interface */}
          <motion.div
            className="glass rounded-lg p-6 h-96 flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              <motion.div
                className="flex justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-primary-blue/20 p-3 rounded-lg max-w-xs">
                  <p className="text-sm text-gray-300">Show critical vulnerabilities on Windows endpoints</p>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-dark-bg border border-white/10 p-3 rounded-lg max-w-xs">
                  <p className="text-sm text-gray-300">
                    Found 12 critical CVEs affecting 243 Windows endpoints. Patch deployment recommended.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <div className="bg-primary-blue/20 p-3 rounded-lg max-w-xs">
                  <p className="text-sm text-gray-300">Automate patching with zero downtime</p>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="bg-dark-bg border border-white/10 p-3 rounded-lg max-w-xs">
                  <p className="text-sm text-gray-300">Initiating phased patch deployment for 243 endpoints. ETA 4 hours.</p>
                </div>
              </motion.div>
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask security questions..."
                className="flex-1 bg-dark-bg border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-300 placeholder-gray-500 focus:border-primary-cyan outline-none"
              />
              <button className="bg-primary-cyan text-dark-bg p-2 rounded-lg hover:bg-primary-blue transition">
                <Send size={18} />
              </button>
            </div>
          </motion.div>

          {/* Right: Capabilities */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-heading-md font-black text-white mb-4">Natural Language Security</h3>
              <p className="text-gray-400 text-lg mb-6">
                Ask security questions in plain English. Get instant answers, automated investigations, and recommended actions.
              </p>
            </div>

            <div className="space-y-3">
              {prompts.map((prompt, idx) => (
                <motion.button
                  key={idx}
                  className="w-full text-left glass p-4 rounded-lg hover:bg-white/10 transition group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle size={20} className="text-primary-cyan flex-shrink-0" />
                    <span className="text-sm text-gray-300 group-hover:text-white transition">{prompt}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <h4 className="font-semibold text-white mb-2">Capabilities:</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>✓ Threat investigation and analysis</li>
                <li>✓ Vulnerability assessment and remediation</li>
                <li>✓ Compliance report generation</li>
                <li>✓ Incident response guidance</li>
                <li>✓ Risk scoring and prioritization</li>
                <li>✓ Automated policy recommendations</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
