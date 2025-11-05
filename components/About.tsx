
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Turning Confusion Into Confidence.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
             Dr. Sheryar's Classroom is dedicated to making high-quality education accessible to all students preparing for their O-Level and IGCSE examinations. Our goal is to simplify complex concepts and build a strong foundation for academic success — one topic at a time.
            </p>
            <div className="mt-8 flex justify-center">
              <motion.a
                href="https://www.instagram.com/direct/t/17845853043156376/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-brand-red border border-transparent rounded-full shadow-lg hover:shadow-brand-red/50 transition-shadow"
              >
                Drop a text
              </motion.a>
            </div>
          </div>
           <div className="md:col-span-2 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative"
            >
                <img
                    src="dr.sheryar.png"
                    alt="An illustration of Dr. Sheryar"
                    className="w-full max-w-xs h-auto rounded-lg shadow-lg border-2 border-border/50"
                />
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-2 border border-dashed border-accent-2/20 rounded-lg -z-10"
                 ></motion.div>
            </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
