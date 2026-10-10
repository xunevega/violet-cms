# Violet CMS 0.2.0

## Alcance

Primera version de ala funcional: producto, carrito, coleccion, home editorial y navegacion movil.

## Incluye

- Producto premium: sticky add to cart, bloques Violet, confianza, tallas, historia, beneficios, FAQ e ideas de regalo.
- Carrito Violet: drawer cart, regalo opcional, mensaje de confianza y soporte para envio gratis por metafield.
- Colecciones: quick view sobrio, badges, filtros Dawn mejor presentados y grid configurable.
- Home editorial: hero, editorial grid, logos, timeline, FAQ, newsletter, lookbook y shop the look.
- Navegacion: mega menu con tarjetas, breadcrumbs y mobile commerce bar opcional.
- Contrato Appi/CMS: metafields Violet para producto, carrito y contenido editorial.

## QA movil

- Home: sin overflow horizontal; mobile bar visible; Shop the Look renderiza hotspots y productos.
- Producto: sin overflow horizontal; sticky add to cart queda encima de la mobile bar sin solaparse.
- Coleccion: sin overflow horizontal; filtros activos funcionan; quick view abre con contenido de producto.
- Carrito: producto real añadido; drawer cart abre desde cabecera; regalo opcional y mensaje de confianza visibles.

## Notas

- En preview de Shopify, el iframe de la barra inferior de preview puede bloquear clicks sobre la mobile commerce bar. No es un bloqueo del tema en tienda real; para probarlo manualmente hay que ocultar la preview bar o salir del modo preview.
- Envio gratis requiere `shop.metafields.violet.free_shipping_threshold`.
- Regalo opcional requiere `shop.metafields.violet.cart_gift_product_handle` o configurar el producto regalo en theme settings.
- Los bloques editoriales se ocultan si no hay datos utiles, para no ensuciar la tienda con contenido vacio.

## Validacion

- `shopify theme check`: limpio, 196 archivos inspeccionados, 0 errores.
- Theme no publicado probado en `violet-en-desarrollo.myshopify.com`, theme id `205725466973`.
