import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/store/ProductCard";
import { Button } from "@/components/ui/button";
import { MOCK_PRODUCTS, sortProducts, type SortOption } from "@/data/mockProducts";
import { CATEGORIES } from "@/lib/storeConfig";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 6;

export default function ShopPage() {
  const [params, setParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const category = params.get("category") ?? "all";
  const query = (params.get("q") ?? "").trim().toLowerCase();
  const sort = (params.get("sort") as SortOption) ?? "popular";
  const minPrice = Number(params.get("min") ?? 0);
  const maxPrice = Number(params.get("max") ?? 999999);
  const page = Number(params.get("page") ?? 1);

  const filtered = useMemo(() => {
    let list = MOCK_PRODUCTS.filter((p) => {
      const catOk = category === "all" || p.categorySlug === category;
      const priceOk = p.price >= minPrice && p.price <= maxPrice;
      const searchOk =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query);
      return catOk && priceOk && searchOk;
    });
    return sortProducts(list, sort);
  }, [category, sort, minPrice, maxPrice, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    if (key !== "page") next.set("page", "1");
    setParams(next);
  };

  return (
    <>
      <div className="container-store py-10 md:py-14">
        <div className="mb-8 md:mb-10">
          <p className="section-label">Catalogue</p>
          <h1 className="section-title">All Products</h1>
          <p className="text-sm text-muted-foreground mt-2">
            {filtered.length} styles available
            {query ? ` for "${params.get("q")}"` : ""}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop filters */}
          <aside className="hidden md:block w-56 shrink-0 space-y-6">
            <FilterPanel
              category={category}
              sort={sort}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onUpdate={updateParam}
            />
          </aside>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3 mb-6">
              <select
                value={sort}
                onChange={(e) => updateParam("sort", e.target.value)}
                className="h-10 rounded-sm border border-border bg-white px-3 text-xs uppercase tracking-wider font-medium text-foreground"
                aria-label="Sort products"
              >
                <option value="popular">Popularity</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <Button
                variant="outline"
                size="sm"
                className="md:hidden h-10"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              >
                <SlidersHorizontal className="w-4 h-4 mr-1.5" /> Filters
              </Button>
            </div>

            {mobileFiltersOpen && (
              <div className="md:hidden mb-6 p-4 rounded-sm border border-border bg-card animate-fade-in">
                <FilterPanel
                  category={category}
                  sort={sort}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  onUpdate={(k, v) => {
                    updateParam(k, v);
                  }}
                />
              </div>
            )}

            {paginated.length === 0 ? (
              <p className="text-center text-muted-foreground py-16">No products match your filters.</p>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
                {paginated.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-10">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => updateParam("page", String(p))}
                    className={cn(
                      "w-10 h-10 rounded-sm text-sm font-medium transition-colors",
                      page === p ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/80"
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function FilterPanel({
  category,
  minPrice,
  maxPrice,
  onUpdate,
}: {
  category: string;
  sort: SortOption;
  minPrice: number;
  maxPrice: number;
  onUpdate: (key: string, value: string) => void;
}) {
  return (
    <>
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-3">Category</h3>
        <ul className="space-y-2">
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <button
                type="button"
                onClick={() => onUpdate("category", c.slug === "all" ? "" : c.slug)}
                className={cn(
                  "text-sm w-full text-left py-1",
                  (category === c.slug || (category === "all" && c.slug === "all"))
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-3">Price (PKR)</h3>
        <div className="space-y-2">
          {[
            { label: "All", min: "0", max: "999999" },
            { label: "Under 10,000", min: "0", max: "9999" },
            { label: "10,000 – 15,000", min: "10000", max: "15000" },
            { label: "15,000+", min: "15000", max: "999999" },
          ].map((range) => (
            <button
              key={range.label}
              type="button"
              onClick={() => {
                onUpdate("min", range.min);
                onUpdate("max", range.max);
              }}
              className={cn(
                "text-sm block w-full text-left py-1",
                minPrice === Number(range.min) && maxPrice === Number(range.max)
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
