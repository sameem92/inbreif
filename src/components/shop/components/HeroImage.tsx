import MotionWrapper from "@/components/tools/MotionWrapper";
import Image from "next/image";
import marketingForeign from "../../../../public/foreign/marketingForeign.png";

const HeroImage = () => {
  return (
    <MotionWrapper
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ maxWidth: "100%", width: "400px", height: "auto" }}
        src={marketingForeign}
        alt="mobile-apps"
      />
    </MotionWrapper>
  );
};

export default HeroImage;
