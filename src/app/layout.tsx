import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { siteContent } from "@/content/site-content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.meta.siteUrl),
  title: {
    default: siteContent.meta.title,
    template: "%s — TapasNGS",
  },
  description: siteContent.meta.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteContent.meta.siteUrl,
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    siteName: "TapasNGS",
    locale: siteContent.meta.locale,
    images: [
      {
        url: siteContent.meta.ogImage,
        width: 1200,
        height: 630,
        alt: "TapasNGS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [siteContent.meta.ogImage],
    site: siteContent.meta.twitter,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} grain antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TapasNGS",
              url: siteContent.meta.siteUrl,
              logo: `${siteContent.meta.siteUrl}${siteContent.meta.ogImage}`,
              sameAs: siteContent.meta.twitter
                ? [`https://twitter.com/${siteContent.meta.twitter.replace("@", "")}`]
                : [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TapasNGS",
              url: siteContent.meta.siteUrl,
            }),
          }}
        />
        <Nav />
        <main className="min-h-screen pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
