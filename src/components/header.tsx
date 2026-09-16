"use client";

import { Menu, X, Github } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "./brand-logo";

const nav = [
  ["Início", "/#inicio"], ["Projetos", "/projetos"], ["Sobre", "/#sobre"],
  ["Stack", "/#stack"], ["Contato", "/#contato"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container nav-wrap">
        <BrandLogo />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="github-link" href="https://github.com/chrstack" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-nav ${open ? "open" : ""}`} aria-label="Navegação mobile">
        {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}<span>↗</span></a>)}
      </nav>
    </header>
  );
}
