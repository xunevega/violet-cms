# Violet CMS 0.4.1

Patch de QA movil final sobre 0.4.0.

## Corregido

- El drawer cerrado ya no deja su panel fuera de pantalla aportando ancho lateral.
- El carrusel Violet de productos queda recortado por su contenedor en movil y mantiene su scroll interno.
- Guard movil global para evitar scroll horizontal accidental en el documento.

## QA movil

- Home:
  - sin scroll horizontal real.
  - mobile bar visible y estable.
- Producto:
  - sticky add to cart aparece sobre la mobile bar.
  - sticky y mobile bar no se pisan.
  - sin overflow horizontal.
- Coleccion:
  - quick view abre en pantalla completa movil.
  - cierre visible.
  - add to cart real abre drawer.
- Drawer cart:
  - activo en movil.
  - checkout visible.
  - item compacto sin solapes.
  - consola sin errores.

## Admin / contenido

- Blog, paginas legales, contacto, redes, footer real y productos amueblados quedan fuera del codigo del tema.
