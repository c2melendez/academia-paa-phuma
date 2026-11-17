import { GAME_BANK } from '../data/gameBank.js';
import { AREAS, LEVELS } from '../src/catalog.js';
import { normalizeAnswer, validateGames } from '../src/games.js';

export const SUBTOPICS=['Sinónimos y antónimos','Cohesión y coherencia','Morfosintaxis'];
export const MODES=['clasificacion','construccion'];
export const QUOTAS={basico:10,intermedio:15,avanzado:20};
const makeKey=q=>[q.area,q.topic,q.subtopic,q.game,q.level].join('|');

export function inspectM1(items){
 const issues=[...validateGames(items)],matrix=[],seenIds=new Set(),seenPrompts=new Map();
 const catalog=AREAS.find(a=>a.id==='espanol');
 for(const q of items){
  if(seenIds.has(q.id))issues.push('ID duplicado: '+q.id);
  seenIds.add(q.id);
  if(!AREAS.some(a=>a.id===q.area&&a.topics[q.topic]?.includes(q.subtopic))||!LEVELS.some(l=>l.id===q.level))
   issues.push(q.id+': ruta curricular o nivel inválido');
  const norm=normalizeAnswer(q.prompt),key=makeKey(q)+'|'+norm;
  if(seenPrompts.has(key))issues.push(q.id+': estímulo repetido de '+seenPrompts.get(key)); else seenPrompts.set(key,q.id);
  if(!q.accepted?.length||new Set(q.accepted.map(normalizeAnswer)).size!==q.accepted.length)issues.push(q.id+': respuesta vacía/repetida');
  if(q.game==='clasificacion'&&q.accepted?.some(a=>!q.choices?.includes(a)))issues.push(q.id+': clave ausente de las opciones');
 }
 for(const subtopic of SUBTOPICS){
  if(!catalog.topics['Gramática y semántica'].includes(subtopic))issues.push('Subtema ausente de catálogo: '+subtopic);
  for(const game of MODES)for(const [level,target] of Object.entries(QUOTAS)){
   const rows=items.filter(q=>q.area==='espanol'&&q.topic==='Gramática y semántica'&&q.subtopic===subtopic&&q.game===game&&q.level===level);
   matrix.push({subtopic,game,level,count:rows.length,target,deficit:Math.max(0,target-rows.length)});
   if(rows.length<target)issues.push('Déficit '+[subtopic,game,level].join('/')+': '+rows.length+'/'+target);
  }
 }
 return {issues,matrix,total:matrix.reduce((s,x)=>s+x.count,0),quota:matrix.reduce((s,x)=>s+x.target,0)};
}
if(process.argv[1]&&import.meta.url===new URL('file://'+process.argv[1]).href){
 const report=inspectM1(GAME_BANK);
 console.log('M1 núcleo técnico:',report.total,'/',report.quota,'registros; ',report.matrix.length,'combinaciones');
 console.table(report.matrix);
 if(report.issues.length){console.error(report.issues.slice(0,40).join('\n'));process.exitCode=1}
 else console.log('M1: cuotas técnicas y validación estructural aprobadas; revisión docente e independencia conceptual pendientes.');
}
