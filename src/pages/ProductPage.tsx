import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ChevronRight, Ruler, ShoppingBag, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/store/ProductCard";
import { DemoBanner } from "@/components/store/CategoryGrid";
import { getProductBySlug, getRelatedProducts } from "@/data/mockProducts";
import { formatPrice } from "@/lib/storeConfig";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  if (!product) {
    return (
      <div className="container-store py-20 text-center">
        <p className="text-muted-foreground">Product not found.</p>
        <Link to="/shop" className="text-primary text-sm mt-2 inline-block">Back to shop</Link>
      </div>
    );
  }

  const images = [product.image, product.hoverImage].filter(
    (img, i, arr) => arr.indexOf(img) === i
  );
  const related = getRelatedProducts(product);
  const size = selectedSize || product.sizes[0];
  const color = selectedColor || product.colors[0];

  const handleAddToCart = () => {
    addItem(product, size, color);
    toast.success("Added to cart", { description: `${product.name} · ${size} · ${color}` });
  };

  const handleBuyNow = () => {
    addItem(product, size, color);
    navigate("/checkout");
  };

  return (
    <>
      <DemoBanner />
      <div className="container-store py-6 md:py-10">
        <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-6 flex-wrap">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/shop?category=${product.categorySlug}`} className="hover:text-primary">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground truncate">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Gallery */}
          <div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary/30 mb-3">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      "w-16 h-20 rounded-lg overflow-hidden border-2 transition-colors",
                      activeImage === i ? "border-primary" : "border-transparent"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="md:sticky md:top-24 md:self-start">
            <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{product.name}</h1>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-semibold">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-muted-foreground line-through text-sm">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            {/* Color */}
            <div className="mb-5">
              <p className="text-sm font-medium mb-2">Color: {color}</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setSelectedColor(c)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs border transition-colors",
                      color === c
                        ? "border-primary bg-primary/10 text-primary font-medium"
                        : "border-border hover:border-primary/40"
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">Size: {size}</p>
                <button
                  type="button"
                  onClick={() => {
                    setSizeGuideOpen(!sizeGuideOpen);
                    toast.info("Size guide (demo)", { description: "Placeholder sizing chart for client review." });
                  }}
                  className="text-xs text-primary flex items-center gap-1"
                >
                  <Ruler className="w-3.5 h-3.5" /> Size Guide*
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={cn(
                      "min-w-[44px] h-11 px-3 rounded-lg text-sm border transition-colors",
                      size === s
                        ? "border-primary bg-primary text-primary-foreground font-medium"
                        : "border-border hover:border-primary/40"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button size="lg" className="h-12 flex-1 rounded-xl" onClick={handleAddToCart}>
                <ShoppingBag className="w-4 h-4 mr-2" /> Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="h-12 flex-1 rounded-xl" onClick={handleBuyNow}>
                <Zap className="w-4 h-4 mr-2" /> Buy Now
              </Button>
            </div>

            <div className="space-y-3 text-sm border-t border-border pt-6">
              <p><span className="font-medium">Fabric:</span> {product.fabric}</p>
              <p><span className="font-medium">Care:</span> {product.care}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {product.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16 pt-12 border-t border-border">
            <h2 className="font-serif text-xl md:text-2xl mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-border bg-background/95 backdrop-blur p-3 safe-bottom">
        <div className="flex gap-2 max-w-md mx-auto">
          <Button className="flex-1 h-11 rounded-xl" onClick={handleAddToCart}>
            Add to Cart · {formatPrice(product.price)}
          </Button>
        </div>
      </div>
    </>
  );
}
