"use client";

import MotionWrapper from "@/components/tools/MotionWrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ProcedureCard = ({ feature }) => {
  const t = useTranslations("InformationalReservation.ProceduresSection");

  return (
    <MotionWrapper
      key={feature.title}
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "tween",
        stiffness: 400,
        damping: 10,
      }}
    >
      <div className="card">
        <div className="content">
          <div className="circle"></div>
          <Image
            src={feature.imageURL}
            alt={feature.title}
            width={feature.imageWidth}
            height={feature.imageHeight}
            loading="lazy"
            priority={false}
          />
          <h3>{t(feature.title)}</h3>
          <p>{t(feature.description)}</p>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default ProcedureCard;
