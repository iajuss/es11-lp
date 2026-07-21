import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { AnalyticsEvents } from "./components/AnalyticsEvents";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";
  const title = "Felipe Soares | Estratégias para Investidores | ES11 Capital";
  const description = "Conheça Felipe Soares, sócio e consultor da ES11 Capital. Estratégias patrimoniais para investidores, empresários e famílias.";

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title,
    description,
    alternates: { canonical: "/" },
    robots: { index: true, follow: true },
    icons: { icon: "/es11-logo.png" },
    openGraph: { title, description, type: "website", images: [{ url: "/og-whatsapp-soft.png?v=20260721-4", width: 1200, height: 1200, type: "image/png", alt: "Felipe Soares | ES11 Capital" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og-whatsapp-soft.png?v=20260721-4"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><AnalyticsEvents />{children}</body></html>;
}
