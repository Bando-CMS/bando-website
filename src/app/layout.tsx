import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageHtml } from "@/components/LanguageHtml";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Bando CMS v1.0.0 — CMS headless open source e TypeScript-first",
    template: "%s | Bando",
  },
  description:
    "Bando CMS é um CMS headless open source, self-hosted e TypeScript-first para developers. Collections, PostgreSQL, API REST e Studio num só runtime.",
  openGraph: {
    title: "Bando CMS v1.0.0 — Open-source, self-hosted headless CMS",
    description:
      "Build your content backend without building a CMS from scratch.",
  },
  twitter: {
    card: "summary",
    title: "Bando CMS v1.0.0",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>
        <LanguageHtml />
        {children}
      </body>
    </html>
  );
}