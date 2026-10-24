import { motion } from 'framer-motion'
import {
  Shield,
  Zap,
  Lock,
  Eye,
  AlertCircle,
  Settings,
  Network,
  BarChart3,
  Brain,
  Cloud,
  KeyRound,
  Database,
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'

export default function Features() {
  const features = [
    {
      icon: <Shield size={32} />,
      title: 'Unified Endpoint Management',
      description: 'Complete control over all endpoints from a single policy engine',
    },
    {
      icon: <AlertCircle size={32} />,
      title: 'Threat Detection & Response',
      description: 'Real-time threat detection with automated incident response',
    },
    {
      icon: <Settings size={32} />,
      title: 'Patch Management',
      description: 'Patch policies, approvals, exceptions, and remediation tracking',
    },
    {
      icon: <Eye size={32} />,
      title: 'Asset Discovery',
      description: 'Complete IT asset visibility and lifecycle management',
    },
    {
      icon: <Zap size={32} />,
      title: 'Incident Response',
      description: 'Orchestrated response playbooks with audit trail',
    },
    {
      icon: <Lock size={32} />,
      title: 'Compliance Automation',
      description: 'Continuous compliance monitoring with automated reporting',
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Executive Dashboard',
      description: 'C-suite risk visualization and business impact metrics',
    },
    {
      icon: <Network size={32} />,
      title: 'Network Visibility',
      description: 'Network discovery, topology, SNMP monitoring, and security context',
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud & Container Security',
      description: 'Cloud posture, identity, exposure, and container-security workflows',
    },
    {
      icon: <KeyRound size={32} />,
      title: 'Identity Governance',
      description: 'Identity visibility, access governance, SSO, SCIM, and MFA controls',
    },
    {
      icon: <Brain size={32} />,
      title: 'AI Governance',
      description: 'AI asset oversight, model governance, usage monitoring, and policy controls',
    },
    {
      icon: <Database size={32} />,
      title: 'Data Security & Privacy',
      description: 'Data-risk policy, DLP controls, privacy operations, and DPDP workflows',
    },
  ]

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Connected Security & Technology Operations"
          subtitle="Operational capabilities for security, IT, risk, privacy, and AI governance"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <Card
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              hover
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
