import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Bando CMS v1.0.0 — Open-source, TypeScript-first headless CMS",
    template: "%s | Bando",
  },
  description:
    "Bando CMS is an open-source, self-hosted, TypeScript-first headless CMS. Collections, PostgreSQL, REST API, and Studio in one runtime.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bando",
    title: "Bando CMS v1.0.0 — Open-source, self-hosted headless CMS",
    description: "Build your content backend without building a CMS from scratch.",
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
