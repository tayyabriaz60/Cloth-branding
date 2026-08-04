import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/storeConfig";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const [payment, setPayment] = useState<"cod" | "card">("cod");

  const shipping = subtotal >= 5000 ? 0 : 299;
  const total = subtotal + (items.length ? shipping : 0);

  if (items.length === 0 && !placed) {
    return (
      <div className="container-store py-20 text-center">
        <p className="text-muted-foreground mb-4">Your cart is empty.</p>
        <Link to="/shop" className="btn-store-primary">Shop Now</Link>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="container-store py-16 max-w-lg mx-auto text-center animate-fade-in">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
        <p className="section-label">Order Confirmed</p>
        <h1 className="section-title mb-3">Order Placed (Demo)</h1>
        <p className="section-subtitle mx-auto mb-2">
          Thank you! This is a demo confirmation — no real payment was processed.
        </p>
        <p className="text-xs text-muted-foreground mb-8">Order #DEMO-{Date.now().toString().slice(-6)}</p>
        <Link to="/shop" className="btn-store-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setPlaced(true);
    toast.success("Demo order placed successfully!");
  };

  return (
    <>
      <div className="container-store py-10 md:py-14 max-w-2xl">
        <p className="section-label">Secure Checkout</p>
        <h1 className="section-title mb-8">Checkout</h1>

        <form onSubmit={handlePlaceOrder} className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Shipping Details</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Input placeholder="First name" required className="h-11 rounded-sm" />
              <Input placeholder="Last name" required className="h-11 rounded-sm" />
            </div>
            <Input type="email" placeholder="Email" required className="h-11 rounded-sm" />
            <Input placeholder="Phone (+92)" required className="h-11 rounded-sm" />
            <Input placeholder="Address" required className="h-11 rounded-sm" />
            <div className="grid sm:grid-cols-2 gap-3">
              <Input placeholder="City" required className="h-11 rounded-sm" />
              <Input placeholder="Postal code" className="h-11 rounded-sm" />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Payment Method*</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPayment("cod")}
                className={cn(
                  "p-4 rounded-sm border text-left text-sm transition-colors",
                  payment === "cod" ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                )}
              >
                <p className="font-medium">Cash on Delivery</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pay when you receive</p>
              </button>
              <button
                type="button"
                onClick={() => setPayment("card")}
                className={cn(
                  "p-4 rounded-sm border text-left text-sm transition-colors",
                  payment === "card" ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                )}
              >
                <CreditCard className="w-4 h-4 mb-1 text-primary" />
                <p className="font-medium">Card / JazzCash*</p>
                <p className="text-xs text-muted-foreground mt-0.5">Demo — not live</p>
              </button>
            </div>
          </section>

          <div className="rounded-sm border border-border p-5 space-y-2 bg-secondary/30">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal ({items.length} items)</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between font-semibold pt-2 border-t border-border">
              <span>Total</span>
              <span className="text-primary">{formatPrice(total)}</span>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full h-12 rounded-sm uppercase tracking-[0.1em] text-xs">
            Place Order
          </Button>
        </form>
      </div>
    </>
  );
}
