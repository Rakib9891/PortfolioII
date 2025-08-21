// use-split-text-animation.js
import { useEffect, useRef } from "react";
import { animate } from "motion";

export function UseSplit() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    // Save original text
    const text = el.textContent;
    el.innerHTML = "";

    // Use regex to split words *and* spaces separately
    const tokens = text.split(/(\s+)/);

    tokens.forEach((token) => {
      if (token.trim() === "") {
        // Preserve spaces
        el.appendChild(document.createTextNode(token));
      } else {
        // Wrap each word
        const span = document.createElement("span");
        span.textContent = token;
        span.className = "word inline-block";
        el.appendChild(span);
      }
    });
  }, []);

  // Animate helper
  function animateWrapper(selector, keyframes, options) {
    if (!ref.current) return;
    return animate(selector, keyframes, { ...options, target: ref.current });
  }

  return [ref, animateWrapper];
}
