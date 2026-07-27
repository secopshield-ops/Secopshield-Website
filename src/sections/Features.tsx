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
      description: 'Automated vulnerability patching with zero downtime',
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
      description: 'Complete network monitoring and threat intelligence',
    },
  ]

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Comprehensive Security Platform"
          subtitle="All-in-one solution replacing 10+ disconnected tools"
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
