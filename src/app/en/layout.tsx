import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Bando — Open source, TypeScript-first headless CMS",
    template: "%s | Bando",
  },
  description:
    "Open source headless CMS for developers. Define your content in TypeScript and generate APIs, validation, types, and Studio.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bando",
    title: "Bando — Open source, TypeScript-first headless CMS",
    description: "Define your content in TypeScript.",
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}