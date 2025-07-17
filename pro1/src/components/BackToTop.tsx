import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/25 backdrop-blur-sm transition-all duration-300"
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.5)'
          }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6 text-white" />
          
          {/* Pulse animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;