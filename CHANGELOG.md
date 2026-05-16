# v0.2.0 - Metadatos dinámicos

## Problema
La SPA carecía de metadatos dinámicos, lo que afectaba a:
- Visibilidad SEO
- Vistas previas para compartir en redes sociales
- Rastreo

## Solución
Implementado:
- react-helmet-async
- Gestión dinámica de títulos
- Meta descripciones
- Etiquetas canónicas
- Metadatos OpenGraph

## Impacto
La puntuación SEO mejoró de 75 a 91

# Por qué FleetMap sigue siendo un componente de CSR

Leaflet depende de las API del navegador, como:
- ventana
- mediciones del DOM
- cálculos de diseño

Renderizar este componente en el servidor no aporta valor SEO e introduce complejidad en la hidratación.

Decisión:
- Mantener como componente de CSR
- Carga diferida (ZIP)
- Hidratación bajo demanda