import {GAME_BANK} from '../data/gameBank.js';
import {AREAS,LEVELS} from '../src/catalog.js';
import {normalizeAnswer,validateGames} from '../src/games.js';
const errors=validateGames(GAME_BANK), seen=new Map();
for(const q of GAME_BANK){
 const area=AREAS.find(a=>a.id===q.area);
 if(!area?.topics[q.topic]?.includes(q.subtopic)||!LEVELS.some(l=>l.id===q.level))errors.push(`${q.id}: combinación curricular inválida`);
 const prompt=normalizeAnswer(q.prompt);
 if(seen.has(prompt))errors.push(`${q.id}: enunciado duplicado de ${seen.get(prompt)}`);else seen.set(prompt,q.id);
 if(!Array.isArray(q.accepted)||q.accepted.some(a=>typeof a!=='string'||!normalizeAnswer(a))||new Set((q.accepted||[]).map(normalizeAnswer)).size!==(q.accepted||[]).length)errors.push(`${q.id}: respuestas vacías o duplicadas`);
}
const counts={};for(const q of GAME_BANK){const key=[q.subtopic,q.game,q.level].join(' | ');counts[key]=(counts[key]||0)+1}
console.log('Inventario técnico de juegos; independencia y revisión docente no verificadas.');console.table(counts);
if(errors.length){console.error(errors.join('\n'));process.exitCode=1}else console.log(`${GAME_BANK.length} registros; controles estructurales aprobados.`);
