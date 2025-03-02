"use client";

import { motion } from "motion/react";

const MotionWrapper = ({ type = "div", children, ...props }, ref) => {
  const Component = type ? motion[type] : motion.div;

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
};

export default MotionWrapper;
