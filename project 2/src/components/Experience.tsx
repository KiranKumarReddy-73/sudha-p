import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ChevronRight, Shield, Cloud, Users, Search, Zap, FileText, Database } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Salesforce',
      role: 'Product Security Engineer',
      period: 'Feb 2022 – Present',
      location: 'San Francisco, CA',
      skills: ['Security Management', 'Secure Architecture', 'Threat Modeling'],
      icon: Shield,
      color: 'from-blue-400 to-cyan-500',
      description: 'Leading product security initiatives for enterprise-scale cloud platforms, implementing secure-by-design principles and comprehensive threat modeling frameworks.'
    },
    {
      company: 'Gap Inc.',
      role: 'Product Security Engineer',
      period: 'Jan 2020 – Jan 2022',
      location: 'San Francisco, CA',
      skills: ['Regulatory Compliance', 'Cloud Risk Management'],
      icon: Cloud,
      color: 'from-purple-400 to-pink-500',
      description: 'Developed and implemented comprehensive security strategies for retail e-commerce platforms, ensuring PCI-DSS compliance and cloud security best practices.'
    },
    {
      company: 'Intel',
      role: 'Information Security Engineer',
      period: 'Nov 2019 – Dec 2019',
      location: 'Santa Clara, CA',
      skills: ['Application Security'],
      icon: FileText,
      color: 'from-green-400 to-emerald-500',
      description: 'Conducted security assessments for critical hardware and software systems, focusing on application security and secure development lifecycle integration.'
    },
    {
      company: 'U.S. Courts',
      role: 'IT Analyst',
      period: 'Jul 2018 – Oct 2019',
      location: 'San Francisco, CA',
      skills: ['Vulnerability Assessment'],
      icon: Search,
      color: 'from-yellow-400 to-orange-500',
      description: 'Performed comprehensive vulnerability assessments and security audits for federal court systems, ensuring compliance with government security standards.'
    },
    {
      company: 'Apple',
      role: 'Test Lead',
      period: '2017 – Jul 2018',
      location: 'Cupertino, CA',
      skills: ['Application Security', 'Penetration Testing'],
      icon: Zap,
      color: 'from-red-400 to-pink-500',
      description: 'Led security testing initiatives for consumer products, conducting penetration testing and application security assessments for iOS and macOS platforms.'
    },
    {
      company: 'Confidential',
      role: 'Pen Tester / Security Analyst',
      period: 'May 2016 – 2017',
      location: 'San Francisco Bay Area',
      skills: ['Penetration Testing'],
      icon: Shield,
      color: 'from-indigo-400 to-purple-500',
      description: 'Executed advanced penetration testing engagements for enterprise clients, identifying critical vulnerabilities and providing actionable remediation strategies.'
    },
    {
      company: 'Ship by Night IT Solutions',
      role: 'AppSec Consultant',
      period: 'May 2010 – Apr 2016',
      location: 'San Francisco Bay Area',
      skills: ['Application Security', 'Pen Testing'],
      icon: Database,
      color: 'from-teal-400 to-cyan-500',
      description: 'Provided application security consulting services, conducting code reviews, security assessments, and penetration testing for diverse client portfolios.'
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            7+ years of securing critical systems across leading technology companies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-30" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-2xl`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <exp.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Experience card */}
                <motion.div
                  className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm overflow-hidden group">
                    {/* Background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                        <h4 className="text-xl text-cyan-400 font-semibold mb-4">{exp.company}</h4>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm font-medium text-gray-400">
                          <span>Key Focus Areas:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${exp.color} bg-opacity-20 text-white border border-current border-opacity-30`}
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: 'spring', stiffness: 400 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Decorative arrow */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                      index % 2 === 0 ? '-right-3' : '-left-3'
                    } w-6 h-6 rotate-45 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700`} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '7+', label: 'Years Experience', icon: Calendar },
            { number: '5', label: 'Fortune 500 Companies', icon: Users },
            { number: '100+', label: 'Security Assessments', icon: Shield },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;