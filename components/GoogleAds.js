"use client";

import { useEffect } from "react";

export default function GoogleAds() {
  useEffect(() => {
    function trackWhatsAppClick(event) {
      const link = event.target.closest("a[href*='wa.me']");

      if (!link || typeof window.gtag !== "function") {
        return;
      }

      const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
      const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

      if (!conversionId || !conversionLabel) {
        return;
      }

      window.gtag("event", "conversion", {
        send_to: `${conversionId}/${conversionLabel}`,
        event_callback: () => window.open(link.href, "_blank", "noopener,noreferrer"),
      });

      event.preventDefault();
    }

    document.addEventListener("click", trackWhatsAppClick);
    return () => document.removeEventListener("click", trackWhatsAppClick);
  }, []);

  return null;
}