# WEB 1.10 — Portada original adaptada a Hospedios

20/10/2026. Rama `codex/hospedios-commercial`, PR #1 en borrador, desde `cceb2048f67f715285243ac6485dc5122265b740`. Exclusivamente web comercial; sin merge ni Production.

## Implementación

Se recupera `DashboardMockup` de `d6b6e1db025966dcf47f88b691e8ecfa64b43e07` y sus estilos originales, todavía presentes en `styles/globals.css`. Se reutilizan las dos columnas, fondo con cuadrícula y luces, marco translúcido, cabecera oscura, cinco tarjetas claras, gráfico circular y de barras, indicadores, notificaciones flotantes y actividad inferior. Se conserva su superposición decorativa en escritorio; en móvil las tarjetas y los cinco avisos se apilan y pueden leerse completos.

El título conserva el peso ligero original, ajustando el tamaño al texto aprobado más largo. Se recuperan los grupos de etiquetas y botones, con los destinos actuales `#benefits` y `#journeys`. No cambia `Nav`, su marca, idiomas, menú o accesibilidad. Tampoco cambian las fases alternadas, conversación y cuatro ventajas, demás secciones, contacto inactivo ni transportes.

Los textos nuevos se traducen en `lib/hero-illustration.ts` mediante el selector existente ES/EN/FR. El conjunto está identificado con «Ejemplo ilustrativo · datos simulados». Se sustituye la actividad live y la confianza de IA por ejemplos estáticos y estados cualitativos. Los números y sucesos son ilustrativos, no resultados medidos. No hay llamadas a datos, modelos o proveedores.

## Comprobaciones

- Build de producción, TypeScript y `git diff --check`: PASS. El primer build dentro del aislamiento falló por acceso de SWC a la ruta Windows; el mismo comando con acceso local autorizado pasó. Se retira únicamente el cambio automático de `next-env.d.ts`.
- 13/13 pruebas existentes de contacto PASS con transporte simulado; ninguna omitida. No cambia el comportamiento del formulario y no se añaden baterías ajenas a esta restauración visual.
- Navegador sobre el build nuevo en `127.0.0.1:3343`, a 1920, 1366 y 390 px, ES/EN/FR. Ancho interior/scroll: 1905/1905, 1351/1351 y 375/375. Cinco tarjetas y cero campos/botones de contacto en los tres tamaños. Sin recortes internos horizontales en los textos medidos.
- Capturas completas del hero, incluida su continuación inferior. La versión original conservada en el dominio público se consultó exclusivamente en lectura para comparar composición. Las tres imágenes mencionadas en la petición no estaban entre los adjuntos accesibles: la comparación utiliza el código original y su web conservada, no esas imágenes.
- Teclado: selector de idiomas, Enter en CTA, Tab entre acciones y foco dorado visible. Menú móvil con Enter/Escape y devolución del foco al botón. La ilustración no introduce controles falsos ni tabulaciones.
- Sin animaciones en el panel restaurado. Se conserva la regla global `prefers-reduced-motion` (incluye scroll sin animación). Verificación de CSS y estilos calculados; no se cambió la preferencia del sistema.
- Inspección del árbol accesible, no una prueba con lector de pantalla.

Capturas y mediciones fuera de Git, en el directorio local de evidencias `hospedios-commercial/evidence`: `hero-original-1366.jpg`, `hero-restored-{1920,1366,390}-{es,en,fr}.jpg` y `hero-layout-checks.json`. El SHA final, CI y Preview se registran en la PR y recibo local al terminar el despliegue de revisión.

## Conservación y reanudación

PR #1 permanece en borrador y sin auto-merge. El Preview sirve únicamente para revisión. Production conservada: `d6b6e1db025966dcf47f88b691e8ecfa64b43e07`, deployment `2Dk3vAkbTHiEise49zBtMQgsuiQs`, dominio `https://staynex-website.vercel.app/`.

Publicación pendiente de alojamiento autorizado para el uso previsto e información real del titular. Contacto pendiente de activación independiente. Sin contratación, configuración, correo real ni cambios en la aplicación operativa. Ubikos pendiente de su equipo de ciberseguridad, sin consultas nuevas; continuidad operativa 1.2 pausada.
