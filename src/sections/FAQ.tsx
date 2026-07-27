import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How does SecOpShield differ from traditional security solutions?',
      answer: 'SecOpShield is a unified platform that replaces 10+ disconnected tools with one intelligent system. Instead of managing separate EDR, XDR, patch management, vulnerability, and compliance tools, you get everything integrated into one dashboard with one agent and one AI.',
    },
    {
      question: 'What\'s the typical deployment time?',
      answer: 'Most enterprises are operational within 2-4 weeks. Our lightweight agent deploys in minutes, and our professional services team handles configuration and integration. No major IT disruption required.',
    },
    {
      question: 'Does SecOpShield support hybrid and cloud environments?',
      answer: 'Yes. SecOpShield provides unified visibility across on-premises, hybrid, and multi-cloud environments. We support AWS, Azure, Google Cloud, and private clouds with native integrations.',
    },
    {
      question: 'How does the AI Security Copilot work?',
      answer: 'The Copilot is an intelligent assistant that understands natural language security questions. It investigates threats, explains findings, recommends remediation actions, and can automatically execute playbooks with your approval.',
    },
    {
      question: 'What compliance frameworks does SecOpShield support?',
      answer: 'We support NIST CSF, ISO 27001, SOC 2 Type II, PCI DSS, HIPAA, GDPR, DPDP, and MITRE ATT&CK. Compliance reporting is automated and audit-ready.',
    },
    {
      question: 'How does pricing work?',
      answer: 'Pricing is based on the number of endpoints, modules selected, and support tier. We offer flexible licensing options including perpetual and subscription models. Contact our sales team for a custom quote.',
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include product support. Starter includes email support, Professional includes priority support, and Enterprise includes 24/7 dedicated support with a designated customer success manager.',
    },
    {
      question: 'Can SecOpShield integrate with existing security tools?',
      answer: 'Yes. SecOpShield has 200+ pre-built integrations with leading security platforms, SIEMs, ticketing systems, and communication tools. Custom API integrations are available for enterprise.',
    },
  ]

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about SecOpShield"
        />

        <motion.div
          className="space-y-3 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition"
              >
                <h3 className="text-lg font-bold text-white text-left">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown size={24} className="text-primary-cyan" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10"
                  >
                    <p className="p-6 text-gray-400 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
