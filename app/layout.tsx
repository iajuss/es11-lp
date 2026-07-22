import type { Metadata } from "next";
import "./globals.css";
import { AnalyticsEvents } from "./components/AnalyticsEvents";
import { absoluteUrl, siteUrl } from "./lib/site";

const title = "Felipe Soares | Estratégias para Investidores | ES11 Capital";
const description = "Conheça Felipe Soares, sócio e consultor da ES11 Capital. Estratégias patrimoniais para investidores, empresários e famílias.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/es11-logo.png" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    locale: "pt_BR",
    siteName: "Felipe Soares | ES11 Capital",
    images: [{ url: absoluteUrl("/og-whatsapp-soft.png?v=20260721-4"), width: 1200, height: 1200, type: "image/png", alt: "Felipe Soares | ES11 Capital" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/og-whatsapp-soft.png?v=20260721-4")] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><AnalyticsEvents />{children}</body></html>;
}
