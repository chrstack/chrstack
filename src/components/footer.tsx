import { socials } from "@/data/site";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  return <footer className="footer"><div className="container footer-inner">
    <div><BrandLogo /><p>Ideias que viram produtos.</p></div>
    <div className="footer-socials">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>)}</div>
    <p className="copyright">© {new Date().getFullYear()} chrstack.</p>
  </div></footer>;
}
