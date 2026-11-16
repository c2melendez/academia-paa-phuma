import test from 'node:test';
import assert from 'node:assert/strict';
import {disciplinaryQuestions} from '../data/disciplinaryBank.js';
import {BANK,generateExam} from '../data/questionBank.js';
import {AREAS} from '../src/catalog.js';

test('Cada problema disciplinar contiene cuatro opciones y justificación propia por distractor',()=>{
 assert.equal(disciplinaryQuestions.length,24);
 const ids=new Set();
 for(const q of disciplinaryQuestions){
  assert.ok(['naturales','sociales'].includes(q.area),q.id);
  assert.ok(q.level==='intermedio'||q.level==='avanzado',q.id);
  assert.ok(!ids.has(q.id),q.id);ids.add(q.id);
  assert.ok(q.prompt.length>55,q.id);
  assert.equal(q.options.length,4,q.id);
  assert.equal(new Set(q.options).size,4,q.id);
  assert.ok(q.explanation.length>75,q.id);
  assert.equal(Object.keys(q.optionExplanations||{}).length,4,q.id);
  assert.equal(q.optionExplanations[q.correct],q.explanation,q.id);
  for(let i=0;i<4;i++)assert.ok(q.optionExplanations[i].length>38,q.id+'/'+i);
  const selected=AREAS.find(x=>x.id===q.area);
  assert.ok(selected.topics[q.topic]?.includes(q.subtopic),'Subtema inexistente '+q.id);
 }
});
test('Situaciones de ciencias y sociales accesibles en ambos modos y sin duplicar en el examen',()=>{
 for(const q of disciplinaryQuestions)assert.ok(BANK.some(x=>x.id===q.id));
 for(const level of ['basico','intermedio','avanzado'])for(let i=0;i<15;i++){
  const exam=generateExam(level).questions;
  assert.equal(exam.length,120);
  assert.equal(new Set(exam.map(x=>x.id)).size,120);
 }
});
