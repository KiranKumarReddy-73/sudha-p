import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, Lock, Cloud, Code, Search, FileText, 
  AlertTriangle, Users, CheckCircle, Database, Zap, Globe 
} from 'lucide-react';
import type { Skill } from '@types/index';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills: Skill[] = [
    {
      title: 'Secure Software Development Lifecycle (SSDLC)',
      icon: Code,
      color: 'from-cyan-400 to-blue-500',
      level: 95,
      description: 'End-to-end security integration'
    },
    {
      title: 'Cryptography & Encryption',
      icon: Lock,
      color: 'from-purple-400 to-pink-500',
      level: 90,
      description: 'Advanced encryption protocols'
    },
    {
      title: 'Application & API Security',
      icon: Globe,
      color: 'from-green-400 to-emerald-500',
      level: 95,
      description: 'Comprehensive security testing'
    },
    {
      title: 'Container & Infrastructure Security',
      icon: Database,
      color: 'from-yellow-400 to-orange-500',
      level: 88,
      description: 'Docker & Kubernetes hardening'
    },
    {
      title: 'Cloud Security (AWS, Kubernetes)',
      icon: Cloud,
      color: 'from-cyan-400 to-teal-500',
      level: 92,
      description: 'Multi-cloud security architecture'
    },
    {
      title: 'Web Application Security Assessment',
      icon: Search,
      color: 'from-red-400 to-pink-500',
      level: 90,
      description: 'Vulnerability identification'
    },
    {
      title: 'OWASP Top 10 / NIST / CIS Frameworks',
      icon: FileText,
      color: 'from-indigo-400 to-purple-500',
      level: 93,
      description: 'Industry standard compliance'
    },
    {
      title: 'Threat Modeling',
      icon: AlertTriangle,
      color: 'from-orange-400 to-red-500',
      level: 89,
      description: 'Risk assessment & mitigation'
    },
    {
      title: 'Penetration Testing',
      icon: Zap,
      color: 'from-purple-400 to-violet-500',
      level: 87,
      description: 'Ethical hacking & exploitation'
    },
    {
      title: 'Regulatory Compliance',
      icon: CheckCircle,
      color: 'from-green-400 to-lime-500',
      level: 91,
      description: 'SOX, PCI-DSS, GDPR compliance'
    },
    {
      title: 'Vulnerability Assessment',
      icon: Shield,
      color: 'from-blue-400 to-cyan-500',
      level: 94,
      description: 'Comprehensive security audits'
    },
    {
      title: 'Security Team Leadership',
      icon: Users,
      color: 'from-pink-400 to-rose-500',
      level: 88,
      description: 'Cross-functional collaboration'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            A comprehensive security toolkit built over 7+ years of protecting critical systems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                className="relative p-6 h-64 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: hoveredSkill === index ? 15 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                      {skill.title}
                    </h3>
                    
                    {hoveredSkill === index ? (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-gray-300 mb-4"
                      >
                        {skill.description}
                      </motion.p>
                    ) : (
                      <div className="mb-4" />
                    )}
                  </div>

                  {/* Skill Level */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Proficiency</span>
                      <span className="text-xs text-cyan-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                {hoveredSkill === index && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${10 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;