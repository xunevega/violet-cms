# Violet CMS Build Roadmap

Roadmap built from:

- Current Violet CMS architecture.
- Current Violet Appi direction.
- Premium reference audit from local themes in `/Users/robertodiazvina/Downloads/themes-pro/`.

## Decision

Build Violet as Roberto's own Shopify mansion, not as a pile of theme features and not as a marketplace product.

The goal is a large, useful, expandable CMS theme for the store. It can grow by wings. If something breaks while building, it gets fixed. The important thing is to keep the foundations clean enough that new rooms can keep being added.

The next work should prioritize reusable commerce mechanics:

1. Recommendations
2. Product confidence
3. Collection discovery
4. Mobile buying
5. Editorial selling

## Violet Build Map From Here

Current point:

- Latest uploadable CMS zip: `/Users/robertodiazvina/Downloads/violet-cms-shopify-theme-0.1.13-shop-the-look.zip`
- CMS validation: Theme Check clean, JSON clean, zip test clean.
- Appi validation: typecheck clean, lint clean.
- Shopify CLI store test:
  - Correct development store: `violet-en-desarrollo.myshopify.com`.
  - Unpublished theme: `Violet CMS 0.1.13`, ID `205725466973`.
  - Preview URL: `https://violet-en-desarrollo.myshopify.com?preview_theme_id=205725466973`.
  - Editor URL: `https://violet-en-desarrollo.myshopify.com/admin/themes/205725466973/editor`.
  - Storefront password used for QA: configured in Shopify development store.

What is already built:

- Product wing:
  - rich product metafield sections
  - size/confidence block
  - trust badges
  - bought together
  - related recommendations
  - sticky add to cart
- Cart wing:
  - drawer/cart free shipping bar
  - gift option
  - upsell/cross-sell logic
  - cart trust copy
- Collection wing:
  - editorial collection area
  - subcollections
  - featured products
  - quick view
  - badges
  - Violet filter styling
  - grid density settings
  - editorial grid layout with first-product feature
  - collection toolbar with result and active-filter status
- Home/editorial wing:
  - Violet hero
  - editorial grid
  - featured collection
  - shop the look
  - lookbook
  - logos
  - testimonials
  - timeline
  - FAQ
  - Violet newsletter
- Appi:
  - product workshop
  - recommendation editor
  - product quality checks
  - home manager for Wing 3 data
  - expanded Violet metafield/metaobject setup script

What is not solved yet:

- Real Shopify data is still needed for many home sections to appear.
- The theme is uploaded as unpublished and can be previewed.
- Mobile/desktop smoke QA passed for home, collection, product, and empty cart.
- Cookie consent banner in development preview currently blocks click-based QA until dismissed/disabled from Shopify customer privacy settings.
- Several Wing 3 sections are intentionally empty until real shop metaobjects are assigned from Appi Home Manager.
- Appi can assign existing editorial metaobjects, but it does not yet create/edit those metaobjects from a polished form.

Immediate build order from here:

1. Appi Home Manager v2
   - create/edit shop the look items
   - create/edit lookbook items
   - create/edit FAQ, timeline, logos, testimonials
   - keep the current assign/diagnose screen

2. Theme Preview Gate
   - disable/dismiss cookie consent for QA or test in a clean browser state where it can be closed
   - test quick view click
   - test add to cart with an available product
   - test cart with line item, free shipping bar, gift, upsell/cross-sell
   - record fixes as P1/P2/P3

3. Mobile Commerce Layer
   - bottom mobile bar
   - search/cart/account shortcuts
   - check sticky product CTA does not fight cart drawer
   - no desktop clutter

4. Navigation Wing
   - mega menu with images
   - stronger mobile menu
   - predictive search presentation
   - breadcrumbs review

5. Product/Appi Deepening
   - `Mejorar producto` starts filling Violet metafields
   - before/after review
   - batch apply
   - AI suggestions remain approvable, not automatic blind writes

Definition of "my house works":

- A product can be enriched in Appi and shown complete in CMS.
- A collection can guide browsing without looking flat.
- The home can be fed from Appi and show real editorial commerce.
- Cart can recommend without fake urgency.
- Every phase produces a clean zip.

## Mansion Plan

### Wing 1: Product + Cart

