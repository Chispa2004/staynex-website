# Parche local de seguridad Next.js — 23/10/2026

Base: 9d60f1e744e2569cabc0001b462b19473c22af74 (candidato Hospedios PR1). El aviso verbal de la reunión sigue sin identificarse;
el usuario no conoce el CVE/enlace. No se afirma haberlo confirmado o resuelto.

La [actualización oficial del 14/10](https://nextjs.org/blog/nextjs-security-update-october-14-2026)
corrige Next16.4.1. El lock anterior tenía Next16.2.6 y sharp0.34.5:
[CVE-2026-96889](https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw)
incluye esas versiones, con condiciones de Image Optimization en Linux glibc.
No se demuestra explotación ni se prueba contra servicios reales.
No se encuentran next/image, next/og, use cache, Cache Components o use server en
esta base; ello no demuestra que el optimizador predeterminado esté deshabilitado.

Cambio: next y eslint-config-next fijados a16.4.1; lock resuelve sharp0.35.5.
React/react-dom19.2.6 y override PostCSS8.5.10 conservados. Tipos next-env.d.ts
regenerados por el build (routes y root-params). Sin cambios de contenido o diseño.

Validación local Windows/Node24.19.0: npm ci desde lock sin scripts; build,
typecheck, GET normal de portada HTTP200 y sharp con imagen ficticia PASS.
Manifiesto del build: cero Server Actions. Red externa bloqueada, sin secretos.
Además, 13 pruebas de contacto simulado PASS; disponibilidad del contacto OFF y sin mailto.

Sin CI remoto ni validación Linux todavía. Sin push, publicación ni modificación
de la PR1 (borrador/sin auto-merge). Production continúa en d6b6e1d,
deployment2Dk3vAkbTHiEise49zBtMQgsuiQs, confirmado en Vercel mediante lectura.
El parche de Production y el de PR1 están separados para no publicar el cambio
de marca a través de una corrección de seguridad. Conservar restricciones de
alojamiento e información legal, contacto y restantes tareas pausadas.

Próxima intervención: validar artefacto Linux y autorizar publicación Vercel
sobre la base realmente activa, conservar recuperación y decidir protección o
retirada de deployments anteriores; un cambio de alias no retira sus URLs.
No publicar desde main a ciegas ni mezclar tareas operativas.

