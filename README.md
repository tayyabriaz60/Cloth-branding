# A to Z — Premium Women's Ethnic Wear (Demo)

E-commerce demo for client presentation. **PKR pricing**, mock checkout, AI-generated catalog images.

## Run locally

```bash
npm install
npm run dev
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, categories, bestsellers |
| `/shop` | Product listing — filters, sort, pagination |
| `/product/:slug` | Product detail — gallery, size/color, add to cart |
| `/cart` | Cart — edit qty, remove items |
| `/checkout` | Mock checkout — demo order confirmation |

## Config files

- **Brand & theme:** `src/lib/storeConfig.ts`
- **Products:** `src/data/mockProducts.ts`
- **Colors:** `src/index.css`

## Demo notes

- Payment gateway **not connected**
- Shipping/returns policies marked as placeholder
- Product photos are AI-generated samples

## Deploy

Vercel: Framework **Vite**, output **dist**, no env vars required.
