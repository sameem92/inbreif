"use client";

import { useMediaQuery } from "@mui/material";
import Companies from "./Companies";
import Testimonials from "./Testimonials ";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export default function Feedback() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const animation = isMobile ? { once: true } : { once: true, amount: 0.3 };

  return (
    <div className="package">
      <Testimonials animation={animation} />
      <Companies animation={animation} />
    </div>
  );
}
