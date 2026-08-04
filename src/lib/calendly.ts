const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

function getCalendlyUrl(): string | undefined {
  const url = CALENDLY_URL?.trim();
  if (!url || url.includes("your_calendly_url_here")) return undefined;
  return url;
}

function loadCalendlyAssets(): void {
  if (typeof document === "undefined") return;

  if (!document.querySelector("#calendly-script")) {
    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }

  if (!document.querySelector("#calendly-style")) {
    const link = document.createElement("link");
    link.id = "calendly-style";
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }
}

export function openCalendlyPopup(): boolean {
  const url = getCalendlyUrl();
  if (!url || typeof window === "undefined") return false;

  loadCalendlyAssets();

  if (typeof window.Calendly?.initPopupWidget === "function") {
    window.Calendly.initPopupWidget({ url });
    return true;
  }

  const script = document.querySelector("#calendly-script");
  script?.addEventListener(
    "load",
    () => {
      window.Calendly?.initPopupWidget({ url });
    },
    { once: true }
  );

  return true;
}
