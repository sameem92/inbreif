"use client";

import Image, { StaticImageData } from "next/image";
import { useId, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Button, IconButton, Modal, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import { Swiper as SwiperType } from "swiper/types";
import { useLocale } from "next-intl";

const MainSwiper = ({ images }: { images: StaticImageData[] }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const uniqueId = useId().replace(/:/g, "");
  const [thumbSwiper, setThumbSwiper] = useState<SwiperType | null>(null);
  const locale = useLocale();

  const totalSlides = images?.length;

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.realIndex === 0);
    setIsEnd(swiper.realIndex === totalSlides - 1);
  };

  const openModal = (image: StaticImageData) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <Stack
      gap={"16px"}
      sx={{
        width: "55%",
        "@media (max-width: 1024px)": { width: "90%" },
        "@media (max-width: 576px)": { width: "100%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1.6rem",
          justifyContent: "space-between",
          width: "100%",
          padding: { sm: "0 2rem" },
          "@media (max-width: 576px)": {
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "row-reverse",
          },
        }}
      >
        <Button
          title="previous"
          className={`prev-${uniqueId}`}
          sx={{
            width: "32px",
            height: "32px",
            minHeight: "32px",
            minWidth: "32px",
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
              marginRight: locale === "ar" ? "4px" : 0,
              marginLeft: locale !== "ar" ? "4px" : 0,
            },
            "@media (max-width: 576px)": {
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
              width="14"
              height="10"
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
              width="14"
              height="10"
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
          key={`swiper-${uniqueId}`}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: `.prev-${uniqueId}`,
            nextEl: `.next-${uniqueId}`,
          }}
          thumbs={{
            swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null,
          }}
          scrollbar={{
            el: `.custom-scrollbar-${uniqueId}`,
            draggable: true,
          }}
          onSwiper={setThumbSwiper}
          onSlideChange={handleSlideChange}
          loop={true} // Enable looping
          autoplay={{
            disableOnInteraction: false, // Continue autoplay after user interaction
            pauseOnMouseEnter: true, // Pause autoplay when hovered
          }}
          speed={500} // Speed of slide transition (0.5 second)
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            Thumbs,
            FreeMode,
            Autoplay,
          ]}
          className={`mySwiper-${uniqueId} mySwiper2`}
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              onClick={() => openModal(img)}
              style={{ cursor: "pointer" }}
            >
              <Image src={img} alt={`image ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Modal open={isModalOpen} onClose={closeModal}>
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "rgba(0, 0, 0, 0.8)",
              borderRadius: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "95%", xl: "70%" },
              maxWidth: "100%",
              maxHeight: "90%",
              outline: "none",
            }}
          >
            {selectedImage && (
              <>
                <Image
                  src={selectedImage}
                  alt="Selected"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "90vh",
                    borderRadius: "16px",
                  }}
                />
                <IconButton
                  onClick={closeModal}
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    "&:hover": { background: "rgba(0,0,0,0.7)" },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </>
            )}
          </Box>
        </Modal>

        <Button
          title="next"
          className={`next-${uniqueId}`}
          sx={{
            width: "32px",
            height: "32px",
            minHeight: "32px",
            minWidth: "32px",
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
              marginLeft: locale === "ar" ? "4px" : 0,
              marginRight: locale !== "ar" ? "4px" : 0,
            },
            "@media (max-width: 576px)": {
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
              width="14"
              height="10"
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
              width="14"
              height="10"
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

      {/* Thumbnail Swiper */}
      <div className={`swiperThumb-${uniqueId} swiperThumb`}>
        <Swiper
          modules={[Thumbs, Navigation, FreeMode]}
          spaceBetween={10}
          watchSlidesProgress
          onSwiper={(swiper) => setThumbSwiper(swiper)}
          slidesPerView="auto"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image src={img} alt={`image ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Scrollbar */}
      <div className={`custom-scrollbar custom-scrollbar-${uniqueId}`}></div>
    </Stack>
  );
};

export default MainSwiper;
