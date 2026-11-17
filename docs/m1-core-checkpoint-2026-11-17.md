# M1 — Primer núcleo de juegos, Español

Actualización: 2026-11-17. Repositorio: `c2melendez/academia-paa-phuma` (independiente de Desafío Gramatical).

## Entrega implementada
Se agregaron `data/gameM1Basic.js` (48 preguntas) y `data/gameM1Extended.js` (210 preguntas) y se integraron mediante `data/gameBank.js` conservando los 12 IDs históricos. El banco lúdico contiene **270 registros**: 60 básicos, 90 intermedios, 120 avanzados.

| Subtema | Clasificación B/I/A | Construcción B/I/A | Total |
|---|---|---|---:|
| Sinónimos y antónimos | 10/15/20 | 10/15/20 | 90 |
| Cohesión y coherencia | 10/15/20 | 10/15/20 | 90 |
| Morfosintaxis | 10/15/20 | 10/15/20 | 90 |

## Evidencia técnica
- `scripts/m1-gate.mjs` verifica las 18 combinaciones y falla ante déficit curricular, ruta inválida, nivel inválido, duplicados exactos normalizados o claves de clasificación imposibles.
- `tests/m1-gate.test.js` incluye pruebas de mutación de ID duplicado, clave ausente, ruta y nivel incorrectos.
- Se actualizó `tests/games-ui.test.js` para verificar agotamiento según el número dinámico de preguntas y preservar su prueba de persistencia de vistos.
- `npm run build` exige `npm run check:m1`; el workflow también ejecuta `check:m1`.
- Render confirmó LIVE del commit `3f3726d3fe65e540e5b34c818afd26a8bc31cf4f`. Registros de compilación: **45 tests PASS / 0 FAIL**, puerta M1 **270/270 en 18 combinaciones**, compilación estática correcta.

## Límites y riesgos abiertos
**No se declara M1 editorialmente cerrado.** Los 210 registros intermedios/avanzados están organizados por 105 situaciones base que se aprovechan en dos modalidades. No debe presentarse el total de 270 como 270 conceptos independientes. El gradiente de dificultad intermedio/avanzado no ha sido validado por docentes externos ni calibrado psicométricamente. Los enunciados, las soluciones admitidas y las explicaciones requieren revisión semántica individual (incluidas respuestas alternativas legítimas). El inventario M0 actual solo cubre combinaciones de modalidades efectivamente presentes; queda contrastar la matriz elegible completa con el catálogo de juegos previsto.

**M0 sigue pendiente de evidencia GitHub Actions**: Render LIVE no sustituye la comprobación independiente del workflow para el SHA. No se ha obtenido confirmación de conclusión exitosa de Actions desde el conector disponible.

## Próximo objetivo reproducible
1. Revisar los 270 registros contra oráculos pedagógicos independientes y corregir ambigüedades; ampliar pruebas negativas de respuestas alternativas y dificultad.
2. Recuperar evidencia GitHub Actions para el SHA exacto, y resolver cualquier fallo.
3. Conciliar modalidades elegibles y áreas pendientes, bloquear cierre de M0/M1 hasta cumplir el contrato y registrar acta de aceptación.
4. Solo tras auditoría editorial, continuar con M2 de las combinaciones aceptadas (20/35/45 acumulados).

Referencia de ejecución: `npm test && npm run audit:games && npm run audit:m0 && npm run check:m1 && npm run build`.
