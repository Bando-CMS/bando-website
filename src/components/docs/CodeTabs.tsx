"use client";

import { useId, useState } from "react";
import { CodeBlock } from "./CodeBlock";

type CodeTab = {
  label: string;
  code: string;
  language?: string;
};

export function CodeTabs({ tabs }: { tabs: CodeTab[] }) {
  const [selected, setSelected] = useState(0);
  const id = useId();
  const active = tabs[selected];

  return (
    <div className="docs-tabs">
      <CodeBlock
        code={active.code}
        language={active.language}
        filename={active.label}
        panelId={`${id}-panel`}
        header={
          <div
            className="docs-tablist"
            role="tablist"
            aria-label="Ficheiros do exemplo"
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.label}
                id={`${id}-tab-${index}`}
                role="tab"
                aria-selected={index === selected}
                aria-controls={`${id}-panel`}
                tabIndex={index === selected ? 0 : -1}
                onClick={() => setSelected(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight") {
                    setSelected((index + 1) % tabs.length);
                  }

                  if (event.key === "ArrowLeft") {
                    setSelected((index - 1 + tabs.length) % tabs.length);
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        }
      />
    </div>
  );
}
