# M0 — reconciliación reproducible y puerta de calidad

Fecha: 2026-11-17. Destino exclusivo: `c2melendez/academia-paa-phuma`; rama `main`. No utilizar métricas del proyecto distinto `desafio-gramatical`.

## Fuentes y contratos

- Guía PRE-U PHUMA suministrada: 120 reactivos, 170 minutos; 30 comunicativas, 30 matemáticas, 20 naturales, 20 sociales, 20 habilidades blandas.
- Página de inscripción UNAH: trámites, no escala psicométrica de dificultad.
- PRONASA: referencia pedagógica no oficial y contadores públicos inconsistentes; no copiar reactivos ni alterar la matriz oficial.
- Catálogo ejecutable: `src/catalog.js`. Banco de simulacro: `data/questionBank.js`. Banco lúdico: `data/gameBank.js`.
- La meta de juegos por combinación elegible subtema × modalidad × nivel es núcleo 10/15/20 y total 30/50/70. Solo se inventarían modalidades ya presentes en el banco; la enumeración de modalidades elegibles aún necesita contrastarse con la UI/plan para evitar falsos cierres.

## Ejecución

```sh
npm test
npm run audit
npm run audit:quality
npm run audit:games
npm run audit:m0
npm run qa:m0
```

El inventario genera `reports/m0-inventory.json` con matriz existente, déficits, primer bloque incompleto, hash SHA-256 del contenido inventariado y errores estructurales. El ejecutor genera `reports/qa-m0.json`; una etapa ausente o distinta de PASS impide marcar aprobación. Los tests prueban fallo deliberado y etapa ausente. GitHub Actions ejecuta los comandos y adjunta evidencia JSON.

## Criterio de cierre, sin falsos positivos

M0 solo podrá marcarse `CERRADO` si: (1) inventario ejecutado y revisado; (2) matriz de modalidades elegibles verificada contra UI y alcance; (3) evidencia de los controles de QA, incluyendo negativos; (4) GitHub Actions aprobado; (5) despliegue Render LIVE del mismo SHA; (6) primer bloque M1 y déficit exacto persistidos. Un despliegue LIVE no demuestra, por sí mismo, que GitHub Actions esté aprobado.

## Estado observado durante esta implementación

- Confirmada vinculación de Render `srv-dbthiauc6qcc73987gng` con rama `main` de este repositorio.
- El despliegue `dep-dbu417fpq7jc739nd01g` del commit `39be14e939a028107120bdb0663c137b0fc80ee0` alcanzó estado LIVE. Registros Render: 43 tests satisfactorios, 0 fallidos, compilación correcta.
- GitHub Actions, ejecución del nuevo inventario en su runner y revisión editorial global: **no verificados aún con evidencia de aprobación**. Por tanto no se declara cierre de M0 en esta acta.
- Los reactivos son ejercicios didácticos y no ítems psicométricamente calibrados; no deben contarse como independientes sin evaluación de contenido.

Próxima acción reproducible: comprobar artefacto `m0-verification` y estado de GitHub Actions para el SHA vigente, revisar `nextOpen` y el mapa de modalidades elegibles, corregir faltantes/errores y registrar el cierre M0 antes de iniciar M1.
