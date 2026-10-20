# WEB 1.11 — Hero móvil compacto

20/10/2026. Rama `codex/hospedios-commercial`, desde
`026f3699ea4b44dc89ddee3bf1019236c9e204fa`. Worktree limpio al retomar;
no había avances pendientes de esta tarea. PR #1 continúa en borrador y sin
auto-merge. Exclusivamente web comercial.

## Cambio

Solo CSS responsive en `styles/commercial.css`. Hasta 760 px, las cinco etapas
se distribuyen en 3+2, conservando la letra de 13 px y sin escalar la ilustración.
Se conservan recorrido, conversación, leyenda de ejemplo simulado y tres eventos
del feed. Se ocultan las notificaciones flotantes duplicadas y las cuatro
tarjetas secundarias con `display:none`, también fuera del árbol accesible.
La ilustración no contiene controles ni elementos enfocables.

La composición compacta se mantiene hasta 1120 px, el breakpoint existente
de una sola columna del hero: evita las superposiciones observadas al pasar
760 px. Por encima se conserva íntegra la composición de escritorio,
incluidas sus capas decorativas originales. No se modifican navbar, título,
descripción, CTA, traducciones, resto de secciones ni contacto.

## Resultado medido

Mismo navegador, ancho solicitado 390 px (área de contenido 375 px por scrollbar),
idioma ES. Altura de `.hero` y comienzo de `#benefits`:

| Referencia | Altura |
| --- | ---: |
| Preview anterior, SHA 026f369 | 3559,06 px |
| Build final local | 1668,40 px |
| Reducción | 1890,66 px / 53,12 % |

Capturas de navegador fuera de Git, directorio local
`hospedios-commercial/evidence`: `web111-before-390-es.jpg`,
`web111-after-390-es.jpg` (hero completo e inicio de beneficios),
`web111-after-{1366,1920}-{es,en,fr}.jpg` y `web111-layout-checks.json`.
El recibo de publicación de Preview se conserva allí; no es Production.

## Comprobaciones

- Build final, TypeScript y `git diff --check`: PASS.
- Pruebas de contacto existentes con transportes simulados: 13/13 PASS,
  cero omitidas. No se añaden pruebas de código para este cambio solo CSS.
- Matriz de navegador: ES/EN/FR a 390, 760, 762, 1120, 1122, 1366 y 1920 px.
  Sin overflow horizontal de página ni recortes internos en textos del hero.
  Se usan 762 y 1122 como puntos inmediatamente superiores representables
  por este navegador (las solicitudes impares se redondean).
- A 390 px: un panel principal, cero avisos flotantes, tres eventos y dos filas
  de etapas. Leyenda visible, conversación legible, sin escalado.
- Escritorio ES: geometría de las cinco tarjetas y altura del hero idénticas
  a la referencia anterior a 1366 y 1920 px; altura 1256,90 px.
- Teclado móvil: Enter abre menú, Tab llega a Beneficios, Escape cierra
  y devuelve foco al botón; Tab alcanza CTA, foco dorado visible y Enter
  lleva a `#benefits`. Escritorio: Tab entre los CTA con foco visible.
- Árbol accesible móvil sin paneles ocultos ni ejemplos duplicados. Cero
  elementos enfocables en la ilustración. No es prueba con lector de pantalla.
- Contacto sin campos ni botones de envío en toda la matriz.

## Conservación

Sin merge ni publicación en Production. Referencia anterior conservada:
`d6b6e1db025966dcf47f88b691e8ecfa64b43e07`,
deployment `2Dk3vAkbTHiEise49zBtMQgsuiQs`,
https://staynex-website.vercel.app/.

Publicación pendiente de alojamiento compatible autorizado e información legal
real. Contacto: activación posterior independiente. Preview solo para revisión.
Sin correo real, cambios de configuración, llamadas a modelos ni gasto.
Aplicación operativa intacta. PMS pendiente de respuesta del proveedor, trabajo
conservado en `cc2453e`; continuidad operativa 1.2 pausada.
