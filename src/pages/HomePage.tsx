import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HeroSlider } from "@/components/store/HeroSlider";
import { ProductCard } from "@/components/store/ProductCard";
import { CategoryGrid } from "@/components/store/CategoryGrid";
import { ScrollReveal } from "@/components/store/ScrollReveal";
import { TrustBar } from "@/components/store/StoreFooter";
import { MOCK_PRODUCTS } from "@/data/mockProducts";

export default function HomePage() {
  const featured = MOCK_PRODUCTS.filter((p) => p.isBestseller || p.isNew).slice(0, 4);

  return (
    <>
      <HeroSlider />

      <TrustBar />

      <CategoryGrid />

      <section className="container-store section-spacing">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
            <div>
              <p className="section-label">Trending Now</p>
              <h2 className="section-title">Bestsellers & New Arrivals</h2>
            </div>
            <Link
              to="/shop?sort=popular"
              className="text-[11px] uppercase tracking-[0.18em] font-semibold text-primary inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
          {featured.map((product, i) => (
            <ScrollReveal key={product.id} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
