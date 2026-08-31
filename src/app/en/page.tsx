import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageContent } from "@/components/PageContent";
import { homeMarkup } from "@/content/en/home";

export default function HomePage() {
  return <><Navbar page="home" /><PageContent html={homeMarkup} /><Footer /></>;
}
