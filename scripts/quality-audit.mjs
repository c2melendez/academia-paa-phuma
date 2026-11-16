import {BANK,generateExam} from '../data/questionBank.js';
import {AREAS,LEVELS} from '../src/catalog.js';
const levels=LEVELS.map(x=>x.id);
const rows=levels.flatMap(level=>AREAS.map(area=>{
 const questions=BANK.filter(q=>q.level===level&&q.area===area.id);
 return {nivel:level,area:area.short,total:questions.length,
 graficas:questions.filter(q=>q.visual).length,
 retroalimentacionIndividual:questions.filter(q=>q.optionExplanations&&Object.keys(q.optionExplanations).length===4).length,
 repasoBasicoReformulado:questions.filter(q=>q.reusedBasic).length,
 razonamientoAplicado:questions.filter(q=>q.reasoningDepth).length};
}));
console.log('AUDITORÍA EDITORIAL (no validación psicométrica)');
console.log('Reactivos por ID:',BANK.length);
console.table(rows);
const uniqueMathFamilies=new Set(BANK.filter(q=>q.familyId).map(q=>q.familyId));
console.log('Plantillas matemáticas distintas:',uniqueMathFamilies.size);
console.log('Reactivos matemáticos derivados de esas plantillas:',BANK.filter(q=>q.familyId).length);
console.log('Total con explicación individual por alternativa:',BANK.filter(q=>q.optionExplanations&&Object.keys(q.optionExplanations).length===4).length);
const basicReframed=BANK.filter(q=>q.reusedBasic);
console.log('Reformulaciones españolas básicas conservadas para repaso:',basicReframed.length);
for(const level of ['intermedio','avanzado']){
 const exam=generateExam(level).questions;
 const forbidden=exam.filter(q=>q.reusedBasic);
 if(forbidden.length)throw new Error('El examen '+level+' contiene reformulaciones básicas.');
}
console.log('Simulacros intermedio y avanzado excluyen reformulaciones básicas: sí');
console.log('Advertencia: los valores anteriores no acreditan que todos los reactivos tengan una dificultad equivalente a PHUMA.');
