import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Menu,
  Search,
  Heart,
  User,
  Video,
  MessageCircle,
} from "lucide-react";
import { STORE, NAV_LINKS, CATEGORIES } from "@/lib/storeConfig";
import { useCart } from "@/context/CartContext";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const iconBtnClass =
  "relative flex items-center justify-center w-10 h-10 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200 shrink-0";

function NavLinkItem({ to, children, highlight }: { to: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        "nav-link-animated group relative inline-flex items-center h-10 px-1 text-sm transition-colors duration-200",
        highlight
          ? "font-bold text-[hsl(38_42%_58%)] hover:text-[hsl(38_42%_68%)]"
          : "text-white/85 hover:text-white"
      )}
    >
      {children}
      {!highlight && (
        <span className="absolute bottom-1.5 left-0 h-px w-0 bg-[hsl(38_42%_58%)] transition-all duration-300 ease-out group-hover:w-full" />
      )}
    </Link>
  );
}

function HeaderSearch({ className }: { className?: string }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/shop?q=${encodeURIComponent(q)}` : "/shop");
  };

  return (
    <form onSubmit={handleSubmit} className={cn("header-search", className)}>
      <Search className="w-4 h-4 text-white/50 shrink-0" strokeWidth={2} />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search ethnic wear..."
        aria-label="Search products"
      />
    </form>
  );
}

function MobileNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col mt-6">
      {CATEGORIES.map((cat) => (
        <Link
          key={cat.slug}
          to={cat.slug === "all" ? "/shop" : `/shop?category=${cat.slug}`}
          onClick={onNavigate}
          className="py-3.5 text-base text-foreground border-b border-border/60 hover:text-primary transition-colors"
        >
          {cat.label}
        </Link>
      ))}
      <Link
        to="/shop?sort=price-desc"
        onClick={onNavigate}
        className="py-3.5 text-base font-bold text-primary"
      >
        SALE
      </Link>
    </nav>
  );
}

export function StoreHeader() {
  const { itemCount } = useCart();
  const scrolled = useScrolled(8);
  const [sheetOpen, setSheetOpen] = useState(false);

  const demoToast = (feature: string) => {
    toast.info(`${feature} (coming soon)`, { description: "Demo feature for client preview." });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-[hsl(var(--wine-dark))] border-b transition-shadow duration-300",
        scrolled ? "border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.35)]" : "border-white/10 shadow-none"
      )}
    >
      <div className="container-store">
        <div className="flex items-center gap-4 lg:gap-6 h-[4.5rem] lg:h-[4.75rem]">
          {/* Logo — left aligned (e-commerce standard: brand anchor) */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="h-10 w-10 lg:h-11 lg:w-11 rounded-full overflow-hidden ring-1 ring-white/20 bg-[hsl(350_35%_18%)] shrink-0">
              <img
                src={STORE.logo}
                alt={`${STORE.name} logo`}
                className="w-full h-[145%] object-cover object-top -mt-0.5 scale-110 transition-transform duration-300 group-hover:scale-[1.12]"
              />
            </div>
            <div className="hidden sm:block leading-none">
              <span className="font-serif text-xl lg:text-2xl font-semibold text-white tracking-tight group-hover:text-[hsl(38_42%_62%)] transition-colors duration-200">
                {STORE.name}
              </span>
              <span className="block text-[9px] uppercase tracking-[0.24em] text-white/50 mt-1">
                Ethnic Couture
              </span>
            </div>
          </Link>

          {/* Nav links — center-left cluster */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 flex-1 min-w-0 pl-2">
            {NAV_LINKS.map((cat) => (
              <NavLinkItem key={cat.slug} to={`/shop?category=${cat.slug}`}>
                {cat.label}
              </NavLinkItem>
            ))}
            <NavLinkItem to="/shop?sort=price-desc" highlight>
              SALE
            </NavLinkItem>
          </nav>

          {/* Search */}
          <HeaderSearch className="hidden md:flex w-full max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] shrink-0 lg:ml-auto xl:ml-0" />

          {/* Utility icons */}
          <div className="flex items-center gap-0.5 ml-auto lg:ml-0 shrink-0">
            <a
              href={`https://wa.me/${STORE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(iconBtnClass, "hidden md:flex")}
              aria-label="WhatsApp support"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
            </a>
            <button
              type="button"
              onClick={() => demoToast("Live Video Shopping")}
              className={cn(iconBtnClass, "hidden xl:flex")}
              aria-label="Live video shopping"
            >
              <Video className="w-5 h-5" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => demoToast("Account")}
              className={cn(iconBtnClass, "hidden lg:flex")}
              aria-label="My account"
            >
              <User className="w-5 h-5" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => demoToast("Wishlist")}
              className={cn(iconBtnClass, "hidden lg:flex")}
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" strokeWidth={1.75} />
            </button>
            <Link to="/cart" className={iconBtnClass} aria-label={`Cart, ${itemCount} items`}>
              <ShoppingBag className="w-5 h-5" strokeWidth={1.75} />
              {itemCount > 0 && (
                <span className="absolute top-1.5 right-1.5 min-w-[17px] h-[17px] px-0.5 rounded-full bg-[hsl(38_42%_48%)] text-[hsl(var(--wine-dark))] text-[9px] font-bold flex items-center justify-center animate-fade-in">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu — slide-in sheet */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <button type="button" className={cn(iconBtnClass, "lg:hidden")} aria-label="Open menu">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(100vw,360px)] bg-background">
                <SheetHeader>
                  <SheetTitle className="font-serif text-left text-2xl">{STORE.name}</SheetTitle>
                </SheetHeader>
                <div className="mt-4">
                  <HeaderSearch className="md:hidden" />
                </div>
                <MobileNav onNavigate={() => setSheetOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile search row */}
      <div className="md:hidden border-t border-white/10 px-4 py-2.5">
        <HeaderSearch />
      </div>
    </header>
  );
}
