# WEB 1.2 — Solicitud de presentación (19/10/2026)

## Alcance y punto de partida
Solo `staynex-website`, rama `codex/hospedios-commercial`, base revisada `be2f30e1b8cce8529e4ba5c433fc735a007f85f7`. PR #1 se mantiene en borrador, sin auto-merge. Main remoto sigue `d6b6e1db025966dcf47f88b691e8ecfa64b43e07`.

Todos los CTA comerciales llegan a `#request-demo`. Se conservan las cinco secciones, Hospedios, ES/EN/FR, navegación y diseño. El formulario conserva nombre (100), hotel/empresa (160), correo (254) y mensaje opcional (2000). No existen base de datos, CRM, cola ni transporte previo de solicitudes en este repositorio. La entrega anterior devolvía 503 a toda petición válida.

Vercel comercial permite el handler Node de Next. Lectura de configuración: Production sigue main; Preview sigue otras ramas y no tiene dominios propios. Preview sin variables Project ni Shared vinculadas; Production sin variables Project. No se leen valores secretos ni se traslada infraestructura de la aplicación. Build y start no ejecutan envíos, migraciones ni configuración. CI usa exclusivamente dobles. Un push de esta rama solo crea Preview; no activa el transporte.

## Implementación
- `lib/contact-server.ts`: adaptador HTTP de Resend sin SDK adicional, exclusivamente servidor. Elegido por respuesta con identificador y soporte de idempotencia; no se afirma disponer de cuenta comercial autorizada, dominio, cuota ni credencial. Supabase Auth y su SMTP son independientes.
- Destinatario único de servidor (`CONTACT_TO`), remitente autorizado fijo (`CONTACT_FROM`), visitante en `reply_to`. No hay CC, BCC, adjuntos, HTML, interpolación de cabeceras ni autorespuesta. Asunto fijo; cuerpo de texto plano. Los campos extra del visitante no controlan el sobre.
- `lib/presentation-request.ts`: validación compartida cliente/servidor, tipos, límites, campos vacíos, buzón único y caracteres de control. Mensaje admite saltos de línea; nombre/empresa/email no admiten controles ni inyección de cabeceras.
- Handler real: origen, contenido JSON, máximo 16 KiB incluso sin Content-Length. Origen configurado exacto y entorno de Vercel separados. GET solo revela disponibilidad, site key pública y mailto si está expresamente habilitado; nunca claves ni destinatario por defecto.
- Turnstile propuesto, sin configurar: verificación obligatoria en servidor antes de Resend, hostname y action exactos, token de un uso y corta duración. Honeypot y tamaño/origen complementarios. No se finge un límite distribuido con un contador en memoria. La barrera no garantiza impedir todo abuso humano ni es un límite global de gasto; antes de abrir recepción pública se debe revisar cuota y protección de tráfico disponibles en las cuentas autorizadas.
- Contacto desactivado salvo configuración completa y las tres confirmaciones explícitas de habilitación, destinatario y privacidad. Si falta algo no se carga Turnstile ni se llama a Resend. Configurar secretos por sí solo no activa el envío.
- `lib/contact-submission.ts`: exclusión sincrónica del doble envío; ninguna repetición automática. Estado mínimo de intento en sessionStorage, sin campos personales. Se escribe antes de despachar. Ante pérdida de respuesta se bloquea también al recargar esa pestaña; si no puede guardar el marcador, no inicia envío. No es una deduplicación universal entre dispositivos o pestañas nuevas.
- Resend recibe una clave estable por operación (`presentation/<UUID>`). La protección documentada del proveedor dura 24 horas, no indefinidamente. No se reintenta un resultado incierto, ni siquiera tras expirar esa ventana. Un rechazo acreditado permite un nuevo intento manual con comprobación de seguridad nueva.
- Solo HTTP correcto + `id` de proveedor permiten el estado de aceptación. Timeout, 409, 5xx, JSON inválido o recibo incompleto quedan inciertos. Un fallo de comprobación de seguridad permite reintentar porque aún no se ha llamado al correo. No se registran cuerpos, direcciones, credenciales ni respuestas del proveedor en logs de aplicación.
- `ContactChallenge` se carga únicamente si todo el servidor está preparado. La prueba del widget real queda pendiente de configuración; el laboratorio usa un control claramente simulado.
- `PresentationForm` conserva campos ante rechazo/timeout, errores asociados y foco en el primer campo inválido, estados accesibles traducidos. El botón mantiene el foco con aria-disabled y bloqueo lógico durante/tras el envío. Puede salirse con Tab. No se vacía el formulario al recibir respuesta. Al recargar no se conservan los campos personales, sí el bloqueo preventivo del intento.
- Alternativa mailto preparada con `CONTACT_MAILTO_ENABLED=false`. Requiere destinatario confirmado, revisión de privacidad y origen/entorno exactos. Etiqueta: «Abrir mi programa de correo (no envía la solicitud automáticamente)». No rellena datos personales ni aparece tras aceptación/incertidumbre. Publicar el destinatario en ese enlace requiere autorización específica; no se ha publicado la dirección propuesta.

