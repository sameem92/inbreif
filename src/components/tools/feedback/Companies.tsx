import { companies } from "@/constants/page";
import { motion } from "framer-motion";
import React from "react";
import SliderS3 from "../sliders/sliderS3";

const Companies = ({
  animation,
}: {
  animation: { once: boolean; amount?: number };
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={animation}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <SliderS3 images={companies} />
    </motion.div>
  );
};

export default Companies;
