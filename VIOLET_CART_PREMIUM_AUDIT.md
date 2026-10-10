# Violet Premium Audit: Acciones Reales

Auditoria honesta entre Violet CMS y los themes premium licenciados usados como cantera.

## Veredicto Corto

Si, nuestro carrito era peor que varios premium en densidad visual y merchandising.
Funcionaba, pero se notaba Dawn: items demasiado altos, poco ritmo comercial y cross-sell sin bloque propio.

Tambien si: nuestro carrusel/base de sliders es mas flojo que varios premium.
Dawn trae slider correcto, pero no se siente como sistema editorial/comercial fuerte. Los premium tienen mas patrones de carrusel, mini sliders, thumbs y productos relacionados mejor empaquetados.

Lo bueno de Violet: la base es mas limpia, menos agresiva y mas mantenible. No hay jQuery viejo, no hay modal pesado de upsell, no hay urgencia falsa y el contrato con metafields/Appi es mejor camino que meter humo.

## Premium Mejor Que Violet

### Carrito

Organix gana en estructura:

- minicart compacto;
- cabecera con contador;
- barra de envio gratis visible;
- productos con imagen, opciones, cantidad y eliminar bien comprimidos;
- recomendaciones dentro del carrito;
- footer claro con subtotal y CTAs.

Trendz gana en claridad de flujo:

- lista compacta;
- subtotal evidente;
- checkout y ver carrito separados;
- nota de pedido integrada;
- barra de envio gratis siempre a mano.

Rosyz gana en merchandising:

- cross-sell separado;
- upsell por metafield;
- sticky cart con mas informacion de variante.

### Carrusel

Los premium ganan porque tienen piezas especificas:

- carrusel de productos;
- carrusel de miniaturas;
- grids deslizables;
- bloques tipo bought together;
- secciones pensadas para navegar visualmente, no solo una lista Dawn.

Violet todavia depende demasiado de componentes Dawn. Correcto, pero no premium.

### Sticky Cart / Sticky ATC

Rosyz y Trendz tienen sticky mas completo: imagen, precio, variantes y estado.
Violet ya abre drawer y desde 0.3.5 muestra imagen, precio, variante y estado. Falta QA movil fino, pero ya no es el sticky simple inicial.

## Violet Mejor Que Premium

- Base Dawn limpia y compatible.
- Theme Check limpio.
- Menos dependencias viejas.
- Sin popups pesados.
- Sin fake urgency.
- Metafields bajo `violet-*` como contrato con Appi.
- Carrito con envio gratis desde `shop.metafields.violet.free_shipping_threshold`.
- Regalo opcional desde metafield de tienda.
- Mensaje honesto antes de checkout.

## Acciones Aplicadas En Esta Fase

### Carrito

- Items del drawer compactados visualmente sin rehacer la logica Dawn.
- Imagenes de linea mas controladas.
- Titulos limitados a dos lineas.
- Precio/cantidad/eliminar mas juntos.
- Header del drawer con contador.
- Doble CTA: ver carrito + checkout.
- `violet-cart-cross-sell` creado como bloque propio.
- Cross-sell maximo 1-2 productos.
- Sin fallback falso: si no hay metafields reales, no aparece.

### Cross-Sell Contract

Orden de lectura por producto en carrito:

1. `product.metafields.violet.cart_cross_sell`
2. `product.metafields.violet.cross_sell`
3. `product.metafields.violet.upsell`
4. `product.metafields.violet.related_products`

Reglas:

- no muestra productos ya presentes en carrito;
- no repite productos;
- no muestra productos sin variante disponible;
- no abre popup;
- usa AJAX del drawer.

## Acciones Que Faltan

### P1 Carrito

- Probar con metafields reales en 2-3 productos.
- Ajustar visual en movil con carrito real.
- Mejorar empty cart con enlaces utiles y sin ruido.
- Decidir si el regalo debe vivir antes o despues del cross-sell segun comportamiento real.

### P2 Carrusel

Aqui hay que aceptar la realidad: hay que construir un `violet-product-carousel`.

Debe ser:

- scroll-snap ligero;
- sin dependencia pesada;
- usable con mouse/touch/teclado;
- compatible con cards Dawn/Violet;
- configurable para home, producto y coleccion;
- con 2-4 productos visibles segun viewport;
- sin autoplay obligatorio.

Uso:

- productos destacados en home;
- relacionados en producto;
- shop the look;
- blog/productos si toca;
- coleccion editorial.

### P3 Producto

- Sticky ATC con variante/precio/imagen mas claros. Hecho en 0.3.5.
- Bought together real solo si Appi lo alimenta.
- Recently viewed sobrio, si aporta.

### P4 Coleccion

- Quick view ya existe, pero necesita compararse con premium en visual movil.
- Grid/carrusel de productos destacados dentro de coleccion.
- Filtros mas bonitos sin romper Dawn.

## Decision De Calidad

Premium como cantera: si una idea es mejor, se trae.
Violet como casa: se adapta limpio, con nombres `violet-*`, sin meter sistemas viejos completos.

La siguiente mejora grande despues del carrito no es meter mas texto: es carrusel/product carousel propio.
