"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function LanguageHtml() {
  const pathname = usePathname();

  useEffect(() => {
    const isEnglish = pathname.startsWith("/en");

    document.documentElement.lang = isEnglish ? "en" : "pt-PT";
  }, [pathname]);

  return null;
}