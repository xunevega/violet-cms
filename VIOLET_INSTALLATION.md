# Violet CMS Installation

## 1. Preparar datos Violet

Desde la app Shopify (`consola-app`), ejecutar el setup contra una tienda de desarrollo:

```sh
SHOP=tu-tienda.myshopify.com ADMIN_TOKEN=shpat_xxx node scripts/setup-violet-metaobjects.mjs
```

Esto crea los metaobjects y metafields del contrato `violet`.

## 2. Subir el tema

Subir el zip generado desde Shopify Admin:

Online Store -> Themes -> Add theme -> Upload zip file.

## 3. Configurar ajustes base

En Theme editor:

- Cart type: `Drawer`.
- Cart note: activo.
- Violet gift product: opcional.
- Free shipping threshold: `shop.metafields.violet.free_shipping_threshold`.
- Home: revisar hero, editorial grid, productos destacados y secciones Violet.
- Producto: revisar bloques Violet en la ficha.
- Coleccion: revisar editorial, filtros, quick add y breadcrumbs.

## 4. Probar antes de publicar

Probar en tienda de desarrollo:

- Home.
- Producto con metafields Violet.
- Producto sin metafields Violet.
- Coleccion con banner/subcolecciones.
- Coleccion sin datos editoriales.
- Quick add.
- Sticky Add to Cart.
- Buy Together.
- Drawer cart.
- Barra de envio gratis.
- Regalo opcional.
- Upsell/cross-sell.
- Checkout.

## 5. Validaciones locales

```sh
shopify theme check
```

El tema debe pasar sin offenses antes de empaquetar o subir.
