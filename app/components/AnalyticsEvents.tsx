"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global { interface Window { dataLayer?: Array<Record<string, unknown>> } }

const track = (event: string, values: Record<string, unknown>) => {
  const payload = { event, consultant_id: "felipe-soares", ...values };
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
  window.dispatchEvent(new CustomEvent("es11:analytics", { detail: payload }));
};

export function AnalyticsEvents() {
  const pathname = usePathname();
  useEffect(() => { track(pathname.includes("/artigos/") ? "article_view" : "consultant_page_view", { page_type: pathname.includes("/artigos/") ? "article" : "consultant" }); }, [pathname]);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest("a"); if (!link) return;
      const href = link.href;
      if (href.includes("wa.me")) track(link.dataset.articleCta ? "article_cta_click" : "whatsapp_click", { cta_position: link.dataset.position ?? "page" });
      else if (href.includes("instagram.com")) track("instagram_click", { cta_position: link.dataset.position ?? "footer" });
      else if (href.includes("es11capital.com.br")) track("es11_site_click", { cta_position: link.dataset.position ?? "page" });
    };
    document.addEventListener("click", handleClick); return () => document.removeEventListener("click", handleClick);
  }, []);
  return null;
}
