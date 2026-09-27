import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { trackInquiryEvent } from "@/lib/analytics-events";

export const googleAnalyticsMeasurementId =
  import.meta.env.VITE_GA_MEASUREMENT_ID || "G-2N8THH1T8V";

export function Analytics() {
  const pagePath = useRouterState({
    select: (state) => `${state.location.pathname}${state.location.searchStr}`,
  });
  const isInitialPage = useRef(true);

  useEffect(() => {
    if (isInitialPage.current) {
      isInitialPage.current = false;
      return;
    }

    if (!googleAnalyticsMeasurementId || !window.gtag) return;

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath,
    });
  }, [pagePath]);

  useEffect(() => {
    const trackContactClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";

      if (/^https:\/\/wa\.me\//i.test(href)) {
        trackInquiryEvent("whatsapp_click");
      } else if (/^mailto:/i.test(href)) {
        trackInquiryEvent("email_link_click");
      }
    };

    document.addEventListener("click", trackContactClick);
    return () => document.removeEventListener("click", trackContactClick);
  }, []);

  return null;
}
