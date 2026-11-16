# Academia PAA + PHUMA

Aplicación web de preparación para admisión a la UNAH: **modo estudio**, con explicaciones al contestar, y **modo examen**, con 120 preguntas y duración de 170 minutos. Español, sin sección de Inglés.

## Ejecutar

```bash
npm run dev
npm test
npm run build
```

## Publicación

- **GitHub Pages**: incluido `.github/workflows/deploy.yml`, que ejecuta pruebas, compila y despliega en cada push a `main`. En Settings → Pages seleccionar **GitHub Actions** como fuente. La web utiliza rutas relativas y funciona en subrutas de GitHub Pages.
- **Render**: crear Static Site conectado al repositorio, construir con `npm run build` y directorio de publicación `dist`; `render.yaml` ya incluye los valores.

## Características

- Estudio por área, tema, subtema y dificultad; preguntas nuevas antes de las ya vistas; explicación tras cada respuesta.
- Simulacros de 120 preguntas: 30 Español, 30 Matemáticas, 20 Naturales, 20 Sociales y 20 Habilidades blandas.
- Tres niveles de dificultad pedagógica, cronómetro y recuperación de simulacro inconcluso.
- Calificación y retroalimentación tras finalizar; historial y exportación/importación JSON del progreso; modo oscuro.
- No requiere servidor ni cuentas; se usa `localStorage` del navegador. El progreso no se sincroniza entre dispositivos salvo exportación/importación.

## Banco y limitaciones

`data/curated.js` recoge preguntas originales conceptuales, `data/questionBank.js` construye el banco y parametriza ejercicios matemáticos. La validación comprueba IDs, 4 alternativas diferentes y cobertura por área y nivel. A fecha de esta versión, el sistema contiene **576 preguntas** distribuidas entre los tres niveles; la cifra exacta se muestra en la portada. Algunas destrezas de Español se practican con el mismo material base y un enunciado adaptado a dificultad: esto **no equivale a tres fuentes independientes**. En Matemáticas existen ejercicios con números diferentes, pero con patrones de resolución comunes. La política de no repetición funciona a nivel de IDs y prioriza preguntas no vistas entre simulacros; al agotarse las opciones nuevas avisa y reutiliza, nunca duplica preguntas dentro de un simulacro.

El contenido es material didáctico **no oficial**, sin afiliación con UNAH o College Board. Los temas proceden de las guías suministradas por el usuario; los ítems no son copias literales de pruebas. Las habilidades blandas usan escenarios razonados propuestos para práctica y sus subtemas no deben considerarse temario oficial de PHUMA. Antes de usarse como evaluación de alto impacto se recomienda revisión de expertos de cada materia y profesores de Honduras.

## Ampliación

- Añadir filas a `data/curated.js`, respetando los ocho campos `[tema, subtema, enunciado, respuestaCorrecta, distractor1, distractor2, distractor3, explicación]`.
- Revisar y ejecutar `npm test` para verificar cobertura y unicidad.
- Para ejercicios matemáticos, ampliar plantillas con resultados comprobados en `mathQuestion` y mantener IDs estables para historial del alumnado.

## Privacidad

Los datos se almacenan localmente; no hay analítica, cookies de seguimiento ni envío de información personal.