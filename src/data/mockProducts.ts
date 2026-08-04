/**
 * MOCK PRODUCT DATA — Demo catalog for A to Z ethnic wear store.
 * Replace with CMS/API data in production.
 */

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage: string;
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  popularity: number;
  createdAt: string;
  description: string;
  details: string[];
  fabric: string;
  care: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "maroon-embroidered-sharara",
    name: "Maroon Embroidered Sharara Suit",
    category: "Sharara Suits",
    categorySlug: "sharara-suits",
    price: 14999,
    originalPrice: 18999,
    image: "/products/product-sharara-01.png",
    hoverImage: "/products/product-sharara-01.png",
    colors: ["Maroon", "Gold"],
    sizes: ["S", "M", "L", "XL"],
    isBestseller: true,
    popularity: 98,
    createdAt: "2026-01-15",
    description:
      "A regal maroon sharara set with intricate gold embroidery, paired with a flowing dupatta — perfect for weddings and festive gatherings.",
    details: ["Embroidered bodice", "Flared sharara pants", "Soft net dupatta", "Unstitched option available"],
    fabric: "Premium viscose silk blend",
    care: "Dry clean recommended",
  },
  {
    id: "2",
    slug: "emerald-salwar-kameez",
    name: "Emerald Salwar Kameez",
    category: "Salwar Kameez",
    categorySlug: "salwar-kameez",
    price: 8999,
    image: "/products/product-salwar-01.png",
    hoverImage: "/products/product-salwar-01.png",
    colors: ["Emerald"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
    popularity: 92,
    createdAt: "2026-02-01",
    description:
      "Classic emerald salwar kameez with delicate threadwork and a contrasting dupatta for everyday elegance.",
    details: ["Round neckline", "Side slits", "Matching dupatta"],
    fabric: "Cotton lawn",
    care: "Hand wash cold",
  },
  {
    id: "3",
    slug: "rose-gold-anarkali",
    name: "Rose Gold Anarkali",
    category: "Anarkali",
    categorySlug: "anarkali",
    price: 12499,
    originalPrice: 14999,
    image: "/products/product-anarkali-01.png",
    hoverImage: "/products/product-anarkali-01.png",
    colors: ["Rose", "Gold"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isBestseller: true,
    popularity: 95,
    createdAt: "2026-01-20",
    description:
      "Floor-length anarkali in dusty rose with gold embellishments — a statement piece for formal occasions.",
    details: ["Floor-length flare", "Gold zari work", "Inner lining included"],
    fabric: "Chiffon with silk lining",
    care: "Dry clean only",
  },
  {
    id: "4",
    slug: "royal-blue-lehenga",
    name: "Royal Blue Lehenga Choli",
    category: "Lehenga",
    categorySlug: "lehenga",
    price: 24999,
    image: "/products/product-lehenga-01.png",
    hoverImage: "/products/product-lehenga-01.png",
    colors: ["Royal Blue", "Silver"],
    sizes: ["S", "M", "L"],
    popularity: 88,
    createdAt: "2025-12-10",
    description:
      "Stunning royal blue lehenga with silver embroidery — ideal for mehndi, receptions, and bridal events.",
    details: ["Lehenga + choli + dupatta", "Silver sequin work", "Can-can included"],
    fabric: "Raw silk",
    care: "Dry clean only",
  },
  {
    id: "5",
    slug: "ivory-kurti-set",
    name: "Ivory Kurti Palazzo Set",
    category: "Kurti Sets",
    categorySlug: "kurti-sets",
    price: 6499,
    image: "/products/product-kurti-01.png",
    hoverImage: "/products/product-kurti-01.png",
    colors: ["Ivory", "Maroon"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    popularity: 85,
    createdAt: "2026-02-10",
    description:
      "Comfortable ivory kurti with maroon accents and matching palazzo — perfect for casual outings and office wear.",
    details: ["Straight cut kurti", "Elastic waist palazzo", "Light dupatta"],
    fabric: "Premium cotton",
    care: "Machine wash gentle",
  },
  {
    id: "6",
    slug: "champagne-party-gown",
    name: "Champagne Party Wear Gown",
    category: "Party Wear",
    categorySlug: "party-wear",
    price: 17999,
    image: "/products/product-party-01.png",
    hoverImage: "/products/product-party-01.png",
    colors: ["Gold", "Ivory"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 90,
    createdAt: "2026-01-05",
    description:
      "Elegant champagne gown with ethnic fusion styling — designed for cocktail events and evening celebrations.",
    details: ["Flowing silhouette", "Subtle shimmer", "Concealed zip"],
    fabric: "Georgette with satin lining",
    care: "Dry clean recommended",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return MOCK_PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return MOCK_PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, limit);
}

export type SortOption = "newest" | "price-asc" | "price-desc" | "popular";

export function sortProducts(products: Product[], sort: SortOption): Product[] {
  const copy = [...products];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "popular":
      return copy.sort((a, b) => b.popularity - a.popularity);
    case "newest":
    default:
      return copy.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }
}
