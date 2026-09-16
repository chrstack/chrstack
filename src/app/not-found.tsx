import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() { return <main id="conteudo" className="not-found"><div><span>404</span><h1>Essa página não<br/>virou produto<span className="dot">.</span></h1><p>O endereço pode ter mudado ou nunca ter existido.</p><Link href="/" className="button primary"><ArrowLeft size={18}/> Voltar para o início</Link></div></main>; }
