import React, { useState, useRef } from 'react';
import { motion } from "motion/react";

/**
 * A React component that creates a text explosion effect on mouse hover.
 * The characters of the text move away from the cursor.
 * @param {object} props - The component props.
 * @param {string} props.text - The text string to animate.
 */
const ExplodingText2 = ({ text }) => {
  // A ref to get the DOM element of the container div.
  const containerRef = useRef(null);
  // State to track if the mouse is hovering over the component.
  const [hovering, setHovering] = useState(false);
  // State to track the mouse coordinates relative to the container.
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /**
   * Updates the mouse position state on every mouse move.
   * @param {MouseEvent} e - The mouse event.
   */
  const handleMouseMove = (e) => {
    // Get the bounding box of the container to calculate local coordinates.
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
      {/* Map over each character to create an animated span for it. */}
      {text.split("").map((char, i) => {
        // Default animation properties when not hovering.
        let animateProps = { x: 0, y: 0, rotate: 0, opacity: 1 };

        if (hovering && containerRef.current) {
          // If hovering, calculate new animation properties.
          const el = containerRef.current.children[i].getBoundingClientRect();
          const containerBox = containerRef.current.getBoundingClientRect();
          
          // Calculate the center point of the current character span.
          const centerX = el.left + el.width / 2 - containerBox.left;
          const centerY = el.top + el.height / 2 - containerBox.top;

          // Calculate the vector from the character to the mouse position.
          const dx = centerX - mouse.x * 2;
          const dy = centerY - mouse.y * 2;

          // Normalize the vector and scale the force based on distance.
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = Math.min(200 / dist, 100);
          
          // Calculate the offset for the character's new position.
          const offsetX = (dx / dist) * force * 100;
          const offsetY = (dy / dist) * force * 100;

          // Update the animation properties.
          animateProps = {
            x: offsetX,
            y: offsetY,
            rotate: force * 10,
            opacity: 1,
          };
        }

        return (
          // The key prop is correctly placed here on the top-level element.
          <motion.span
            key={i}
            className="inline-block text-5xl font-extrabold text-gray-500 leading-relaxed text-shadow-4xs shadow border-2 border-gray-500 rounded-xl  m-1 lg:p-1 hover:bg-gray-500 hover:border-white hover:text-white transition-all duration-100 ease-in-out"
            style={{ position: "relative" }}
            animate={animateProps}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Replace spaces with a non-breaking space to keep layout consistent. */}
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </div>
  );
};

export default ExplodingText2;