"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

export default function Drag() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      style={{
        ...ball, // Static styles
        x, // Dynamic x position (MotionValue)
        y, // Dynamic y position (MotionValue)
      }}
    />
  );
}

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
      yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}

const ball = {
  zIndex: 10000,
  width: 200, // Bigger size
  height: 200, // Bigger size
  background: "linear-gradient(135deg, #E0E324, #C1D824, #A2CB24)",
  borderRadius: "50%",
  filter: "blur(50px)", // Blur effect
  opacity: 0.6, // Slight transparency
  boxShadow: "0 4px 30px rgba(224, 227, 36, 0.5)",
};
