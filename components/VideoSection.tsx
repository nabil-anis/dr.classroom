
import React, { useState } from 'react';
import { FEATURED_VIDEOS } from '../constants';
import VideoCard from './VideoCard';
import { motion } from 'framer-motion';

const filters = ['All', 'Physics', 'Chemistry', 'Maths'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const VideoSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredVideos = FEATURED_VIDEOS.filter(video => {
    if (activeFilter === 'All') return true;
    return video.title.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Featured Lectures
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Dive into our latest mock exams and revision sessions.
          </p>
        </div>
        
        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center gap-4 border-b border-border">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                  activeFilter === filter
                    ? 'text-accent-2'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <motion.div
                    layoutId="filter-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-2"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;