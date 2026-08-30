import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageContent } from "@/components/PageContent";

import { communityMarkup } from "@/content/community";

export const metadata: Metadata = {
  title: "Comunidade",
  description:
    "Junta-te à comunidade do Bando CMS, acompanha o desenvolvimento e ajuda a construir o futuro do projeto.",
  openGraph: {
    title: "Comunidade | Bando",
    description:
      "Junta-te à comunidade e ajuda a construir o Bando CMS em público.",
  },
};

export default function CommunityPage() {
  return (
    <>
      <Navbar page="community" />
      <PageContent html={communityMarkup} />
      <Footer />
    </>
  );
}