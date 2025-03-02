"use client"; // Only the providers need to be client-side

import { ReactNode } from "react";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { LocationProvider } from "@/context/LocationContext";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import theme from "@/theme/theme";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

function createEmotionCache() {
  return createCache({
    key: "css",
    prepend: true,
    stylisPlugins: [prefixer, rtlPlugin],
  });
}

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const clientSideEmotionCache = createEmotionCache();

  return (
    <LocationProvider>
      <CurrencyProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <CacheProvider value={clientSideEmotionCache}>
            {children}
          </CacheProvider>
        </ThemeProvider>
      </CurrencyProvider>
    </LocationProvider>
  );
}
