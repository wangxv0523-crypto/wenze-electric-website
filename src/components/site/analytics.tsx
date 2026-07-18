import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function Analytics() {
  const pagePath = useRouterState({
    select: (state) => `${state.location.pathname}${state.location.search}`,
  });

  useEffect(() => {
    if (!measurementId || typeof document === "undefined") return;

    if (!document.querySelector(`script[data-ga4="${measurementId}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.dataset.ga4 = measurementId;
      document.head.appendChild(script);
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer.push(args));
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { send_page_view: false });
  }, []);

  useEffect(() => {
    if (!measurementId || !window.gtag) return;

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath,
    });
  }, [pagePath]);

  return null;
}
