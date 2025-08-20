import React, {useState, useRef } from 'react'
import { motion} from "motion/react";

const ExplodingText2 = ({ text }) => {
  const containerRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className="inline-block cursor-pointer select-none relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {text.split("").map((char, i) => {
        let animateProps = { x: 0, y: 0, rotate: 0, opacity: 1 };

        if (hovering && containerRef.current) {
          const el = containerRef.current.children[i].getBoundingClientRect();
          const containerBox = containerRef.current.getBoundingClientRect();
          const centerX = el.left + el.width / 2 - containerBox.left;
          const centerY = el.top + el.height / 2 - containerBox.top;

          // Vector from cursor → letter center
          const dx = centerX - mouse.x *2;
          const dy = centerY - mouse.y * 2;

          // Normalize & scale
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = Math.min(200 / dist, 100);
          const offsetX = (dx / dist) * force * 100;
          const offsetY = (dy / dist) * force * 100;

          animateProps = {
            x: offsetX,
            y: offsetY,
            rotate: force * 10,
            opacity: 1,
          };
        }

        return (
          <>
          <motion.span
            key={i}
            className="inline-block text-5xl font-light text-gray-800" 
            style={{ position: "relative" }}
            animate={animateProps}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
          
       
          </>
        );
      })}
    </div>
  );
};
export default ExplodingText2;