import "@/assets/style/global.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import AppLayout from "@/components/layout/AppLayout";
import Head from "next/head";

// Import IBM Plex Sans Arabic font
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans-arabic",
});

// Metadata including SEO improvements
export const metadata = {
  title: "Inbrief - Software and Marketing | MENA",
  description:
    "Inbrief is a leading software development and marketing company in the MENA region, offering comprehensive solutions in web development, mobile applications, digital marketing, UX/UI design, and branding.",
  keywords: [
    "software development",
    "marketing",
    "MENA",
    "web development",
    "mobile apps",
    "digital marketing",
    "SEO",
    "social media marketing",
    "branding",
    "software solutions",
    "e-commerce",
    "UX/UI design",
    "corporate marketing",
    "Inbrief",
    "web design",
    "content creation",
    "business growth",
    "digital transformation",
    "mobile applications",
    "campaign management",
    "Saudi Arabia",
    "Oman",
    "Kuwait",
    "UAE",
  ].join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Inbrief" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#124651" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
        <meta property="og:url" content="https://inbriefmena.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_AR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/assets/images/og-image.jpg" />
        <meta name="twitter:site" content="@inbriefmena" />

        {/* Contact and Location Information */}
        <meta name="contact:email" content="contact@inbrief.click" />
        <meta name="contact:phone_number" content="+966552647805" />
        <meta
          name="contact:phone_number:international"
          content="+966552647805"
        />
        <meta name="contact:office_location" content="Dammam, KSA" />
        <meta name="contact:office_location" content="Kuwait City, Kuwait" />
        <meta name="contact:office_location" content="Muscat, Oman" />

        {/* Favicon */}
        <link rel="icon" href="/assets/icons/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/assets/icons/apple-touch-icon.png"
        />

        {/* Structured Data for SEO (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Inbrief",
              url: "https://inbriefmena.com",
              logo: "/assets/images/logo.png",
              sameAs: [
                "https://www.facebook.com/inbriefmena",
                "https://www.twitter.com/inbriefmena",
                "https://www.instagram.com/inbriefmena",
              ],
              description: metadata.description,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dammam",
                addressCountry: "Saudi Arabia",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                telephone: "+966552647805",
                areaServed: "MENA",
              },
            }),
          }}
        />
      </Head>
      <body className={ibmPlexSansArabic.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
