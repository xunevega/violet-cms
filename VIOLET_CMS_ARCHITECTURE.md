# Violet CMS Architecture

Violet CMS debe crecer como una capa propia sobre Dawn, no como un reemplazo completo.

## Mejor opcion

Mantener Dawn como base tecnica y crear una capa `violet-*` encima:

- secciones Violet para Home, coleccion, producto y carrito
- snippets Violet para piezas pequeñas dentro de secciones Dawn
- assets Violet compartidos solo cuando haya patrones comunes
- metafields y metaobjects como contrato con Violet Appi

Esta opcion permite avanzar rapido sin perder compatibilidad con Shopify, Theme Check ni futuras actualizaciones de Dawn.

## La casa del CMS

### 1. Home

Objetivo: escaparate editorial.

Secciones Violet iniciales:

- `violet-editorial-grid`
- `violet-hero`
- `violet-brand-logos`
- `violet-testimonials`
- `violet-timeline`
- `violet-faq`
- `violet-shop-the-look`
- `violet-lookbook`
- `violet-newsletter`

`violet-editorial-grid` permite componer la entrada desde bloques manuales del editor de temas.

El resto lee datos globales de `shop.metafields.violet`.

`violet-shop-the-look` agrupa imagen editorial y productos asociados para convertir inspiracion en compra directa.

`violet-lookbook` muestra piezas visuales enlazadas a producto, coleccion o URL manual.

`violet-hero` es la puerta principal: imagen o video, CTA doble, mensaje de confianza y destacado opcional.

`violet-newsletter` usa el formulario nativo de Shopify y lee `shop.metafields.violet.newsletter_incentive` como incentivo editable desde Appi/Admin.

### 2. Producto

Objetivo: conversion y riqueza comercial.

Piezas Violet iniciales:

- sticky add to cart
- historia e inspiracion
- materiales y cuidados
- ocasiones de regalo
- beneficios
- trust badges
- FAQ
- buy together

Estas piezas leen datos de `product.metafields.violet` y, cuando aplica, fallback global de tienda.

### 3. Coleccion

Objetivo: colecciones mas editoriales y faciles de explorar.

Piezas Violet iniciales:

- `violet-breadcrumbs`
- `violet-collection-editorial`

Lee datos de `collection.metafields.violet`:

- banner editorial
- texto editorial
- subcolecciones
- bloque destacado

Dawn mantiene filtros, ordenacion, grid, paginacion y quick add. Violet configura la plantilla base con quick add y segunda imagen activos para que la coleccion sea mas exploratoria.

La capa Violet de colecciones vive encima de Dawn:

- filtros con estilo visual `panel` o `minimal`
- grid con densidad `comfortable`, `balanced` o `compact`
- limite configurable de badges visibles en cada card
- quick view sobrio conectado a `quick_summary`

### 4. Carrito

Objetivo: checkout mejor guiado sin trucos agresivos.

Piezas Violet iniciales:

- drawer cart como experiencia base
- nota de pedido visible
- breadcrumbs en pagina de carrito
- barra de envio gratis
- regalo opcional configurable
- upsell sobrio
- cross-sell

Pendiente:

- nota de pedido mejor presentada

La barra de envio gratis usa `shop.metafields.violet.free_shipping_threshold`.

Los upsells/cross-sells del carrito leen `product.metafields.violet.buy_together` desde los productos que ya estan en el carrito.

El regalo opcional usa el ajuste global `settings.violet_gift_product`.

## Referencias premium

Los temas premium exportados pueden usarse como referencia de patrones:

- que experiencias incluyen
- donde colocan upsells, cross-sells y mensajes
- como agrupan configuraciones
- que problemas resuelven en producto, coleccion y carrito

No se debe copiar codigo premium tal cual en Violet. La capa Violet debe reimplementar las ideas con codigo propio, compatible con Dawn y con el contrato de metafields `violet`.

## Reglas de crecimiento

- Si una pieza depende de datos Violet, debe llamarse `violet-*`.
- Si una pieza solo ajusta Dawn, debe ser un cambio pequeno dentro de la seccion Dawn.
- Las secciones nuevas deben ocultarse solas cuando no haya datos.
- Las mejoras deben poder configurarse desde el editor de temas sin tocar codigo.
- El JavaScript debe ser progresivo y pequeno.
- No duplicar una funcion Dawn si basta con envolverla o extenderla.

## Proxima mejora recomendada

Crear el primer editor de metafields Violet dentro de Violet Appi.

Motivo: el CMS ya tiene lugares donde mostrar datos. El siguiente salto de valor es poder rellenarlos y revisarlos desde la app con el boton `Mejorar producto`.
