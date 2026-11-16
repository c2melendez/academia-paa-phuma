# Academia PAA + PHUMA

Aplicación web de preparación para admisión a la UNAH: **modo estudio**, con explicaciones al contestar, y **modo examen**, con 120 preguntas y duración de 170 minutos. Español, sin sección de Inglés.

## Ejecutar

```bash
npm run dev
npm test
npm run build
```

## Publicación

- **GitHub Actions**: `.github/workflows/deploy.yml` valida el banco y compila tras cada actualización. No despliega a Pages por limitaciones de permisos en este repositorio.
- **Render (publicado)**: https://academia-paa-phuma.onrender.com . Static Site vinculado a `main`, comando `npm test && npm run build`, publicación `dist` con despliegue automático.

## Características

- Estudio por área, tema, subtema y dificultad; preguntas nuevas antes de las ya vistas; explicación tras cada respuesta.
- Simulacros de 120 preguntas: 30 Español, 30 Matemáticas, 20 Naturales, 20 Sociales y 20 Habilidades blandas.
- Tres niveles de dificultad pedagógica, cronómetro y recuperación de simulacro inconcluso.
- Calificación y retroalimentación tras finalizar; historial y exportación/importación JSON del progreso; modo oscuro.
- No requiere servidor ni cuentas; se usa `localStorage` del navegador. El progreso no se sincroniza entre dispositivos salvo exportación/importación.

## Banco y limitaciones

`data/curated.js` recoge preguntas originales conceptuales, `data/questionBank.js` construye el banco, `data/visualBank.js` aporta 180 ejercicios con datos gráficos originales, y `src/visualRenderer.js` dibuja diagramas accesibles en SVG sin descargar imágenes externas. La validación comprueba IDs, 4 alternativas diferentes y cobertura por área y nivel. A fecha de esta versión, el sistema contiene **989 preguntas** distribuidas entre los tres niveles; la cifra exacta se muestra en la portada. Algunas destrezas de Español se practican con el mismo material base y un enunciado adaptado a dificultad: esto **no equivale a tres fuentes independientes**. En Matemáticas existen ejercicios con números diferentes, pero con patrones de resolución comunes. La política de no repetición funciona a nivel de IDs y prioriza preguntas no vistas entre simulacros; al agotarse las opciones nuevas avisa y reutiliza, nunca duplica preguntas dentro de un simulacro.

El contenido es material didáctico **no oficial**, sin afiliación con UNAH o College Board. Los temas proceden de las guías suministradas por el usuario; los ítems no son copias literales de pruebas. Las habilidades blandas usan escenarios razonados propuestos para práctica y sus subtemas no deben considerarse temario oficial de PHUMA. Antes de usarse como evaluación de alto impacto se recomienda revisión de expertos de cada materia y profesores de Honduras.

## Ampliación

- Añadir filas a `data/curated.js`, respetando los ocho campos `[tema, subtema, enunciado, respuestaCorrecta, distractor1, distractor2, distractor3, explicación]`.
- Revisar y ejecutar `npm test` para verificar cobertura y unicidad.
- Para ejercicios matemáticos, ampliar plantillas con resultados comprobados en `mathQuestion` y mantener IDs estables para historial del alumnado.

## Privacidad

Los datos se almacenan localmente; no hay analítica, cookies de seguimiento ni envío de información personal.

## Ejercicios con figuras y gráficos (versión 2)

- **180 ejercicios visuales** (60 por dificultad) además del banco previo. Tipos: barras, líneas, sectores circulares, pictogramas, diagramas de dispersión cartesiana, triángulos rectángulos, paralelas cortadas por transversal y velocidad-tiempo.
- Los ejercicios visuales aparecen **en modo estudio y en modo examen**. Cada simulacro exige como mínimo 2 preguntas visuales en Español, 4 en Matemáticas, 1 en Naturales y 1 en Sociales (8 en total), manteniendo las 120 preguntas y su distribución oficial de áreas.
- Originales basados en **tipos de estímulos**, no en copias de preguntas o imágenes con copyright. Referencias: *Guía PRE-U UNAH 2026*, páginas impresas 23–26, 33, 53–58; *PAA, Prueba de práctica*, ejercicios de Matemáticas con barras/diagramas/figuras; *PAA, Guía de estudio* (College Board), apartados de análisis cuantitativo, gráficos y geometría.
- Algunos ejercicios reusan una estructura gráfica con valores diferentes; existe diversidad de estímulos, pero no deben interpretarse como 180 problemas conceptualmente independientes. Los datos demográficos o de talleres son **hipotéticos**, no estadísticas reales.
- Las imágenes se generan localmente como SVG responsivo con descripción accesible; se conservan en las sesiones de examen guardadas y en su revisión posterior.

