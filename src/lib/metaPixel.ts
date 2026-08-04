type FbqCommand = "init" | "track" | "trackCustom";
type StandardEvent =
  | "PageView"
  | "Lead"
  | "InitiateCheckout"
  | "Purchase"
  | "CompleteRegistration"
  | "Contact"
  | "Schedule"
  | "ViewContent";

declare global {
  interface Window {
    fbq: (
      command: FbqCommand,
      event: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq?: unknown;
  }
}

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

export function initPixel(): void {
  if (typeof window === "undefined" || !PIXEL_ID?.trim()) return;
  if (typeof window.fbq === "function") return;

  const inject = document.createElement("script");
  inject.async = true;
  inject.src = "https://connect.facebook.net/en_US/fbevents.js";
  inject.onload = () => {
    window.fbq("init", PIXEL_ID);
  };

  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode?.insertBefore(inject, firstScript);

  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      (fbq as unknown as { queue: unknown[] }).queue.push(args);
    } as unknown as Window["fbq"] & { queue: unknown[]; loaded: boolean; version: string };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;
  }
}

export function trackEvent(
  event: StandardEvent | string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}

export function trackPageView(): void {
  trackEvent("PageView");
}

export function trackLead(params?: Record<string, unknown>): void {
  trackEvent("Lead", params);
}

export function trackInitiateCheckout(params?: Record<string, unknown>): void {
  trackEvent("InitiateCheckout", params);
}
