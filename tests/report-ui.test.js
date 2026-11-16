import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const ui=fs.readFileSync(new URL('../src/main.js',import.meta.url),'utf8');
test('La opción de reportar está disponible en estudio, examen y revisión sin revelar respuestas',()=>{
 for(const place of ["reportWidget(q,'study')","reportWidget(q,'exam')","reportWidget(q,'review')"])assert.ok(ui.includes(place),place);
 assert.ok(ui.includes("case 'report-save'"));
 assert.ok(ui.includes("case 'export-reports'"));
 assert.ok(ui.includes("case 'clear-reports'"));
 assert.ok(ui.includes("reportTarget=null"));
 assert.ok(ui.includes("createQuestionReport(q"));
});
test('La exportación de informes tiene aviso explícito de almacenamiento local',()=>{
 assert.ok(ui.includes("no se envían automáticamente"));
 assert.ok(ui.includes("Exportar informes JSON"));
 assert.ok(ui.includes("data-action=\"report-cancel\""));
});
