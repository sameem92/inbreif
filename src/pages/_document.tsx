/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";
import React from "react";
import { AppType } from "next/dist/shared/lib/utils";

function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar">
        <Head>
          {/* Preload important resources */}
          <link rel="preload" href="/assets/style/global.css" as="style" />
          <meta name="theme-color" content="#124651" />
          <link rel="preload" href="/image/home.svg" as="image" />
          <link rel="preload" href="/image/home2.svg" as="image" />
          <link rel="preload" href="/image/noise.png" as="image" />

          <link rel="preload" href="/image/placeholder.svg" as="image" />

           {/*  eslint-disable-next-line @next/next/no-css-tags */}

          <link rel="stylesheet" href="/assets/style/global.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  // Replace 'any' with appropriate types
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
       enhanceApp: (App: AppType) => (props) => (
        <App emotionCache={cache}  {...props} />
      ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
