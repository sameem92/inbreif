"use client"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "@/theme/theme"
import { CacheProvider } from "@emotion/react"
import { prefixer } from "stylis"
import rtlPlugin from "stylis-plugin-rtl"
import Navbar from "./Navbar"
import React, { ReactNode } from "react"
import Footer from "./Footer"
import createCache from "@emotion/cache"

function createEmotionCache() {
  return createCache({
    key: "css",
    prepend: true,
    stylisPlugins: [prefixer, rtlPlugin],
  })
}

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const clientSideEmotionCache = createEmotionCache()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CacheProvider value={clientSideEmotionCache}>
        <Navbar />
        {children}
        <Footer />
      </CacheProvider>
    </ThemeProvider>
  )
}
