
import React, { useState, useEffect } from 'react';
import { NavBar } from './components/ui/tubelight-navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhyUs from './components/WhyUs';
import { Home, Video, Info, Star } from 'lucide-react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (storedTheme) return storedTheme;
      if (userMedia.matches) return 'dark';
    }
    return 'dark'; // Default to dark mode
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Videos', url: '#videos', icon: Video },
    { name: 'Why Us', url: '#why-us', icon: Star },
    { name: 'About', url: '#about', icon: Info },
  ];

  // FIX: Explicitly type sectionVariants with Variants to resolve TypeScript error with framer-motion transition properties.
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen font-sans bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      <NavBar items={navItems} theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        <motion.div id="videos" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants}>
          <VideoSection />
        </motion.div>
         <motion.div id="why-us" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <WhyUs />
        </motion.div>
        <motion.div id="about" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <About />
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />
      <div 
        className="fixed bottom-4 right-4 z-40 text-xs font-sans text-muted-foreground/50 transition-colors hover:text-muted-foreground"
        aria-hidden="true"
      >
        by nbl.
      </div>
    </div>
  );
};

export default App;
