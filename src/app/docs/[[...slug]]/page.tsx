import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { DocsContent, getDocsPage } from "@/components/docs/DocsContent";
import { DocsLayout } from "@/components/docs/DocsLayout";
export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> { const { slug = [] } = await params; const page = getDocsPage(slug.join("/")); return { title: page.title, description: page.description }; }
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) { const { slug = [] } = await params; const path = slug.join("/"); const page = getDocsPage(path); return <><Navbar page="docs" /><DocsLayout slug={path} {...page}><DocsContent path={path} /></DocsLayout><Footer /></>; }