This comes first because this is where the purchase happens.

- Finish complete product page. In progress.
- Polish Violet cart. In progress.
- Recommendations working. Done for CMS + manual Appi editor.
- Size/confidence working. Done for CMS.
- Honest purchase messages.
- Uploadable zip.

Done when:

- A product can be enriched by Violet Appi data and displayed as a complete product page.
- Cart drawer/page can guide the order with free shipping, recommendations, optional gift, and trust copy.
- Theme Check is clean and a zip can be uploaded.

### Wing 2: Collections

This is where discovery starts to feel like a proper store, not a flat catalog.

- Sober quick view. Done.
- Product badges. Done.
- Subcollections. Done.
- Featured product. Done.
- Better-presented filters.
- Better-presented filters. Done.
- More configurable grid. Done.

Done when:

- Customers can scan a collection, understand product differences, preview a product, and add quickly.
- Collections can carry editorial context without needing many duplicated templates.

## Phase G: Collection Grid Pro

CMS build:

- Added collection toolbar with product count and active filter count.
- Added configurable grid layout:
  - standard
  - editorial with first product featured
- Kept Dawn filters as the functional base.
- Improved Violet filter panel treatment, active checkbox state, and compact pill styling.
- Preserved quick view and quick add behavior.

Preview QA:

- Theme Check clean.
- Locale/template JSON clean.
- Preview collection renders toolbar, filters, editorial grid class, one featured product, and quick view buttons.
- Applying a real availability filter updates the toolbar with 1 active filter.

Done when:

- Collection does not feel like a flat catalog.
- Filters are clearer without replacing Shopify's native filtering logic.
- Grid can be tuned from the theme editor without adding duplicate templates.

### Wing 3: Home And Editorial

This is the facade and the story of the mansion.

- Strong hero.
- Editorial grid.
- Logos.
- Testimonials.
- Timeline.
- FAQ.
- Newsletter.
- Shop the look.
- Lookbook.

Done when:

- Home can introduce the store, guide people to collections/products, and show editorial content that is actually shoppable.
- Shop/editorial metafields can be filled by Violet Appi without editing Liquid.
- Hero and newsletter feel like Violet, not generic Dawn blocks.

## Master Plan P0-P10

### P0: License And Cleanliness

Always keep this rule:

Premium themes are references, not source code.

- Do not copy premium Liquid, CSS, JavaScript, fonts, icons, images, assets, or schemas.
- All own CMS code must live under `violet-*` naming where practical.
- Run Theme Check before every zip.
- Create an uploadable zip after every phase.
- Keep Dawn as the stable technical base.

### P1: Recommendations

Status: started.

This is the commercial spine of Violet.

- Product:
  - `bought_together`
  - `related_products`
  - `upsell`
- Cart:
  - `cross_sell`
  - `upsell`
  - optional gift
  - free shipping bar
- Appi:
  - detect products without recommendations
  - suggest related products, cross-sell, and bought together
  - visual editor to review/approve recommendations
- CMS:
  - unified reusable recommendation snippet

### P2: Size And Trust

Status: CMS block started.

- `violet-size-guide`
- `fit_notes`
- `delivery_note`
- `returns_note`
- `availability_message`
- improved trust badges
- honest availability messages
- Appi detects products without size guide, fit notes, or clear promises
- Appi suggests copy by category, vendor, and product type

### P3: Premium Product Page

Turn the product page into a rich commercial page.

- Product story
- Inspiration
- Materials/care
- Benefits
- FAQ
- Gift ideas
- Trust badges
- Video/product media improvements
- Recently viewed
- Polished mobile sticky add to cart
- Appi button: `Mejorar producto`

### P4: Selling Collections

Do not create 20 templates.

Create one strong collection experience.

- Editorial banner
- Editorial text
- Subcollections
- Featured product
- Product card badges
- Clear quick add
- Sober quick view
- Configurable grid
- Better-presented Dawn filters
- Appi detects poor collections or missing editorial content

### P5: Violet Cart

The base exists, but it can become much stronger.

- Free shipping bar
- Sober cross-sell
- Upsell
- Optional gift
- Better order note presentation
- Recommendations from cart contents
- Trust message before checkout
- No fake urgency
- Appi configures threshold, gifts, and recommended rules later

