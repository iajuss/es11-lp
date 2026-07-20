import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { AnalyticsEvents } from "./components/AnalyticsEvents";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";
  const title = "Felipe Soares | EstratÃ©gias para Investidores | ES11 Capital";
  const description = "ConheÃ§a Felipe Soares, sÃ³cio e consultor da ES11 Capital. EstratÃ©gias patrimoniais para investidores, empresÃ¡rios e famÃ­lias.";

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title,
    description,
    alternates: { canonical: "/consultores/felipe-soares" },
    robots: { index: true, follow: true },
    icons: { icon: "/es11-logo.png" },
    openGraph: { title, description, type: "website", images: [{ url: "/og.png", width: 1680, height: 945, alt: "Felipe Soares - EstratÃ©gias patrimoniais com clareza" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og-share.jpg?v=20260720-2"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><AnalyticsEvents />{children}</body></html>;
}


