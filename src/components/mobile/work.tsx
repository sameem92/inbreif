"use client";

import Image from "next/image";

import "swiper/css";
import "swiper/css/scrollbar";

import { Box, useMediaQuery } from "@mui/material";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { WORK } from "@/constants/mobile";
import { useLocale, useTranslations } from "next-intl";
import MotionWrapper from "../tools/MotionWrapper";

export default function Slider() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const animation = isMobile ? { once: true } : { once: true, amount: 0.3 };
  const t = useTranslations("MobileApps");
  const locale = useLocale();

  return (
    <Box
      sx={{
        padding: "100px 10rem 100px",
        "@media (max-width: 1340px)": {
          padding: "100px 2rem",
        },
        "@media (max-width: 1240px)": {
          padding: "100px 1rem",
        },
        "@media (max-width: 992px)": {
          padding: "100px 2rem",
        },
        background: "linear-gradient(rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21))",
      }}
    >
      <div className="noise">
        <MotionWrapper
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={animation}
          transition={{ duration: 0.4, ease: "easeIn" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              margin: "auto",
              gap: "42px",
              justifyContent: "center",
              width: {
                xs: "100%",
                sm: "90%",
                lg: "100%",
              },
            }}
          >
            <h2 className="secondry-title">{t("work.title")}</h2>
            <Swiper
              dir="rtl"
              effect={"fade"}
              modules={[Scrollbar, Autoplay]}
              speed={3500}
              loop={true}
              grabCursor={true}
              scrollbar={{ draggable: true, dragSize: 24 }}
              initialSlide={1}
              className="mySwiper-work"
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              allowTouchMove={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 36,
                },
              }}
            >
              {WORK.map((item, i) => (
                <SwiperSlide key={i}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: "1rem",
                      justifyContent: "center",
                      "@media (max-width:1240px)": {
                        ".title-h3": {
                          fontSize: "2.5rem",
                        },
                      },
                      "@media (max-width:480px)": {
                        ".title-h3": {
                          fontSize: "2rem",
                        },
                      },
                    }}
                  >
                    <div className="image-container w-100">
                      <Image
                        src={locale === "ar" ? item.image : item.imageForeign}
                        className="image-zoom"
                        alt=""
                        priority
                        placeholder="blur"
                      />
                    </div>
                    {locale === "ar" && (
                      <h3 className="title-h3">
                        {`${t("work.app")} ${t(`work.${item.title}`)}`}
                      </h3>
                    )}

                    {locale !== "ar" && (
                      <h3 className="title-h3">
                        {`${t(`work.${item.title}`)} ${t("work.app")}`}
                      </h3>
                    )}
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </MotionWrapper>
      </div>
    </Box>
  );
}
