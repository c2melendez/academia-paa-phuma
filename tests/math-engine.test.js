import test from 'node:test';
import assert from 'node:assert/strict';
import {mathQuestion} from '../data/mathEngine.js';
import {generateExam} from '../data/questionBank.js';
const numeric=s=>{const m=/^(-?\d+)\/(-?\d+)$/.exec(String(s));return m?Number(m[1])/Number(m[2]):Number(s)};
const nums=(prompt,re)=>{const m=re.exec(prompt);if(!m)throw Error('Fallo al interpretar: '+prompt);return m.slice(1).map(Number)};
function independentlyCalculate(q){
 const p=q.prompt,i=Number(q.id.split('-').at(-1))%15;
 switch(i){
 case 0:{const [a,b,c]=nums(p,/Calcula (\d+) \+ (\d+) × (\d+)\./);return a+b*c;}
 case 1:{const [a,b,c,d]=nums(p,/Calcula (\d+)\/(\d+) \+ (\d+)\/(\d+)\./);return a/b+c/d;}
 case 2:{const [percent,total]=nums(p,/¿Cuál es el (\d+)% de (\d+)\?/);return percent*total/100;}
 case 3:{const [number,price,target]=nums(p,/Si (\d+) cuadernos cuestan L (\d+), ¿cuánto cuestan (\d+) cuadernos/);return price*target/number;}
 case 4:{const [a,b]=nums(p,/Calcula (\d+)² \+ (\d+)\./);return a*a+b;}
 case 5:{const [coef,add,right]=nums(p,/Resuelve (\d+)x \+ (\d+) = (\d+)/);return (right-add)/coef;}
 case 6:{const [plus,minus]=nums(p,/Si x\+y=(\d+) y x−y=(-?\d+)/);return (plus+minus)/2;}
 case 7:{const [a,b,c,d]=nums(p,/En la sucesión (\d+), (\d+), (\d+), (\d+),/);return d+(b-a);}
 case 8:{const [a,b,x]=nums(p,/f\(x\)=(\d+)x\+(\d+), calcula f\((\d+)\)/);return a*x+b;}
 case 9:{const [long,wide]=nums(p,/Un rectángulo mide (\d+) cm de largo y (\d+) cm de ancho/);return long*wide;}
 case 10:{const [side]=nums(p,/Un cuadrado tiene lado (\d+) cm/);return 4*side;}
 case 11:{const [angle]=nums(p,/Uno mide (\d+)°/);return 180-angle;}
 case 12:{const [a,b]=nums(p,/catetos de (\d+) cm y (\d+) cm/);return Math.hypot(a,b);}
 case 13:{const [a,b,c]=nums(p,/media de (\d+), (\d+) y (\d+)/);return (a+b+c)/3;}
 case 14:{const [green,yellow]=nums(p,/hay (\d+) bolas verdes y (\d+) amarillas/);return green/(green+yellow);}
 }
 throw Error('Tipo desconocido: '+i);
}
test('Motor matemático v2: 270 reactivos con resultado comprobado de manera independiente',()=>{
 for(const level of ['basico','intermedio','avanzado'])for(let i=0;i<90;i++){
   const q=mathQuestion(level,i);
   assert.ok(q.id.startsWith('matematicas-v2-'));
   const value=numeric(q.options[q.correct]),expected=independentlyCalculate(q);
   assert.ok(Math.abs(value-expected)<1e-8,q.id+' esperaba '+expected+' y obtuvo '+value);
   assert.equal(new Set(q.options).size,4,q.id);
   for(let j=0;j<4;j++){
     assert.ok(Number.isFinite(numeric(q.options[j])),q.id+' tiene alternativa no numérica');
     assert.ok(q.optionExplanations[j]?.length>18,q.id+' sin retroalimentación');
     for(let k=0;k<j;k++)assert.ok(Math.abs(numeric(q.options[k])-numeric(q.options[j]))>1e-8,'Equivalencia '+q.id);
   }
 }
});
test('Los exámenes usan la versión matemática revisada con respuestas verificadas',()=>{
 for(const level of ['basico','intermedio','avanzado']){
  const exam=generateExam(level).questions;
  for(const q of exam.filter(q=>q.id.startsWith('matematicas-v2-')))assert.ok(Math.abs(independentlyCalculate(q)-numeric(q.options[q.correct]))<1e-8,q.id);
 }
});
