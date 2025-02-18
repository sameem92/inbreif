"use client";

import theme from "@/theme/theme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import Feedback from "../tools/feedback/feedback";
import Form from "../tools/form/form";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { LocationProvider } from "@/context/LocationContext";

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
  const clientSideEmotionCache = createEmotionCache();

  return (
    <LocationProvider>
      <CurrencyProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <CacheProvider value={clientSideEmotionCache}>
            <Navbar />
            {children}
            <Feedback />
            <Form />
            <Footer />
          </CacheProvider>
        </ThemeProvider>
      </CurrencyProvider>
    </LocationProvider>
  );
}
