import "@/styles/global.css";
import "@/styles/sections.scss";

import AppLayout from "@/components/layout/AppLayout";
import { ReactLenis } from "@/util/lenis";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import { routing } from "../../i18n/routing";

// Import IBM Plex Sans Arabic font
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans-arabic",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://inbrief.click"),
    icons: { icon: "favIcon.png" },
    keywords: [
      t("keywords.Mobile_design_services"),
      t("keywords.Mobile_design"),
      t("keywords.Free_consultation"),
      t("keywords.Contact_us"),
      t("keywords.Website_design"),
      t("keywords.Graphic_design"),
      t("keywords.Mobile_applications"),
      t("keywords.Unlimited"),
      t("keywords.App_development"),
      t("keywords.Store_design"),
      t("keywords.Website_development"),
      t("keywords.Top_level_security"),
      t("keywords.Custom_store_services"),
      t("keywords.Application_development"),
      t("keywords.Web_development"),
      t("keywords.Website_programming_and_design"),
      t("keywords.E_commerce"),
      t("keywords.Digital_marketing"),
      t("keywords.Medical_websites"),
      t("keywords.Booking_websites"),
      t("keywords.Charity_websites"),
      t("keywords.Marketing_campaigns"),
      t("keywords.Sponsored_ads"),
      t("keywords.Paid_campaigns"),
    ],
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      images: ["banner.png"],
      url: "https://inbrief.click",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitter.title"),
      description: t("twitter.description"),
      site: "@inbrief",
      creator: "@inbrief",
      images: ["banner.png"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <ReactLenis root>
        <body className={ibmPlexSansArabic.className}>
          <NextIntlClientProvider>
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-WNCHSK48"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              ></iframe>
            </noscript>
            {/* End Google Tag Manager */}
            <AppLayout>{children}</AppLayout>
            {/* Google Tag Manager */}
            <Script
              strategy="afterInteractive"
              id="google-tag-manager"
              dangerouslySetInnerHTML={{
                __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WNCHSK48');
          `,
              }}
            />
            {/* End Google Tag Manager */}
          </NextIntlClientProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
