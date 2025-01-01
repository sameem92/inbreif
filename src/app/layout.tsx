import "@/styles/sections.scss"
import "@/styles/global.css"

import { IBM_Plex_Sans_Arabic } from "next/font/google"
import AppLayout from "@/components/layout/AppLayout"
import Head from "next/head"

// Import IBM Plex Sans Arabic font
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans-arabic",
})

export const metadata = {
  title: "شركة إن بريف للبرمجيات والتسويق الإلكتروني | حلول تقنية متكاملة",
  description:
    "شركة مُتخصصة ورائدة في مجال التسويق والبرمجة في الخليج، تصميم المواقع، برمجة وتطوير التطبيقات، إدارة الحملات الإعلانية، وتصميم الجرافيك.",
  icons: { icon: "/image/favIcon.png" },
  keywords: [
    "خدمات تصميم الجوال",
    "تصميم الجوال",
    "استشارة مجانية",
    "التواصل معنا",
    "تصميم مواقع الانترنت",
    "تصميم جرافيك",
    "تطبيقات الجوال",
    "غير محدودة",
    "برمجة تطبيقات",
    "تصميم متاجر",
    "تصميم مواقع",
    "أعلى مستويات حماية",
    "خدمات المتاجر المخصصة",
    "تطوير تطبيقات",
    "تطوير المواقع",
    "برمجة وتصميم مواقع",
    "التجارة الالكترونية",
    "تسويق إلكتروني",
    "مواقع طبية",
    "مواقع حجوزات",
    "مواقع جمعية خيرية",
    "حملات تسويقية",
    "إعلانات ممولة",
    "حملات ممولة",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <Head>
        {/* Google Tag Manager */}
        <script
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
      </Head>
      <body className={ibmPlexSansArabic.className}>
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
      </body>
    </html>
  )
}
