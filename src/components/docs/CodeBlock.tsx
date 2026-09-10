"use client";

import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { codeToHtml } from "shiki";

type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
  header?: ReactNode;
  panelId?: string;
};

const languageMap: Record<string, string> = {
  ts: "typescript",
  typescript: "typescript",
  tsx: "tsx",
  js: "javascript",
  javascript: "javascript",
  jsx: "jsx",
  json: "json",
  bash: "bash",
  sh: "shellscript",
  shell: "shellscript",
  css: "css",
  html: "html",
  sql: "sql",
  md: "markdown",
};

function getHighlightedLines(html: string) {
  const document = new DOMParser().parseFromString(
    html,
    "text/html",
  );

  return Array.from(
    document.querySelectorAll("pre code .line"),
    (line) => line.innerHTML,
  );
}

export function FileLabel({ path }: { path: string }) {
  return (
    <div className="docs-file-label">
      <span title={path}>{path}</span>
    </div>
  );
}

type FileCodeBlockProps = Omit<CodeBlockProps, "filename"> & {
  path: string;
};

export function FileCodeBlock({
  path,
  ...props
}: FileCodeBlockProps) {
  return <CodeBlock {...props} filename={path} />;
}

export function CodeBlock({
  code,
  language = "ts",
  filename,
  header,
  panelId,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedLines, setHighlightedLines] =
    useState<string[] | null>(null);

  const source = code;

  const sourceLines = useMemo(
    () => source.split("\n"),
    [source],
  );

  const lineCount = sourceLines.length;

  const languageLabel = language.toUpperCase();

  useEffect(() => {
    let cancelled = false;

    setHighlightedLines(null);

    async function highlight() {
      try {
        const result = await codeToHtml(source, {
          lang:
            languageMap[language.toLowerCase()] ??
            language,
          theme: "github-dark",
        });

        if (cancelled) {
          return;
        }

        const lines = getHighlightedLines(result);

        setHighlightedLines(
          lines.length === lineCount ? lines : null,
        );
      } catch {
        if (!cancelled) {
          setHighlightedLines(null);
        }
      }
    }

    highlight();

    return () => {
      cancelled = true;
    };
  }, [source, language, lineCount]);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setCopied(false);
    }, 1600);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(source);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const copyButton = (
    <button
      type="button"
      onClick={copy}
      aria-label={
        copied
          ? "Código copiado"
          : "Copiar código"
      }
      className={
        copied
          ? "docs-copy-button is-copied"
          : "docs-copy-button"
      }
    >
      {copied ? "Copiado" : "Copiar"}
    </button>
  );

  return (
    <div className="docs-code-block">
      {header ? (
        <div className="docs-code-header-wrapper">
          <div className="docs-code-header">
            {header}
          </div>

          <div className="docs-code-header-actions">
            {copyButton}
          </div>
        </div>
      ) : (
        <div className="docs-code-toolbar">
          <div className="docs-code-file">
            {filename ? (
              <span title={filename}>{filename}</span>
            ) : (
              <span>{languageLabel}</span>
            )}
          </div>

          <div className="docs-code-actions">
            {copyButton}
          </div>
        </div>
      )}

      <div
        className="docs-code-body"
        id={panelId}
        role={panelId ? "tabpanel" : undefined}
      >
        <div className="docs-code-content">
          {sourceLines.map((line, index) => (
            <div
              className="docs-code-line"
              key={index}
            >
              <span
                className="docs-code-line-number"
                aria-hidden="true"
              >
                {index + 1}
              </span>

              <span className="docs-code-line-source">
                {highlightedLines ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        highlightedLines[index],
                    }}
                  />
                ) : (
                  line || "\u200b"
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
