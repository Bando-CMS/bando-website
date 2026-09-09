import Link from "next/link";

type BrandProps = {
  href?: string;
  ariaLabel?: string;
};

export function Brand({
  href = "/",
  ariaLabel = "Bando CMS — página inicial",
}: BrandProps) {
  return (
    <Link
      href={href}
      className="brand"
      aria-label={ariaLabel}
    >
      <svg className="brand-mark" viewBox="0 0 22 22" aria-hidden="true">
        <rect x="0" y="14" width="22" height="4" rx="1" />
        <rect x="0" y="8" width="16" height="4" rx="1" />
        <rect x="0" y="2" width="10" height="4" rx="1" />
      </svg>
      Bando
    </Link>
  );
}