import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { ArrowDown, Play, Mail } from 'lucide-react';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6B46C1" />
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#00D4FF"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <AnimatedSphere />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />

      {/* Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-20 flex items-center justify-center h-full"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-black mb-4"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Hi, I'm Sudha Pujari
              </span>
              <motion.span
                className="ml-4 text-4xl"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👩‍💻
              </motion.span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-2xl md:text-3xl font-light text-gray-300 mb-6"
            >
              Product Security Engineer | Cloud Defender | Mentor
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl text-cyan-200 max-w-2xl mx-auto mb-12"
            >
              Securing the world, one line of code at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                onClick={() => scrollToSection('experience')}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white shadow-2xl shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Explore My Work</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold text-cyan-400 backdrop-blur-sm transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(6, 182, 212, 0.1)',
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Let's Connect</span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-cyan-400"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;