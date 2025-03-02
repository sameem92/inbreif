"use client";

import marketingForeign from "../../../../public/foreign/marketingForeign.png";
import marketing from "../../../../public/images/marketing.png";
import Image from "next/image";
import { useLocation } from "@/context/LocationContext";
import { useLocale } from "next-intl";
import MotionWrapper from "@/components/tools/MotionWrapper";

const HeroImage = () => {
  const locale = useLocale();
  const { location } = useLocation();

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
      {locale === "ar" && location === "not_foreign" ? (
        <Image
          style={{ maxWidth: "100%" }}
          height={450}
          width={400}
          src={marketing}
          alt="mobile-apps"
        />
      ) : (
        <Image
          style={{ maxWidth: "100%", width: "400px", height: "auto" }}
          src={marketingForeign}
          alt="mobile-apps"
        />
      )}
    </MotionWrapper>
  );
};

export default HeroImage;
