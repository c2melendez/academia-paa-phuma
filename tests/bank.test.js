import test from 'node:test';import assert from 'node:assert/strict';import {BANK,coverage,validateBank,generateExam} from '../data/questionBank.js';
test('Banco válido y cobertura de 120 en los tres niveles',()=>assert.deepEqual(validateBank(),[]));
test('Simulacros sin preguntas repetidas dentro del intento',()=>{for(const level of ['basico','intermedio','avanzado']){let {questions}=generateExam(level);assert.equal(questions.length,120);assert.equal(new Set(questions.map(x=>x.id)).size,120);for(const [id,n] of Object.entries({espanol:30,matematicas:30,naturales:20,sociales:20,blandas:20}))assert.equal(questions.filter(x=>x.area===id).length,n);}});
test('Sin error de respuesta correcta ni opciones repetidas',()=>{for(const q of BANK){assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.ok(q.options[q.correct]);}});
import {renderVisual} from '../src/visualRenderer.js';
import {nextStudy} from '../data/questionBank.js';
test('Ejercicios visuales presentes en los tres niveles y áreas académicas',()=>{
  for(const level of ['basico','intermedio','avanzado']){
    const group=BANK.filter(q=>q.level===level&&q.visual);
    assert.ok(group.length>=60);
    for(const id of ['espanol','matematicas','naturales','sociales'])assert.ok(group.some(q=>q.area===id));
    for(const t of ['bar','line','pie','pictogram','scatter','triangle','parallels','velocity'])assert.ok(group.some(q=>q.visual.type===t),`${level}: ${t}`);
  }
});
test('Cada simulacro incluye al menos ocho preguntas con gráfico o figura',()=>{
 for(const level of ['basico','intermedio','avanzado'])for(let i=0;i<20;i++){
  const attempt=generateExam(level, BANK.filter(q=>q.level===level).slice(0,50).map(q=>q.id));
  for(const [area,min] of Object.entries({espanol:2,matematicas:4,naturales:1,sociales:1}))assert.ok(attempt.questions.filter(q=>q.area===area&&q.visual).length>=min);
 }
});
test('Diagramas legibles y compatibles con modo estudio y examen',()=>{
 for(const q of BANK.filter(q=>q.visual)){
  const svg=renderVisual(q.visual);
  assert.match(svg,/<figure/);assert.match(svg,/<svg/);assert.match(svg,/aria-label=/);
  assert.match(svg,/<\/svg>/);assert.ok(q.options[q.correct]);
  const selected=nextStudy({area:q.area,topic:q.topic,subtopic:q.subtopic,level:q.level,history:BANK.filter(x=>x.level===q.level&&x.area===q.area&&x.topic===q.topic&&x.subtopic===q.subtopic&&x.id!==q.id).map(x=>x.id)});
  assert.ok(selected.question);
 }
});