## Configuración pendiente (ningún valor remoto cambiado)
`.env.example` contiene solo nombres y valores desactivados/vacíos:

| Variable | Requisito antes de activar |
|---|---|
| CONTACT_ENABLED | `true` solo después de aprobar la activación concreta |
| CONTACT_RECIPIENT_CONFIRMED | Confirmación específica del destinatario comercial |
| CONTACT_PRIVACY_REVIEWED | Información de tratamiento y responsable revisada/publicada |
| CONTACT_DEPLOYMENT_ENV | Debe coincidir con VERCEL_ENV; Preview y Production no son intercambiables |
| CONTACT_ORIGIN | Origen HTTPS exacto del entorno autorizado |
| CONTACT_RESEND_API_KEY | Credencial comercial dedicada, alcance mínimo de envío, nunca copiada desde la aplicación |
| CONTACT_FROM | Un buzón remitente del dominio verificado y autorizado en Resend |
| CONTACT_TO | Un único destinatario aprobado, fijado en servidor |
| CONTACT_TURNSTILE_SITE_KEY | Clave pública para ese hostname |
| CONTACT_TURNSTILE_SECRET_KEY | Secreto de validación exclusivamente servidor |
| CONTACT_MAILTO_ENABLED | Alternativa opcional y separada, false por defecto |

No se ha acreditado autorización de transporte comercial, remitente verificado o cuota/plan utilizable sin coste. No se crean cuentas ni servicios ni se envía correo. El correo propuesto por el usuario sigue pendiente de confirmación comercial; no se incluye su dirección en archivos públicos.

Privacidad: se conserva el aviso de datos profesionales y no marketing. No había páginas legales funcionales enlazadas: el antiguo texto era un placeholder. Siguen faltando identidad y contacto del responsable, información aprobada de tratamiento/conservación/derechos y proveedores. No se inventa ni se sustituye una razón social. La revisión es una condición para activar, no una certificación legal. Se conserva el enlace anterior `hello@staynex.ai`, sin acreditar su entrega ni usarlo como receptor del formulario.

## Pruebas y evidencias
`npm run test:contact`: 12 grupos, todo PASS. Ejecutan validadores, controlador real de envío, handler HTTP real y adaptador con fetch simulado. Cubren origen, JSON/tamaño/tipos/longitudes, configuración ausente/incompleta, entorno incorrecto, manipulación de sobre/cabeceras, honeypot, tokens inválidos/repetidos/de otro host/acción, aceptación y recibo, rechazo, rate limit del proveedor, timeout/5xx/409/respuesta malformada, doble activación, recuperación manual, bloqueo al recargar y almacenamiento inaccesible. Ninguna conexión a proveedores.

Build, TypeScript y diff --check: PASS. Advertencia de Node sobre stripTypeScriptTypes experimental; no es fallo. Sin cambios de dependencias ni expectativas debilitadas.

Laboratorio reproducible: build + Next en 127.0.0.1:3341 y `node scripts/contact-lab.mjs` en 127.0.0.1:3342/__fixture. Solo abre conexión al Next local. Adaptador/validaciones reales con respuestas HTTP simuladas; el script del widget se sustituye únicamente en ese proxy local por un botón rotulado «Validación simulada». No hay modo fixture en las rutas desplegadas. Escenarios seleccionables en el panel local, no en producción.

Navegador a 1366x900 y 390x844: campos asociados, error inicial/foco, teclado, aceptación simulada, rechazo conservando campos y recuperación, timeout de cliente sin repetición. Anchuras de contenido 1351/375 por scrollbar, sin desbordamiento. Se revisa DOM/árbol y teclado; no es una prueba con lector de pantalla. Capturas reales en la carpeta privada hermana `evidence`, no añadidas a Git.

