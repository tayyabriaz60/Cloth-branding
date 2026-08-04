import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/storeConfig";
import type { Product } from "@/data/mockProducts";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.sizes[1] ?? product.sizes[0], product.colors[0]);
    toast.success("Added to cart", { description: product.name });
  };

  return (
    <article className="group">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-secondary/30 mb-3">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src={product.hoverImage}
            alt=""
            loading="lazy"
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-300 group-hover:opacity-100 scale-105"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && <Badge className="bg-primary text-primary-foreground text-[10px]">New</Badge>}
            {product.isBestseller && (
              <Badge variant="secondary" className="text-[10px] bg-background/90">
                Bestseller
              </Badge>
            )}
          </div>
          <Button
            size="sm"
            className="absolute bottom-3 left-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 h-10 rounded-lg md:flex hidden"
            onClick={handleQuickAdd}
          >
            <ShoppingBag className="w-4 h-4 mr-1.5" />
            Quick Add
          </Button>
        </div>
        <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">{product.category}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-sm font-semibold text-foreground">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </Link>
      <Button
        size="sm"
        variant="outline"
        className="w-full mt-2 h-9 rounded-lg md:hidden"
        onClick={handleQuickAdd}
      >
        Add to Cart
      </Button>
    </article>
  );
}
