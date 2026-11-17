# Corrida 2026-11-17: reconciliación del banco lúdico

Estado: EN_CURSO (M0; inventario parcial). Base `7212e32697de18c906aac3be207f30a84538f6cc`, consultada el 17 de noviembre de 2026. Sin ramas adicionales ni PR abiertas al consultar GitHub. CI de la base: ejecución 43943763826, success. Render: despliegue dep-dbtltm5g1s2s738muo10, live en el mismo SHA. Estos resultados corresponden exclusivamente a la base.

## Hallazgos y límites

`node scripts/inventario-corrida.mjs` genera la matriz de 90 subtemas y tres niveles desde `src/catalog.js` y `BANK`. Tiene 989 registros generales por ID. El catálogo no define juegos: 270 = 90 × 3 es una proyección de tres juegos por subtema, no 270 combinaciones implementadas; 810 sería esa proyección por tres niveles. La interfaz revisada ofrece estudio y simulacro de selección, no se identificaron clasificación y construcción ni un banco lúdico separado. La independencia conceptual, elegibilidad para cuotas y revisión docente son desconocidas; no convertir registros generales en ejercicios lúdicos por su mera presencia.

| Gramática y semántica: banco general | Básico | Intermedio | Avanzado |
|---|---:|---:|---:|
| Sinónimos y antónimos | 4 | 5 | 5 |
| Cohesión y coherencia | 4 | 5 | 5 |
| Morfosintaxis | 1 | 2 | 1 |

Son conteos brutos, no saldos del núcleo de juego. La cifra histórica de 180 o 306 pendientes no se puede corroborar con la rama actual. Se prioriza este bloque histórico, sujeto a revisar el orden del tema completo. No hay cuotas por juego calculables hasta identificar o implementar sus modalidades y revisar sus reactivos. No se añadieron ejercicios en esta corrida; independencia y revisión automática/humana por ejercicio no evaluadas.

## Verificación y reanudación

En la base: `npm test` 35 pruebas aprobadas; `npm run build` y `npm run audit` aprobados; auditoría general: 989 registros y ningún subtema sin nivel. La revisión no demuestra calidad editorial ni independencia. Fuente curricular: guía PHUMA CEI-TEST 2026 adjunta, p. 4; [guía oficial](https://admisiones.unah.edu.hn/guia-de-estudio-para-la-phuma/). Las preguntas existentes no han sido atribuidas individualmente aquí.

Siguiente acción: diseñar e integrar clasificación y construcción con validación y rotación, conservar estudio/simulacro, y revisar cada reactivo original por independencia, nivel y procedencia. Elaborar un plan de déficits por juego para los tres subtemas y ejecutar primero su cierre; después completar lotes objetivo de 450 unidades independientes. Cada núcleo requiere 10 básicos, 15 intermedios y 20 avanzados por combinación. No considerar esta corrida completada hasta integración, auditoría editorial, pruebas, CI y Render Live en el SHA final. Evitar duplicaciones mediante IDs estables y revisión de familias; revisión docente y calibración empírica pendientes.
