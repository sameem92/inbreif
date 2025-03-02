import { companies } from "@/constants/page";
import MotionWrapper from "../MotionWrapper";
import SliderS3 from "../sliders/sliderS3";

const Companies = ({
  animation,
}: {
  animation: { once: boolean; amount?: number };
}) => {
  return (
    <MotionWrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={animation}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <SliderS3 images={companies} />
    </MotionWrapper>
  );
};

export default Companies;
