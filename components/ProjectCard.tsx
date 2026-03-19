'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      initial={{
        opacity: 0,
        y: 50,
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
    >
      {image && (
        <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
