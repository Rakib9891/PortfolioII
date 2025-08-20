import React, { useState } from "react";
import { motion } from "motion/react";

const ExplodingText = ({ text }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className="inline-block cursor-pointer select-none"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {text.split("").map((char, i) => {
        // random directions for explosion
        const randomX = (Math.random() - 0.5) * 10; // -200 to 200 px
        const randomY = (Math.random() - 0.5) * 10;

        return (
          <motion.span
            key={i}
            className="inline-block text-2xl font-medium text-gray-800"
            animate={{
              x: hovering ? randomX : 0,
              y: hovering ? randomY : 0,
              rotate: hovering ? Math.random() * 36 : 0,
              opacity: hovering ? 1 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              mass: 0.5,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </div>
  );
};

export default ExplodingText;
