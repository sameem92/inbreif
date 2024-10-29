"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import Navbar from "./Navbar";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import { animateScroll as scroll } from "react-scroll";
import { usePathname } from "next/navigation";
import createCache from "@emotion/cache";
import { CircularProgress, Box, Typography } from "@mui/material";

function createEmotionCache() {
  return createCache({
    key: "css",
    prepend: true,
    stylisPlugins: [prefixer, rtlPlugin],
  });
}

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname(); // Get the current pathname
  const clientSideEmotionCache = createEmotionCache();
  const [loading, setLoading] = React.useState(false); // State to control loading
  const [loading2, setLoading2] = React.useState(false); // State to control loading

  React.useEffect(() => {
    const body = document.body;

    // Lazy load background image based on path
    const isPhoneApps =
      window?.location?.pathname?.includes("web-apps") ||
      window?.location?.pathname?.includes("mobile-apps") ||
      window?.location?.pathname?.includes("about") ||
      window?.location?.pathname?.includes("work") 
 
    // Set a small, placeholder image initially (for performance)
    body.style.backgroundImage = `url("/image/placeholder.svg")`;
    body.style.backgroundPosition = "top";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.overflowX = "hidden";
    body.style.direction = "rtl"; // Set direction to rtl

    // Lazy load the full-size image after the placeholder
    const loadImage = new Image();
    loadImage.src = isPhoneApps ? "/image/home2.svg" : "/image/home.svg";
    loadImage.onload = () => {
      body.style.backgroundImage = `url(${loadImage.src})`;
      body.classList.add("background-loaded");

      setTimeout(() => {
        setLoading(false); // Stop loadπing once the image is loaded and timeout is complete
      }, 2000); // Delay for 2 seconds to ensure caching

      // Stop loading once the image is loaded
    };
    return () => {
      loadImage.onload = null; // Avoid memory leaks
    };
  }, [pathname]);

  React.useEffect(() => {
    const footer = document.querySelector<HTMLElement>(".footer"); // Explicitly typing as HTMLElement
    if (!footer) {
      setLoading2(false);

      return;
    } // If footer is not rendered, exit early
    console.log(footer, "--->");
    const loadFooterImage = new Image();
    loadFooterImage.src = "/image/noise.png";
    loadFooterImage.onload = () => {
      if (footer) {
        footer.style.backgroundImage = `url(${loadFooterImage.src}), none`;
      }
      setTimeout(() => {
        setLoading2(false); // Stop loading once the image is loaded
      }, 2000); // Delay for 2 seconds to ensure caching
    };
  }, [pathname]);
  React.useEffect(() => {
    const hash = window.location.hash; // Get the hash value from the URL
  
    if (hash) {
      const section = document.querySelector(hash) as HTMLElement;
      
      // Delay the scroll action to ensure the DOM is fully loaded
      if (section) {
        setTimeout(() => {
          scroll.scrollTo(section.offsetTop, {
            duration: 800,
            smooth: "easeInOutQuad",
          });
        }, 600); // Delay for 300ms to ensure proper timing
      }
    }
  }); // Trigger when the path changes
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CacheProvider value={clientSideEmotionCache}>
        {loading || loading2 ? (
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              padding: "2rem",
              background: "#032932",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
            }}
          >
            <div className="loader"></div> 
            <Typography
              variant="h6"
              sx={{ marginTop: "1.5rem" }}
              className="loading"
            >
              برجاء الانتظار
            </Typography>
          </Box>
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </CacheProvider>
    </ThemeProvider>
  );
}
