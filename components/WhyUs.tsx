
import React from 'react';
import { Target, Lightbulb, BookOpen, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Lightbulb,
    title: 'Expert Instruction',
    description: 'Master complex topics with guidance from an experienced educator passionate about student success.',
  },
  {
    icon: Target,
    title: 'Exam-Focused Approach',
    description: 'Our content is tailored to the O-Level & IGCSE curriculum, focusing on mock exams and past papers.',
  },
  {
    icon: BookOpen,
    title: 'Clear & Concise Lessons',
    description: 'We break down difficult concepts into easy-to-understand segments, ensuring you grasp the fundamentals.',
  },
  {
    icon: Globe,
    title: 'Accessible Learning',
    description: 'Learn anytime, anywhere. Our free YouTube content makes quality education available to everyone.',
  },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      },
    }),
  };

const WhyUs: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Why Choose Us?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The advantages of learning with Dr. Sheryar's Classroom.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="bg-card border border-border rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-background"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent-2/10 mb-6 mx-auto">
                <feature.icon className="h-6 w-6 text-accent-2" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;