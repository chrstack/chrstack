import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://chrstack.vercel.app"),
  title: { default: "chrstack — Christian Lima | Desenvolvedor", template: "%s — chrstack" },
  description: "Projetos digitais, desenvolvimento web e tecnologia por Christian Lima.",
  openGraph: { title: "chrstack — Christian Lima | Desenvolvedor", description: "Projetos digitais, desenvolvimento web e tecnologia por Christian Lima.", type: "website", locale: "pt_BR", images: [{ url: "/og.png" }] },
  twitter: { card: "summary_large_image", title: "chrstack — Christian Lima | Desenvolvedor", description: "Ideias que viram produtos.", images: ["/og.png"] },
  icons: { icon: "/brand/favicon.png", apple: "/brand/symbol.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={inter.className}><a href="#conteudo" className="skip-link">Pular para o conteúdo</a><Header />{children}<Footer /><Analytics /></body></html>;
}
