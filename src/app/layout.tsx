import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Bando — CMS headless, open source e TypeScript-first",
    template: "%s | Bando",
  },
  description:
    "CMS headless open source para developers. Define conteúdo em TypeScript e gera API, validação, tipos e Studio.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Bando",
    title: "Bando — CMS headless, open source e TypeScript-first",
    description: "Define o teu conteúdo em TypeScript.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Bando CMS",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}