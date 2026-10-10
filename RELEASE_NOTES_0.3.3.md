# Violet CMS 0.3.3

Fase centrada en carrito real y auditoria premium sin maquillaje.

## Carrito

- Compactados visualmente los items del drawer cart.
- Imagenes, titulos, precios y cantidad ocupan menos altura.
- Mantiene la logica de Dawn para cantidad, errores y remove.
- Anadido `violet-cart-cross-sell`.
- Cross-sell maximo 1-2 productos.
- Cross-sell solo aparece si hay metafields reales.
- Sin popup, sin urgencia falsa, sin recomendaciones inventadas.

## Contrato De Cross-Sell

El carrito lee relaciones desde el producto en este orden:

1. `product.metafields.violet.cart_cross_sell`
2. `product.metafields.violet.cross_sell`
3. `product.metafields.violet.upsell`
4. `product.metafields.violet.related_products`

## Auditoria

- Actualizado `VIOLET_CART_PREMIUM_AUDIT.md`.
- Se reconoce que carrito y carruseles premium eran mejores en varias partes.
- Se dejan acciones concretas: carrito compacto ahora, `violet-product-carousel` como siguiente bloque fuerte.

## Validacion

- Theme Check limpio.
- Theme subido a desarrollo.
- Zip subible generado.