### P6: Mobile Commerce

This gives Violet a premium feel quickly.

- Optional bottom mobile bar:
  - menu
  - search
  - cart
  - account
- Sticky CTA coordinated with product page
- Clearer drawer cart
- More accessible search
- Improved mobile mega menu
- Check that nothing covers buttons or checkout

### P7: Editorial / Shop The Look

The beautiful CMS commerce layer.

- `violet-shop-the-look`
- Lookbook
- Image with clickable product points
- Editorial blocks linked to products
- Brand timeline
- Testimonials linked to products
- Appi suggests products for each story/look later

### P8: Navigation

After product, cart, and collection foundations.

- Mega menu with images
- Mega menu by collection/featured product
- Global breadcrumbs
- Predictive search integrated well
- Better organized mobile menu
- Appi is not essential here except possible category suggestions

### P9: Professional Appi

The Appi must become a real workshop, not only a console.

- Quality dashboard
- Product 360
- Violet metafield editor
- `Mejorar producto` button
- Review queue
- Batch apply changes
- Before/after view
- Publish/unpublish
- Margins, SEO, images, ALT
- AI recommendations that are approvable, not blindly automatic

### P10: Quality System

So the house does not break.

- P1 checklist before upload
- Theme Check
- JSON parse
- Zip test
- App lint/typecheck
- Test on unpublished theme
- Required/optional metafield list
- Installation documentation

## Phase 1: Recommendation Spine

Goal: one data contract that powers product, cart, and collection recommendations.

Why now:

- Organix shows this is the most valuable modern pattern.
- Violet Appi can generate this data.
- Violet CMS already has product and cart surfaces ready.

Build:

- Extend product metafields:
  - `related_products`
  - `cross_sell`
  - `upsell`
  - `bought_together`
  - `recommendation_note`
- Keep existing `buy_together` as compatible input or migrate it deliberately.
- Add one shared snippet:
  - `violet-product-recommendations`
- Use the same contract in:
  - product page
  - cart drawer
  - cart page
  - later quick view

Appi work:

- Add recommendation fields to product quality checks.
- Add "suggest recommendations" to Mejorar producto.
- Detect products with no related/cross-sell/bought-together data.

Done when:

- A product can show bought together and related products.
- Cart drawer can show sober cross-sell from products already in cart.
- Empty recommendation data hides cleanly.
- Theme Check stays clean.

## Phase 2: Product Confidence System

Goal: make each product feel complete and trustworthy.

Build:

- `violet-size-guide`
- `violet-stock-confidence`
- stronger `violet-trust-badges`
- optional delivery/returns promise block
- better mobile sticky add to cart behavior

Data contract:

- `size_guide`
- `fit_notes`
- `delivery_note`
- `returns_note`
- `availability_message`

Appi work:

- Detect missing size/fit data.
- Detect weak trust data.
- Suggest delivery/returns copy from store defaults.

Done when:

- Product page covers the main purchase doubts without fake urgency.
- Mobile product CTA is always clear.

## Phase 3: Collection Discovery

Goal: collections should help customers scan, narrow, and choose.

Build:

- Quick view as a minimal modal.
- Product card badges from Violet data.
- Subcollection strip refinement.
- Optional collection highlight/product spotlight.
- Violet filter styling over Dawn facets.
- Grid density settings: comfortable, balanced, compact.
- Configurable number of visible card badges.

Data contract:

- `product.metafields.violet.badges`
- `product.metafields.violet.quick_summary`
- `collection.metafields.violet.featured_products`
- Section settings: `violet_grid_density`, `violet_filter_style`, `violet_badge_limit`

Appi work:

- Generate short product selling point for quick view/card.
- Detect products not ready for quick view.

Done when:

- Collection pages sell more without becoming noisy.
- Quick view does not duplicate the full product page.

## Phase 4: Mobile Commerce Layer

Goal: make the shop feel faster and more usable on mobile.

Build:

- Optional bottom mobile commerce bar:
  - menu
  - search
  - cart
  - account
- Drawer/minicart polish.
- Sticky cart/product actions cleanup.

Rules:

- No app-like clutter on desktop.
- No duplicate CTAs fighting each other.
- Use Dawn behavior where possible.

