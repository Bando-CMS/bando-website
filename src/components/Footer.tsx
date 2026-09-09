"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "@/components/Brand";

export function Footer({ roadmap = false }: { roadmap?: boolean }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const prefix = isEnglish ? "/en" : "";

  const content = isEnglish
    ? {
        brand: roadmap
          ? "Open source, local-first headless CMS built for developers."
          : "Open source headless CMS built for developers who prefer defining content with code.",

        projectTitle: roadmap ? "Project" : "Product",

        roadmapLinks: [
          ["Features", `${prefix}/#features`],
          ["Architecture", "#architecture"],
          ["Roadmap", "#roadmap"],
          ["Open source", "#open-source"],
        ],

        productLinks: [
          ["Features", `${prefix}/#features`],
          ["Code", `${prefix}/#code`],
          ["How it works", `${prefix}/#how-it-works`],
        ],

        communityLinks: [
          ["GitHub", "https://github.com/Bando-CMS"],
          ["RFCs", `${prefix}/community`],
          ["Contribute", "https://github.com/Bando-CMS/bando-cms"],
        ],

        projectLinks: [
          ["Documentation", `${prefix}/docs`],
          ["MIT License", "https://github.com/Bando-CMS/bando-cms/blob/main/LICENSE"],
          ["Roadmap", `${prefix}/roadmap`],
        ],

        communityTitle: "Community",
        projectColumnTitle: roadmap ? "" : "Project",

        copyright: "© 2026 Bando. Open source under the MIT License.",
        builtWith: "Built with TypeScript & React.",
      }
    : {
        brand: roadmap
          ? "CMS headless open source, local-first e construído para developers."
          : "CMS headless open source, feito para developers que preferem definir conteúdo com código.",

        projectTitle: roadmap ? "Projeto" : "Produto",

        roadmapLinks: [
          ["Recursos", `${prefix}/#recursos`],
          ["Arquitetura", "#arquitetura"],
          ["Roadmap", "#roadmap"],
          ["Open source", "#open-source"],
        ],

        productLinks: [
          ["Recursos", `${prefix}/#recursos`],
          ["Código", `${prefix}/#codigo`],
          ["Como funciona", `${prefix}/#como-funciona`],
        ],

        communityLinks: [
          ["GitHub", "https://github.com/Bando-CMS"],
          ["RFCs", `${prefix}/community`],
          ["Contribuir", "https://github.com/Bando-CMS/bando-cms"],
        ],

        projectLinks: [
          ["Documentação", `${prefix}/docs`],
          [
            "Licença MIT",
            "https://github.com/Bando-CMS/bando-cms/blob/main/LICENSE",
          ],
          ["Roadmap", `${prefix}/roadmap`],
        ],

        communityTitle: "Comunidade",
        projectColumnTitle: roadmap ? "" : "Projeto",

        copyright: "© 2026 Bando CMS. Código aberto sob licença MIT.",
        builtWith: "Construído com TypeScript, React & PostgreSQL.",
      };

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>{content.brand}</p>
          </div>

          <FooterColumn
            title={content.projectTitle}
            links={roadmap ? content.roadmapLinks : content.productLinks}
          />

          <FooterColumn
            title={content.communityTitle}
            links={content.communityLinks}
          />

          <FooterColumn
            title={content.projectColumnTitle}
            links={roadmap ? [] : content.projectLinks}
          />
        </div>

        <div className="footer-bottom">
          <span>{content.copyright}</span>
          <span>{content.builtWith}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[][];
}) {
  if (!title && links.length === 0) {
    return null;
  }

  return (
    <div className="footer-col">
      <h4>{title}</h4>

      <ul>
        {links.map(([label, href]) => {
          const isExternal = href.startsWith("http");

          return (
            <li key={label}>
              {isExternal ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {label}
                </a>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
