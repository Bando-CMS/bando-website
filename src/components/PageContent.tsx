"use client";

import { useEffect, useRef } from "react";

export function PageContent({ html }: { html: string }) {
  const content = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = content.current;
    if (!root) return;
    const onClick = async (event: MouseEvent) => {
      const target = event.target as Element;
      const tab = target.closest<HTMLButtonElement>(".tab");
      if (tab) {
        root.querySelectorAll(".tab").forEach((item) => item.setAttribute("aria-selected", "false"));
        root.querySelectorAll<HTMLElement>(".tabpanel").forEach((panel) => { panel.dataset.active = "false"; });
        tab.setAttribute("aria-selected", "true");
        const panel = root.querySelector<HTMLElement>(`.tabpanel[data-panel="${tab.dataset.tab}"]`);
        if (panel) panel.dataset.active = "true";
      }
      const copy = target.closest<HTMLButtonElement>(".copy-btn");
      if (copy?.dataset.copy) {
        await navigator.clipboard.writeText(copy.dataset.copy);
        const original = copy.innerHTML;
        copy.textContent = "✓";
        window.setTimeout(() => { copy.innerHTML = original; }, 1200);
      }
    };
    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, []);

  return <main ref={content} dangerouslySetInnerHTML={{ __html: html }} />;
}
