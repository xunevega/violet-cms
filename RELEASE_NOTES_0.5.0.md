# Violet CMS 0.5.0

Editor controls pass.

## Enfoque

Esta version mejora Violet como CMS editable desde Shopify Admin. No anade contenido real de tienda. Anade estructura, controles y variantes para que el admin pueda montar paginas, productos, colecciones, header y footer con mas criterio sin tocar codigo.

Los themes premium revisados se han usado como referencia funcional de estructura y opciones. No se ha copiado Liquid, CSS, JS ni assets premium.

## Cambios principales

- Controles comunes en secciones Violet: ancho, alineacion, separadores, padding y visibilidad movil/escritorio.
- Hero Violet con alturas configurables y visibilidad por dispositivo.
- Carrusel Violet con controles de layout y separadores.
- Header con ancho configurable, iconos activables y opciones de mobile commerce bar.
- Footer con controles de ancho, layout, separador, politicas, redes, contacto y powered-by.
- Nuevas variantes de templates:
  - `product.compact`
  - `product.editorial`
  - `collection.editorial`
  - `collection.drawer-filters`
  - `page.editorial`
  - `blog.grid`

## Validacion

- Theme Check: limpio.
- JSON templates/config/locales: correcto.
- JS check: correcto.
- Subido a theme de desarrollo `205672939869` en `violet-en-desarrollo.myshopify.com`.

## Siguiente bloque recomendado

- Revisar en el editor real que cada seccion tenga preview decente.
- Ajustar nombres/orden de presets segun lo que resulte mas comodo usando Admin.
- Si una variante de template sobra o se solapa, simplificarla antes de seguir anadiendo alas.
