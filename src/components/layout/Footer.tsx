import React from "react"
import { Box, Typography, Grid } from "@mui/material"
import Container from "@mui/material/Container"
import Image from "next/image"
import Fade from "@mui/material/Fade"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import { animateScroll as scroll } from "react-scroll"
import { useRouter, usePathname } from "next/navigation"
import { dynamicBlurDataUrl } from "@/lib"
import footer from "../../../public/image/fo.png"
import timer from "../../../public/image/time.png"
import email from "../../../public/image/email.png"
import location from "../../../public/image/location.png"
import phone from "../../../public/image/phone.png"
import up from "../../../public/image/up.png"

function ScrollTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10, // Try setting a low threshold for testing
  })

  // Log to check when the trigger fires
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector("#goToHome")
    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      })
    }
  }
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <Image
          loading="lazy"
          onClick={handleClick}
          blurDataURL={dynamicBlurDataUrl}
          placeholder="blur"
          width={50}
          height={50}
          src={up}
          alt="up"
          style={{ cursor: "pointer", width: "5rem", height: "5rem" }}
        />
      </Box>
    </Fade>
  )
}

export default function ResponsiveFooter() {
  const pathname = usePathname()

  const router = useRouter()

  const handleNavigationScroll = (path: string, sectionId: string) => {
    if (pathname === path) {
      // If already on the target page, scroll to the section directly
      scroll.scrollTo(document.getElementById(sectionId)?.offsetTop, {
        duration: 800,
        smooth: "easeInOutQuad",
      })
    } else {
      // If navigating from another page, push the route first, then scroll
      router.push(`${path}#${sectionId}`)
    }
  }

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <Box
      component="footer"
      className="footer"
      sx={{
        color: "white",
        padding: { xs: "5rem 0", lg: "10rem 10rem 3rem 10rem" },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          gap: "4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1.6rem",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Grid container direction={"row"} spacing={{ xs: 3, md: 3 }} style={{ alignItems: "flex-start" }}>
            {/* Column 1 */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: { xs: "2rem", md: "3.2rem" },
                  flexDirection: "column",
                }}
              >
                <Image
                  src={footer}
                  alt="footer"
                  width={172}
                  height={60}
                  blurDataURL={dynamicBlurDataUrl}
                  placeholder="blur"
                  loading="lazy"
                  className="footer-logo"
                />
                <Typography
                  variant="body2"
                  sx={{
                    // fontFamily: "var(--font-ibm-plex-sans-arabic)",
                    fontSize: "2.4rem",
                    fontWeight: 600,
                    lineHeight: "3.6rem",
                  }}
                >
                  المنصة الأقوى في البرمجيات والتسويق في العالم العربي.
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Kumbh Sans, sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: 500,
                    lineHeight: "2rem",
                    textAlign: "right",
                  }}
                >
                  ⁠مرخصة برقم : س ت 1559152
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <Image
                    blurDataURL={dynamicBlurDataUrl}
                    placeholder="blur"
                    src={timer}
                    alt="timer"
                    width={36}
                    height={36}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Kumbh Sans, sans-serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      lineHeight: "2rem",
                      textAlign: "left",
                    }}
                  >
                    <strong>أوقات الدوام</strong>: من الساعة 8 صباحاً إلى ٨ مساءً يومياً عدا الجمعة
                  </Typography>
                </Box>
                <div className="social-menu-footer">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/inbriefclick" target="_blank" rel="noopener noreferrer">
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.66532 10.2493H8.74872L9.58202 6.91602H6.66532V5.24936C6.66532 4.39102 6.66532 3.58269 8.33202 3.58269H9.58202V0.782686C9.31032 0.746856 8.28452 0.666016 7.20122 0.666016C4.93869 0.666016 3.33203 2.04686 3.33203 4.58269V6.91602H0.832031V10.2493H3.33203V17.3327H6.66532V10.2493Z"
                            fill="#124651"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/inbriefclick" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M18.4663 4.71376C17.8301 4.99517 17.1554 5.17999 16.4646 5.26209C17.1927 4.82662 17.7377 4.14127 17.9979 3.33376C17.3146 3.74043 16.5654 4.02543 15.7846 4.17959C15.2601 3.61841 14.5649 3.24623 13.8071 3.12091C13.0492 2.9956 12.2712 3.12417 11.594 3.48664C10.9167 3.84911 10.3782 4.42516 10.0622 5.12525C9.74617 5.82534 9.67026 6.61024 9.84631 7.35793C8.46056 7.28847 7.10492 6.92836 5.86738 6.30098C4.62984 5.6736 3.53808 4.79297 2.66297 3.71626C2.35321 4.2483 2.19043 4.85312 2.19131 5.46876C2.19131 6.67709 2.80631 7.74459 3.74131 8.36959C3.18798 8.35217 2.64683 8.20274 2.16297 7.93376V7.97709C2.16314 8.78184 2.44161 9.56177 2.95118 10.1846C3.46074 10.8075 4.17004 11.235 4.95881 11.3946C4.44515 11.5338 3.90656 11.5543 3.38381 11.4546C3.60619 12.1473 4.03964 12.7531 4.62347 13.1872C5.20729 13.6213 5.91225 13.8619 6.63964 13.8754C5.91671 14.4432 5.08895 14.8629 4.20371 15.1106C3.31846 15.3582 2.39308 15.429 1.48047 15.3188C3.07355 16.3433 4.92805 16.8872 6.82214 16.8854C13.2329 16.8854 16.7388 11.5746 16.7388 6.96876C16.7388 6.81876 16.7346 6.66709 16.7279 6.51876C17.4103 6.02557 17.9993 5.41461 18.4671 4.71459L18.4663 4.71376Z"
                            fill="#124651"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/inbriefclick" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_280_28919)">
                            <path
                              d="M10.0013 1.66602C12.2655 1.66602 12.548 1.67436 13.4363 1.71602C14.3238 1.75769 14.928 1.89686 15.4597 2.10352C16.0097 2.31519 16.473 2.60186 16.9363 3.06436C17.3601 3.48094 17.688 3.98485 17.8972 4.54102C18.103 5.07186 18.243 5.67686 18.2847 6.56436C18.3238 7.45269 18.3347 7.73519 18.3347 9.99933C18.3347 12.2635 18.3263 12.546 18.2847 13.4343C18.243 14.3218 18.103 14.926 17.8972 15.4577C17.6886 16.0141 17.3606 16.5182 16.9363 16.9343C16.5196 17.3579 16.0158 17.6858 15.4597 17.8952C14.9288 18.101 14.3238 18.241 13.4363 18.2827C12.548 18.3218 12.2655 18.3327 10.0013 18.3327C7.73714 18.3327 7.45464 18.3243 6.56631 18.2827C5.67881 18.241 5.07464 18.101 4.54297 17.8952C3.98658 17.6864 3.48258 17.3584 3.06631 16.9343C2.64248 16.5178 2.31458 16.0139 2.10547 15.4577C1.89881 14.9268 1.75964 14.3218 1.71797 13.4343C1.67881 12.546 1.66797 12.2635 1.66797 9.99933C1.66797 7.73519 1.67631 7.45269 1.71797 6.56436C1.75964 5.67602 1.89881 5.07269 2.10547 4.54102C2.314 3.98451 2.64198 3.48046 3.06631 3.06436C3.4827 2.64038 3.98666 2.31246 4.54297 2.10352C5.07464 1.89686 5.67797 1.75769 6.56631 1.71602C7.45464 1.67686 7.73714 1.66602 10.0013 1.66602ZM10.0013 5.83269C8.89624 5.83269 7.83643 6.27168 7.05503 7.05308C6.27363 7.83448 5.83464 8.89429 5.83464 9.99933C5.83464 11.1044 6.27363 12.1642 7.05503 12.9456C7.83643 13.727 8.89624 14.166 10.0013 14.166C11.1064 14.166 12.1662 13.727 12.9476 12.9456C13.729 12.1642 14.168 11.1044 14.168 9.99933C14.168 8.89429 13.729 7.83448 12.9476 7.05308C12.1662 6.27168 11.1064 5.83269 10.0013 5.83269ZM15.418 5.62436C15.418 5.34809 15.3082 5.08314 15.1129 4.88779C14.9175 4.69244 14.6526 4.58269 14.3763 4.58269C14.1001 4.58269 13.8351 4.69244 13.6398 4.88779C13.4444 5.08314 13.3347 5.34809 13.3347 5.62436C13.3347 5.90062 13.4444 6.16557 13.6398 6.36093C13.8351 6.55628 14.1001 6.66602 14.3763 6.66602C14.6526 6.66602 14.9175 6.55628 15.1129 6.36093C15.3082 6.16557 15.418 5.90062 15.418 5.62436ZM10.0013 7.49936C10.6644 7.49936 11.3003 7.76275 11.7691 8.23159C12.2379 8.70043 12.5013 9.33631 12.5013 9.99933C12.5013 10.6624 12.2379 11.2983 11.7691 11.7671C11.3003 12.2359 10.6644 12.4993 10.0013 12.4993C9.33826 12.4993 8.70238 12.2359 8.23354 11.7671C7.7647 11.2983 7.50131 10.6624 7.50131 9.99933C7.50131 9.33631 7.7647 8.70043 8.23354 8.23159C8.70238 7.76275 9.33826 7.49936 10.0013 7.49936Z"
                              fill="#124651"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_280_28919">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                alignItems: { xs: "flex-start", md: "center" },

                gap: "3.2rem",

                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: { xs: "2rem", md: "3.2rem" },
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    // fontFamily: "var(--font-ibm-plex-sans-arabic)",
                    fontSize: { xs: "2rem", md: "1.6rem" },
                    fontWeight: 700,
                    lineHeight: "2.2rem",
                    color: "#e1e42a",
                  }}
                >
                  روابط تهمك
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.4rem",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Kumbh Sans, sans-serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      cursor: "pointer",

                      lineHeight: "1.6rem",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: " #e0e324",
                      },
                    }}
                    onClick={() => handleNavigation("/about-us")}
                  >
                    من نحن
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Kumbh Sans, sans-serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      cursor: "pointer",

                      lineHeight: "1.6rem",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: " #e0e324",
                      },
                    }}
                    onClick={() => handleNavigation("/mobile-apps")}
                  >
                    تطبيقات الموبايل
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Kumbh Sans, sans-serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      cursor: "pointer",

                      lineHeight: "1.6rem",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: " #e0e324",
                      },
                    }}
                    onClick={() => handleNavigation("/mobile-apps")}
                  >
                    متاجر إلكترونية
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Kumbh Sans, sans-serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      lineHeight: "1.6rem",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: " #e0e324",
                      },
                    }}
                    onClick={() => {
                      handleNavigation("/design-and-marketing")
                    }}
                  >
                    التصميم والموشن
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Kumbh Sans, sans-serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      lineHeight: "1.6rem",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: " #e0e324",
                      },
                    }}
                    onClick={() => {
                      handleNavigation("/marketing-and-campaigns")
                    }}
                  >
                    التسويق والحملات
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Kumbh Sans, sans-serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      lineHeight: "1.6rem",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: " #e0e324",
                      },
                    }}
                    onClick={() => handleNavigationScroll("/", "special-offers")}
                  >
                    عروض خاصة
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Column 3 */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                alignItems: { xs: "flex-start", md: "center" },
                gap: "3.2rem",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: { xs: "2rem", md: "3.2rem" },
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    // fontFamily: "var(--font-ibm-plex-sans-arabic)",
                    fontSize: { xs: "2rem", md: "1.6rem" },
                    fontWeight: 700,
                    lineHeight: "2.2rem",
                    color: "#e1e42a",
                  }}
                >
                  العناوين
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.4rem",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Kumbh Sans, sans-serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      lineHeight: "1.6rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <Image
                      blurDataURL={dynamicBlurDataUrl}
                      placeholder="blur"
                      src={email}
                      alt="email"
                      width={34}
                      height={34}
                    />

                    <a href="mailto:contact@inbrief.click" style={{ color: "white" }}>
                      contact@inbrief.click
                    </a>
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".8rem",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Kumbh Sans, sans-serif",
                        fontSize: "1.6rem",
                        fontWeight: 400,
                        lineHeight: "1.6rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <Image
                        src={location}
                        alt="location"
                        width={34}
                        blurDataURL={dynamicBlurDataUrl}
                        placeholder="blur"
                        height={34}
                      />

                      <span>
                        <strong>الدمام</strong> : طريق الملك فهد مع طريق عثمان ابن عفان مقابل عمارة المعجل
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Kumbh Sans, sans-serif",
                        fontSize: "1.6rem",
                        fontWeight: 400,
                        lineHeight: "1.6rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <Image
                        blurDataURL={dynamicBlurDataUrl}
                        placeholder="blur"
                        src={phone}
                        alt="phone"
                        width={34}
                        height={34}
                      />

                      <strong>
                        <a href="http://wa.me/966552647805" target="_blank" style={{ color: "white" }}>
                          966552647805+
                        </a>
                      </strong>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".8rem",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Kumbh Sans, sans-serif",
                        fontSize: "1.6rem",
                        fontWeight: 400,
                        lineHeight: "1.6rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <Image
                        src={location}
                        alt="location"
                        width={34}
                        blurDataURL={dynamicBlurDataUrl}
                        placeholder="blur"
                        height={34}
                      />

                      <span>
                        <strong>الكويت</strong>: الفروانية - خيطان - الهيئة العامه للاستثمار -الدور الأول - 13
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Kumbh Sans, sans-serif",
                        fontSize: "1.6rem",
                        fontWeight: 400,
                        lineHeight: "1.6rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <Image
                        blurDataURL={dynamicBlurDataUrl}
                        placeholder="blur"
                        src={phone}
                        alt="phone"
                        width={34}
                        height={34}
                      />

                      <strong>
                        <a href="http://wa.me/96550337772" target="_blank" style={{ color: "white" }}>
                          96550337772+
                        </a>
                      </strong>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".8rem",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Kumbh Sans, sans-serif",
                        fontSize: "1.6rem",
                        fontWeight: 400,
                        lineHeight: "1.6rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <Image
                        src={location}
                        alt="location"
                        width={34}
                        blurDataURL={dynamicBlurDataUrl}
                        placeholder="blur"
                        height={34}
                      />

                      <span>
                        <strong>مسقط</strong>: العذيبة - ١٨نوفمبر -مقابل بنك مسقط
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Kumbh Sans, sans-serif",
                        fontSize: "1.6rem",
                        fontWeight: 400,
                        lineHeight: "1.6rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <Image
                        blurDataURL={dynamicBlurDataUrl}
                        placeholder="blur"
                        src={phone}
                        alt="phone"
                        width={34}
                        height={34}
                      />

                      <strong>
                        <a href="http://wa.me/96877276659" target="_blank" style={{ color: "white" }}>
                          96877276659+
                        </a>
                      </strong>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.6rem",
            }}
          >
            <ScrollTop />
          </Box>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#FFFFFF1F",
              marginBottom: "2rem",
            }}
          ></div>

          <Typography
            variant="body2"
            sx={{
              fontFamily: "Kumbh Sans, sans-serif",
              fontSize: "1.6rem",
              fontWeight: 400,
              lineHeight: "1.6rem",
              textAlign: "center",
            }}
          >
            ⁠جميع الحقوق محفوظة لشركة Inbrief للبرمجيات والتسويق 2025
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
