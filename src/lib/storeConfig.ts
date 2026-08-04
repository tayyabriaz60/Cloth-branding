/**
 * A to Z — Store configuration (brand, theme tokens, policies)
 */
export const STORE = {
  name: "A to Z",
  tagline: "Premium Women's Ethnic Wear",
  description: "Discover elegant sharara suits, salwar kameez, anarkali, and party wear — crafted for every celebration.",
  logo: "/a-to-z-logo.png",
  currency: "PKR" as const,
  currencySymbol: "Rs.",
  domain: "AToZFashion.com",
  whatsapp: "923000000000",
  phone: "+92 300 0000000",
} as const;

/** Primary navbar links (G3-style horizontal nav) */
export const NAV_LINKS = [
  { slug: "sharara-suits", label: "Sharara" },
  { slug: "salwar-kameez", label: "Salwar" },
  { slug: "anarkali", label: "Anarkali" },
  { slug: "lehenga", label: "Lehenga" },
  { slug: "kurti-sets", label: "Kurti" },
  { slug: "party-wear", label: "Party" },
] as const;

export const TRUST_SIGNALS = [
  { title: "Free Shipping", subtitle: "On orders over Rs. 5,000*", placeholder: true },
  { title: "Easy Returns", subtitle: "7-day return policy*", placeholder: true },
  { title: "Secure Checkout", subtitle: "Encrypted demo checkout*", placeholder: true },
  { title: "Premium Quality", subtitle: "Curated ethnic collections", placeholder: false },
] as const;

export const CATEGORIES = [
  { slug: "all", label: "All" },
  { slug: "sharara-suits", label: "Sharara Suits" },
  { slug: "salwar-kameez", label: "Salwar Kameez" },
  { slug: "anarkali", label: "Anarkali" },
  { slug: "lehenga", label: "Lehenga" },
  { slug: "kurti-sets", label: "Kurti Sets" },
  { slug: "party-wear", label: "Party Wear" },
] as const;

export const SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;

export const COLORS = [
  { name: "Maroon", hex: "#7B1E3A" },
  { name: "Emerald", hex: "#0F6B4E" },
  { name: "Rose", hex: "#C97B84" },
  { name: "Royal Blue", hex: "#1E3A5F" },
  { name: "Ivory", hex: "#F5F0E8" },
  { name: "Gold", hex: "#C9A227" },
] as const;

export function formatPrice(amount: number): string {
  return `${STORE.currencySymbol} ${amount.toLocaleString("en-PK")}`;
}
