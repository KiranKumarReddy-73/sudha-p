import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Code, Users, Globe, CheckCircle, MapPin, MessageSquare } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const specializations = [
    { icon: Code, text: 'Application & API Security' },
    { icon: Shield, text: 'Cloud Hardening (AWS, Kubernetes)' },
    { icon: Users, text: 'Secure Architecture and Risk Modeling' },
  ];

  const strengths = [
    'Translating complex risks into actionable guidance',
    'Building a security-first engineering culture',
    'Mentoring and empowering rising security talent',
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="prose prose-lg text-gray-300">
              <motion.p
                className="text-2xl font-light leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-cyan-400 font-semibold">Cybersecurity</span> is both my craft and passion.
              </motion.p>

              <motion.p
                className="text-lg leading-relaxed mb-8 text-gray-300"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                For over <span className="text-cyan-400 font-semibold">7 years</span>, I've protected critical systems and data for organizations across the globe, guiding teams through secure-by-design architecture, deep code reviews, and threat-led risk modeling.
              </motion.p>
            </div>

            {/* Specializations */}
            <div className="space-y-6">
              <motion.h3
                className="text-xl font-semibold text-white mb-6"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                I specialize in:
              </motion.h3>
              {specializations.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                    <spec.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-300 font-medium">{spec.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Strengths */}
            <div className="space-y-6">
              <motion.h3
                className="text-xl font-semibold text-white mb-6"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                I'm known for:
              </motion.h3>
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{strength}</span>
                </motion.div>
              ))}
            </div>

            {/* Location and Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 2 }}
              className="space-y-4 pt-8 border-t border-gray-700"
            >
              <p className="text-gray-300">
                Driven by challenges — from <span className="text-cyan-400">Zero Trust</span> to untangling supply-chain risks.
              </p>
              <div className="flex items-center space-x-2 text-gray-300">
                <Globe className="w-5 h-5 text-cyan-400" />
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Based in: San Francisco Bay Area</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-gray-400">
                <MessageSquare className="w-4 h-4 mt-0.5 text-cyan-400" />
                <span>Disclaimer: All views are personal and do not represent my employer.</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Avatar Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 backdrop-blur-sm overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 80%, #00D4FF 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 20%, #6B46C1 0%, transparent 50%)',
                      'radial-gradient(circle at 40% 40%, #00D4FF 0%, transparent 50%)',
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
              </div>
              
              {/* Center shield icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 4, repeat: Infinity }
                  }}
                  className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50"
                >
                  <Shield className="w-16 h-16 text-white" />
                </motion.div>
              </div>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;