
import React from 'react';
import { Video } from '../types';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

interface VideoCardProps {
  video: Video;
}

// FIX: Explicitly type cardVariants with Variants to resolve TypeScript error with framer-motion transition properties.
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { y: -8, transition: { type: "spring", stiffness: 400, damping: 15 } }
};

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <motion.a
      href={video.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      whileHover="hover"
      className="group relative block rounded-xl overflow-hidden h-full w-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-background focus:ring-brand-red transition-all duration-300"
    >
      <div className={`absolute -inset-px rounded-xl border-2 transition-all duration-300 ${video.isLive ? 'border-brand-red/70 group-hover:border-brand-red [box-shadow:0_0_1.5rem_-0.5rem_#E53935]' : 'border-transparent group-hover:border-accent-2/80'}`}></div>
      
      <div className="relative h-full flex flex-col">
        <div className="relative overflow-hidden aspect-video">
          <motion.img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-full h-full object-cover"
            variants={{
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          {video.isLive && (
              <div className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg animate-subtle-glow">LIVE</div>
          )}
          <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-md">{video.duration}</div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <PlayCircle className="w-16 h-16 text-white/80" />
            </div>
          </div>
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-base font-bold text-foreground group-hover:text-accent-2 transition-colors duration-300">
            {video.title}
          </h3>
          {video.subtitle && <p className="mt-1 text-sm text-muted-foreground">{video.subtitle}</p>}
          <p className="mt-2 text-sm text-muted-foreground flex-grow">{video.description}</p>
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground/80 pt-3 border-t border-border/50">
            <span>{video.views}</span>
            <span>{video.streamed}</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default VideoCard;