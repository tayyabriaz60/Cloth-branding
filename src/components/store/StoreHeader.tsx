import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { STORE, CATEGORIES } from "@/lib/storeConfig";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export function StoreHeader() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-store">
        <div className="flex items-center justify-between h-16 md:h-[4.5rem] gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src={STORE.logo} alt={`${STORE.name} logo`} className="h-9 w-9 rounded-full object-cover" />
            <div className="leading-tight">
              <span className="font-serif text-lg font-semibold text-foreground">{STORE.name}</span>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Ethnic Wear
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {CATEGORIES.filter((c) => c.slug !== "all").map((cat) => (
              <Link
                key={cat.slug}
                to={`/shop?category=${cat.slug}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {cat.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/shop"
              className="p-2.5 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Search shop"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link
              to="/cart"
              className="relative p-2.5 rounded-full hover:bg-secondary transition-colors"
              aria-label={`Cart, ${itemCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              className="lg:hidden p-2.5 rounded-full hover:bg-secondary"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border pt-3 grid grid-cols-2 gap-2 animate-fade-in">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={cat.slug === "all" ? "/shop" : `/shop?category=${cat.slug}`}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "text-sm py-2.5 px-3 rounded-lg text-center",
                  "bg-secondary/50 hover:bg-secondary text-foreground"
                )}
              >
                {cat.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
