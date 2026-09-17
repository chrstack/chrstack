import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="chrstack — início">
      <Image src="/brand/symbol.png" alt="" width={34} height={34} priority />
      {!compact && <span>chrstack<span className="dot">.</span></span>}
    </Link>
  );
}
