import { writeFileSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { BANK, validateBank } from '../data/questionBank.js';
import { GAME_BANK } from '../data/gameBank.js';
import { AREAS, LEVELS } from '../src/catalog.js';
import { validateGames } from '../src/games.js';

const levels=LEVELS.map(x=>x.id);
const quotas={basico:10,intermedio:15,avanzado:20};
const full={basico:30,intermedio:50,avanzado:70};
const normalize=s=>String(s??'').normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();
const problems=[...validateBank(),...validateGames(GAME_BANK)];
const ids=new Set();
const curriculum=[];
for(const area of AREAS)for(const [topic,subtopics] of Object.entries(area.topics))for(const subtopic of subtopics){
  const exams=Object.fromEntries(levels.map(level=>[level,BANK.filter(q=>q.area===area.id&&q.topic===topic&&q.subtopic===subtopic&&q.level===level).length]));
  const games=[...new Set(GAME_BANK.filter(q=>q.area===area.id&&q.topic===topic&&q.subtopic===subtopic).map(q=>q.game))].sort();
  curriculum.push({area:area.id,topic,subtopic,exam:exams,games});
}
const keys=new Map();
for(const q of GAME_BANK){
 if(ids.has(q.id))problems.push('ID duplicado en juegos: '+q.id);ids.add(q.id);
 const key=[q.area,q.topic,q.subtopic,q.game,q.level].join('|');
 const sig=normalize(q.prompt);
 const duplicateKey=key+'|'+sig;
 if(keys.has(duplicateKey))problems.push('Enunciado duplicado: '+q.id+' y '+keys.get(duplicateKey));
 else keys.set(duplicateKey,q.id);
}
const combinations=[];
for(const area of AREAS)for(const [topic,subtopics] of Object.entries(area.topics))for(const subtopic of subtopics){
 const games=[...new Set(GAME_BANK.filter(q=>q.area===area.id&&q.topic===topic&&q.subtopic===subtopic).map(q=>q.game))].sort();
 for(const game of games)for(const level of levels){
  const matches=GAME_BANK.filter(q=>q.area===area.id&&q.topic===topic&&q.subtopic===subtopic&&q.game===game&&q.level===level);
  const accepted=matches.length;
  combinations.push({area:area.id,topic,subtopic,game,level,accepted,coreTarget:quotas[level],coreDeficit:Math.max(0,quotas[level]-accepted),finalTarget:full[level],finalDeficit:Math.max(0,full[level]-accepted)});
 }
}
const open=combinations.filter(x=>x.coreDeficit>0);
const areaOrder=AREAS.map(a=>a.id);
open.sort((a,b)=>areaOrder.indexOf(a.area)-areaOrder.indexOf(b.area)||a.topic.localeCompare(b.topic)||a.subtopic.localeCompare(b.subtopic)||a.game.localeCompare(b.game)||levels.indexOf(a.level)-levels.indexOf(b.level));
const state={
 schema:'m0-reconciliation-v1',generatedAt:new Date().toISOString(),
 gitSha:process.env.GITHUB_SHA||process.env.RENDER_GIT_COMMIT||null,
 source:{repository:'c2melendez/academia-paa-phuma',note:'Inventario técnico; no certifica independencia conceptual ni revisión docente'},
 exam:{total:BANK.length,byAreaLevel:AREAS.flatMap(a=>levels.map(level=>({area:a.id,level,count:BANK.filter(q=>q.area===a.id&&q.level===level).length})))},
 games:{total:GAME_BANK.length,combinations:combinations.length,coreDeficit:combinations.reduce((s,x)=>s+x.coreDeficit,0),finalDeficit:combinations.reduce((s,x)=>s+x.finalDeficit,0),openCore:open.length},
 curriculum,combinations,nextOpen:open[0]||null,problems
};
state.snapshotHash=createHash('sha256').update(JSON.stringify({curriculum,combinations,problems})).digest('hex');
mkdirSync('reports',{recursive:true});
writeFileSync('reports/m0-inventory.json',JSON.stringify(state,null,2)+'\n');
console.log('M0 inventario:',BANK.length,'reactivos examen,',GAME_BANK.length,'registros juegos,',combinations.length,'combinaciones existentes');
console.log('Déficit núcleo:',state.games.coreDeficit,'; siguiente abierto:',JSON.stringify(state.nextOpen));
console.log('SHA inventario:',state.snapshotHash);
if(problems.length){console.error(problems.slice(0,30).join('\n'));process.exitCode=1}
