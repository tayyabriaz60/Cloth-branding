import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductImage } from "@/components/store/ProductImage";
import { formatPrice } from "@/lib/storeConfig";
import type { Product } from "@/data/mockProducts";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.sizes[1] ?? product.sizes[0], product.colors[0]);
    toast.success("Added to bag", { description: product.name });
  };

  return (
    <article className="product-card group">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="product-image-wrap mb-4 card-lift">
          <ProductImage
            src={product.image}
            alt={product.name}
            className="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.isNew && (
              <Badge className="rounded-sm bg-primary text-primary-foreground text-[10px] uppercase tracking-wider px-2 py-0.5 font-medium">
                New
              </Badge>
            )}
            {product.isBestseller && (
              <Badge className="rounded-sm bg-white/95 text-foreground text-[10px] uppercase tracking-wider px-2 py-0.5 font-medium border-0 shadow-sm">
                Bestseller
              </Badge>
            )}
          </div>
          <button
            type="button"
            onClick={handleQuickAdd}
            className={cn(
              "absolute bottom-3 left-3 right-3 z-10 hidden md:flex items-center justify-center gap-2 h-11",
              "bg-white/95 backdrop-blur-sm text-foreground text-[11px] uppercase tracking-[0.14em] font-semibold",
              "opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0",
              "transition-all duration-300 ease-out hover:bg-primary hover:text-white shadow-soft"
            )}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>

        <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-1.5">{product.category}</p>
        <h3 className="text-[0.9375rem] md:text-base font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200 pr-2">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-base font-semibold text-primary">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </Link>

      <button
        type="button"
        onClick={handleQuickAdd}
        className="md:hidden w-full mt-3 h-11 border border-border text-[11px] uppercase tracking-[0.14em] font-semibold text-foreground hover:border-primary hover:text-primary active:scale-[0.98] transition-all duration-200"
      >
        Add to Bag
      </button>
    </article>
  );
}
