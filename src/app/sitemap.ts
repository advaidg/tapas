import { siteContent } from "@/content/site-content";

export default function sitemap() {
  const baseUrl = siteContent.meta.siteUrl;
  const pages = [
    "",
    "/about",
    "/capabilities",
    "/proof",
    "/contact",
    "/privacy",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
