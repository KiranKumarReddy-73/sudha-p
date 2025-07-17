import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X, ExternalLink } from 'lucide-react';
import { useScrollPosition } from '@hooks/useScrollPosition';
import { useActiveSection } from '@hooks/useActiveSection';
import { scrollToSection } from '@utils/scrollUtils';
import type { NavItem } from '@types/index';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollPosition();

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'highlights', label: 'Highlights', isExternal: true },
    { id: 'contributions', label: 'Contributions', isExternal: true },
    { id: 'contact', label: 'Contact' },
  ];

  const internalNavItems = navItems.filter(item => !item.isExternal);
  const activeSection = useActiveSection(internalNavItems.map(item => item.id));

  const handleNavClick = (item: NavItem) => {
    if (item.isExternal) {
      const url = item.id === 'highlights' ? '/highlights.html' : '/contributions.html';
      window.open(url, '_blank');
    } else {
      scrollToSection(item.id);
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Sudha Pujari
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center space-x-1 ${
                  activeSection === item.id && !item.isExternal
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{item.label}</span>
                {item.isExternal && <ExternalLink className="w-3 h-3" />}
                {activeSection === item.id && !item.isExternal && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`flex items-center justify-between w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id && !item.isExternal
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{item.label}</span>
                {item.isExternal && <ExternalLink className="w-4 h-4" />}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;