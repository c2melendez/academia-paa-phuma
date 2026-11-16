import test from 'node:test';import assert from 'node:assert/strict';
import {BANK,generateExam,validateBank} from '../data/questionBank.js';
import {AREAS} from '../src/catalog.js';
const req={espanol:8,matematicas:12,naturales:10,sociales:8,blandas:5};
test('Cobertura del catálogo: cada nuevo concepto de profundidad tiene una ruta seleccionable',()=>{
 const known=new Set(AREAS.flatMap(a=>Object.entries(a.topics).flatMap(([t,ss])=>ss.map(s=>a.id+'|'+t+'|'+s))));
 for(const q of BANK)assert.ok(known.has(q.area+'|'+q.topic+'|'+q.subtopic),'Sin ruta en catálogo: '+q.id+' '+q.topic+'/'+q.subtopic);
});
test('Nivel avanzado exige casos analíticos por área, más allá de aumentar cifras',()=>{
 for(let attempt=0;attempt<12;attempt++){
  const {questions}=generateExam('avanzado');
  for(const [id,min] of Object.entries(req))assert.ok(questions.filter(q=>q.area===id&&q.reasoningDepth==='multi-step').length>=min,id);
 }
});
test('Nivel intermedio aplica criterios de casos contextualizados',()=>{
 const {questions}=generateExam('intermedio');
 for(const [id,min] of Object.entries({espanol:3,matematicas:5,naturales:5,sociales:5,blandas:3}))
 assert.ok(questions.filter(q=>q.area===id&&q.reasoningDepth==='applied').length>=min,id);
});
test('Los fundamentos incorporados cubren criterios científicos y sociales de la guía 2026',()=>{
 const topics=['Biomoléculas','División celular','Método científico','Compuestos inorgánicos','Contaminación y agroquímicos','Magnitudes y conversiones','Trabajo mecánico','Husos horarios','Indicadores sociodemográficos','Neoliberalismo','Estratificación social','MCD y MCM','Ecuaciones cuadráticas','Inecuaciones','Dispersión de datos'];
 for(const subtopic of topics)assert.ok(BANK.some(q=>q.subtopic===subtopic),'Sin preguntas para '+subtopic);
 assert.deepEqual(validateBank(),[]);
});

test('Ninguna categoría o subtema visible en el selector queda sin ejercicios',()=>{
 for(const a of AREAS)for(const [topic,subs] of Object.entries(a.topics))for(const subtopic of subs){
  assert.ok(BANK.some(q=>q.area===a.id&&q.topic===topic&&q.subtopic===subtopic),'Subtema vacío: '+a.id+'/'+topic+'/'+subtopic);
 }
});

test('Los tres niveles incluyen al menos una pregunta por subtema del catálogo',()=>{
 for(const a of AREAS)for(const [topic,subs] of Object.entries(a.topics))for(const subtopic of subs)
 for(const level of ['basico','intermedio','avanzado'])
  assert.ok(BANK.some(q=>q.area===a.id&&q.topic===topic&&q.subtopic===subtopic&&q.level===level), 'Cobertura insuficiente: '+a.id+'/'+topic+'/'+subtopic+'/'+level);
});
