import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageContent } from "@/components/PageContent";

import { roadmapMarkup } from "@/content/en/roadmap";

export const metadata: Metadata = {
  title: "Roadmap & Public Development",
  description:
    "Follow the public roadmap of Bando CMS, from its foundation to the first release.",
  openGraph: {
    title: "Roadmap & Public Development | Bando",
    description:
      "Follow the development of Bando CMS as it is built in public.",
  },
};

export default function RoadmapPage() {
  return (
    <>
      <Navbar page="roadmap" />
      <PageContent html={roadmapMarkup} />
      <Footer roadmap />
    </>
  );
}