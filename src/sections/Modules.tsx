import { motion } from 'framer-motion'
import {
  Shield,
  AlertTriangle,
  Tool,
  Package,
  Bug,
  Clock,
  Globe,
  CheckCircle,
  Lock,
  Mail,
  Network,
  Zap,
  Brain,
  Cloud,
  FileText,
  TrendingUp,
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'

export default function Modules() {
  const modules = [
    { icon: <Shield size={24} />, title: 'Unified Endpoint Management', desc: 'Device management, policies, applications' },
    { icon: <AlertTriangle size={24} />, title: 'Endpoint Detection & Response', desc: 'Real-time threat detection and response' },
    { icon: <Globe size={24} />, title: 'Extended Detection & Response', desc: 'Cross-platform threat intelligence' },
    { icon: <Package size={24} />, title: 'IT Asset Management', desc: 'Hardware and software inventory' },
    { icon: <Tool size={24} />, title: 'Patch Management', desc: 'Automated vulnerability patching' },
    { icon: <Lock size={24} />, title: 'Zero Trust Security', desc: 'Identity and access verification' },
    { icon: <Bug size={24} />, title: 'Vulnerability Management', desc: 'Vulnerability discovery and remediation' },
    { icon: <Clock size={24} />, title: 'Incident Response', desc: 'Orchestrated response automation' },
    { icon: <CheckCircle size={24} />, title: 'Compliance & Governance', desc: 'Automated compliance reporting' },
    { icon: <Mail size={24} />, title: 'Email Security', desc: 'Advanced email threat protection' },
    { icon: <Network size={24} />, title: 'Network Security', desc: 'Network monitoring and defense' },
    { icon: <Cloud size={24} />, title: 'Cloud Security', desc: 'Multi-cloud security posture' },
    { icon: <Brain size={24} />, title: 'AI Security Copilot', desc: 'Intelligent security assistant' },
    { icon: <TrendingUp size={24} />, title: 'Threat Intelligence', desc: 'Real-time threat feeds and insights' },
    { icon: <FileText size={24} />, title: 'Risk & Compliance', desc: 'Enterprise risk management' },
    { icon: <Zap size={24} />, title: 'Security Automation', desc: 'Workflow automation and orchestration' },
  ]

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="16 Enterprise Security Modules"
          subtitle="A complete security operations platform in one unified console"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {modules.map((module, idx) => (
            <Card
              key={idx}
              icon={module.icon}
              title={module.title}
              description={module.desc}
              hover
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