## Revisión del instrumento y la escala de 1,600 (noviembre de 2026)

### Fuentes y jerarquía de evidencia

1. **Fuente primaria**: [Dirección de Admisiones UNAH](https://admisiones.unah.edu.hn/pruebas-de-admision/) y [Guía PRE-U 2026](https://admisiones.unah.edu.hn/assets/Uploads/GUIA-PRE-U-UNAH-2026.pdf), sobre estructura y temas oficiales.
2. **Fuente de comparación didáctica**: [PRONASA – Simulador PHUMA](https://pronasa.dashnexpages.net/simulador-phuma/), utilizado para orientar el nivel **intermedio**, no como patrón estadístico certificado. Su página accesible muestra discrepancias entre el total anunciado de 120 y distintos contadores (por ejemplo, “1 de 50”). La aplicación mantiene el formato oficial de la guía: 30/30/20/20/20.
3. **Banco propio**: todas las preguntas añadidas son originales, no reproducciones de los reactivos de terceros.

### Resultados: dos medidas que NO deben confundirse

- **Porcentaje real de aciertos**: `100 × correctas / 120`, con dos decimales.
- **Puntaje referencial sobre 1,600**: `redondear(1,600 × correctas / 120)` puntos, valor puramente **lineal y didáctico**; aparece con advertencia expresa de que **NO equivale al puntaje oficial UNAH ni predice el acceso a una carrera**. El resultado real puede depender de parámetros psicométricos, calibración, equiparación y/o criterios de admisión que no están disponibles para este banco. El porcentaje de aciertos es el dato transparente y objetivamente verificable.
- Se muestra también desglose por área y lista de subtemas a reforzar (con acceso directo al modo estudio). El historial conserva compatibilidad con resultados previos y utiliza la nueva visualización al abrirlos.
- **Ejemplo**: 90 aciertos → 75.00 % y 1,200/1,600 puntos referenciales. Los umbrales por carrera no deben inferirse a partir de esta conversión no calibrada.

### Dificultad por desempeño cognitivo, no por números mayores

- **Básico**: conceptos, cálculos directos, reconocimiento y aplicación inicial.
- **Intermedio**: casos aplicados, lectura de datos y razonamiento contextualizado; PRONASA se tomó como referencia pedagógica, sin copiar contenido.
- **Avanzado**: razonamiento multietapa, análisis de causalidad, comparación de evidencias, interpretación avanzada de gráficas, geometría y resolución de problemas con varias operaciones. El generador impone cuotas mínimas de casos analíticos (8 Español, 12 Matemáticas, 10 Naturales, 8 Sociales, 5 Blandas) y prioriza visualizaciones multietapa.

### Cobertura y auditoría de temarios

El banco ahora contiene **989 registros identificados**: 756 originales de la versión anterior + 32 de fundamentos + 66 de razonamiento aplicado/avanzado + 15 de visualización multietapa+ 23 de cierre de brechas curriculares + 36 de lectura extensa + 17 de razonamiento con retroalimentación por alternativa. Es un conteo de registros, **no de modelos conceptuales completamente independientes**. Persiste una dependencia de plantillas parametrizadas para parte de la práctica. Se reforzaron, entre otros, morfosintaxis, hiperonimia, elisión, MCD/MCM, inecuaciones, cuadráticas, sólidos, dispersión, método científico, biomoléculas, fotosíntesis, agroquímicos, conversiones físicas, husos horarios, neoliberalismo y estratificación.

`npm run audit` detalla la cantidad de preguntas por materia y dificultad, así como cantidad de reactivos por subtema y nivel para detectar las áreas que aún tienen pocos ejercicios. La auditoría automatizada confirma al menos una pregunta por subtema declarado **en cada uno de los tres niveles** (cero brechas vacías, ver `npm run audit`); esto no debe interpretarse como cobertura exhaustiva ni validación psicométrica. El componente habilidades blandas no cuenta en la guía oficial con un desglose exhaustivo de preguntas; sus escenarios son didácticos, no una reproducción certificada.

**Nota:** este software es independiente de la UNAH, no emite dictámenes de admisión y no reemplaza la guía oficial ni sus procedimientos de calificación.


## Auditoría pedagógica complementaria StuDocu (16 de noviembre de 2026)

Documento de trazabilidad: [docs/auditoria-studocu-2026.md](docs/auditoria-studocu-2026.md). El material de StuDocu es **aporte de usuarios y algunas vistas previas son Premium**; no es una fuente oficial de estructura ni calibración. Se conservaron las reglas de [admisiones UNAH](https://admisiones.unah.edu.hn/pruebas-de-admision/) y no se copiaron ejercicios protegidos ni contenido no accesible.

**Cambios funcionales**: 9 lecturas originales extensas con 36 reactivos y sus fundamentos (un pasaje ofrece varias preguntas), 17 nuevas preguntas originales con explicación particular para cada alternativa, nuevo subtema «Adecuación y referente», y simulacros organizados por áreas oficiales en el orden Español, Matemáticas, Ciencias Naturales, Ciencias Sociales y Habilidades Blandas. Las preguntas de una misma lectura aparecen juntas. Se conservan los niveles pedagógicos y la escala referencial /1600, siempre distinguida del porcentaje real de aciertos.

**Control automatizado**: las pruebas verifican respuestas numéricas equivalentes entre alternativas, el cálculo correcto de las 180 preguntas visuales originales (geometría y gráficos), el grupo de tres preguntas de una misma lectura por examen y la cobertura temática. Un registro no equivale a un ítem validado estadísticamente; la auditoría humana por especialistas sigue siendo necesaria.


## Revisión pedagógica de Matemáticas y Español (fase 2026-11-16)

Informe verificable: [Auditoría de Matemáticas y Español](docs/auditoria-pedagogica-matematicas-espanol-2026.md).

- **Matemáticas**: motor paramétrico revisado (`data/mathEngine.js`), con 270 reactivos, explicaciones específicas por alternativa y pruebas independientes que recalculan cada resultado. Cada examen incorpora como máximo 2 variantes de una misma plantilla matemática.
- **Español**: 20 nuevos ejercicios distintos en niveles intermedio y avanzado; los exámenes de dichos niveles evitan las 72 reformulaciones básicas previas. Las reformulaciones permanecen señaladas como repaso en modo estudio. Las 36 preguntas básicas tienen explicaciones conceptuales revisadas en `data/spanishExplanations.js`.
- **Transparencia**: `npm run audit:quality` informa la proporción del banco con explicación detallada por alternativa y los contenidos que comparten plantillas. Hay **989 registros**, pero no equivalen a 965 modelos de pregunta independientes ni a una certificación de dificultad PHUMA.
- **Calificación**: el valor /1600 sigue siendo orientativo, lineal y no oficial; el porcentaje real mide solamente aciertos en el simulacro.


## Auditoría disciplinar de Naturales/Sociales e informes de preguntas

Se añadieron **24 ejercicios originales** (12 intermedios y 12 avanzados) de Ciencias Naturales y Sociales, con cuatro alternativas y explicación específica por distractor. Se precisó un fundamento previo sobre entrecruzamiento de cromátidas no hermanas en meiosis I. Los contenidos se contrastaron con la **Guía PRE-U UNAH 2026**, secciones de entorno natural (páginas impresas 7–9) y entorno social (página 10). Este trabajo es editorial y parcial, no una validación psicométrica de todo el banco.

Ahora puedes **reportar una pregunta problemática** desde modo estudio, examen o revisión. Los informes se almacenan solo en el navegador y se pueden exportar en JSON desde **Mi progreso**. Por privacidad, **no se envían automáticamente**, no generan issues en GitHub y no incluyen la respuesta del alumno. Las notas son voluntarias y deben omitir datos personales. También es posible borrar los informes sin borrar los resultados.

El banco contiene **989 registros identificados**; **311** disponen de una explicación específica por cada alternativa. Los demás mantienen fundamentos de solución, con oportunidades de mejora editorial. Consulta [docs/auditoria-naturales-sociales-reportes-2026.md](docs/auditoria-naturales-sociales-reportes-2026.md) y ejecuta `npm run audit:quality` para el estado verificable.
