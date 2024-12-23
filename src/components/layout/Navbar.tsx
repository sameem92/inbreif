"use client" // Ensure it's a client component
import { animateScroll as scroll } from "react-scroll"
import { dynamicBlurDataUrl } from "@/lib"

import React from "react"
import {
  Stack,
  Toolbar,
  AppBar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import MenuIcon from "@mui/icons-material/Menu"
import Link from "next/link"
import { useState } from "react"
import { useMediaQuery } from "@mui/material"
import InbreifLogo from "../../../public/image/InbreifLogo.svg"
import SaudiFlagIcon from "../../../public/icons/saudiFlagIcon.svg"
import arrowDownIcon from "../../../public/icons/arrowDownIcon.svg"

const list = [
  { title: "الرئيسية", path: "/" },
  { title: "من نحن", path: "/about-us" },
  { title: "تطبيقات الموبايل", path: "/mobile-apps" },
  { title: "متاجر إلكترونية", path: "/web-apps" },
  { title: "التصميم و الموشن", path: "/design-and-marketing" },
  { title: "التسويق والحملات", path: "/marketing-and-campaigns" },
  { title: "عروض خاصة", path: "/special-offers" },
]

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const [language, setLanguage] = useState("ar") // Default language (Arabic)

  const handleNavigationScroll = (path, sectionId) => {
    if (pathname === path) {
      // If already on the page, scroll to the section directly
      scroll.scrollTo(document.getElementById(sectionId)?.offsetTop, {
        duration: 800,
        smooth: "easeInOutQuad",
      })
    } else {
      // Navigate to the page with a hash for the section
      router.push(`${path}#${sectionId}`)
    }
  }

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  const isActive = (path: string) => pathname === path

  const isMobile = useMediaQuery("(max-width: 1080px)")
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    console.log("toggleDrawer", event)
    setDrawerOpen(open)
  }

  const drawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List sx={{ background: "#124651", padding: "2rem", height: "100vh" }}>
        <ListItem sx={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
          <Image
            blurDataURL={dynamicBlurDataUrl}
            placeholder="blur"
            loading="lazy"
            onClick={() => handleNavigation("/")}
            src={InbreifLogo}
            alt="Inbreif Logo"
            className="cursor-pointer"
            style={{
              height: "auto",
              marginBottom: "2rem",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          />
        </ListItem>
        {list.map((item, index) => (
          <ListItem
            component="button"
            sx={{
              background: "transparent",
              color: "white",
              border: "none",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "1.8rem",
              lineHeight: "4rem",
              height: "4rem",
              cursor: "pointer",
              borderRadius: "4px",
              transition: "color 0.3s ease",
              "&:hover": {
                color: " #e0e324",
              },
            }}
            key={index}
            onClick={() => {
              if (item.path.includes("offers")) {
                handleNavigationScroll("/", "special-offers")
              } else {
                handleNavigation(item.path)
              }
            }}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
        <ListItem sx={{ width: "100%", my: "2", display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => handleNavigation("/contact-us")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "13rem",
              height: "5rem",
              padding: "1rem 2rem",
              gap: "6px",
              borderRadius: "52px",
              background: "#E0E324",
              backdropFilter: "blur(24px)",
              color: "#001014",
              textAlign: "center",
              fontSize: "1.6rem",
              fontWeight: 600,
              lineHeight: "1.6rem",
            }}
          >
            تواصل معنا
          </Button>
        </ListItem>
      </List>
    </Box>
  )

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value)
    // Add logic for language change if needed
  }

  return (
    <AppBar
      sx={{
        background: "#0C171524",
        backdropFilter: "blur(24px)",
        padding: "1.7rem 10rem",
        boxShadow: "none",
        "@media (max-width: 1340px)": {
          padding: "1.7rem 2rem",
        },
        "@media (max-width: 1240px)": {
          padding: "1.7rem 1rem",
        },
        "@media (max-width: 992px)": {
          padding: "1.7rem 2rem",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {isMobile ? (
            <>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "2.4rem",
                }}
              >
                <Image
                  loading="lazy"
                  onClick={() => handleNavigation("/")}
                  src={InbreifLogo}
                  alt="Inbreif Logo"
                  width={100}
                  height={48}
                  blurDataURL={dynamicBlurDataUrl}
                  placeholder="blur"
                  className="cursor-pointer"
                  style={{
                    height: "auto",
                  }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Select
                    value={language}
                    onChange={handleLanguageChange}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                        boxShadow: "none",
                        padding: "0",
                      },
                      "& .arrow-icon-2": {
                        top: "45%",
                        right: "15%",
                      },
                    }}
                    displayEmpty
                    renderValue={(value) => (
                      <div>
                        {value === "ar" ? (
                          <Image src={SaudiFlagIcon} alt="Saudi Flag" width={33} height={33} />
                        ) : (
                          <Image src={SaudiFlagIcon} alt="Saudi Flag" width={33} height={33} />
                        )}
                      </div>
                    )}
                    IconComponent={({ className }) => (
                      <Image
                        className={`arrow-icon-2 ${className}`}
                        width={6}
                        height={4}
                        src={arrowDownIcon}
                        alt="arrowSelect"
                        loading="lazy"
                        blurDataURL={dynamicBlurDataUrl}
                        placeholder="blur"
                      />
                    )}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          minWidth: 180,
                          background:
                            "linear-gradient(137.34deg, rgba(2, 5, 4, 0.16) 23.98%, rgba(35, 36, 56, 0.16) 65.73%)",
                          backdropFilter: "blur(100px)",
                          borderRadius: "11px",
                          marginTop: 1,
                          color: "white",
                          "& .MuiMenu-list": {
                            padding: "1.2rem",
                            gap: "4px",
                            border: "1px solid ",
                            borderImageSource: "linear-gradient(81.07deg, #22373C 53.33%, #18292D 93.73%)",
                          },
                          "& li": {
                            "&:hover": {
                              background: "#FFFFFF0F",
                              color: "#E0E324",
                            },
                            background: "transparent",
                            color: "white",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "4rem",
                            fontSize: "1.4rem",
                            height: "4rem",
                            marginBottom: "1rem",
                            borderRadius: "4px",
                          },
                          "& .Mui-selected": {
                            background: "#FFFFFF0F",
                            color: "#ffff",
                            "&:hover": {
                              background: "#FFFFFF0F",
                              color: "#ffff",
                            },
                          },
                          "& .MuiMenuItem-root": {
                            "&:active": {
                              background: "#FFFFFF0F",
                              color: "#ffff",
                            },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value="ar">
                      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Image src={SaudiFlagIcon} alt="Saudi Flag" width={33} height={33} />
                        العربية
                      </Box>
                    </MenuItem>
                    <MenuItem value="en">
                      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Image src={SaudiFlagIcon} alt="English Flag" width={33} height={33} />
                        English
                      </Box>
                    </MenuItem>
                  </Select>
                  <IconButton
                    edge="start"
                    sx={{
                      background: "#E0E324",
                      "&:hover": {
                        background: "#E0E324",
                      },
                    }}
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                  >
                    <MenuIcon />
                  </IconButton>
                </div>
              </Box>

              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerList}
              </Drawer>
            </>
          ) : (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexDirection="row-reverse"
              width="100%"
              gap="2.4rem"
            >
              {/* Contact Us Button */}
              <Button
                onClick={() => handleNavigation("/contact-us")}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "13rem",
                  height: "5rem",
                  padding: "1rem 2rem",
                  gap: "6px",
                  borderRadius: "52px",
                  background: "#E0E324",
                  backdropFilter: "blur(24px)",
                  color: "#001014",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                تواصل معنا
              </Button>

              <Select
                value={language}
                onChange={handleLanguageChange}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                    boxShadow: "none",
                    padding: "0",
                  },
                  "& .arrow-icon-2": {
                    top: "45%",
                    right: "15%",
                  },
                }}
                displayEmpty
                renderValue={(value) => (
                  <div>
                    {value === "ar" ? (
                      <Image src={SaudiFlagIcon} alt="Saudi Flag" width={33} height={33} />
                    ) : (
                      <Image src={SaudiFlagIcon} alt="Saudi Flag" width={33} height={33} />
                    )}
                  </div>
                )}
                IconComponent={({ className }) => (
                  <Image
                    className={`arrow-icon-2 ${className}`}
                    width={6}
                    height={4}
                    src={arrowDownIcon}
                    alt="arrowSelect"
                    loading="lazy"
                    blurDataURL={dynamicBlurDataUrl}
                    placeholder="blur"
                  />
                )}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      minWidth: 180,
                      background:
                        "linear-gradient(137.34deg, rgba(2, 5, 4, 0.16) 23.98%, rgba(35, 36, 56, 0.16) 65.73%)",
                      backdropFilter: "blur(100px)",
                      borderRadius: "11px",
                      marginTop: 1,
                      color: "white",
                      "& .MuiMenu-list": {
                        padding: "1.2rem",
                        gap: "4px",
                        border: "1px solid ",
                        borderImageSource: "linear-gradient(81.07deg, #22373C 53.33%, #18292D 93.73%)",
                      },
                      "& li": {
                        "&:hover": {
                          background: "#FFFFFF0F",
                          color: "#E0E324",
                        },
                        background: "transparent",
                        color: "white",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "4rem",
                        fontSize: "1.4rem",
                        height: "4rem",
                        marginBottom: "1rem",
                        borderRadius: "4px",
                      },
                      "& .Mui-selected": {
                        background: "#FFFFFF0F",
                        color: "#ffff",
                        "&:hover": {
                          background: "#FFFFFF0F",
                          color: "#ffff",
                        },
                      },
                      "& .MuiMenuItem-root": {
                        "&:active": {
                          background: "#FFFFFF0F",
                          color: "#ffff",
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value="ar">
                  <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Image src={SaudiFlagIcon} alt="Saudi Flag" width={33} height={33} />
                    العربية
                  </Box>
                </MenuItem>
                <MenuItem value="en">
                  <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Image src={SaudiFlagIcon} alt="English Flag" width={33} height={33} />
                    English
                  </Box>
                </MenuItem>
              </Select>

              {/* Main Navigation */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: "1.2rem", xl: "2.4rem" },
                  flexGrow: 1,
                }}
              >
                {list.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.path.includes("offers") ? (
                      <span
                        key={index}
                        onClick={() => handleNavigationScroll("/", "special-offers")}
                        className={`nav-link ${isActive(item.path) ? "active" : ""}`}
                      >
                        {item.title}
                      </span>
                    ) : (
                      <Link key={index} href={item.path} className={`nav-link ${isActive(item.path) ? "active" : ""}`}>
                        {item.title}
                      </Link>
                    )}
                  </React.Fragment>
                ))}

                {/* <Lang /> */}
              </Box>

              {/* Logo */}
              <Image
                loading="lazy"
                onClick={() => handleNavigation("/")}
                src={InbreifLogo}
                alt="Inbreif Logo"
                blurDataURL={dynamicBlurDataUrl}
                placeholder="blur"
                className="cursor-pointer"
              />
            </Stack>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default Header
