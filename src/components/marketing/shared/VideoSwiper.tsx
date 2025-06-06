import YouTube from "react-youtube";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import MotionWrapper from "@/components/tools/MotionWrapper";
import { videoIds } from "@/constants/motion";
import { Box, Button, Container, useMediaQuery } from "@mui/material";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { useLocale } from "next-intl";

const VideoSwiper = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const totalSlides = 9;
  const isTablet = useMediaQuery("(max-width:991px)");
  const isMobile = useMediaQuery("(max-width:480px)");
  const locale = useLocale();

  const [players, setPlayers] = useState<{ [key: number] }>({}); // Store video player instances

  const opts = {
    height: isMobile ? "200px" : isTablet ? "350px" : "500px",
    width: "100%",
    playerVars: {
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      disablekb: 1,
    },
  };

  // Handle video player ready
  const handleVideoReady = (event, index) => {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [index]: event.target, // Store YouTube player instance
    }));
  };

  // Stop all inactive videos
  const stopVideos = (activeIndex: number) => {
    Object.entries(players).forEach(([index, player]) => {
      if (parseInt(index) !== activeIndex && player) {
        player.stopVideo(); // Stop the video for non-active slides
      }
    });
  };

  return (
    <MotionWrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4.8rem",
          padding: { xs: "5.3rem 0", md: "10rem 0", lg: "15rem 0" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4rem",
            justifyContent: "space-between",
            width: "100%",
            padding: { xs: "0 2rem" },
            "@media (max-width: 900px)": {
              gap: "1.6rem",
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
              width: { xs: "5rem", lg: "6rem" },
              height: { xs: "5rem", lg: "6rem" },
              minHeight: { xs: "5rem", lg: "6rem" },
              minWidth: { xs: "5rem", lg: "6rem" },
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
                marginRight: locale === "ar" ? "1rem" : "0rem",
                marginLeft: locale !== "ar" ? "1rem" : "0rem",
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
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex;
              setIsBeginning(realIndex === 0);
              setIsEnd(realIndex === totalSlides - 1);
              stopVideos(swiper.realIndex); // Clean up videos on slide change
            }}
            modules={[Navigation]}
            className="mySwiper-video"
          >
            {videoIds.map((id, index) => (
              <SwiperSlide key={index}>
                <YouTube
                  videoId={id}
                  opts={opts}
                  onReady={(event) => handleVideoReady(event, index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Button
            title="next"
            className="next"
            sx={{
              width: { xs: "5rem", lg: "6rem" },
              height: { xs: "5rem", lg: "6rem" },
              minHeight: { xs: "5rem", lg: "6rem" },
              minWidth: { xs: "5rem", lg: "6rem" },

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
                marginLeft: locale === "ar" ? "1rem" : "0rem",
                marginRight: locale !== "ar" ? "1rem" : "0rem",
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
                  d="M7.86606 13.8016C7.60151 14.0661 7.17265 14.0661 6.9081 13.8016L0.585505 7.47906C0.458422 7.35207 0.387066 7.17973 0.387066 7.00008C0.387067 6.82043 0.458422 6.64809 0.585505 6.52101L6.9081 0.198415C7.17265 -0.0661411 7.60151 -0.0661411 7.86606 0.198415C8.13062 0.462971 8.13062 0.891914 7.86606 1.15647L2.69996 6.32266L17.3226 6.32266C17.6967 6.32266 18 6.62596 18 7.00008C18 7.3742 17.6967 7.6775 17.3226 7.6775L2.69996 7.6775L7.86606 12.8436C8.13062 13.1081 8.13062 13.537 7.86606 13.8016Z"
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
                  d="M10.1339 0.198409C10.3985 -0.0661363 10.8273 -0.0661363 11.0919 0.198409L17.4145 6.52094C17.5416 6.64793 17.6129 6.82027 17.6129 6.99992C17.6129 7.17957 17.5416 7.35191 17.4145 7.47899L11.0919 13.8016C10.8273 14.0661 10.3985 14.0661 10.1339 13.8016C9.86938 13.537 9.86938 13.1081 10.1339 12.8435L15.3 7.67734L0.67742 7.67734C0.303294 7.67734 0 7.37404 0 6.99992C0 6.6258 0.303294 6.3225 0.67742 6.3225L15.3 6.3225L10.1339 1.15643C9.86938 0.89188 9.86938 0.462965 10.1339 0.198409Z"
                  fill={`${isEnd ? "#fff" : "#001014"}`}
                />
              </svg>
            )}
          </Button>
        </Box>
      </Container>
    </MotionWrapper>
  );
};

export default VideoSwiper;
