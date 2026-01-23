import type { Metadata } from "next";
import RootLayoutClient from "./RootLayoutClient";
import { Work_Sans } from "next/font/google";

import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { PreLoader } from "@/components/Preloader";


export const metadata: Metadata = {
  metadataBase: new URL("https://luwydev.com"),
  title: "Luwy Dyro",
  description:
    "Luwy Dyro - Developer web Front End, UX Developer, E-commerce, SEO",
  keywords:
    "luwydev, Luwy, Luwy Dyro, Desarrollador web, frontend, Ux developer, diseñador web",
  authors: [{ name: "Luwy Dyro" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo_LD.svg",
  },
  verification: {
    google: "nE2v_O-ZanGkO0SyK6Fxofu2A8moFSH_Yw7gl0F0sw0",
  },
  openGraph: {
    title: "Luwy Dyro | Web Developer",
    description:
      "Luwy Dyro - Developer web Front End, UX Developer, E-commerce, SEO",
    url: "https://luwydev.com",
    siteName: "Luwy Dyro",
    images: [
      {
        url: "/logo_luwydyro_contorno.svg",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
};
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#007aff" },
    { media: "(prefers-color-scheme: dark)", color: "#050f25" },
  ],
};
const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="es">
      <body className={`${worksans.className} antialiased`}>
        <RootLayoutClient>
          <PreLoader />
          <div className="h-dvh bg-[#010825]">
          {children}
          </div>
        </RootLayoutClient>
      </body>
      <GoogleAnalytics gaId="G-6J3DM22CMQ" />
    </html>
  );
}
