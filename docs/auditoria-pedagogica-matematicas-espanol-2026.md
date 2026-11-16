# Auditoría pedagógica: Matemáticas y Español — 16 noviembre 2026

Esta revisión se ha aplicado al repositorio de la **Academia PAA + PHUMA**; toma como punto de partida la estructura de la UNAH y los recursos documentales estudiados previamente. **No es una certificación psicométrica de equivalencia con la prueba real.**

## Resultados comprobables

| Indicador | Resultado |
|---|---:|
| Registros por ID en el banco | 965 |
| Familias de plantillas numéricas matemáticas | 15 |
| Variantes matemáticas revisadas (3 niveles × 90) | 270 |
| Preguntas con explicación individual de sus cuatro opciones | 287 |
| Preguntas básicas de Español con fundamento editorial específico | 36 |
| Reformulaciones españolas básicas conservadas como repaso de fundamentos | 72 |
| Reformulaciones básicas admitidas en examen intermedio/avanzado | 0 |
| Máximo de variaciones de una misma familia matemática en un examen | 2 |

Estos conteos se obtienen mediante `npm run audit:quality` y se comprueban junto con las pruebas de CI.

## Correcciones realizadas

### Matemáticas
- El nuevo motor `data/mathEngine.js` reemplaza las 270 preguntas matemáticas numéricamente parametrizadas de la primera versión.
- Su clave de respuesta se comprueba con un **evaluador independiente del motor**, en `tests/math-engine.test.js`, que reconstruye el resultado de cada una de las quince familias a partir de su enunciado.
- Los distractores se vinculan con errores reales de procedimiento: jerarquía de operaciones, porcentajes, manejo de fracciones, ecuaciones, áreas y perímetros, Pitágoras, media estadística y probabilidad. Se eliminan opciones no numéricas artificiales usadas anteriormente para completar las cuatro alternativas.
- Se contrastan opciones como números racionales para descartar duplicidades equivalentes (por ejemplo, dos fracciones distintas que expresan el mismo valor).
- El examen admite **a lo sumo dos variantes de una misma plantilla matemática**. No se afirma que las quince plantillas equivalgan a todas las destrezas matemáticas exigibles.

### Español
- Se añadieron 20 reactivos nuevos de aplicación y razonamiento lingüístico para los niveles intermedio (12) y avanzado (8), distribuidos entre morfosintaxis, vocabulario contextual, cohesión, retórica, organización textual y lectura crítica.
- Los **exámenes intermedio y avanzado no seleccionan** las 72 reformulaciones que reproducían preguntas básicas con distinto encabezado. Dichas preguntas se conservan como ejercicios de **repaso**, tienen etiqueta informativa en modo estudio y se priorizan después de ejercicios más específicos del nivel.
- Las 36 preguntas lingüísticas y de microlectura del nivel básico recibieron explicaciones sustantivas y específicas, en `data/spanishExplanations.js`. Estas explicaciones también acompañan las reformulaciones de repaso.
- El modo estudio y la revisión de examen muestran la **explicación correspondiente a la alternativa incorrecta seleccionada** cuando el reactivo dispone de ella; no solo el fundamento de la solución.

## Garantías automáticas y lo que NO garantizan

Las pruebas automatizadas comprueban estructura de 120 preguntas, distribución por áreas, 3 niveles, figuras, coherencia numérica de familias de Matemáticas, no equivalencia numérica entre alternativas, presencia de explicaciones y exclusión de duplicados conceptuales reconocidos. No pueden probar que todo distractor sea igualmente plausible, que la interpretación de un texto sea única en todos los contextos ni que un problema tenga la misma dificultad empírica que la PHUMA.

**Pendientes de revisión humana:** todos los reactivos conceptuales de Ciencias Naturales y Sociales, casos culturales e históricos de Honduras, texto y opciones de Habilidades Blandas, y las preguntas que todavía presentan una explicación genérica. Los 287 reactivos con retroalimentación individual por alternativa representan solo parte del banco de 965. La selección de niveles avanzado/intermedio no está calibrada con población evaluada.

La escala /1600 continúa siendo una **conversión lineal didáctica** claramente separada del porcentaje real de aciertos; no hay parámetros oficiales para traducir el número de aciertos de este banco a un puntaje PHUMA real.

## Próxima fase sugerida
1. Construir un panel local de observaciones/reporte de preguntas problemáticas que adjunte ID, nivel y categoría; recopilar retroalimentación sin transmitir datos personales.
2. Revisión disciplinar de los ítems de Ciencias Naturales y Sociales, con fuentes oficiales y bibliografía contrastable.
3. Piloto voluntario de estudiantes; medir tiempo por reactivo, tasas de acierto y poder discriminativo (solo con consentimiento e información suficiente). Evitar afirmaciones de validez predictiva antes de contar con evidencia.
