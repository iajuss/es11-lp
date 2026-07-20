import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felipe Soares | ES11 Capital",
  description: "Estratégias patrimoniais personalizadas para pessoas e empresas crescerem com inteligência e visão de longo prazo.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
