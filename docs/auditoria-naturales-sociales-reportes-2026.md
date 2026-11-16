# Auditoría disciplinar y reportes locales — Ciencias Naturales / Ciencias Sociales

**Fecha:** 16 de noviembre de 2026. **Estado:** mejora editorial y validación automática, NO examen oficial validado ni revisión exhaustiva.

## Fuente que rige el alcance

Documento suministrado por el usuario: *Guía PRE-U UNAH 2026*, CEI-TEST, Facultad de Ciencias Sociales, UNAH, contenidos de Ciencias Naturales, **páginas impresas 7–9** (Biología, Química y Física), y de Ciencias Sociales, **página impresa 10** (Historia de Honduras, Historia universal, Geografía, Educación Cívica, Sociología, Filosofía y Antropología). Se incorporan ejercicios nuevos para trabajar los conceptos y habilidades sin reproducir reactivos ni imágenes protegidas.

No se confunden los subtemas de práctica diseñados para la aplicación con una distribución oficial de preguntas para cada subtema. Los niveles «básico», «intermedio» y «avanzado» son pedagógicos y no tienen validación psicométrica con cohortes de estudiantes.

## Acciones aplicadas

1. Se añadieron **24 situaciones originales**: 12 intermedias y 12 avanzadas, distribuidas entre Ciencias Naturales y Sociales. Cada una contiene 4 alternativas y una explicación específica para cada alternativa.
2. **Naturales:** genética mendeliana, meiosis, control de variables, química de disoluciones, escorrentía y contaminación, conversión de unidades, cinemática y trabajo mecánico, sistemas humanos y fuentes de energía.
3. **Sociales:** independencia y construcción de la federación centroamericana, enclave bananero con contraste de fuentes históricas, densidad de población, husos horarios con cambio de día, derechos y participación política, estratificación e instituciones sociales.
4. Corrección editorial en un ítem previo de genética: el crossing-over se describe ahora como intercambio entre **cromátidas no hermanas de cromosomas homólogos** durante la profase I de meiosis.
5. Las 24 preguntas pasan comprobaciones de cuatro alternativas distintas, coherencia con los nombres de subtema, fundamentos completos y explicación de cada distractor. También se comprueba que el generador mantenga **120 preguntas sin duplicados**.

## Mecanismo de informes (funcional, SIN backend ni transmisión)

- El botón **«Reportar pregunta»** aparece en modo estudio, durante el simulacro y en la revisión posterior.
- Permite marcar: respuesta aparentemente incorrecta, doble respuesta posible, gráfico confuso, explicación deficiente, tema/nivel inadecuado u otro problema.
- Guarda de forma local el ID estable de la pregunta, área, tema, subtema, nivel, motivo, nota voluntaria (máximo 500 caracteres) y fecha. **No guarda ni transmite automáticamente la alternativa seleccionada por el alumno**.
- Se almacena junto al progreso del alumno en `localStorage`, con un apartado **«Informes de preguntas»** en Mi progreso, desde el que se puede exportar un JSON o borrar todos los informes sin eliminar resultados de estudio.
- **No se crea automáticamente un issue de GitHub ni se comunica con la UNAH, profesores ni administradores.** Para compartir reportes, el alumno debe exportar el JSON y enviarlo manualmente. No se debe incluir información personal en las notas.
- El mecanismo no sustituye un sistema docente de moderación, ni un registro central de incidencias.

## Limitaciones y próximos controles

- La revisión sistemática fue **parcial**: se verificaron y reforzaron varios casos representativos de ambos campos y se añadió contenido, pero no se certificaron uno por uno todos los cientos de reactivos anteriores.
- Los 24 nuevos reactivos tienen fundamentos individualizados, pero muchos reactivos heredados siguen mostrando una explicación genérica de error.
- No se estimaron índices de dificultad, discriminación, fiabilidad, equivalencia con PHUMA ni umbrales de admisión. La escala /1600 sigue siendo exclusivamente **lineal y referencial**.
- La siguiente fase útil es una revisión humana por especialistas y un piloto, con consentimiento y sin recopilar datos personales innecesarios, para identificar ítems ambiguos o culturalmente descontextualizados.

**Criterio de seguridad editorial:** cuando un fundamento no puede sostenerse en los temas oficiales o una fuente verificable, debe corregirse o excluirse en lugar de presentarse como oficial.