Done when:

- Mobile navigation, search, and cart are reachable in one tap.
- Product sticky CTA and bottom bar do not overlap.

## Phase 5: Editorial Selling

Goal: turn CMS content into shoppable experiences.

Build:

- `violet-hero`
- `violet-shop-the-look`
- `violet-lookbook`
- `violet-newsletter`
- richer editorial product blocks
- optional before/after or process section only if product category needs it

Data contract:

- Metaobject: `violet_shop_the_look`
  - image
  - title
  - text
  - product references
  - cta
- Metaobject: `violet_lookbook_item`
  - image
  - label
  - title
  - text
  - product / collection
  - cta

Appi work:

- Suggest products for a look/story.
- Detect orphan products that are not used in any editorial surface.
- Home manager: detect missing shop the look, lookbook, logos, testimonials, FAQ, timeline, and newsletter incentive.
- Home manager: assign existing editorial metaobjects to `shop.metafields.violet`.

Done when:

- Home and content pages can sell products without feeling like generic banners.

## Later / Parked

Do later only if there is a real need:

- Wishlist
- Compare
- Back-in-stock notification
- Shipping calculator
- Infinite scroll
- Heavy sliders
- Popups

These exist in premium references, but they add complexity and should not be first-class Violet features yet.

## Agreed Build Order

1. Finish size / confidence.
2. Create recommendations editor in Violet Appi.
3. Build sober collection quick view.
4. Polish Violet cart with clearer rules.
5. Add shop the look.
6. Add mega menu / mobile commerce bar.

## Phase A: Finish Size / Confidence

CMS build:

- `violet-size-confidence` product snippet. Done.
- Show size guide link from `product.metafields.violet.size_guide`.
- Show `fit_notes`, `delivery_note`, `returns_note`, and `availability_message`.
- Reuse Dawn accordion/details patterns where possible.
- Add product block in `main-product`. Done.

Appi build:

- Keep quality checks already added for missing confidence data.
- Add a product detail/editor surface later for these fields.

Done when:

- A product with any confidence field renders a tidy confidence block.
- Empty fields hide cleanly.
- Theme Check passes.
- New uploadable zip is created.

## Phase B: Recommendations Editor In Violet Appi

Appi build:

- Product detail route for recommendations. Done.
- Show current:
  - bought together
  - related products
  - cross-sell
  - upsell
  - recommendation note
- Search/select products from Shopify catalog. Done.
- Save metafields using Admin API. Done.
- Commercial map summary by group. Done.
- Candidate filters:
  - all
  - active
  - same vendor
  - same product type
  - selected
- Remove selected products from the summary without hunting through the grid. Done.
- Normalize saved product references to avoid duplicates and self-references. Done.
- Warn when the same product appears in multiple groups. Done.
- Keep existing `buy_together` as legacy fallback only.
- Later: AI suggestions for each recommendation group.

CMS build:

- No major CMS work expected unless editor reveals field naming issues.

Done when:

- From Appi, one product can be assigned recommendation groups.
- CMS product page and cart drawer read those groups.
- Typecheck/lint pass.
- Next QA: save one real product with related, bought together, cross-sell, and upsell; then verify product page and cart drawer in preview.

QA 2026-07-05:

- Appi dev preview connected to `violet-en-desarrollo.myshopify.com`.
- Real metafields saved for `292-womens-slip-on-mesh-running-shoes`:
  - `bought_together`: 2 products
  - `related_products`: 2 products
  - `cross_sell`: 2 products
  - `upsell`: 1 product
  - `recommendation_note`: 1 note
- Admin API readback confirmed all five metafields.
- Product preview confirmed:
  - `violet-buy-together` renders.
  - `violet-product-recommendations` renders.
  - Recommendation note renders.
- Cart page confirmed:
  - Cross-sell products render with Add buttons.
  - Trust message renders.
  - No `Translation missing` after heading fix.
- Cart drawer confirmed:
  - Drawer reads the same cross-sell products.
  - Drawer heading renders as translated text.
  - Trust message renders.
- QA cart was cleared after the test.

## Phase C: Sober Collection Quick View

CMS build:

