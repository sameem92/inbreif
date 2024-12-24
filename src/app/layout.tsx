import "@/assets/style/global.css"
import { IBM_Plex_Sans_Arabic } from "next/font/google"
import AppLayout from "@/components/layout/AppLayout"

// Import IBM Plex Sans Arabic font
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans-arabic",
})

// Metadata including SEO improvements
export const metadata = {
  title: "Inbrief - Software and Marketing | MENA",
  description:
    "Inbrief is a leading software development and marketing company in the MENA region, offering comprehensive solutions in web development, mobile applications, digital marketing, UX/UI design, and branding.",
  icons: { icon: "/image/favIcon.png" },
  images: ["/image/favIcon.png"],
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
  ],
  openGraph: {
    title: "Inbrief - Software and Marketing | MENA",
    description:
      "Inbrief is a leading software development and marketing company in the MENA region, offering comprehensive solutions in web development, mobile applications, digital marketing, UX/UI design, and branding.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inbrief - Software and Marketing | MENA",
    description:
      "Inbrief is a leading software development and marketing company in the MENA region, offering comprehensive solutions in web development, mobile applications, digital marketing, UX/UI design, and branding.",
    site: "@inbriefmena",
    creator: "@inbriefmena",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={ibmPlexSansArabic.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}
