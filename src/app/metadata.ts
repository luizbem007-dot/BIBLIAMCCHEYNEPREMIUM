import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Bíblia McCheyne",
    "Bíblia Devocional",
    "Robert Murray McCheyne",
    "Plano de Leitura Bíblica",
    "Devocional Diário",
    "Leitura Bíblica Anual",
    "Marcas Editora",
    "Bíblia Cristã",
    "Estudo Bíblico",
    "Fé Cristã",
  ],
  authors: [
    {
      name: "Marcas Editora",
      url: "https://marcaseditora.com.br",
    },
  ],
  creator: "Marcas Editora",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/triplopremium1.webp",
        width: 1080,
        height: 510,
        alt: "Bíblia Devocional McCheyne — Marcas Editora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/triplopremium1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
