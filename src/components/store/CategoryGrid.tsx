import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CATEGORIES, STORE } from "@/lib/storeConfig";

export function CategoryGrid() {
  const items = CATEGORIES.filter((c) => c.slug !== "all");

  return (
    <section className="container-store py-12 md:py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">Collections</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">Shop by Category</h2>
        </div>
        <Link to="/shop" className="text-sm text-primary font-medium hidden sm:flex items-center gap-1 hover:gap-2 transition-all">
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {items.map((cat) => (
          <Link
            key={cat.slug}
            to={`/shop?category=${cat.slug}`}
            className="group rounded-xl border border-border bg-card p-4 md:p-5 text-center hover:border-primary/40 hover:shadow-soft transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-serif text-lg font-bold flex items-center justify-center mx-auto mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              {cat.label.charAt(0)}
            </div>
            <p className="text-xs md:text-sm font-medium text-foreground">{cat.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function DemoBanner() {
  return (
    <div className="bg-primary/10 border-b border-primary/20 text-center py-2 px-4">
      <p className="text-xs text-primary/90 font-medium">{STORE.demoNote}</p>
    </div>
  );
}
