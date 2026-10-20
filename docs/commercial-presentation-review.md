# WEB 1.2 — Contacto preparado para activación

Revisión posterior a `79edf29e5eb2f84757d0c283301808a6840db108`, 19/10/2026. Solo `staynex-website`, rama `codex/hospedios-commercial`, [PR #1](https://github.com/Chispa2004/staynex-website/pull/1) en borrador y sin auto-merge. No se publica Production ni se configura o envía correo. El informe editorial anterior se conserva en `hospedios-commercial-review.md`.

## Cambio acotado y recuperación
Se mantienen diseño, cinco secciones, ES/EN/FR, validación de servidor, destinatario único de servidor, Reply-To del visitante, protección antiautomatización y ausencia de autorespuesta. Se simplifican los textos y se utiliza el enlace mailto ya preparado para ofrecer una consulta manual en caso de incertidumbre.

El destinatario comercial ha sido confirmado expresamente por el usuario al inicio de su última instrucción. Se conserva la confirmación con la dirección únicamente en el registro privado ignorado por Git. No implica autorización para publicar la dirección, configurar servicios, probar envíos ni usar su dominio como remitente.

En un resultado incierto aparece **«Consultar mi solicitud por correo»**, con asunto «Hospedios — Consulta sobre una solicitud anterior». Abre el programa de correo, no envía nada ni rellena los datos del formulario. Su finalidad es consultar el intento anterior, no repetir la solicitud comercial. El usuario puede pasar con Tab del botón bloqueado a esta salida. No se abandona al visitante a una espera sin acción.

El formulario solo puede activarse si el contacto alternativo está habilitado y confirmado (`CONTACT_MAILTO_ENABLED`, además de los controles previos de entorno, origen y privacidad). El cliente también exige ese enlace antes de permitir enviar. Ahora todo continúa desactivado y la dirección real no está en código, documentación pública ni Preview.

No se desbloquea automáticamente el envío original por el paso del tiempo, ni se cambia su identidad. El enlace de consulta funciona también después de recargar y no depende de la ventana de idempotencia. El formulario no reenvía tras la consulta manual; cualquier nuevo intento debe seguir a la comprobación humana de la situación. Los campos permanecen ante error, aunque no se guardan datos personales para sobrevivir a una recarga. El marcador de intento en sessionStorage solo contiene el estado.

Se conserva la clave por operación del adaptador. [Resend limita su idempotencia a 24 horas](https://resend.com/docs/dashboard/emails/idempotency-keys); no se considera deduplicación indefinida ni se usa como garantía para un reintento tardío. En esta implementación no existe consulta fiable del resultado por identidad de operación cuando se pierde el recibo: no se inventa un endpoint, una consulta de estado ni un resultado de entrega. La vía elegida es consulta humana, no reintento de la API.

El receptor de la consulta deberá revisar el registro privado del proveedor y su buzón. La ausencia en el buzón no prueba que el proveedor rechazara el envío. Si no puede aclararlo, debe mantener el resultado como incierto. La apertura de mailto y la aceptación del proveedor tampoco acreditan entrega o lectura.

## Textos finales
| Estado | Español | English | Français |
|---|---|---|---|
| Aceptación del proveedor con recibo | Tu solicitud se ha enviado. Gracias por tu interés en Hospedios. | Your request has been sent. Thank you for your interest in Hospedios. | Votre demande a été envoyée. Merci de votre intérêt pour Hospedios. |
| Rechazo acreditado | No hemos podido enviar tu solicitud. Tus datos siguen en el formulario para que puedas intentarlo de nuevo. | We couldn’t send your request. Your details are still in the form so you can try again. | Nous n’avons pas pu envoyer votre demande. Vos informations sont conservées dans le formulaire pour que vous puissiez réessayer. |
| Resultado incierto | No hemos podido confirmar el envío. Para evitar duplicados, espera antes de intentarlo de nuevo. | We couldn’t confirm whether your request was sent. To avoid duplicates, please wait before trying again. | Nous n’avons pas pu confirmer l’envoi. Pour éviter les doublons, patientez avant de réessayer. |

La incertidumbre va acompañada de la explicación de apertura del programa de correo y del enlace de consulta, traducidos en los tres idiomas. No se muestra «hemos recibido» ni se afirma entrega o lectura.

## Lista única de activación
| Dato necesario | Para qué sirve | Dónde configurarlo | Quién debe aportarlo |
|---|---|---|---|
| Destinatario comercial, ya confirmado en privado | Recibir solicitudes y consultas de recuperación; no acredita permiso para enviar como su dominio | `CONTACT_TO` en Vercel comercial; `CONTACT_RECIPIENT_CONFIRMED` y `CONTACT_MAILTO_ENABLED` únicamente al autorizar configuración/exposición del contacto | Titular: confirmación recibida. Administrador comercial: incorporación segura pendiente |
| Remitente y dominio autorizado | From fijo, identidad de envío validada por el proveedor | Dominio/remitente en la cuenta de Resend autorizada y `CONTACT_FROM` en Vercel comercial | Titular de la cuenta y responsable del dominio |
| Credencial específica de envío | Autorizar exclusivamente el transporte comercial con alcance mínimo | Secreto `CONTACT_RESEND_API_KEY` en el gestor de secretos o variables seguras del proyecto comercial y entorno exacto | Administrador autorizado de la cuenta de correo |
| Turnstile para los dominios correspondientes | Validar los intentos en servidor, hostname y acción; evitar activar un formulario sin protección | Widget/hostnames autorizados; `CONTACT_TURNSTILE_SITE_KEY`, `CONTACT_TURNSTILE_SECRET_KEY`, `CONTACT_ORIGIN` y `CONTACT_DEPLOYMENT_ENV` en Vercel comercial | Administrador del servicio y responsable del proyecto comercial |
| Identidad y contacto del responsable y contenido de privacidad pendiente | Informar del tratamiento, conservación, derechos y proveedores antes de recopilar datos | Contenido aprobado de privacidad en la web; `CONTACT_PRIVACY_REVIEWED` solo cuando esté completado | Responsable del tratamiento, con su asesoramiento correspondiente |

`CONTACT_ENABLED` y los demás interruptores siguen desactivados. `.env.example` conserva únicamente valores vacíos/desactivados; no se incluye la dirección confirmada. Secretos introducidos directamente por el administrador mediante configuración segura, nunca en chat, Git ni copiándolos de Railway/Supabase.

Puede aprovecharse el proyecto comercial de Vercel y su dominio actual. También un dominio y cuenta de correo existentes si su titular acredita verificación, permiso comercial, cuota disponible y ausencia de gasto nuevo; esta tarea no acredita que ya exista un remitente utilizable. No es requisito comprar un dominio ni contratar un plan. Reutilizar cuentas, modificar DNS o configurar credenciales exige la autorización correspondiente. Recibir en un dominio ajeno no autoriza a enviar como él. Supabase Auth/SMTP queda separado.

## Una sola prueba técnica futura, no ejecutada
1. Antes de probar, aprobar expresamente la configuración concreta y el envío único; el destinatario ya está confirmado. Acreditar remitente/dominio, credencial comercial de alcance mínimo, cuota sin gasto y privacidad. Autorizar la exposición del contacto de recuperación en ese entorno. Introducir secretos directamente en Vercel comercial, únicamente para el Preview acordado, conservando Production intacta.
2. Configurar el origen exacto y sus hostnames de Turnstile. Leer GET `/api/presentation-request` y comprobar disponibilidad y contacto de recuperación sin enviar nada.
3. En una pestaña nueva, usar el formulario normal una sola vez: nombre «Prueba técnica Hospedios», empresa «WEB 1.2 — prueba sintética», correo técnico autorizado y mensaje «[PRUEBA TÉCNICA WEB 1.2 — IGNORAR COMO SOLICITUD COMERCIAL] Comprobación única de entrega y Reply-To. No responder automáticamente». El asunto del formulario sigue fijo: «Hospedios — Solicitud de presentación».
4. Registrar el recibo y momento sin contenido personal en logs públicos. Confirmar por separado aceptación en el proveedor y recepción del único mensaje en el buzón, incluido spam; comprobar From/Reply-To sin enviar una respuesta.
5. Si el resultado es incierto, no pulsar de nuevo ni usar el enlace de consulta durante esta prueba (supondría otro correo). Revisar en lectura proveedor y buzón con el titular. No declarar fallo por ausencia de correo ni repetir fuera de la ventana de idempotencia. Cualquier segundo envío necesita una decisión expresa posterior.

## Comprobaciones
13 grupos de `npm run test:contact` PASS, reutilizando las doce regresiones previas. El grupo adicional verifica contacto de recuperación, asunto distinto, ausencia de datos personales en URL, bloqueo de reenvío y prohibición de activar sin esa salida. Se actualizan las expectativas del GET para su enlace de recuperación; no se debilitan las validaciones ni las pruebas de efectos.

Build, TypeScript y diff --check PASS. Advertencia heredada de Node sobre stripTypeScriptTypes experimental; no es fallo.

Laboratorio de localhost 3341/3342, transporte y widget simulados. No hay fixture activable en el despliegue. Navegador 1366x900 y 390x844: aceptación, rechazo conservando campos y recuperación, incertidumbre con enlace visible, acceso por Tab, foco y ES/EN/FR. Se inspecciona el href sintético sin abrir el programa de correo. No se prueba entrega, funcionamiento de un cliente de correo ni lector de pantalla real. Capturas privadas hermanas `evidence/activation-*.png`, fuera de Git.

Los resultados de CI y Preview del SHA final se registran en la PR. El Preview solo acredita despliegue/lectura con envío desactivado, nunca entrega de correo.

## Conservación
Production comercial sigue main `d6b6e1db025966dcf47f88b691e8ecfa64b43e07`; no se modifica el seguimiento de ramas ni las variables. Se reutiliza la lectura previa de Vercel: Preview sin variables Project/Shared y Production ligada a main; no cambia su objeto de configuración.

Aplicación operativa, tarea 1.1 `ec5ddb3eef1354809f15ff864233156a1bebd98f`, tarea 1.2 pausada, Supabase, Railway, Auth, demo, flags, IA, economía y Ubikos intactos. Cero correos, llamadas a modelos o gasto nuevo. No hay merge, Production, DNS, servicios ni secretos remotos modificados.
