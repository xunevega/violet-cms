# Violet Data Contract

Este contrato define los datos que Violet Appi escribe y Violet CMS muestra.

Namespace principal: `violet`.

## Principios

- Shopify sigue siendo la fuente de verdad de productos, variantes, colecciones y carrito.
- Violet Appi solo enriquece datos Shopify y metafields.
- Violet CMS solo lee datos Shopify, metafields y metaobjects.
- Los campos vacios no deben renderizar bloques vacios.
- Los cambios de nombre deben considerarse migraciones, no ajustes casuales.

## Product metafields

Owner: `PRODUCT`.

| Key | Type | Uso en CMS |
| --- | --- | --- |
| `story` | `rich_text_field` | Historia del producto |
| `inspiration` | `rich_text_field` | Inspiracion y contexto comercial |
| `materials` | `list.single_line_text_field` | Lista de materiales |
| `care` | `multi_line_text_field` | Cuidados |
| `trust_badges` | `list.metaobject_reference` -> `violet_trust_badge` | Badges especificos del producto |
| `benefits` | `list.metaobject_reference` -> `violet_benefit_item` | Beneficios comerciales |
| `gift_occasions` | `list.single_line_text_field` | Ideas de regalo |
| `faqs` | `list.metaobject_reference` -> `violet_faq_item` | FAQ especifica del producto |
| `badges` | `list.single_line_text_field` | Badges visibles en cards/listados |
| `quick_summary` | `single_line_text_field` | Resumen corto para quick view/cards |
| `size_guide` | `page_reference` | Pagina de guia de tallas/medidas |
| `fit_notes` | `multi_line_text_field` | Notas de talla, encaje o ajuste |
| `delivery_note` | `single_line_text_field` | Nota de envio especifica |
| `returns_note` | `single_line_text_field` | Nota de devoluciones especifica |
| `availability_message` | `single_line_text_field` | Mensaje honesto de disponibilidad |

## Collection metafields

Owner: `COLLECTION`.

| Key | Type | Uso en CMS |
| --- | --- | --- |
| `editorial_banner` | `file_reference` | Imagen editorial de coleccion |
| `editorial_text` | `rich_text_field` | Texto editorial |
| `subcollections` | `list.collection_reference` | Navegacion por subcolecciones |
| `featured_block` | `metaobject_reference` -> `violet_editorial_block` | Bloque destacado |
| `featured_products` | `list.product_reference` | Productos destacados de coleccion |

## Shop metafields

Owner: `SHOP`.

| Key | Type | Uso en CMS |
| --- | --- | --- |
| `trust_badges_default` | `list.metaobject_reference` -> `violet_trust_badge` | Badges por defecto |
| `faqs_global` | `list.metaobject_reference` -> `violet_faq_item` | FAQ global |
| `brand_logos` | `list.metaobject_reference` -> `violet_brand_logo` | Logos de marca |
| `timeline` | `list.metaobject_reference` -> `violet_timeline_item` | Timeline de marca |
| `shop_the_looks` | `list.metaobject_reference` -> `violet_shop_the_look` | Looks comprables en home |
| `lookbook` | `list.metaobject_reference` -> `violet_lookbook_item` | Lookbook editorial |
| `free_shipping_threshold` | `number_decimal` | Barra de envio gratis |
| `newsletter_incentive` | `single_line_text_field` | Incentivo newsletter |

## Metaobjects

### `violet_benefit_item`

- `icon`: `file_reference`
- `title`: `single_line_text_field`
- `text`: `multi_line_text_field`

### `violet_trust_badge`

- `icon`: `file_reference`
- `title`: `single_line_text_field`
- `text`: `single_line_text_field`

### `violet_faq_item`

- `question`: `single_line_text_field`
- `answer`: `rich_text_field`
- `scope`: `single_line_text_field`

### `violet_editorial_block`

- `image`: `file_reference`
- `title`: `single_line_text_field`
- `text`: `rich_text_field`
- `cta_label`: `single_line_text_field`
- `cta_url`: `url`

### `violet_timeline_item`

- `label`: `single_line_text_field`
- `title`: `single_line_text_field`
- `text`: `multi_line_text_field`
- `image`: `file_reference`

### `violet_brand_logo`

- `image`: `file_reference`
- `alt`: `single_line_text_field`
- `url`: `url`

### `violet_shop_the_look`

- `image`: `file_reference`
- `title`: `single_line_text_field`
- `text`: `multi_line_text_field`
- `products`: `list.product_reference`
- `cta_label`: `single_line_text_field`
- `cta_url`: `url`

### `violet_lookbook_item`

- `image`: `file_reference`
- `label`: `single_line_text_field`
- `title`: `single_line_text_field`
- `text`: `multi_line_text_field`
- `product`: `product_reference`
- `collection`: `collection_reference`
- `cta_label`: `single_line_text_field`
- `cta_url`: `url`

## Setup source

La definicion ejecutable vive en:

`/Users/robertodiazvina/appis/consola-app/scripts/setup-violet-metaobjects.mjs`

Cuando este contrato cambie, ese script debe actualizarse en el mismo cambio.
