# Métricas de práctica por reactivo y protocolo de evaluación piloto

**Versión:** 16 de noviembre de 2026. **Estado:** herramienta local de autoevaluación, no instrumento calibrado, sin transmisión remota.

## Qué se incorporó

En `src/metrics.js` se implementó un registro agregado por **ID de pregunta** (el identificador incluye nivel, o es propio del reactivo):

- Cantidad de respuestas registradas y cantidad de aciertos.
- Desglose de intentos provenientes de **modo estudio** y **modo examen**.
- Tiempo total y cantidad de respuestas con medición válida. El promedio solo usa respuestas medidas; una pregunta sin responder **no se interpreta como error** en esta tabla.
- Indicadores personales simples para dar seguimiento al repaso: **Pocos datos** cuando existen menos de 5 intentos; **Reforzar** con 5 o más intentos y hasta 35 % de aciertos; **Dominado en práctica** con 5 o más y al menos 85 %; **Revisar tiempo** si el promedio es al menos 90 segundos, con 5 o más intentos; y **En progreso** en el resto.
- Cuando existe un informe manual para una pregunta, se puede mostrar **Revisar informe** para recordar que necesita comprobación editorial. Un informe **no prueba** que la clave de respuesta sea errónea.

Estos límites son **heurísticas para un solo estudiante**, escogidas como ayuda de estudio, no como cortes aprobados por la UNAH ni como evidencia de parámetros psicométricos.

## Cómo se mide y almacena

- En estudio, el cronómetro comienza al presentar la pregunta y se detiene cuando se selecciona una respuesta. Si la página pasa a segundo plano, se descarta el tiempo no confiable del tramo.
- En examen, se acumulan periodos de **visualización activa** antes de la primera respuesta; una navegación entre preguntas interrumpe la medición de la pregunta abandonada, que puede continuar cuando se vuelva a ella. La respuesta y su medición se consolidan **solo al terminar** el examen; cambiar una alternativa no multiplica los intentos.
- La medición máxima aceptada por reactivo es de **600 segundos**, para reducir el efecto de pausas largas. Es una aproximación y puede verse afectada por interrupciones, dispositivos lentos y comportamiento del navegador.
- La nueva pantalla **Mi progreso → Desempeño por pregunta** muestra resultados por área y dificultad, hasta 30 preguntas ordenadas por menor acierto, con filtros, indicadores y tiempos medios.
- Se utiliza únicamente `localStorage`, dentro del mismo almacenamiento donde vive el progreso existente. No se han creado cuentas, telemetría, bases de datos, conexiones a servicios analíticos ni envíos automáticos.
- Se ofrecen exportación voluntaria en **JSON** y eliminación independiente de estas métricas. Borrar estadísticas por pregunta **no elimina las notas históricas, partidas guardadas o informes de preguntas**. La importación del progreso completo conserva estas métricas.
- Se guardan ID, área, subtema, nivel y contadores, **sin texto completo del reactivo, sin alternativa escogida, sin nombre y sin correo electrónico**.

Las notas y el puntaje lineal referencial /1600 continúan siendo independientes. Los simulacros anteriores a este cambio no generan mediciones retroactivas, porque no se registraron tiempos individuales en ellos.

## Límites estadísticos

Un alumno que falla repetidamente no prueba que el reactivo sea «difícil» para la población, ni un acierto repetido que sea «fácil». La validez de constructo, calibración, discriminación del reactivo, sesgo diferencial, confiabilidad y equiparación exigen un estudio con participantes suficientes y evaluadores responsables. **No hay estimación de parámetros IRT en esta versión.**

## Protocolo sugerido para una futura prueba piloto

1. Obtener consentimiento específico, explicar finalidad, almacenamiento y quién podrá ver las exportaciones.
2. Reunir voluntariamente un conjunto de registros de diferentes estudiantes, en niveles y condiciones de aplicación comparables; nunca recopilar datos personales no necesarios.
3. Separar las tres dificultades y las materias. No mezclar repeticiones de un mismo estudiante con observaciones independientes al estimar la tasa de acierto.
4. Evaluar en una revisión dirigida por docentes: exactitud de la clave, claridad del enunciado, plausibilidad de distractores, sensibilidad cultural, accesibilidad de figuras y contenido oficial por área.
5. En una fase estadística posterior, analizar proporción de aciertos por reactivo, relación con puntuaciones externas confiables, discriminación, tiempos atípicos y muestras desbalanceadas. Solo entonces estudiar si se justifica una equiparación.
6. Publicar límites, procedimientos y cambios editoriales para evitar confundir el simulacro con un examen oficial.

## Pruebas automatizadas

- `tests/metrics.test.js`: exactitud de conteos, promedio, observaciones sin tiempo válido, mínimo de cinco intentos y exportación sin preguntas completas.
- `tests/metrics-ui.test.js`: recorrido mediante eventos reales de interfaz simulados, registro de un ejercicio de estudio y una respuesta de examen, conservación de resultados y borrado independiente.
- `npm run check:syntax`: revisión sintáctica del código de la aplicación; ahora se ejecuta como requisito de la compilación estática, tanto localmente como al desplegar en Render.

**Advertencia:** Esto mejora la observabilidad de la práctica, pero no valida la equivalencia estadística con la PHUMA oficial.
