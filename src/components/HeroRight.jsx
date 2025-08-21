import React from 'react';
import { motion } from 'framer-motion';

function HeroRight() {
  const phrases = [
    "Clean Code",
    "Scalable Apps",
    "Problem Solver",
    "MERN Stack",
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 space-y-4">
      {phrases.map((phrase, index) => (
        <motion.div
          key={index}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-400 cursor-pointer text-center"
          // Framer Motion props for animation.
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{
            scale: 1.05,
            color: "#4299e1", // Tailwind's blue-500
          }}
        >
          {phrase}
        </motion.div>
      ))}
    </div>
  );
}

export default HeroRight;