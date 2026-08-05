import { Link } from "react-router-dom";
import { Truck, RefreshCw, ShieldCheck, Gem } from "lucide-react";
import { STORE, TRUST_SIGNALS, CATEGORIES, formatPrice } from "@/lib/storeConfig";

const TRUST_ICONS = [Truck, RefreshCw, ShieldCheck, Gem];

export function StoreFooter() {
  return (
    <footer className="bg-[hsl(var(--wine-dark))] text-white mt-12 md:mt-16">
      <div className="container-store py-10 md:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={STORE.logo} alt="" className="h-10 w-10 object-contain shrink-0" />
              <span className="font-serif text-2xl">{STORE.name}</span>
            </div>
            <p className="text-sm text-white/65 leading-relaxed max-w-xs">{STORE.description}</p>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/90 mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {CATEGORIES.filter((c) => c.slug !== "all").map((c) => (
                <li key={c.slug}>
                  <Link to={`/shop?category=${c.slug}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/90 mb-4">Policies*</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Free shipping over {formatPrice(5000)}</li>
              <li>7-day returns*</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/90 mb-4">Contact</h4>
            <p className="text-sm text-white/60">hello@atoz-fashion.demo</p>
            <p className="text-sm text-white/60 mt-1.5">+92 300 0000000</p>
          </div>
        </div>
        <p className="text-[11px] text-white/40 mt-8 pt-6 border-t border-white/10">
          © {new Date().getFullYear()} {STORE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-border/80 bg-white">
      <div className="container-store py-8 md:py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {TRUST_SIGNALS.map((signal, i) => {
          const Icon = TRUST_ICONS[i] ?? Gem;
          return (
            <div key={signal.title} className="flex flex-col items-center text-center px-2">
              <Icon className="w-5 h-5 text-accent mb-2.5" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-foreground">{signal.title}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {signal.subtitle}
                {signal.placeholder && "*"}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
