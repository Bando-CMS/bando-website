import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageContent } from "@/components/PageContent";
import { roadmapMarkup } from "@/content/roadmap";

export const metadata: Metadata = {
  title: "Roadmap e desenvolvimento público",
  description: "Acompanha o roadmap público do Bando CMS, desde a fundação até ao primeiro release.",
  openGraph: { title: "Roadmap e desenvolvimento público | Bando", description: "Acompanha a construção do Bando CMS em público." }
};

export default function RoadmapPage() {
  return <><Navbar page="roadmap" /><PageContent html={roadmapMarkup} /><Footer roadmap /></>;
}
