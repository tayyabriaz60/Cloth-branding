import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, CreditCard, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DemoBanner } from "@/components/store/CategoryGrid";
import { useCart } from "@/context/CartContext";
import { formatPrice, STORE } from "@/lib/storeConfig";
import { toast } from "sonner";

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
        <Button asChild><Link to="/shop">Shop Now</Link></Button>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="container-store py-16 max-w-lg mx-auto text-center animate-fade-in">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="font-serif text-2xl mb-2">Order Placed (Demo)</h1>
        <p className="text-muted-foreground text-sm mb-2">
          Thank you! This is a demo confirmation — no real payment was processed.
        </p>
        <p className="text-xs text-muted-foreground mb-8">Order #DEMO-{Date.now().toString().slice(-6)}</p>
        <Button asChild className="rounded-xl h-11 px-8">
          <Link to="/shop">Continue Shopping</Link>
        </Button>
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
      <DemoBanner />
      <div className="container-store py-8 md:py-12 max-w-2xl">
        <h1 className="font-serif text-2xl md:text-3xl mb-2">Checkout</h1>
        <p className="text-xs text-muted-foreground mb-8 flex items-center gap-1">
          <Lock className="w-3.5 h-3.5" /> Demo checkout — payment gateway not connected
        </p>

        <form onSubmit={handlePlaceOrder} className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider">Shipping Details</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Input placeholder="First name" required className="h-11 rounded-xl" />
              <Input placeholder="Last name" required className="h-11 rounded-xl" />
            </div>
            <Input type="email" placeholder="Email" required className="h-11 rounded-xl" />
            <Input placeholder="Phone (+92)" required className="h-11 rounded-xl" />
            <Input placeholder="Address" required className="h-11 rounded-xl" />
            <div className="grid sm:grid-cols-2 gap-3">
              <Input placeholder="City" required className="h-11 rounded-xl" />
              <Input placeholder="Postal code" className="h-11 rounded-xl" />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider">Payment Method*</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPayment("cod")}
                className={`p-4 rounded-xl border text-left text-sm transition-colors ${
                  payment === "cod" ? "border-primary bg-primary/5" : "border-border"
                }`}
              >
                <p className="font-medium">Cash on Delivery</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pay when you receive</p>
              </button>
              <button
                type="button"
                onClick={() => setPayment("card")}
                className={`p-4 rounded-xl border text-left text-sm transition-colors ${
                  payment === "card" ? "border-primary bg-primary/5" : "border-border"
                }`}
              >
                <CreditCard className="w-4 h-4 mb-1 text-primary" />
                <p className="font-medium">Card / JazzCash*</p>
                <p className="text-xs text-muted-foreground mt-0.5">Demo — not live</p>
              </button>
            </div>
          </section>

          <div className="rounded-xl border border-border p-5 space-y-2 bg-secondary/20">
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
              <span>{formatPrice(total)}</span>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full h-12 rounded-xl">
            Place Order (Demo)
          </Button>
          <p className="text-[11px] text-center text-muted-foreground">{STORE.demoNote}</p>
        </form>
      </div>
    </>
  );
}
