// pages/_app.tsx
import { CacheProvider } from "@emotion/react";
import { AppProps } from "next/app"; // Import the Next.js AppProps type
import createCache from "@emotion/cache";
import { EmotionCache } from "@emotion/cache";

export function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}

// Extend the AppProps type to include emotionCache
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Create a client-side cache, if not available

const clientSideEmotionCache = createEmotionCache();

export default function MyApp({
  Component,

  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  return (

    <CacheProvider value={emotionCache}>




      <Component {...pageProps} />
    </CacheProvider>
  );
}
