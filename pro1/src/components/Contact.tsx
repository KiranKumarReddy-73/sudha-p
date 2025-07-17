import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, MapPin, Send, CheckCircle, Shield } from 'lucide-react';
import { SITE_CONFIG } from '@utils/constants';
import type { ContactMethod } from '@types/index';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods: ContactMethod[] = [
    {
      icon: Mail,
      label: 'Email',
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sudha-pujari',
      href: SITE_CONFIG.linkedin,
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: SITE_CONFIG.location,
      href: '#',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Talk Security 🔐
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Have questions about cloud security, product risk, or Zero Trust?<br />
            I'd love to connect, mentor, or collaborate.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group flex items-center space-x-6 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{method.label}</h3>
                    <p className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Security note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm"
            >
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Secure Communication</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    For sensitive security discussions, please use encrypted channels. 
                    I'm always available to discuss threat modeling, security architecture, 
                    or mentorship opportunities in cybersecurity.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
              
              <div className="relative z-10">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                          placeholder="Your name"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="How can I help you?"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                        placeholder="Tell me about your security challenges or questions..."
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white shadow-2xl shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ 
                        scale: 1.02, 
                        boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.5)' 
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                      className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;