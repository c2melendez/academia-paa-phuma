import test from 'node:test';
import assert from 'node:assert/strict';
import {BANK,generateExam} from '../data/questionBank.js';
import {readingQuestions} from '../data/readingBank.js';

function value(option){
 const s=String(option).trim().replaceAll(',','');
 const f=/^(-?\d+)\s*\/\s*(-?\d+)$/.exec(s);
 if(f){const n=Number(f[1]),d=Number(f[2]);return d?{numerator:n,denominator:d}:null;}
 if(/^-?\d+(\.\d+)?$/.test(s))return {numerator:Number(s),denominator:1};
 return null;
}
test('Ningún reactivo matemático presenta dos opciones numéricas equivalentes',()=>{
 for(const q of BANK.filter(q=>q.area==='matematicas')){
  const vals=q.options.map(value);
  for(let i=0;i<4;i++)for(let j=i+1;j<4;j++)if(vals[i]&&vals[j]){
   const lhs=vals[i].numerator*vals[j].denominator;
   const rhs=vals[j].numerator*vals[i].denominator;
   assert.notEqual(lhs,rhs,'Opciones equivalentes para '+q.id+': '+q.options[i]+' y '+q.options[j]);
  }
 }
});
test('Pasajes de lectura y fundamento completo para ambos modos',()=>{
 assert.equal(readingQuestions.length,36);
 assert.equal(new Set(readingQuestions.map(q=>q.passageTitle)).size,9);
 for(const q of readingQuestions){assert.ok(q.passage.length>170,q.id);assert.ok(q.explanation.length>=20,q.id);assert.equal(q.options.length,4);}
 for(const level of ['basico','intermedio','avanzado']){
  for(let attempt=0;attempt<10;attempt++){
   const {questions}=generateExam(level);
   const groups=Object.values(questions.filter(q=>q.passage).reduce((o,q)=>{(o[q.passageTitle]??=[]).push(q);return o},{}));
   assert.ok(groups.some(g=>g.length>=3),'Sin preguntas relacionadas con el mismo pasaje: '+level);
  }
 }
});
