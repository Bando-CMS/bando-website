import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageContent } from "@/components/PageContent";

import { communityMarkup } from "@/content/en/community";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the Bando CMS community, follow the development, and help build the future of the project.",
  openGraph: {
    title: "Community | Bando",
    description:
      "Join the community and help build Bando CMS in public.",
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