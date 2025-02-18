import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://inbrief.click`,
      lastModified: new Date(),
    },
    {
      url: "https://inbrief.click/about-us",
      lastModified: new Date(),
    },
    {
      url: "https://inbrief.click/mobile-apps",
      lastModified: new Date(),
    },
    {
      url: "https://inbrief.click/web-apps",
      lastModified: new Date(),
    },
    {
      url: "https://inbrief.click/design-and-marketing",
      lastModified: new Date(),
    },
    {
      url: "https://inbrief.click/marketing-and-campaigns",
      lastModified: new Date(),
    },
    {
      url: "https://inbrief.click/contact-us",
      lastModified: new Date(),
    },
  ]
}
