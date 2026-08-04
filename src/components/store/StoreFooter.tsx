import { Link } from "react-router-dom";
import { STORE, TRUST_SIGNALS, CATEGORIES, formatPrice } from "@/lib/storeConfig";

export function StoreFooter() {
  return (
    <footer className="bg-secondary/40 border-t border-border mt-16">
      <div className="container-store py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={STORE.logo} alt="" className="h-8 w-8 rounded-full" />
              <span className="font-serif text-lg font-semibold">{STORE.name}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{STORE.description}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Shop</h4>
            <ul className="space-y-2">
              {CATEGORIES.filter((c) => c.slug !== "all").map((c) => (
                <li key={c.slug}>
                  <Link to={`/shop?category=${c.slug}`} className="text-sm text-muted-foreground hover:text-primary">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Policies*</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Shipping: Free over {formatPrice(5000)}</li>
              <li>Returns: 7 days*</li>
              <li>Payment: Demo mode</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Contact</h4>
            <p className="text-sm text-muted-foreground">hello@atoz-fashion.demo</p>
            <p className="text-sm text-muted-foreground mt-1">+92 300 0000000</p>
          </div>
        </div>
        <p className="text-[11px] text-muted-foreground/70 mt-8 pt-6 border-t border-border">
          * Placeholder policies for demo. {STORE.demoNote}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          © {new Date().getFullYear()} {STORE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="container-store py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {TRUST_SIGNALS.map((signal) => (
          <div key={signal.title} className="text-center px-2">
            <p className="text-sm font-semibold text-foreground">{signal.title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {signal.subtitle}
              {signal.placeholder && " (demo)"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
