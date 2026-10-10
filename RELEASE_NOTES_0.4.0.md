# Violet CMS 0.4.0

Release centrada en QA desktop, carrito y cierre estable del ala actual.

## Incluye

- Drawer cart como destino principal de los add to cart.
- Correccion de prioridad: si existe drawer, no se usa cart notification como superficie principal.
- Items del drawer compactados en desktop para evitar solapes y ruido visual.
- Add gift por AJAX usando FormData y respuesta JSON segura.
- Carrito con envio gratis, regalo sobrio, cross-sell y mensaje honesto antes de checkout.
- Home, producto, coleccion, quick view y drawer listos para preview en theme no publicado.

## QA

- Theme Check limpio.
- JSON templates/locales/config parseados correctamente.
- JavaScript principal del carrito, product form y quick add validado con `node --check`.
- QA desktop rapido en coleccion:
  - sin overflow horizontal.
  - add to cart real abre drawer.
  - drawer activo y bloquea body.
  - checkout visible.
  - items sin solapes entre imagen, titulo, precio y cantidad.
  - consola sin errores.

## Siguiente para 0.4.x

- QA movil final de regresion.
- Contenido real desde Admin: blog, paginas legales/contacto y redes.
- Decision final de privacidad/cookies para produccion con banner sobrio.
