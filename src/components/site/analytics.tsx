import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

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

  return null;
}
