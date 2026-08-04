export interface HeroSlide {
  id: string;
  image: string;
  label: string;
  title: string;
  highlight?: string;
  subtitle: string;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "1",
    image: "/products/product-sharara-01.png",
    label: "New Season",
    title: "Timeless Ethnic Wear,",
    highlight: "Crafted for You",
    subtitle: "Discover regal sharara suits, salwar kameez, and festive collections curated for every celebration.",
    cta: { label: "Shop Collection", href: "/shop" },
    secondaryCta: { label: "View Sharara", href: "/shop?category=sharara-suits" },
  },
  {
    id: "2",
    image: "/products/product-lehenga-01.png",
    label: "Wedding Edit",
    title: "Bridal & Festive",
    highlight: "Lehenga Collection",
    subtitle: "Statement lehengas with intricate embroidery — made for your most memorable moments.",
    cta: { label: "Explore Lehengas", href: "/shop?category=lehenga" },
    secondaryCta: { label: "Shop Party Wear", href: "/shop?category=party-wear" },
  },
  {
    id: "3",
    image: "/products/product-anarkali-01.png",
    label: "Limited Offer",
    title: "Up to 20% Off",
    highlight: "Selected Styles",
    subtitle: "Premium anarkali and kurti sets at exclusive prices — limited time only.",
    cta: { label: "Shop Sale", href: "/shop?sort=price-desc" },
    secondaryCta: { label: "New Arrivals", href: "/shop?sort=newest" },
  },
];
