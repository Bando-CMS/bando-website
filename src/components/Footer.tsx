import Link from "next/link";
import { Brand } from "@/components/Brand";

export function Footer({ roadmap = false }: { roadmap?: boolean }) {
  return <footer><div className="wrap"><div className="footer-grid">
    <div className="footer-brand"><Brand /><p>{roadmap ? "CMS headless open source, local-first e construído para developers." : "CMS headless open source, feito para developers que preferem definir conteúdo com código."}</p></div>
    <FooterColumn title={roadmap ? "Projeto" : "Produto"} links={roadmap ? [["Recursos", "/#recursos"], ["Arquitetura", "#arquitetura"], ["Roadmap", "#roadmap"], ["Open source", "#open-source"]] : [["Recursos", "/#recursos"], ["Código", "/#codigo"], ["Como funciona", "/#como-funciona"]]} />
    <FooterColumn title="Comunidade" links={roadmap ? [["GitHub", "https://github.com/Bando-CMS"], ["RFCs", "/community"], ["Contribuir", "https://github.com/Bando-CMS/bando-cms"]] : [["GitHub", "https://github.com/Bando-CMS"], ["RFCs", "/community"], ["Contribuir", "https://github.com/Bando-CMS/bando-cms"]]} />
    <FooterColumn title={roadmap ? "" : "Projeto"} links={roadmap ? [] : [["Licença MIT", "https://github.com/Bando-CMS/bando-cms/blob/main/LICENSE"], ["Roadmap", "/roadmap"]]} />
  </div><div className="footer-bottom"><span>© 2026 Bando. Código aberto sob licença MIT.</span><span>Construído com TypeScript &amp; React.</span></div></div></footer>;
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return <div className="footer-col"><h4>{title}</h4><ul>{links.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul></div>;
}
