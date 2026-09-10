"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Brand } from "@/components/Brand";

type NavbarProps = {
  page: "home" | "roadmap" | "community" | "docs";
};

type NavLink = readonly [label: string, href: string];

export function Navbar({ page }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isEnglish = pathname.startsWith("/en");
  const prefix = isEnglish ? "/en" : "";

  const links: NavLink[] =
    page === "home"
      ? isEnglish
        ? [
            ["Features", `${prefix}/#features`],
            ["Code", `${prefix}/#code`],
            ["Community", `${prefix}/community`],
          ]
        : [
            ["Recursos", `${prefix}/#recursos`],
            ["Código", `${prefix}/#codigo`],
            ["Comunidade", `${prefix}/community`],
          ]
      : page === "roadmap"
        ? isEnglish
          ? [
              ["Features", `${prefix}/#features`],
              ["Architecture", "#architecture"],
              ["Roadmap", "#roadmap"],
              ["Open source", "#open-source"],
            ]
          : [
              ["Recursos", `${prefix}/#recursos`],
              ["Arquitetura", "#arquitetura"],
              ["Roadmap", "#roadmap"],
              ["Open source", "#open-source"],
            ]
        : page === "community"
          ? isEnglish
            ? [
                ["Community", "#community"],
                ["GitHub", "https://github.com/Bando-CMS"],
              ]
            : [
                ["Comunidade", "#comunidade"],
                ["GitHub", "https://github.com/Bando-CMS"],
              ]
          : [];

  const basePath = isEnglish
    ? pathname.replace(/^\/en/, "") || "/"
    : pathname;

  const ctaHref =
    page === "home"
      ? `${prefix}/docs`
      : page === "roadmap"
        ? "/docs"
        : page === "community"
          ? "https://github.com/Bando-CMS/bando-cms"
          : `${prefix}/community`;

  const ctaLabel =
    page === "community"
      ? isEnglish
        ? "Contribute"
        : "Contribuir"
      : page === "docs"
        ? isEnglish
          ? "Community"
          : "Comunidade"
        : page === "home"
          ? isEnglish
            ? "Get started"
            : "Começar"
          : "Documentação";

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        langRef.current &&
        !langRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setLangOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  function renderNavLink(label: string, href: string) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          {label}
        </a>
      );
    }

    return (
      <Link
        key={label}
        href={href}
        onClick={() => setOpen(false)}
      >
        {label}
      </Link>
    );
  }

  return (
    <header className="nav">
      <div className="wrap">
        <Brand
          href={isEnglish ? "/en" : "/"}
          ariaLabel={
            isEnglish
              ? "Bando — home page"
              : "Bando — página inicial"
          }
        />

        <nav
          className={`nav-links${open ? " is-open" : ""}`}
          aria-label={
            isEnglish
              ? "Main navigation"
              : "Navegação principal"
          }
        >
          {links.map(([label, href]) =>
            renderNavLink(label, href)
          )}
        </nav>

        <div className="nav-actions">
          <div
            className="language-switcher"
            ref={langRef}
          >
            <button
              type="button"
              className="language-trigger"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={
                isEnglish
                  ? "Select language"
                  : "Selecionar idioma"
              }
              onClick={() =>
                setLangOpen((v) => !v)
              }
            >
              <span className="language-globe">
                <GlobeIcon />
              </span>

              <span>
                {isEnglish ? "EN" : "PT"}
              </span>

              <span
                className={`language-chevron${
                  langOpen ? " is-open" : ""
                }`}
              >
                <ChevronIcon />
              </span>
            </button>

            {langOpen && (
              <ul
                className="language-menu"
                role="listbox"
              >
                <li
                  role="option"
                  aria-selected={!isEnglish}
                >
                  <Link
                    href={
                      basePath === "/"
                        ? "/"
                        : basePath
                    }
                    onClick={() => {
                      setLangOpen(false);
                      setOpen(false);
                    }}
                    className={
                      !isEnglish
                        ? "is-active"
                        : ""
                    }
                  >
                    <span className="lang-code">
                      PT
                    </span>
                    Português
                  </Link>
                </li>

                <li
                  role="option"
                  aria-selected={isEnglish}
                >
                  <Link
                    href={`/en${
                      basePath === "/"
                        ? ""
                        : basePath
                    }`}
                    onClick={() => {
                      setLangOpen(false);
                      setOpen(false);
                    }}
                    className={
                      isEnglish
                        ? "is-active"
                        : ""
                    }
                  >
                    <span className="lang-code">
                      EN
                    </span>
                    English
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <a
            className="gh-badge"
            href="https://github.com/Bando-CMS"
            target="_blank"
            rel="noreferrer"
            aria-label={
              isEnglish
                ? "View Bando CMS on GitHub"
                : "Ver Bando CMS no GitHub"
            }
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>

          {ctaHref.startsWith("http") ? (
            <a
              className="btn btn-primary"
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
            >
              {ctaLabel}
            </a>
          ) : (
            <Link
              className="btn btn-primary"
              href={ctaHref}
              onClick={() => setOpen(false)}
            >
              {ctaLabel}
            </Link>
          )}
        </div>

        <button
          className="nav-toggle"
          aria-label={
            isEnglish
              ? "Open menu"
              : "Abrir menu"
          }
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M1.5 8h13M8 1.5c1.8 1.9 2.8 4.1 2.8 6.5S9.8 12.6 8 14.5C6.2 12.6 5.2 10.4 5.2 8S6.2 3.4 8 1.5z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5L6 8l3.5-3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}