import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/metaPixel";

/**
 * Fires a Meta Pixel PageView event on every route change (including initial load).
 * Must be used inside a React Router context (<BrowserRouter>).
 */
export function usePageViewTracking(): void {
  const location = useLocation();

  useEffect(() => {
    trackPageView();
  }, [location.pathname]);
}