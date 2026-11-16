import test from 'node:test';import assert from 'node:assert/strict';
import {visualQuestions} from '../data/visualBank.js';
import {precisionQuestions} from '../data/precisionBank.js';
function expectedVisual(q){
 const v=q.visual;
 if(q.id.includes('right-triangle'))return Math.hypot(v.a,v.b)+' cm';
 if(q.id.includes('parallel-lines'))return v.angle+'°';
 if(q.id.includes('bar-total'))return String(v.values.reduce((a,b)=>a+b,0));
 if(q.id.includes('line-change'))return String(v.values.at(-1)-v.values[0]);
 if(q.id.includes('pie-percent'))return v.values[2]+'%';
 if(q.id.includes('scatter-function'))return String((v.points[1][1]-v.points[0][1])/(v.points[1][0]-v.points[0][0]));
 if(q.id.includes('speed-time'))return v.speed*v.duration+' m';
 if(q.id.includes('reading-bars'))return v.labels[v.values.indexOf(Math.max(...v.values))];
 if(q.id.includes('reading-pictograph'))return 'El grupo B donó '+(v.values[1]*v.scale)+' libros';
 if(q.id.includes('population-bars'))return '15–29 años';
 throw Error('Visual family without independent validation '+q.id);
}
test('Validez matemática independiente del resultado correcto de las 180 figuras iniciales',()=>{
 assert.equal(visualQuestions.length,180);
 for(const q of visualQuestions){
  const expected=expectedVisual(q),actual=q.options[q.correct];
  assert.equal(String(actual),String(expected),'Error de respuesta en '+q.id);
 }
});
test('17 preguntas revisables explican las cuatro alternativas sin contradicciones',()=>{
 assert.equal(precisionQuestions.length,17);
 for(const q of precisionQuestions){
  assert.ok(q.explanation.length>40,q.id);
  assert.equal(Object.keys(q.optionExplanations).length,4,q.id);
  assert.equal(q.options.length,4,q.id);
  assert.equal(new Set(q.options).size,4,q.id);
  assert.ok(q.optionExplanations[q.correct]===q.explanation,q.id);
  for(let n=0;n<4;n++)assert.ok(q.optionExplanations[n].length>40,q.id+' / '+n);
 }
});
