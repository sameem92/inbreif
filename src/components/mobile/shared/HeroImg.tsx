"use client";

import ItemWrapper from "@/components/tools/ItemWrapper";
import { useLocation } from "@/context/LocationContext";
import { useLocale } from "next-intl";
import Image from "next/image";
import mobileForeign from "../../../../public/foreign/mobAppForeign.png";
import mobile from "../../../../public/images/mobHero.png";

const HeroImg = () => {
  const { location } = useLocation();
  const locale = useLocale();

  return (
    <ItemWrapper
      sx={{
        "@media (max-width:767px)": {
          img: {
            maxHeight: "400px !important",
          },
        },
      }}
    >
      <div style={{ textAlign: "center" }}>
        {locale === "ar" && location === "not_foreign" ? (
          <Image
            src={mobile}
            style={{
              width: "100%",
              maxWidth: "40rem",
              height: "auto",
            }}
            alt="mobile-apps"
          />
        ) : (
          <Image
            src={mobileForeign}
            style={{
              width: "100%",
              maxWidth: "35rem",
              height: "auto",
            }}
            alt="mobile-apps"
          />
        )}
      </div>
    </ItemWrapper>
  );
};

export default HeroImg;
