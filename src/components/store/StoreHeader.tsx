import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { STORE, NAV_LINKS, CATEGORIES } from "@/lib/storeConfig";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function NavLinkItem({ to, children, highlight }: { to: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        "group relative inline-flex items-center h-11 px-1",
        "text-[12px] uppercase tracking-[0.16em] font-medium transition-colors duration-200 whitespace-nowrap",
        highlight
          ? "text-[hsl(38_42%_58%)] hover:text-[hsl(38_42%_65%)]"
          : "text-white/75 hover:text-white"
      )}
    >
      {children}
      {!highlight && (
        <span
          aria-hidden
          className="absolute bottom-2.5 left-0 right-0 mx-auto h-px w-0 max-w-full bg-[hsl(38_42%_58%)] transition-all duration-300 ease-out group-hover:w-full"
        />
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
      <Search className="w-[15px] h-[15px] text-white/45 shrink-0" strokeWidth={2} />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        aria-label="Search products"
      />
    </form>
  );
}

function MobileNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col mt-8">
      {CATEGORIES.filter((c) => c.slug !== "all").map((cat) => (
        <Link
          key={cat.slug}
          to={`/shop?category=${cat.slug}`}
          onClick={onNavigate}
          className="py-4 text-[15px] text-foreground/90 border-b border-border/50 hover:text-primary transition-colors tracking-wide"
        >
          {cat.label}
        </Link>
      ))}
      <Link
        to="/shop?sort=price-desc"
        onClick={onNavigate}
        className="py-4 text-[15px] font-semibold text-primary border-b border-border/50 tracking-wide"
      >
        SALE
      </Link>
      <Link
        to="/cart"
        onClick={onNavigate}
        className="py-4 text-[15px] text-foreground/90 hover:text-primary transition-colors flex items-center gap-2.5 tracking-wide"
      >
        <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
        Shopping Bag
      </Link>
    </nav>
  );
}

function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5 sm:gap-3 group shrink-0">
      <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full overflow-hidden ring-1 ring-white/15 bg-[hsl(350_35%_20%)] shrink-0">
        <img
          src={STORE.logo}
          alt={`${STORE.name} logo`}
          className="w-full h-[145%] object-cover object-top -mt-0.5 scale-110 transition-transform duration-500 group-hover:scale-[1.08]"
        />
      </div>
      <span className="hidden min-[480px]:inline font-serif text-xl sm:text-[1.35rem] lg:text-[1.5rem] font-semibold text-white tracking-tight leading-none group-hover:text-white/90 transition-colors">
        {STORE.name}
      </span>
    </Link>
  );
}

export function StoreHeader() {
  const scrolled = useScrolled(8);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-[hsl(var(--wine-dark))] transition-[box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
          : "border-b border-white/[0.08]"
      )}
    >
      {/* ── Desktop: true 3-column balance (logo | nav | search) ── */}
      <div className="container-store hidden lg:block">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 h-[5rem]">
          {/* Left — logo */}
          <div className="justify-self-start">
            <Logo />
          </div>

          {/* Center — nav (mathematically centered) */}
          <nav className="flex items-center justify-center gap-7 xl:gap-9">
            {NAV_LINKS.map((cat) => (
              <NavLinkItem key={cat.slug} to={`/shop?category=${cat.slug}`}>
                {cat.label}
              </NavLinkItem>
            ))}
            <NavLinkItem to="/shop?sort=price-desc" highlight>
              Sale
            </NavLinkItem>
          </nav>

          {/* Right — search */}
          <div className="justify-self-end w-full max-w-[300px]">
            <HeaderSearch className="w-full" />
          </div>
        </div>
      </div>

      {/* ── Mobile / tablet ── */}
      <div className="container-store lg:hidden">
        <div className="flex items-center gap-3 h-[3.75rem] sm:h-[4rem]">
          <Logo />

          <div className="flex-1 min-w-0 flex items-center justify-end gap-2">
            <HeaderSearch className="w-full max-w-[200px] sm:max-w-[260px]" />

            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="flex items-center justify-center w-10 h-10 shrink-0 text-white/80 hover:text-white transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-[22px] h-[22px]" strokeWidth={1.5} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(100vw,380px)] border-l-0 p-0">
                <div className="bg-[hsl(var(--wine-dark))] px-6 pt-8 pb-6">
                  <SheetHeader>
                    <SheetTitle className="font-serif text-left text-2xl text-white font-semibold">
                      {STORE.name}
                    </SheetTitle>
                  </SheetHeader>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/45 mt-1">
                    Ethnic Couture
                  </p>
                </div>
                <div className="px-6 pb-8">
                  <MobileNav onNavigate={() => setSheetOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
