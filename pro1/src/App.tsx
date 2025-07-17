import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from '@components/Navigation';
import Hero from '@components/Hero';
import About from '@components/About';
import Skills from '@components/Skills';
import Experience from '@components/Experience';
import Contact from '@components/Contact';
import BackToTop from '@components/BackToTop';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;