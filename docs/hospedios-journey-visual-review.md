# Hospedios: recorrido visual y conversación

19/10/2026. Continuación de `codex/hospedios-commercial`, PR #1 en borrador, desde `b4b91c13b6c13fe4cccf6e941a1e5e8dab4c05f1`. Solo web comercial. Sin merge ni Production.

## Dos cambios

- `JourneySection` recupera la estructura `story-card`, `journey-phone` y `journey-workflow` de la web antigua en Git (`d6b6e1d`), con tres tarjetas horizontales alternadas, números discretos, etiquetas y ejemplos breves. Los flujos quedan dentro del diseño, sin paneles superpuestos. En el DOM, texto antes de ilustración en las tres fases; el mismo orden se muestra en móvil.
- `TeamSection` sustituye la presentación sencilla por una conversación y cuatro ventajas con iconos. Conversación izquierda y cuadrícula 2×2 derecha en escritorio; bloques apilados en móvil. Textos solicitados en ES y traducciones EN/FR. Todas las conversaciones están identificadas como ejemplos ilustrativos, sin indicador Online ni promesas de disponibilidad, entrega o reserva.

Se consultaron los componentes antiguos en Git. Las imágenes mencionadas por sufijos 114716/114727/114745/114822/115027 no estaban incluidas en los archivos accesibles de esta petición: se siguieron la estructura versionada y las instrucciones escritas; no se acredita comparación visual con esas imágenes.

Portada, beneficios, navegación, marca, CTA, contacto inactivo, formulario preparado, validación, idempotencia y transportes conservados. Sin nuevas dependencias ni llamadas a modelos.

## Comprobaciones

- `npm run test:contact`: 13/13 PASS, transportes simulados; sin correo real.
- `npm run build`, `npm run typecheck` y `git diff --check`: PASS. Se conserva separada la advertencia experimental existente de Node. Se descarta el cambio automático de `next-env.d.ts` generado por el build.
- Navegador sobre build local, 1920, 1366 y 390 px, ES/EN/FR: nueve combinaciones sin desbordamiento horizontal ni contenido interior recortado. ClientWidth/scrollWidth: 1905/1905, 1351/1351 y 375/375 (barra vertical del navegador).
- Tres fases alternadas en escritorio; texto antes de ilustración en móvil. Separación entre conversación y flujo: 16 px escritorio, 14 px móvil. Conversaciones a 15 px. Cuatro ventajas sin solapamiento.
- Teclado: Enter en navegación lleva a la sección y la enfoca; Tab mantiene orden y foco visible. Menú móvil abre con Enter, el enlace lo cierra y lleva al destino; Escape devuelve el foco al botón. Cabecera de 79/76 px y títulos de destino a 221/192 px, visibles tras terminar el desplazamiento.
- Árbol accesible inspeccionado: títulos, listas, interlocutores y etiqueta de ejemplo en orden. No se presenta como ensayo con lector de pantalla.
- No se añaden animaciones; `animation-name: none` en los bloques. Se conserva la regla global de movimiento reducido (incluye desplazamiento sin animación); comprobación de código, sin emulación de preferencia del sistema.
- Cero campos o botones de formulario en contacto en las nueve combinaciones. Capturas completas y mediciones conservadas fuera de Git, en el directorio local de evidencias: `journeys-local-{1920,1366,390}.png`, `team-local-{1920,1366,390}.png`, `journey-layout-checks.json`.
- CI, SHA final y Preview se registran en la PR y recibo local tras el push; Preview solo para revisión, no una publicación comercial ni una elusión del plan.

## Límites y reanudación

PR #1 permanece en borrador, sin auto-merge. Production anterior: `d6b6e1db025966dcf47f88b691e8ecfa64b43e07`, deployment `2Dk3vAkbTHiEise49zBtMQgsuiQs`, dominio `https://staynex-website.vercel.app/`. No se promueve este candidato.

Continúan pendientes el alojamiento autorizado para el uso previsto y los datos reales del titular. El contacto se activará como tarea independiente y autorizada; no se configuran servicios ni se envían correos. Sin cambios en Staynex operativo, Railway, Supabase, Auth, demo o flags. Continuidad 1.2 sigue pausada.
