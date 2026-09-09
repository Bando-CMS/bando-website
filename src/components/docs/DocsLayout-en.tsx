import Link from "next/link";

import type { ReactNode } from "react";

type DocsLink = readonly [string, string];
type DocsSection = readonly [string, readonly DocsLink[]];

export const docsNavigation: readonly DocsSection[] = [
  [
    "Getting started",
    [
      ["Introduction", ""],
      ["Installation", "getting-started"],
      ["Configuration", "configuration"],
    ],
  ],
  [
    "Concepts",
    [
      ["Collections and fields", "concepts/collections"],
      ["Documents and relations", "concepts/documents"],
    ],
  ],
  [
    "Using Bando",
    [
      ["Studio", "studio"],
      ["Query content", "using-bando/querying"],
    ],
  ],
  [
    "Client",
    [
      ["Overview", "client"],
      ["findMany", "client/find-many"],
      ["Mutations", "client/mutations"],
    ],
  ],
  [
    "REST API",
    [
      ["Authentication", "api/authentication"],
      ["Documents API", "api/documents"],
    ],
  ],
  [
    "Frameworks",
    [
      ["Next.js", "frameworks/nextjs"],
      ["React and REST", "frameworks/react"],
    ],
  ],
  [
    "Reference",
    [
      ["Environment variables", "reference/environment"],
      ["Deployment", "reference/deployment"],
    ],
  ],
];

export function DocsLayout({
  slug,
  title,
  description,
  children,
}: {
  slug: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  const flat = docsNavigation.flatMap(([, links]) => links);
  const i = flat.findIndex(([, href]) => href === slug);
  const prev = flat[i - 1];
  const next = flat[i + 1];

  return (
    <main className="docs-shell">
      <aside
        className="docs-sidebar"
        aria-label="Documentation navigation"
      >
        <Link className="docs-sidebar-brand" href="/docs">
          Bando <span>docs</span>
        </Link>

        <nav className="docs-sidebar-nav">
          {docsNavigation.map(([group, links]) => (
            <section className="docs-sidebar-group" key={group}>
              <h2 className="docs-sidebar-heading">{group}</h2>

              <ul className="docs-sidebar-list">
                {links.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href ? `/en/docs/${href}` : "/docs"}
                      className={
                        href === slug
                          ? "docs-sidebar-link is-active"
                          : "docs-sidebar-link"
                      }
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </aside>

      <article className="docs-article">
        <nav className="docs-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/docs">Documentation</Link>
          <span>/</span>
          <span>{title}</span>
        </nav>

        <header className="docs-header">
          <p>Bando Documentation</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </header>

        {children}

        <nav
          className="docs-prev-next"
          aria-label="Page navigation"
        >
          {prev ? (
            <Link href={prev[1] ? `/en/docs/${prev[1]}` : "/en/docs"}>
              ← {prev[0]}
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link href={next[1] ? `/en/docs/${next[1]}` : "/en/docs"}>
              {next[0]} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </main>
  );
}