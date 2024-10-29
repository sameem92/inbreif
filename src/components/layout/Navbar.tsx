"use client"; // Ensure it's a client component
import { animateScroll as scroll } from "react-scroll";
import { dynamicBlurDataUrl } from "@/lib";

import React from "react";
const inBreifLogo = "/image/InbreifLogo.png";
import {
  Stack,
  Toolbar,
  AppBar,
  Box,
  Button,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
const arrowDown = "/image/chevron-down.svg";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import Lang from "./Lang";
import {
  usePopupState,
  bindHover,
  bindMenu,
  bindTrigger,
} from "material-ui-popup-state/hooks";
import HoverMenu from "material-ui-popup-state/HoverMenu";

const list = [
  { title: "الرئيسية", path: "/" },
  { title: "من نحن", path: "/about-us" },
  { title: "الخدمات البرمجية", path: "/software-services", isMenu: true },
  { title: "التصميم و الموشن", path: "/design-and-marketing" },
  { title: "التسويق والحملات", path: "/marketing-and-campaigns" },

  { title: "عروض خاصة", path: "/special-offers" },
];

const StyledMenu = styled((props: MenuProps) => (
  <HoverMenu
    elevation={0}
    disableAutoFocusItem
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(() => ({
  "& .MuiPaper-root": {
    minWidth: 180,

    background:
      "linear-gradient(137.34deg, rgba(2, 5, 4, 0.16) 23.98%, rgba(35, 36, 56, 0.16) 65.73%)",
    backdropFilter: "blur(100px)",
    borderRadius: "0px 11px 11px 11px",
    border: "1px solid #22373C",

    marginTop: "0rem",
    color: "white",
    "& .MuiMenu-list": {
      padding: "1.2rem",
      gap: "4px",
      display: "flex",
      flexDirection: "column",
    },
    "& li": {
      "&:hover": {
        background: "#FFFFFF0F",
        color: "#E0E324",
      },
      background: "transparent",
      color: "white",
      // fontFamily: "var(--font-ibm-plex-sans-arabic)",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "4rem",
      fontSize: "1.4rem",
      height: "3rem",
      borderRadius: "4px",
    },
    "& .MuiMenuItem-root": {
      "&:active": {},
    },
  },
}));

import { MenuProps } from "@mui/material/Menu";

const Header = () => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });

  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const router = useRouter();

  const handleNavigationScroll = (path, sectionId) => {
    if (pathname === path) {
      // If already on the page, scroll to the section directly
      scroll.scrollTo(document.getElementById(sectionId)?.offsetTop, {
        duration: 800,
        smooth: "easeInOutQuad",
      });
    } else {
      // Navigate to the page with a hash for the section
      router.push(`${path}#${sectionId}`);
    }
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const isActive = (path: string) => pathname === path;
  const isActiveIncluses = () => {
    if (!pathname) return false;
    return pathname.includes("apps");
  };

  const isMobile = useMediaQuery("(max-width: 999px)");
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      console.log("toggleDrawer", event);
      setDrawerOpen(open);
    };

  const drawerList = (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ background: "#124651", padding: "2rem", height: "100vh" }}>
        <ListItem
          sx={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
        >
          <Image
            blurDataURL={dynamicBlurDataUrl}
            placeholder="blur"
            loading="lazy"
            onClick={() => handleNavigation("/")}
            src={inBreifLogo}
            alt="Inbreif Logo"
            width={100}
            height={48}
            className="cursor-pointer"
            style={{
              height: "auto",
              marginBottom: "2rem",
              marginRight: "auto",
              marginLeft: "auto",

            }}
          />
        </ListItem>
        {list.map((item, index) =>
          item.isMenu ? (
            <ListItem
              component="button"
              sx={{
                background: "transparent",
                color: "white",
                border: "none",
                // fontFamily: "var(--font-ibm-plex-sans-arabic)",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "1.8rem",
                lineHeight: "4rem",
                height: "4rem",
                borderRadius: "4px",
                
              }}
              key={index}
            >
              <Box
                id={`menu-${index}`}
                {...bindHover(popupState)}
                {...bindTrigger(popupState)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "0.5rem", xl: "1rem" },
                  cursor: "pointer",
                }}
              >
                <ListItemText primary={item.title} />

                <Image
                  loading="lazy"
                  src={arrowDown}
                  blurDataURL={dynamicBlurDataUrl}
                  placeholder="blur"
                  alt="arrow down"
                  width={24}
                  height={24}
                />
              </Box>

              <StyledMenu
                MenuListProps={{
                  "aria-labelledby": `menu-${index}`,
                }}
                id={`lang-menu-${index}`}
                {...bindMenu(popupState)}
              >
                <MenuItem
                  onClick={() => {
                    handleNavigation("/mobile-apps");
                    popupState.close();
                  }}
                >
                  تطبيقات الموبايل{" "}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleNavigation("/web-apps");
                    popupState.close();
                  }}
                >
                  مواقع ومتاجر الكترونية{" "}
                </MenuItem>
                <MenuItem onClick={popupState.close}>نظام محاسبي</MenuItem>
              </StyledMenu>
            </ListItem>
          ) : (
            <ListItem
              component="button"
              sx={{
                background: "transparent",
                color: "white",
                border: "none",
                // fontFamily: "var(--font-ibm-plex-sans-arabic)",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "1.8rem",
                lineHeight: "4rem",
                height: "4rem",
                cursor:'pointer',
                borderRadius: "4px",
                transition: "color 0.3s ease",
                "&:hover":{
                  color:" #e0e324"

                }

              }}
              key={index}
              onClick={() => {
                if (item.path.includes("offers")) {
                  handleNavigationScroll("/", "special-offers");
                } else {
                  handleNavigation(item.path);
                }
              }}
            >
              <ListItemText primary={item.title} />
            </ListItem>
          ),
        )}
  <ListItem
          sx={{ width: "100%",my:'2', display: "flex", justifyContent: "center" }}
        >
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
  );

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
                  src={inBreifLogo}
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
              </Box>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
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
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  lineHeight: "1.6rem",
                }}
              >
                تواصل معنا
              </Button>

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
                    {item.isMenu ? (
                      <>
                        <Box
                          id={`menu-${index}`}
                          {...bindHover(popupState)}
                          {...bindTrigger(popupState)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: "0.5rem", xl: "1rem" },
                            cursor: "pointer",
                          }}
                        >
                          <p
                            className={`nav-link ${isActiveIncluses() ? "active" : ""}`}
                          >
                            {item.title}
                          </p>
                          <Image
                            loading="lazy"
                            src={arrowDown}
                            blurDataURL={dynamicBlurDataUrl}
                            placeholder="blur"
                            alt="arrow down"
                            width={24}
                            height={24}
                          />
                        </Box>

                        <StyledMenu
                          MenuListProps={{
                            "aria-labelledby": `menu-${index}`,
                          }}
                          id={`lang-menu-${index}`}
                          {...bindMenu(popupState)}
                        >
                          <MenuItem
                            onClick={() => {
                              handleNavigation("/mobile-apps");
                              popupState.close();
                            }}
                          >
                            تطبيقات الموبايل{" "}
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleNavigation("/web-apps");
                              popupState.close();
                            }}
                          >
                            مواقع ومتاجر الكترونية{" "}
                          </MenuItem>
                          <MenuItem onClick={popupState.close}>
                            نظام محاسبي
                          </MenuItem>
                        </StyledMenu>
                      </>
                    ) : item.path.includes("offers") ? (
                      <span
                        key={index}
                        onClick={() =>
                          handleNavigationScroll("/", "special-offers")
                        }
                        className={`nav-link ${isActive(item.path) ? "active" : ""}`}
                      >
                        {item.title}
                      </span>
                    ) : (
                      <Link
                        key={index}
                        href={item.path}
                        className={`nav-link ${isActive(item.path) ? "active" : ""}`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </React.Fragment>
                ))}

                <Lang />
              </Box>

              {/* Logo */}
              <Image
                loading="lazy"
                onClick={() => handleNavigation("/")}
                src={inBreifLogo}
                alt="Inbreif Logo"
                width={138}
                blurDataURL={dynamicBlurDataUrl}
                placeholder="blur"
                height={48}
                className="cursor-pointer"
              />
            </Stack>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
