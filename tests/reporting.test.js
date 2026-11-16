import test from 'node:test';
import assert from 'node:assert/strict';
import {createQuestionReport,exportQuestionReports,REPORT_REASONS} from '../src/reporting.js';
const q={id:'science-33',area:'naturales',level:'avanzado',topic:'Física',subtopic:'Trabajo mecánico'};
test('Reportes reproducibles incluyen ID y contexto, sin respuesta del alumno',()=>{
 const r=createQuestionReport(q,'ambiguous','  Dos opciones se parecen  ','exam',()=>new Date('2026-11-16T20:00:00Z'));
 assert.equal(r.questionId,'science-33');assert.equal(r.comment,'Dos opciones se parecen');
 assert.equal(r.createdAt,'2026-11-16T20:00:00.000Z');assert.equal(r.context,'exam');
 assert.equal('selectedAnswer' in r,false);
 const exportado=JSON.parse(exportQuestionReports([r]));
 assert.equal(exportado.reports.length,1);assert.equal(exportado.kind,'question-reports');
});
test('Informes validan categorías, contexto y límite de comentarios',()=>{
 assert.equal(REPORT_REASONS.length,6);
 assert.throws(()=>createQuestionReport(q,'unsupported'));assert.throws(()=>createQuestionReport(q,'other','','unknown'));
 assert.throws(()=>createQuestionReport(null,'other'));
 assert.equal(createQuestionReport(q,'other','x'.repeat(800)).comment.length,500);
});
