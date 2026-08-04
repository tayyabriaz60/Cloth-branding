import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/storeConfig";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const shipping = subtotal >= 5000 ? 0 : 299;
  const total = subtotal + (items.length ? shipping : 0);

  if (items.length === 0) {
    return (
      <>
        <div className="container-store py-20 text-center">
          <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
          <p className="section-label">Your Bag</p>
          <h1 className="section-title mb-3">Your cart is empty</h1>
          <p className="section-subtitle mx-auto mb-8">Discover our latest ethnic wear collections.</p>
          <Link to="/shop" className="btn-store-primary">
            Continue Shopping
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container-store py-10 md:py-14 max-w-4xl">
        <p className="section-label">Your Bag</p>
        <h1 className="section-title mb-8">Shopping Cart</h1>

        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <div
              key={`${item.productId}-${item.size}-${item.color}`}
              className="flex gap-4 p-4 rounded-sm border border-border bg-card"
            >
              <Link to={`/product/${item.slug}`} className="shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-24 md:w-24 md:h-32 object-cover object-top rounded-sm"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <Link to={`/product/${item.slug}`} className="font-medium text-sm hover:text-primary line-clamp-2">
                  {item.name}
                </Link>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.color} · Size {item.size}
                </p>
                <p className="text-sm font-semibold text-primary mt-2">{formatPrice(item.price)}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-border rounded-sm">
                    <button
                      type="button"
                      className="p-2 hover:bg-secondary"
                      onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 text-sm font-medium min-w-[2rem] text-center">{item.quantity}</span>
                    <button
                      type="button"
                      className="p-2 hover:bg-secondary"
                      onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.productId, item.size, item.color)}
                    className="p-2 text-muted-foreground hover:text-destructive"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-sm border border-border bg-secondary/30 p-6 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping*</span>
            <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
          </div>
          <div className="flex justify-between font-semibold text-base pt-3 border-t border-border">
            <span>Total</span>
            <span className="text-primary">{formatPrice(total)}</span>
          </div>
          <p className="text-[11px] text-muted-foreground">* Placeholder shipping rates for demo</p>
          <Button asChild size="lg" className="w-full h-12 rounded-sm mt-2 uppercase tracking-[0.1em] text-xs">
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full text-xs uppercase tracking-wider">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
