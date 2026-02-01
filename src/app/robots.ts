import { siteContent } from "@/content/site-content";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteContent.meta.siteUrl}/sitemap.xml`,
    host: siteContent.meta.siteUrl,
  };
}
