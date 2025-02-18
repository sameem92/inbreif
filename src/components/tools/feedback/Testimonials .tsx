import { FeedbackItems } from "@/constants/page";
import {
  Container,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";

const Testimonials = ({
  animation,
}: {
  animation: { once: boolean; amount?: number };
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const totalSlides = 10;
  const t = useTranslations("Feedback.Testimonials");
  const locale = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={animation}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "42px",
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
          "@media (max-width: 480px)": {
            padding: "5rem 2rem",
            gap: "22px",
          },
        }}
      >
        <h2 className="secondry-title">{t("title")}</h2>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1.6rem",
            justifyContent: "space-between",
            width: "100%",
            padding: { sm: "0 2rem" },
            "@media (max-width: 900px)": {
              flexWrap: "wrap",
              justifyContent: "center",
              flexDirection: "row-reverse",
            },
          }}
        >
          <Button
            title="previous"
            className="prev"
            sx={{
              width: "6rem",
              height: "6rem",
              minHeight: "6rem",
              minWidth: "6rem",
              borderRadius: "50%",
              background: !isBeginning
                ? "#E1E42A"
                : "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
              border: !isBeginning ? "none" : "1px solid #18292D",
              "&:hover": {
                background: !isBeginning
                  ? "#E1E42A"
                  : "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                border: !isBeginning ? "none" : "1px solid #18292D",
                transform: "translateY(0px)",
              },
              "&:hover svg": {
                marginRight: locale === "ar" ? "1rem" : "0",
                marginLeft: locale !== "ar" ? "1rem" : "0",
              },
              "@media (max-width: 900px)": {
                width: "4rem",
                height: "4rem",
                minHeight: "4rem",
                minWidth: "4rem",
                order: "2",
                svg: {
                  width: "14px",
                },
              },
            }}
          >
            {locale === "ar" ? (
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.1339 0.198409C10.3985 -0.0661363 10.8273 -0.0661363 11.0919 0.198409L17.4145 6.52094C17.5416 6.64793 17.6129 6.82027 17.6129 6.99992C17.6129 7.17957 17.5416 7.35191 17.4145 7.47899L11.0919 13.8016C10.8273 14.0661 10.3985 14.0661 10.1339 13.8016C9.86938 13.537 9.86938 13.1081 10.1339 12.8435L15.3 7.67734L0.67742 7.67734C0.303294 7.67734 0 7.37404 0 6.99992C0 6.6258 0.303294 6.3225 0.67742 6.3225L15.3 6.3225L10.1339 1.15643C9.86938 0.89188 9.86938 0.462965 10.1339 0.198409Z"
                  fill={`${isBeginning ? "#fff" : "#001014"}`}
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.86606 13.8016C7.60151 14.0661 7.17265 14.0661 6.9081 13.8016L0.585505 7.47906C0.458422 7.35207 0.387066 7.17973 0.387066 7.00008C0.387067 6.82043 0.458422 6.64809 0.585505 6.52101L6.9081 0.198415C7.17265 -0.0661411 7.60151 -0.0661411 7.86606 0.198415C8.13062 0.462971 8.13062 0.891914 7.86606 1.15647L2.69996 6.32266L17.3226 6.32266C17.6967 6.32266 18 6.62596 18 7.00008C18 7.3742 17.6967 7.6775 17.3226 7.6775L2.69996 7.6775L7.86606 12.8436C8.13062 13.1081 8.13062 13.537 7.86606 13.8016Z"
                  fill={`${isBeginning ? "#fff" : "#001014"}`}
                />
              </svg>
            )}
          </Button>

          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex;
              setIsBeginning(realIndex === 0);
              setIsEnd(realIndex === totalSlides - 1);
            }}
            loop={true} // Enable looping
            autoplay={{
              disableOnInteraction: false, // Continue autoplay after user interaction
              pauseOnMouseEnter: true, // Pause autoplay when hovered
            }}
            speed={1000} // Speed of slide transition (1 second)
            modules={[Navigation, Autoplay]} // Add Autoplay module
            className="mySwiper2"
          >
            {FeedbackItems.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    maxWidth: { xs: "95%", sm: "92%", lg: 582 },
                    minWidth: { xs: "95%", sm: "92%", lg: 582 },
                    height: "100%",
                    borderRadius: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    "@media (max-width: 768px)": {
                      overflow: "auto",
                    },
                  }}
                  className="border"
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: { xs: "1rem", md: "3.2rem" },
                      gap: "3.6rem",
                    }}
                  >
                    <Typography
                      gutterBottom
                      sx={{
                        fontFamily: "Kumbh Sans, sans-serif",
                        fontSize: "1.6rem",
                        fontWeight: 400,
                        lineHeight: "26px",
                        textAlign: "center",
                        color: "#fff",
                      }}
                    >
                      {t(item.say)}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1.2rem",
                      }}
                    >
                      <Image
                        width={80}
                        height={80}
                        src={item.image}
                        alt=""
                        style={{ width: "auto", borderRadius: "50%" }}
                      />
                      <span className="company">{t(item.compnay)}</span>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: ".6rem",
                        }}
                      >
                        <Image
                          src={"/image/lo.png"}
                          className="location"
                          alt="location"
                          width={20}
                          height={20}
                        />
                        <span className="place">{t(item.location)}</span>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <Button
            title="next"
            className="next"
            sx={{
              width: "6rem",
              height: "6rem",
              minHeight: "6rem",
              minWidth: "6rem",
              borderRadius: "50%",
              background: !isEnd
                ? "#E1E42A"
                : "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
              border: !isEnd ? "none" : "1px solid #18292D",
              "&:hover": {
                background: !isEnd
                  ? "#E1E42A"
                  : "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                border: !isEnd ? "none" : "1px solid #18292D",
                transform: "translateY(0px)",
              },
              "&:hover svg": {
                marginLeft: locale === "ar" ? "1rem" : "0",
                marginRight: locale !== "ar" ? "1rem" : "0",
              },
              "@media (max-width: 900px)": {
                width: "4rem",
                height: "4rem",
                minHeight: "4rem",
                minWidth: "4rem",
                svg: {
                  width: "14px",
                },
              },
            }}
          >
            {locale !== "ar" ? (
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.1339 0.198409C10.3985 -0.0661363 10.8273 -0.0661363 11.0919 0.198409L17.4145 6.52094C17.5416 6.64793 17.6129 6.82027 17.6129 6.99992C17.6129 7.17957 17.5416 7.35191 17.4145 7.47899L11.0919 13.8016C10.8273 14.0661 10.3985 14.0661 10.1339 13.8016C9.86938 13.537 9.86938 13.1081 10.1339 12.8435L15.3 7.67734L0.67742 7.67734C0.303294 7.67734 0 7.37404 0 6.99992C0 6.6258 0.303294 6.3225 0.67742 6.3225L15.3 6.3225L10.1339 1.15643C9.86938 0.89188 9.86938 0.462965 10.1339 0.198409Z"
                  fill={`${isEnd ? "#fff" : "#001014"}`}
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.86606 13.8016C7.60151 14.0661 7.17265 14.0661 6.9081 13.8016L0.585505 7.47906C0.458422 7.35207 0.387066 7.17973 0.387066 7.00008C0.387067 6.82043 0.458422 6.64809 0.585505 6.52101L6.9081 0.198415C7.17265 -0.0661411 7.60151 -0.0661411 7.86606 0.198415C8.13062 0.462971 8.13062 0.891914 7.86606 1.15647L2.69996 6.32266L17.3226 6.32266C17.6967 6.32266 18 6.62596 18 7.00008C18 7.3742 17.6967 7.6775 17.3226 7.6775L2.69996 7.6775L7.86606 12.8436C8.13062 13.1081 8.13062 13.537 7.86606 13.8016Z"
                  fill={`${isEnd ? "#fff" : "#001014"}`}
                />
              </svg>
            )}
          </Button>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Testimonials;
