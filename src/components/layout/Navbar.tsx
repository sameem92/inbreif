"use client"

import React from "react"
import { Stack, Toolbar, AppBar, Box, Button, IconButton, Drawer, List, ListItem } from "@mui/material"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import MenuIcon from "@mui/icons-material/Menu"
import Link from "next/link"
import { useState } from "react"
import { useMediaQuery } from "@mui/material"
import InbreifLogo from "../../../public/image/InbreifLogo.svg"

const list = [
  { title: "الرئيسية", path: "/" },
  { title: "من نحن", path: "/about-us" },
  { title: "تطبيقات الجوال", path: "/mobile-apps" },
  { title: "متاجر إلكترونية", path: "/web-apps" },
  { title: "التصميم و الموشن", path: "/design-and-marketing" },
  { title: "التسويق والحملات", path: "/marketing-and-campaigns" },
]

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

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
            onClick={() => handleNavigation("/")}
            src={InbreifLogo}
            alt="Inbreif Logo"
            className="cursor-pointer"
            style={{
              margin: "0 auto",
              marginBottom: "2rem",
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
              fontFamily: "'__IBM_Plex_Sans_Arabic_b9e16f', '__IBM_Plex_Sans_Arabic_Fallback_b9e16f'",
              fontWeight: 400,
              fontSize: "2rem",
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
              handleNavigation(item.path)
            }}
          >
            {item.title}
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
                  onClick={() => handleNavigation("/")}
                  src={InbreifLogo}
                  alt="Inbreif Logo"
                  className="cursor-pointer"
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
                  <Link key={index} href={item.path} className={`nav-link ${isActive(item.path) ? "active" : ""}`}>
                    {item.title}
                  </Link>
                ))}

                {/* <Lang /> */}
              </Box>

              {/* Logo */}
              <Image
                onClick={() => handleNavigation("/")}
                src={InbreifLogo}
                alt="Inbreif Logo"
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
