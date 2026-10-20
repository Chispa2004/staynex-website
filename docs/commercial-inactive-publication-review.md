# Hospedios — publicación informativa con contacto inactivo

19/10/2026. Solo `Chispa2004/staynex-website`, PR #1, rama `codex/hospedios-commercial`. Base de esta continuación: `67e5813e1fdbe49f55ffb0068f4b7d3e42f9c1a5`, coincidente con el HEAD de la PR; no había ajustes posteriores ni cambios locales. `origin/main` sigue en `d6b6e1db025966dcf47f88b691e8ecfa64b43e07`.

## Cambio

- La sección de contacto conserva su ancla, pero deja de montar `PresentationForm`: no hay campos, botón de envío, consulta de disponibilidad ni widget. Se conserva íntegro el componente, validaciones, adaptador, idempotencia y pruebas para una activación posterior expresamente autorizada. Configurar variables por sí solo no volverá a mostrar el formulario en esta versión.
- Aviso ES: «Estamos preparando nuestro canal de contacto. Pronto podrás solicitar una presentación de Hospedios.»
- Aviso EN: «We’re preparing our contact channel. Soon you’ll be able to request a presentation of Hospedios.»
- Aviso FR: «Nous préparons notre canal de contact. Vous pourrez bientôt demander une présentation d’Hospedios.»
- CTA de cabecera, portada y menú móvil: «Descubrir Hospedios» / «Discover Hospedios» / «Découvrir Hospedios», hacia `#benefits`. El enlace secundario de portada lleva a las etapas de estancia para no duplicar el mismo CTA.
- Se retira el mailto heredado cuya recepción no estaba acreditada. No se publica ningún correo privado ni se presenta un canal alternativo como operativo.
- Marca, contenido, cinco secciones, estilos, iconos y dominio actual conservados. Sin cambios a variables ni dependencias.

## Verificación local

- 13/13 pruebas de contacto PASS, sin omitidas: handlers y transportes simulados; no correo real.
- Build, TypeScript y `git diff --check` PASS. El primer build dentro del sandbox falló por acceso denegado de SWC al resolver el directorio de Windows; repetido fuera del sandbox con éxito. Advertencia existente de `stripTypeScriptTypes` experimental, sin fallo.
- Navegador contra build real en `127.0.0.1:3342`, escritorio 1366×900 y móvil 390×844. ES/EN/FR, aviso y CTA traducidos. Sin desbordamiento: clientWidth/scrollWidth 1351/1351 y 375/375 respectivamente.
- Cero formularios, campos, mailto o scripts de Turnstile en la página; ninguna ancla sin destino. El CTA con Enter enfoca `benefits`. Menú móvil con Enter/Tab/Escape: cierre y devolución al botón; el CTA cierra el menú y enfoca beneficios.
- Título Hospedios, canonical `https://staynex-website.vercel.app/`, iconos H conservados. Capturas locales fuera de Git: `evidence/inactive-contact-desktop.png` y `evidence/inactive-contact-mobile.png` en el directorio de evidencias hermano del worktree.
- CI y Preview del SHA final se registran en la PR y en el recibo local. No se presenta un Preview como publicación en Production ni como prueba de entrega.

## Bloqueos de publicación

Vercel confirma que el proyecto pertenece al equipo actual con plan **Hobby**, no a un recurso comercial Pro contratado. La [documentación de Hobby](https://vercel.com/docs/plans/hobby) restringe ese plan a uso personal no comercial. No se integrará la PR ni se promoverá el Preview saltando esa condición.

Para conservar equipo, proveedor y dominio, el cambio de plan necesario es **Pro en el equipo actual**: tarifa base comprobada **20 USD/mes**, con un puesto de despliegue y 20 USD de crédito de consumo; impuestos y consumo adicional no incluidos. [Tarifa oficial de Pro](https://vercel.com/docs/plans/pro-plan). No es una tarifa plana ilimitada ni un gasto autorizado. No se contrata, inicia prueba de pago, mueve el proyecto ni investiga otro proveedor. El plan pertenece al equipo, no es una variable individual de este proyecto.

También permanece sin aportar la identidad legal y los datos de contacto del titular de la web. No se inventan aviso legal, domicilio, razón social ni datos fiscales. Ocultar la captación elimina este formulario de la publicación, pero no acredita por sí solo la información legal del titular. La privacidad del futuro formulario queda pendiente de activación; no se marca revisada ni se recopilan datos mediante él.

## Production conservada y recuperación

Lectura de Vercel en esta fase: proyecto `staynex-s-projects/staynex-website`, dominio `https://staynex-website.vercel.app/`, deployment activo Ready **`2Dk3vAkbTHiEise49zBtMQgsuiQs`**, fuente `main` **`d6b6e1db025966dcf47f88b691e8ecfa64b43e07`**. Se conserva esta referencia para una recuperación futura; no se ejecuta rollback porque no se cambia Production.

PR #1 permanece en borrador y sin auto-merge mientras existan bloqueos. El push de la rama actualiza exclusivamente el Preview conforme al seguimiento de ramas acreditado. La URL de Production no contiene todavía este candidato Hospedios; no se afirma verificación pública posterior a una publicación que no se ha producido.

Sin Resend, Turnstile, DNS, hospedios.com, correos reales, modelos ni gasto nuevo. No se modifica Staynex operativo, Railway, Supabase, Auth, demo o flags. Continuidad 1.2 sigue pausada.
