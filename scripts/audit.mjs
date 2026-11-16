import {BANK,coverage,validateBank} from '../data/questionBank.js';
import {AREAS,LEVELS} from '../src/catalog.js';
const levels=LEVELS.map(x=>x.id);
console.log('AUDITORÍA DE COBERTURA PAA + PHUMA · NO OFICIAL');
console.log('Preguntas únicas por ID:',BANK.length);
console.log('Nivel / área / cantidad / multi-paso / visuales');
for(const level of levels)for(const a of AREAS){
 const q=BANK.filter(x=>x.level===level&&x.area===a.id);
 console.log([level,a.short,q.length,q.filter(x=>x.reasoningDepth).length,q.filter(x=>x.visual).length].join(' | '));
}
const gaps=[];
for(const a of AREAS)for(const [topic,subs] of Object.entries(a.topics))for(const subtopic of subs){
 const counts=levels.map(level=>BANK.filter(x=>x.area===a.id&&x.topic===topic&&x.subtopic===subtopic&&x.level===level).length);
 if(counts.includes(0))gaps.push({area:a.id,topic,subtopic,basico:counts[0],intermedio:counts[1],avanzado:counts[2]});
}
console.log('Subtemas con al menos un nivel sin preguntas:',gaps.length);
console.table(gaps);
const errors=validateBank();if(errors.length){console.error(errors);process.exitCode=1}
