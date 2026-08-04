import { Link } from "react-router-dom";
import { CATEGORIES } from "@/lib/storeConfig";
import { ScrollReveal } from "@/components/store/ScrollReveal";

const CATEGORY_IMAGES: Record<string, string> = {
  "sharara-suits": "/products/product-sharara-01.png",
  "salwar-kameez": "/products/product-salwar-01.png",
  anarkali: "/products/product-anarkali-01.png",
  lehenga: "/products/product-lehenga-01.png",
  "kurti-sets": "/products/product-kurti-01.png",
  "party-wear": "/products/product-party-01.png",
};

export function CategoryGrid() {
  const items = CATEGORIES.filter((c) => c.slug !== "all");

  return (
    <section className="bg-[#f7f3ed] border-y border-border/60">
      <div className="container-store section-spacing">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <p className="section-label justify-center flex">Collections</p>
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle mx-auto mt-3">
              Curated ethnic wear for weddings, festivities, and everyday elegance.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {items.map((cat, i) => (
            <ScrollReveal key={cat.slug} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <Link
                to={`/shop?category=${cat.slug}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-white shadow-sm card-lift block"
              >
                <img
                  src={CATEGORY_IMAGES[cat.slug]}
                  alt={cat.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1818]/80 via-[#2a1818]/25 to-transparent transition-opacity duration-300 group-hover:from-[#2a1818]/90" />
                <div className="absolute bottom-0 inset-x-0 p-3 md:p-4">
                  <p className="text-white font-serif text-base md:text-lg leading-tight">{cat.label}</p>
                  <p className="text-white/70 text-[10px] uppercase tracking-[0.2em] mt-1 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Shop now
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
