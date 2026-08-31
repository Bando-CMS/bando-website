import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import { LanguageHtml } from "@/components/LanguageHtml";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={spaceGrotesk.className}>
        <LanguageHtml />
        {children}
      </body>
    </html>
  );
}