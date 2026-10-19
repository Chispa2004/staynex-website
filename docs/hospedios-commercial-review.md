# Hospedios — revisión comercial (19/10/2026)

## Punto operativo de reanudación, sin cambios
Tarea 1.1 implementada únicamente de forma local en `codex/message-ingress-recovery`, commit `ec5ddb3eef1354809f15ff864233156a1bebd98f`.
Tarea 1.2 pausada: primer relevo, retención, conciliación y retirada del consumidor antiguo.
Sin publicación ni migraciones remotas de ese trabajo. Se preservan #54/#57, onboarding, IA, economía, organizaciones y Ubikos.

## Repositorio y destino comercial
Repositorio: https://github.com/Chispa2004/staynex-website (separado de la aplicación).
Base local/remota verificada: `d6b6e1db025966dcf47f88b691e8ecfa64b43e07`.
Rama independiente: `codex/hospedios-commercial`.
Vercel: `staynex-s-projects/staynex-website`; Production `2Dk3vAkbTHiEise49zBtMQgsuiQs`, dominio https://staynex-website.vercel.app.
Configuración leída en Vercel: Production sigue exclusivamente `main`, con asignación automática de dominios. Preview sigue las demás ramas y no tiene dominios personalizados. No se modifica esa configuración. En ambos entornos, la pestaña Project informa que no hay variables añadidas; no se leen ni transfieren claves. Build/Install sin overrides, Next.js, Node 24, root vacío e Ignored Build Step automático. Concurrencia bajo demanda desactivada, plan Hobby. El push de esta rama genera Preview, no Production.
No hay workflows versionados en la base, scripts de arranque operativo, SQL ni dependencias de Supabase/Railway.
No se cambia la aplicación staynex-chi.vercel.app.

## Diagnóstico editorial y cambios
La base montaba Hero + 17 bloques, con recorridos y beneficios repetidos, catálogo técnico, afirmaciones 24/7 y cifras de rendimiento/revenue sin evidencia publicada. El contacto mostraba éxito sin almacenamiento ni transporte.
Se concentran cinco secciones: portada, beneficios, etapas de estancia, IA/equipo y presentación/contacto.
Se conserva paleta, gradientes, barra flotante, tarjetas claras, tipografía y responsive.
Una sola ilustración de conversación se identifica expresamente como ejemplo; no contiene personas reales, cifras ni estados live.
Marca visible, iconos H, metadatos, Open Graph y textos accesibles actualizados. Se mantienen ES/EN/FR, español inicial y preferencia local previa.
Se conserva el correo `hello@staynex.ai` y el dominio actual. No se acredita su entrega.
No había razón social, política de privacidad funcional ni datos estructurados: solo un “Legal placeholder”, retirado; no se inventa entidad legal.

## Contacto: bloqueo real
El formulario anterior solo ejecutaba `setSubmitted(true)`. No había endpoint, destinatario de recepción ni credenciales.
La propuesta conserva nombre, hotel/empresa, correo y mensaje opcional. Etiquetas/errores asociados, foco en primer error, conservación de datos, exclusión de doble clic, timeout y estados anunciados.
El endpoint local valida origen, JSON, tamaño, campos y honeypot; **no tiene transporte configurado** y devuelve 503. Nunca simula recepción.
El adaptador aislado permite ensayar confirmación, fallo e incertidumbre con dobles. No se conecta a Resend, SMTP, Supabase, Railway ni IA. No existe modo de simulación activable en el despliegue.
Antes de publicar la conversión: acreditar el receptor para el correo existente y autorizar/configurar su transporte; concretar aviso de privacidad/entidad y protección de abuso/rate limiting para recepción real. No se ha cambiado destinatario ni enviado correo.
El aviso visible explica que el envío no está disponible. El borrador no debe aprobarse como formulario operativo.

## Validación
- `npm run build`: PASS, Next 16.2.6 con versiones exactas del lockfile, instalación offline sin scripts. Una página estática y endpoint de contacto explícitamente sin transporte. No hay migraciones ni tareas de datos.
- `npm run typecheck` y `git diff --check`: PASS. Lockfile y next-env originales conservados.
- `npm run test:contact`: 4 grupos PASS, handler real con Request/Response y transporte simulado: campos inválidos sin entrega, petición directa, origen ajeno, cuerpo excesivo/JSON inválido, campos opcionales, honeypot, transporte ausente/fallido/incierto y éxito solo con recibo. Sin red ni correos.
- Ensayo de navegador con build local en http://127.0.0.1:3341. 1366×900 y 390×844, cinco secciones; scrollWidth igual a clientWidth (1351 y 375 por scrollbar), sin desbordamiento lateral. Inspección de página completa y capturas de portada.
- Menú móvil con Enter/Tab/Escape: cierre y devolución al botón. Ancla a estancia cierra menú y enfoca `journeys`; enlace de salto al contenido disponible. Los destinos conservan posición de scroll apropiada bajo cabecera fija.
- Formulario: vacío enfoca Nombre y relaciona errores; datos sintéticos, Tab al botón, progreso, datos conservados y reintento. La primera comprobación detectó el Host interno de Next (403); se corrigió y añadió regresión. Petición válida final: 503 `unavailable`, aviso explícito sin éxito. Ningún correo enviado.
- ES/EN/FR: cambio de idioma, `lang`, persistencia al recargar y móvil sin desbordamiento. Español inicial. Solo queda marca antigua visible en el correo existente, conservado deliberadamente. Metadatos y todas las anclas comprobados en DOM.
- Contraste de colores cambiados comprobado numéricamente y foco visible en navegador. Inspección de árbol/DOM y teclado; no se ha hecho ensayo con lector de pantalla ni se declara accesibilidad completa.
- Capturas locales en la carpeta hermana `evidence`: before/after-desktop.png, before/after-mobile.png, after-desktop-full.png, after-mobile-full.png y contact-unavailable-mobile.png. Son capturas reales del navegador; el antes es la web pública, el después el build local. No contienen datos operativos.
- Workflow comercial añadido: test:contact, build, typecheck y diff. No incluye secrets, SQL ni acceso a la aplicación operativa.

El texto principal en español se entrega en `docs/hospedios-commercial-copy-es.md` (documento completo: 387 palabras, incluidos títulos, CTA y nota de borrador). No se introducen porcentajes, clientes, integraciones certificadas ni promesas de operación autónoma.

## Borrador y Preview
- Código: `33b7dad21916ddca626225749d705a4b1210fd73`. Este cierre documental no cambia la implementación.
- PR https://github.com/Chispa2004/staynex-website/pull/1, abierta en borrador, auto-merge nulo. No se hace merge.
- CI de código https://github.com/Chispa2004/staynex-website/actions/runs/39237022935: verify SUCCESS; cuatro pruebas, build, tipos y diff ejecutados, ninguno omitido. Revisados también los logs.
- Preview del código: https://staynex-website-948nu3bx4-staynex-s-projects.vercel.app/ — Vercel `4j47iqWX6yu4Mj9BJf2YeCCSooz3`, Ready, entorno Preview y origen `33b7dad`. Asignación de dominios personalizados omitida, como corresponde. La URL de rama se consulta desde la PR para el SHA documental más reciente.
- Lectura de Preview: Hospedios, título, cinco secciones y anclas correctas; aviso de contacto no disponible. No se envía el formulario remoto. Los ensayos de errores/recepción simulada son locales, no evidencia de entrega real.
- Main remoto se mantiene en `d6b6e1db025966dcf47f88b691e8ecfa64b43e07`; no se sustituye Production. La publicación comercial queda pendiente de aprobación expresa y resolución del contacto.
