import React, { useEffect, useRef } from "react"
import { motion, useSpring } from "motion/react"

export default function Drag() {
  const ref = useRef(null)
  const { x, y } = useFollowPointer(ref)

  return <motion.div ref={ref} style={{ ...ball, x, y }} />
}

const spring = { damping: 3, stiffness: 10, restDelta: 0.001 }

function useFollowPointer(ref) {
  const x = useSpring(0, spring) // start from 0
  const y = useSpring(0, spring) // start from 0

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    const handlePointerMove = ({ clientX, clientY }) => {
      x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
      y.set(clientY - element.offsetTop - element.offsetHeight / 2)
    }

    const resetToCorner = () => {
      x.set(0)
      y.set(0)
    }

    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("mouseleave", resetToCorner) // when leaving document
    window.addEventListener("blur", resetToCorner)       // when switching to another window

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("mouseleave", resetToCorner)
      window.removeEventListener("blur", resetToCorner)
    }
  }, [])

  return { x, y }
}

/**
 * ==============   Styles   ================
 */
const ball = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: "50%",
  position: "absolute", // so it can stick to the corner
}



