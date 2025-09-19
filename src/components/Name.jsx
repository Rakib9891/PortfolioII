import { motion, stagger, useInView } from "motion/react";
import { useEffect } from "react";
import { UseSplit } from "../components/UseSplit.jsx";
import { div } from "motion/react-client";

const Name = ( {props}) => {
  const [scope, animate] = UseSplit();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        ".word",
        { opacity: [0, 1], x: [50, 0] },
        { delay: stagger(0.15) }
      );
    }
  }, [isInView]);

  return (
    <div ref={scope} className="mx-auto p-4  text-4xl leading-relaxed max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl break-words text-center md:text-left font-extrabold text-gray-600">
     {props}
    </div>
  );
};

export default Name;
