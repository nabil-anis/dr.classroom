
import React from 'react';
import { YOUTUBE_CHANNEL_URL } from '../constants';
import { motion } from 'framer-motion';
import ChalkboardAnimation from './ui/ChalkboardAnimation';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-32 sm:py-40 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ChalkboardAnimation />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
            >
              Dr. Sheryar's Classroom
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
            >
             Unlocking potential in O-Level & IGCSE Physics, Chemistry, and Mathematics.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex items-center justify-center"
            >
              <motion.a
                href="https://www.youtube.com/@Dr.SheryarsClassroom/playlists"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold text-white bg-brand-red border border-transparent rounded-full shadow-lg hover:shadow-brand-red/50 transition-shadow"
              >
                Explore Lectures
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>
      </div>
    </section>
  );
};

export default Hero;