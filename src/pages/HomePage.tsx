import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/store/ProductCard";
import { CategoryGrid, DemoBanner } from "@/components/store/CategoryGrid";
import { TrustBar } from "@/components/store/StoreFooter";
import { MOCK_PRODUCTS } from "@/data/mockProducts";
import { STORE } from "@/lib/storeConfig";

export default function HomePage() {
  const featured = MOCK_PRODUCTS.filter((p) => p.isBestseller || p.isNew).slice(0, 4);
  const heroProduct = MOCK_PRODUCTS[0];

  return (
    <>
      <DemoBanner />

      {/* Hero */}
      <section className="container-store py-8 md:py-14">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">New Collection</p>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-4">
              Elegant Ethnic Wear for Every Occasion
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              {STORE.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="h-12 px-8 rounded-xl">
                <Link to="/shop">
                  Shop Collection <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-xl">
                <Link to={`/product/${heroProduct.slug}`}>View Featured</Link>
              </Button>
            </div>
          </div>
          <Link
            to={`/product/${heroProduct.slug}`}
            className="order-1 md:order-2 block relative aspect-[3/4] max-h-[520px] rounded-2xl overflow-hidden bg-secondary/30 shadow-elevated group"
          >
            <img
              src={heroProduct.image}
              alt={heroProduct.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white/80 text-xs uppercase tracking-wider mb-1">Featured</p>
              <p className="text-white font-serif text-xl">{heroProduct.name}</p>
            </div>
          </Link>
        </div>
      </section>

      <TrustBar />
      <CategoryGrid />

      {/* Bestsellers */}
      <section className="container-store pb-16 md:pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">Trending</p>
            <h2 className="font-serif text-2xl md:text-3xl">Bestsellers & New Arrivals</h2>
          </div>
          <Link to="/shop?sort=popular" className="text-sm text-primary font-medium flex items-center gap-1">
            Shop all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
