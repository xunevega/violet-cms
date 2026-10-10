# Violet Premium Reference Audit

References reviewed:

- Envato Elements item: Potsy - Ceramics & Pottery Decor Shopify 2.0 Theme
- Envato Elements item: Bisuth - Running Shoes, Sports Shoes Shopify Theme
- Envato Elements item: Schic - Clothing Fashion Shopify 2.0 Theme
- Envato/Theme package: Organix - Multipurpose Shopify Theme OS 2.0
- Envato/Theme package: Rosyz - Multipurpose Clothing and Fashion Store
- Envato/Theme package: Trendz - OS 2.0 Clothing Shopify Shop
- Envato/Theme package: Creedy - Religion Church Charity Shopify Theme
- Envato/Theme package: Pro Responsive Minimal Shopify Theme OS 2.0
- Local pro theme folder: `/Users/robertodiazvina/Downloads/themes-pro/`
- Local Potsy store export: `/Users/robertodiazvina/Downloads/theme_export__violetmoon-es-qx-potsy-demo-1__04JUL2026-1041pm.zip`
- License model: one specific End Product, not a reusable source license for Violet CMS distribution.

## Rule

Use premium theme material as product and UX reference only.

Do not copy Liquid, CSS, JavaScript, fonts, icons, images, snippets, section schemas, or unique naming structures from the premium theme into Violet CMS.

Violet CMS should remain:

- Dawn-based
- Theme Check clean
- Own `violet-*` code
- Safe to upload
- Safe to evolve into a reusable installable theme

## Useful Patterns Found

### Reference Roles

Use each theme as a different kind of benchmark:

| Theme | Best Reference Use | Violet Takeaway |
| --- | --- | --- |
| Potsy | Editorial commerce, product storytelling, rich home/collection layouts | Strong CMS sections, product content blocks, cart merchandising |
| Bisuth | Sports/retail conversion, size/color/stock decisions | Size guide, swatches, sticky product flow, collection filtering |
| Schic | Fashion merchandising, lookbooks, wishlist-style shopping | Lookbook/editorial sections, mobile navigation, quick product discovery |
| Organix | Modern OS 2.0 commerce mechanics | Cart recommendations, minicart recommendations, bought together, compare/wishlist architecture |
| Rosyz | Fashion presets and modern demo content | More current fashion merchandising presets |
| Trendz | 2025 clothing commerce | Many home variants, trend/fashion merchandising references |
| Creedy | Non-fashion content-commerce | Useful for donation/mission/storytelling patterns, surprisingly feature-rich |
| Pro Fashion | Older minimal fashion reference | Lower priority; useful mainly for minimalist layout ideas |

Bisuth and Schic ship five home variants each. They share many architectural ideas, so they should be treated as one family of references rather than ten separate sources to port.

### Product

The premium references include many product template variants and product support snippets:

- product template variants
- product bundle
- product tabs
- accordion-style product details
- sticky cart
- stock/status snippets
- size guide
- swatches
- product media helpers
- quick view
- product recommendations
- recently viewed
- buy-with/product grid helpers

Violet equivalent should be built as smaller Dawn-native blocks:

- `violet-sticky-add-to-cart`
- `violet-benefits`
- `violet-story`
- `violet-faqs`
- `violet-materials-care`
- `violet-gift-occasions`
- `violet-buy-together`
- `violet-trust-badges`

### Cart

The premium references include:

- cart template
- ajax/minicart patterns
- free shipping snippet
- upsell snippet
- cross-sell snippet
- shipping calculator

Violet equivalent should stay sober and data-driven:

- `violet-free-shipping`
- `violet-cart-upsells`
- `violet-cart-gift`
- `shop.metafields.violet.free_shipping_threshold`
- `product.metafields.violet.buy_together`
- optional configured gift product

### Collections

The premium references include many collection layouts:

- two, three, and four column templates
- drawer filter
- top filter
- infinite/load-more variants
- banner split
- list/color/size variants
- category widgets
- brand widgets
- tag widgets

Violet should not multiply templates. Prefer one strong collection template with configurable blocks:

- editorial collection banner
- subcollections
- grid density
- quick add
- product badges
- breadcrumbs
- native Shopify filtering

### Navigation

The premium references include:

- drawer nav
- mobile menu
- mega menu banners
- mega menu collection/product blocks
- header layout variants

Violet should use Dawn header foundations plus focused upgrades:

- image-aware mega menu
- clearer mobile menu
- predictive search
- breadcrumbs

### Home / Editorial

The premium references include many editorial and commerce sections:

