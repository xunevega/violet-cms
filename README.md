# Violet CMS for Shopify

Violet CMS es un tema Shopify Online Store 2.0 construido sobre Dawn.

No sustituye Shopify. Convierte la tienda en un escaparate comercial mas rico, visual y facil de gestionar.

## Direccion

Violet CMS combina:

- la base limpia y estable de Dawn
- mejoras funcionales inspiradas en temas premium como Impulse
- secciones reutilizables y configurables
- soporte avanzado para metafields y metaobjects
- fichas de producto mas ricas
- colecciones con tratamiento editorial
- JavaScript ligero y progresivo

## Principios

- Bonito, rapido y facil de mantener.
- Pocas opciones, pero bien elegidas.
- Liquid primero; JavaScript solo cuando aporte valor real.
- Metafields como contrato entre Violet Appi y Violet CMS.
- Nada de urgencia falsa, popups agresivos ni animaciones pesadas.

## Estado actual

Base: Dawn.

Primera capa Violet en producto:

- Sticky Add to Cart.
- Historia e inspiracion desde `product.metafields.violet`.
- Materiales y cuidados.
- Beneficios via metaobjects.
- Trust badges globales o por producto.
- FAQ global o por producto.
- Ideas de regalo desde metafields.

Primera capa Violet en navegacion y carrito:

- Breadcrumbs.
- Colecciones con editorial, subcolecciones y quick add.
- Drawer cart por defecto.
- Barra de envio gratis.
- Regalo opcional.
- Regalo opcional configurable.

## Desarrollo

```sh
shopify theme dev
shopify theme check
```

## Arquitectura de datos

El namespace principal es `violet`.

El contrato canonico vive en `VIOLET_DATA_CONTRACT.md`.

El script de la app `consola-app/scripts/setup-violet-metaobjects.mjs` crea las definiciones iniciales de metaobjects y metafields que consume este tema.

## Relacion con Violet Appi

Violet Appi limpia, completa y enriquece productos.

Violet CMS muestra esos datos en tienda mediante secciones, bloques y snippets reutilizables.