## Textos finales en español
- Aceptación: «El proveedor de correo ha aceptado tu solicitud. La entrega en el buzón aún no está confirmada. No necesitas reenviarla.»
- Rechazo acreditado: «La solicitud no ha sido aceptada. Conservamos los campos en esta página; puedes revisar los datos y reintentar.»
- Resultado incierto: «No podemos confirmar el resultado. La solicitud podría haberse enviado. No la reenvíes ni recargues esta página para intentarlo; comprueba primero su recepción por otro canal.»
- No configurado: «El envío desde esta web todavía no está disponible. No se ha enviado ninguna solicitud.»
- Seguridad: «No se ha enviado la solicitud. Completa o renueva la comprobación de seguridad y vuelve a intentarlo.»

El servidor no responde 202 por el mero hecho de recibir el POST: espera aceptación explícita del proveedor. Ningún texto afirma entrega al buzón. Las tres traducciones se mantienen en `lib/translations.ts`.

## Una única prueba real propuesta, no ejecutada
1. Confirmar el destinatario comercial en privado. Acreditar proveedor/cuenta comercial, dominio y remitente, cuota sin gasto nuevo, acceso mínimo y aviso de privacidad aprobado. Autorizar por separado configuración del Preview exacto y UN correo técnico. Introducir secretos directamente en Vercel comercial, nunca en chat/Git ni copiarlos de Railway/Supabase.
2. Configurar solo ese Preview, con su origen y hostname de Turnstile, dejando Production intacta. Verificar en lectura GET de disponibilidad; no prueba entrega.
3. Abrir una pestaña nueva con el formulario normal. Nombre «Prueba técnica Hospedios», empresa «WEB 1.2 — prueba sintética», correo de contacto técnico autorizado y mensaje «[PRUEBA TÉCNICA WEB 1.2 — IGNORAR COMO SOLICITUD COMERCIAL] Comprobación única de entrega y Reply-To. No responder automáticamente». Asunto fijo «Hospedios — Solicitud de presentación». Resolver el control real y pulsar una sola vez.
4. Registrar fecha y recibo sin contenido ni direcciones en logs públicos. Confirmar aceptación en Resend y recepción del único mensaje en el buzón del destinatario (incluido spam), además de From/Reply-To. Aceptación no acredita inbox. No responder ni enviar segundo correo para probar Reply-To.
5. Si hay incertidumbre, no reintentar: revisar los logs privados de proveedor y recepción. Solo una prueba posterior expresamente acordada si se demuestra no aceptación; no volver a enviar por ausencia de mensaje en el buzón.
6. Sin habilitar Production, merge ni cambiar la aplicación operativa. La disponibilidad pública real requiere la aprobación posterior correspondiente.

## Fuentes técnicas y límites
- [API de Resend](https://resend.com/docs/api-reference/emails/send-email): sobre y respuesta con id.
- [Idempotencia de Resend](https://resend.com/docs/dashboard/emails/idempotency-keys): clave por operación y ventana limitada.
- [Validación de Turnstile](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/): token de un uso, 300 segundos y validación en servidor; comprobar hostname/action.

No se prueba reputación/deliverability, funcionamiento real del widget ni autorización de dominio/credenciales con dobles. No se garantiza entrega final ni deduplicación universal. No hay nueva base de datos ni almacenamiento duradero de solicitudes en la web: Resend sería el transporte y conserva su propio registro bajo condiciones que deben aprobarse antes de activar.

La aplicación operativa, tarea 1.1 `ec5ddb3eef1354809f15ff864233156a1bebd98f`, tarea 1.2 pausada, Supabase, Railway, Auth, demo, flags, IA, economía y Ubikos permanecen fuera del alcance. Cero correos reales, llamadas a modelos, servicios activados o gasto nuevo.

## Evidencia visual y estado de revisión
- `web12-accepted-desktop.png`: aceptación simulada en el build final, 1366 px.
- `web12-rejected-mobile.png` y `web12-accepted-mobile.png`: rechazo y recuperación conservando campos, 390 px.
- `web12-sending-desktop.png` y `web12-uncertain-desktop.png`: progreso y timeout real del cliente contra transporte local retrasado. Segundo Enter bloqueado; panel confirma 1 petición y 1 intento simulado. Recarga conserva bloqueo y no repite.
- `web12-unavailable-desktop.png`: build sin configuración (3341), sin transporte ni widget externo.
- Estados de incertidumbre comprobados también en EN y FR. Confirmados cinco destinos de sección; ningún enlace legal nuevo o roto introducido.
- Production revalidada antes del push: `2Dk3vAkbTHiEise49zBtMQgsuiQs`, main `d6b6e1d`, sin cambios. La actualización se limita al [borrador #1](https://github.com/Chispa2004/staynex-website/pull/1). El resultado de CI y Preview del SHA final se registra en la PR al terminar.
