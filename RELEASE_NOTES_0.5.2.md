# Violet CMS 0.5.2

QA en preview real (theme `Violet CMS 0.5.1`, id 205725466973, tienda de desarrollo).

## Corregido

- Drawer del carrito: un solo scroll. Los paneles Violet (envío, regalo, cross-sell, notas) ya no reducían la lista de productos a ~59 px; el checkout queda fijo abajo.
- Hero: el oscurecido nunca se mostraba porque Dawn oculta `div:empty`. Ahora se pinta, con degradado más oscuro bajo el texto.
- Texto enriquecido de metafields y metaobjects (editorial de colección, bloque destacado, FAQ, historia, inspiración) se mostraba como JSON en crudo; ahora usa `metafield_tag`.
- `violet-collection-showcase`: el relleno con "all" solo ocurre en el editor. En tienda la sección se oculta si la colección no existe (antes mostraba "Products" con todo el catálogo).
- `card-product`: filtro dentro de `render` (error de Theme Check que Shopify reescribía).
- Carrito: máximo de recomendaciones configurable (1-6), `bought_together` como fallback, sin repetir el regalo, `data-violet-cart-rule` en cada sugerencia.
- Tildes en textos visibles, ajustes del editor y `locales/es.json`.

## Pendiente de contenido (no es código)

- Idioma por defecto de la tienda de desarrollo en inglés: botones de Dawn salen como "Add to cart".
- Media studio con imágenes y vídeo de demo ajenos a la marca (unos 11 MB en assets).
- Bloque editorial de la home con texto de demo que habla del propio CMS.
- Regalo del carrito: un bolso de 39,99 € presentado como "Añade un regalo".
- Timeline y logos de marca sin datos.
- Bloques "cómpralos juntos" y recomendaciones en ficha (línea 0.1.x) sin usar en ninguna plantilla.

## Validación

- Theme Check: 0 errores, 1 aviso heredado de Dawn (`facets.liquid`).
- Preview: home, colección, producto y drawer sin errores Liquid, sin traducciones ausentes y sin scroll horizontal (577 px y 1280 px).
