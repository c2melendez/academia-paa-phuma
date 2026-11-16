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

test('Examen organizado por las cinco áreas oficiales y preguntas asociadas a cada lectura consecutivas',()=>{
 const counts=[['espanol',30],['matematicas',30],['naturales',20],['sociales',20],['blandas',20]];
 for(const level of ['basico','intermedio','avanzado'])for(let k=0;k<10;k++){
  const exam=generateExam(level).questions;
  let offset=0;
  for(const [area,n] of counts){assert.ok(exam.slice(offset,offset+n).every(q=>q.area===area),area+'/'+level);offset+=n;}
  const reading=exam.slice(0,30).filter(q=>q.passage);
  const title=reading[0]?.passageTitle;
  assert.ok(title,'Lectura ausente');
  assert.ok(exam.slice(0,3).every(q=>q.passageTitle===title),'Lectura no está agrupada');
 }
});

test('Exámenes intermedios y avanzados evitan reciclar preguntas básicas de Español con otro encabezado',()=>{
 for(const level of ['intermedio','avanzado'])for(let attempt=0;attempt<30;attempt++){
  const {questions}=generateExam(level);
  const spanish=questions.filter(q=>q.area==='espanol');
  assert.equal(spanish.length,30);
  assert.equal(spanish.filter(q=>q.reusedBasic).length,0,'No deben entrar reformulaciones cosméticas: '+level);
 }
});

test('Diversidad de métodos matemáticos: máximo dos ítems por familia parametrizada en un simulacro',()=>{
 for(const level of ['basico','intermedio','avanzado'])for(let i=0;i<40;i++){
  const questions=generateExam(level).questions.filter(q=>q.area==='matematicas'&&q.familyId);
  const counts=new Map();for(const q of questions)counts.set(q.familyId,(counts.get(q.familyId)||0)+1);
  for(const [family,count] of counts)assert.ok(count<=2,'Familia '+family+' repetida '+count+' veces en nivel '+level);
 }
});

test('Fundamentos lingüísticos específicos en 36 preguntas base y sus versiones de repaso',()=>{
 for(const level of ['basico','intermedio','avanzado'])for(let i=0;i<36;i++){
  const q=BANK.find(q=>q.id==='espanol-'+level+'-'+i);
  assert.ok(q,'Falta pregunta '+level+'/'+i);
  assert.ok(q.explanation.length>100,'Explicación superficial '+q.id);
  assert.ok(!q.explanation.startsWith('La respuesta correcta es'),'Texto genérico '+q.id);
  assert.equal(q.reusedBasic,level!=='basico');
 }
});
