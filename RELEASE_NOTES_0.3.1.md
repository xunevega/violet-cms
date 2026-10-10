# Violet CMS 0.3.1

Release de limpieza de casa: carrito mas fluido, home menos decorativa y footer con informacion real.

## Incluido

- Sticky add to cart conectado al `product-form` de Dawn para abrir drawer cart por AJAX.
- Fallback Violet para formularios sueltos de `/cart/add` sin interferir con los `product-form` nativos.
- Home simplificada: fuera lookbook, timeline, FAQ y newsletter preinsertados.
- Home con bloque de blog destacado: `Diario Violet`.
- Footer con columnas de identidad, enlaces de casa, legal y contacto.
- Newsletter del footer desactivada por defecto.
- Selector de pais/idioma desactivado en footer por defecto para reducir ruido.

## QA Realizada

- Theme Check limpio.
- Subida correcta al theme de desarrollo.
- Prueba movil de sticky add to cart: abre drawer, mantiene la URL del producto y muestra producto, envio gratis y regalo opcional.

## Notas

- Los enlaces del footer a `/pages/sobre-nosotros` y `/pages/contacto` necesitan paginas reales creadas en Shopify.
- Blog usa el blog `news`; si no hay articulos, la seccion no tendra contenido fuerte hasta crear entradas.
- Cookies/privacidad queda pendiente como decision de produccion, no como popup agresivo.