- video/background video
- brand carousel/list
- banners
- before/after
- FAQs
- featured collections
- featured products
- image/content sections
- testimonials/quotes
- scrolling text
- shop the look
- lookbook pages
- store messages

Violet should keep fewer, stronger sections:

- hero / video hero
- editorial grid
- featured collections
- featured products
- testimonials
- FAQ
- timeline
- brand logos
- CTA/newsletter

## Priority Extraction

1. Keep current Violet cart work as the first system-level improvement.
2. Harden product blocks and metafield fallbacks before adding more visuals.
3. Add size guide and swatch-friendly merchandising as original Violet blocks.
4. Add one collection experience, not many collection templates.
5. Add lookbook/editorial product discovery once the product and collection foundations are stable.
6. Add mega menu with images only after product/cart/collection are stable.
7. Avoid importing premium assets unless the target is a single licensed store, not the reusable CMS.

## Violet Backlog From References

P1:

- Product safe defaults for all Violet metafields.
- Cart free shipping, upsell, cross-sell, and optional gift.
- Theme Check and upload zip verification after every structural change.

P2:

- Size guide block using a page/metaobject/metafield reference.
- Product swatch support using Dawn variants first, with Violet styling only.
- Quick view as a minimal modal, not a duplicated product page.
- Collection editorial banner plus subcollections.

P3:

- Lookbook section that links editorial images to products.
- Mega menu image blocks.
- Recently viewed products.
- Wishlist only if it can be done without heavy third-party behavior.

## Highest Value New Ideas

These are more valuable than simply adding more decorative home sections:

1. Shop-the-look / interactive image.
   - Reference names: `shop-the-look`, `hot-spots-split`, `image-interactive`, lookbook pages.
   - Violet version: an editorial image with clickable product points.
   - Appi connection: Violet Appi can suggest products for each image/story.

2. Size and fit system.
   - Reference names: `size-guide`, size/color collection templates, swatches, linked options.
   - Violet version: a product size guide block powered by page, metafield, or metaobject.
   - Appi connection: detect products missing size/fit data.

3. Product discovery states.
   - Reference names: `product-hover`, `product-quick-view`, quick product snippets, related products.
   - Violet version: fast product scanning from collections without making collection pages heavy.
   - Appi connection: quality score can decide which products are ready for quick view.

4. Trust and service messages.
   - Reference names: `store-messages`, `service`, `service-by-price`, shipping time.
   - Violet version: compact commercial promises, not fake urgency.
   - Appi connection: store-level and product-level service badges.

5. Back-in-stock / sold-out intelligence.
   - Reference names: `notifySoldoutProduct`, stock snippets, remove sold out.
   - Violet version: show honest availability and alternatives.
   - Appi connection: detect products blocked by stock, missing variants, or poor availability.

6. Recommendation engine surfaces.
   - Reference names: `cart-recommendations`, `minicart-recommendations`, `ajax-recommendations`, `products-bought-together`.
   - Violet version: one recommendation contract reused in product, cart drawer, and collection cards.
   - Appi connection: generate/suggest related products, bought together, cross-sell, and upsell groups.

7. Mobile commerce controls.
   - Reference names: `menu-mobile-bottom`, `mobile_menu`, sticky add to cart, minicart.
   - Violet version: mobile-first bottom actions for search, cart, account/menu, and sticky product CTA.
   - Appi connection: not required; this is pure CMS ergonomics.

8. Compare / wishlist as quality signals, not heavy features.
   - Reference names: `products-compare`, `main-compare`, `main-wishlist`, `mini-wishlist`.
   - Violet version: consider later as lightweight local/session features.
   - Appi connection: track product readiness and merchandising groups before adding persistent customer behavior.

## Current Reference Ranking

1. Organix
   - Highest value reference now in the folder.
   - Best for modern cart/product recommendation surfaces and reusable commerce mechanics.

2. Potsy
   - Best editorial CMS reference.
   - Strongest reference for shop-the-look, product storytelling, and rich page layouts.

3. Trendz / Rosyz
   - Best current fashion references.
   - Useful for product grids, merchandising density, and modern home presets.

4. Bisuth / Schic
   - Still useful for size guides, swatches, quick view, lookbooks, and classic fashion/retail behaviors.

5. Creedy
   - Unexpectedly useful for content-led commerce and mission/story pages.

6. Pro Fashion
   - Lowest priority because it is older and more likely to duplicate ideas already covered elsewhere.

## Decision

The premium theme reduces planning time, not implementation ownership.

Violet CMS should use Potsy/Impulse as a map of expected premium commerce features, while the actual implementation remains original, smaller, and tied to the Violet Appi metafield contract.