- Minimal quick view modal for product cards. Done.
- Use product title, image, price, variants, add button, and link to full product.
- Avoid duplicating the full product page.
- Hide or simplify when product has complex selling plans/options.
- Show compact availability/options facts so the modal helps decide without pretending to be the full product page. Done.
- Only show Add to cart inside quick view for single-variant available products. Done.

Appi build:

- Add quality signal for products not ready for quick view:
  - no image
  - no description
  - unavailable
  - missing recommendation/confidence data

Done when:

- Collection cards can open a lightweight product preview.
- Add to cart works through Dawn-compatible Cart AJAX.
- Theme Check passes.

## Phase D: Polish Violet Cart Rules

CMS build:

- Document and implement recommendation priority:
  - cart item cross-sell
  - cart item upsell
  - bought together fallback
  - configured gift
- Prevent duplicated recommendations.
- Add optional max items setting.
- Keep free shipping threshold from `shop.metafields.violet.free_shipping_threshold`.
- Improve order note presentation if it feels buried.
- Add honest trust message before checkout. Done.
- Mark rendered cart recommendations with `data-violet-cart-rule` so the source rule is visible in DOM QA. Done.
- Clamp free shipping progress between 0 and 100. Done.

Appi build:

- Later: store-level settings dashboard for free shipping threshold and gift product.

Done when:

- Cart recommendations feel intentional, not random.
- No duplicate products already in cart.
- Drawer and cart page stay compact.

## Phase E: Shop The Look

CMS build:

- `violet-shop-the-look` section. Done.
- Manual theme-editor blocks. Done.
- Image with product points. Done.
- Mobile-friendly stacked product list. Done.
- Product references from blocks first. Done.
- Fallback support for `shop.metafields.violet.shop_the_looks`. Done.

Data contract:

- `shop.metafields.violet.shop_the_looks` remains supported for Appi-fed home data.
- Manual blocks are now the fast path for building looks without waiting for metaobjects.

Appi build:

- Later: suggest products for a look/story.

Done when:

- Merchant can create one shoppable editorial image from the theme editor. Done.
- Section works on home. Done.
- Later: validate same section on page and product templates if we add it there.

## Phase F: Mega Menu / Mobile Bar

CMS build:

- Image-aware mega menu using Dawn navigation as base.
- Optional mobile bottom commerce bar:
  - menu
  - search
  - cart
  - account
- Make sure sticky product CTA, chat/apps, and bottom bar do not overlap.

Done when:

- Navigation feels premium on mobile and desktop.
- No duplicated controls or layout clashes.

## P0 Preview QA - 2026-07-05

Store:

- `violet-en-desarrollo.myshopify.com`
- Unpublished theme: `Violet CMS 0.1.8`
- Theme ID: `205725466973`
- Preview: `https://violet-en-desarrollo.myshopify.com?preview_theme_id=205725466973`
- Uploadable zip: `/Users/robertodiazvina/Downloads/violet-cms-shopify-theme-0.1.8-p0-preview-fix.zip`

Passed:

- Home loads on desktop and mobile without horizontal overflow.
- Product page loads on desktop and mobile without horizontal overflow.
- Collection page loads with Violet filters, configurable grid, badges, breadcrumbs, and quick view controls.
- Quick view opens from collection and shows product summary, price, media/content, and full product link.
- Add to cart works from an available product page.
- Cart drawer opens with a real product in the cart.
- Cart drawer shows the real line item, quantity/price, and Violet trust message.
- Cart page/drawer can render with a real cart item.

Blocked / needs store data:

- Shopify cookie/privacy banner is still blocking click-based QA in preview. Disable it temporarily in Shopify Admin before the next full pass.
- Free shipping bar is not visible because `shop.metafields.violet.free_shipping_threshold` is not configured yet.
- Optional gift is not visible because `settings.violet_gift_product` is empty.
- Cart upsell/cross-sell is not visible because the tested cart product has no `violet.cross_sell`, `violet.upsell`, or fallback recommendation metafields configured.
- Wing 3 editorial sections that read shop metaobjects stay hidden until real metaobjects are created and assigned.

Notes:

- The sticky mobile add-to-cart can visually collide with the Shopify preview bar. Recheck without the preview bar before treating it as a theme defect.
- The current P0 risk is data/configuration, not a broken checkout path.
