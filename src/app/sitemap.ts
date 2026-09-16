import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const base="https://chrstack.vercel.app"; return [{url:base,priority:1},{url:`${base}/projetos`,priority:.8},{url:`${base}/artigos`,priority:.8},...projects.map(({slug})=>({url:`${base}/projetos/${slug}`,priority:.7})),...articles.map(({slug})=>({url:`${base}/artigos/${slug}`,priority:.7}))]; }
