import React from "react";
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
const icon1 = "/image/icon8.png";
import { Pagination,Autoplay } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {dynamicBlurDataUrl } from "@/lib";
import imagMob from "@/assets/img/imagMob.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const items = [
  {
    icon: icon1,
    title: "موقع تعريفي خاص بمشروعك",
  },
  {
    icon: icon1,
    title: "استضافة ودومين مجاني لمدة عام",
  },
  {
    icon: icon1,
    title: "دعم فني مجاني لمدة سنة",
  },
  {
    icon: icon1,
    title: "تعدد اللغات",
  },
  {
    icon: icon1,
    title: "الربط مع بوابات التقسيط",
  },
  {
    icon: icon1,
    title: "الربط مع بوابة دفع",
  },
];

// Motion variants for the cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Stagger animation for each card
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function Package() {
  const isMobile = useMediaQuery("(max-width:768px)"); // Detect if the screen is mobile
  const goToWhatsApp = ()=>{
    //href="" 
    window.open("http://wa.me/96877276659","_target")
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={isMobile ? { once: true } : { once: true, amount: 0.3 }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4.8rem",
          paddingBottom: { xs: "5.3rem", md: "10rem" },
        }}
      >
        <h2 className="secondry-title">المميزات</h2>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            width: { xs: "90%" },
          }}
        >
          <Grid container spacing={{ xs: 6, md: 18 }} justifyContent="center">
            <Grid item xs={12} sm={12} md={7}>
              <Swiper
             modules={[Pagination , Autoplay]} // Make sure modules are correctly passed
             spaceBetween={30}
             slidesPerView={1}
             pagination={true}
             className="mySwiper-dots"
              autoplay={{
               delay: 1700,
               disableOnInteraction: false,
               pauseOnMouseEnter: true,
               reverseDirection: false,
             }}
             loop={true}

               allowTouchMove={true}   
             grabCursor={true}
             speed={3500}
              >
                {/* SwiperSlide for each group of 6 cards */}
                {[...Array(4)].map((_, slideIndex) => (
                  <SwiperSlide key={slideIndex}>
                    <Grid container spacing={4} justifyContent="center">
                      {items.map((item, index) => (
                        <Grid item key={index} xs={6} sm={6} md={6}>
                          <motion.div
                            whileHover={{ scale: 0.9 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                            }}
                          > 
                             <Card
                              sx={{
                                background:
                                  "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                                backdropFilter: "blur(5px)",
                                borderRadius: "2.8rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                 
                                height: { xs: "15rem", md: "20rem" },
                                gap: "1.6rem",
                                padding: {
                                  xs: "1.6rem 0rem",
                                  md: "1.6rem 0.5rem",
                                  lg: "1.1rem",
                                },
                             
                                "&:hover": {
                                  border: "1px solid #E0E324",
                                },
                              }}
                            >
                              <CardContent
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: "1.6rem",
                                  "& img": {
                                    width: "40px !important",
                                    height: "40px !important",
                                  },
                                }}
                              >
                                <Image
                                  blurDataURL={dynamicBlurDataUrl}
                                  placeholder="blur"
                                  src={item.icon}
                                  alt={item.title}
                                  width={40}
                                  height={40}
                                  loading="lazy"
                                />
                                <Typography
                                  variant="h6"
                                  sx={{
                                      
        
                                     
                                    lineHeight: {xs:'3rem',lg:"3.4rem"},
                                    fontSize: {
                                      xs: "1.6rem",
                                      md: "1.8rem",
                                      lg: "2rem",
                                    },
                                    fontWeight: 600,
                                     display: "flex",
                                    alignItems: "center",
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  {item.title}
                                </Typography>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
            <Grid item xs={12} md={5} className="hidden-img">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={
                  isMobile ? { once: true } : { once: true, amount: 0.1 }
                }
                style={{
                  width: "100%",
                  height: "100%",
                }}
                variants={cardVariants}
              >
                <Box
                  width="100%"
                  sx={{
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      minWidth: "13rem",
                       left: "50%",
                      zIndex: "2",
                      margin: "auto",
                      height: "7rem",
                      bottom: "18%",
                      transform: "translateX(-50%)",
                      cursor: "pointer",
                    }}
                  >
                       <Button
                 sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: "13rem",
                  height: "5rem",
                   gap: "6px",
                  borderRadius: "52px",
                  background: "#E0E324",
                  backdropFilter: "blur(24px)",
                  color: "#124650",
                  textAlign: "center",
                  padding: {xs:"1rem 0.5rem",lg:"1rem 2rem"},
                  fontSize: {xs:'1.3rem',lg:"1.6rem"},

                   fontWeight: 600,
                  lineHeight: "1.6rem",
                  

                }}
                onClick={goToWhatsApp}
                className='t-buttin'
              >
احصل على التطبيق              </Button>
              </Box>
                  <Image
                    src={imagMob}
                    alt="moeeb"
                    className="img-sm"
                     style={{
                      width: "100%",
                      height: "100%",
                    }}
                    blurDataURL={dynamicBlurDataUrl}
                    placeholder="blur" 
                    loading="lazy"
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </motion.div>
  );
}