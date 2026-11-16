/** Métricas locales de práctica. No identifican usuarios ni producen puntuaciones psicométricas.
 * Un registro se crea al responder; los intentos sin responder no falsean el porcentaje.
 * Cada observación se agrega únicamente en el navegador.
 */
export const METRICS_VERSION=1;
export const MIN_OBSERVATIONS=5;
const MAX_REASONABLE_SECONDS=600;
const validLevel=new Set(['basico','intermedio','avanzado']);
const validArea=new Set(['espanol','matematicas','naturales','sociales','blandas']);
function nonnegative(value){return Number.isFinite(value)&&value>=0}
export function safeSeconds(value){return nonnegative(value)?Math.round(Math.min(value,MAX_REASONABLE_SECONDS)*10)/10:null}
export function recordObservation(metrics,q,{correct,seconds,context}){
 if(!q||typeof q.id!=='string'||!q.id||!validLevel.has(q.level)||!validArea.has(q.area))throw new TypeError('Pregunta inválida');
 if(typeof correct!=='boolean'||!['study','exam'].includes(context))throw new TypeError('Observación inválida');
 const current=(metrics&&typeof metrics==='object'&&!Array.isArray(metrics))?metrics:{};
 const key=q.id;
 const old=current[key]&&typeof current[key]==='object'?current[key]:null;
 const same=old&&old.area===q.area&&old.level===q.level;
 const count=same&&Number.isInteger(old.attempts)&&old.attempts>=0?old.attempts:0;
 const hits=same&&Number.isInteger(old.correct)&&old.correct>=0&&old.correct<=count?old.correct:0;
 const timed=same&&Number.isInteger(old.timed)&&old.timed>=0&&old.timed<=count?old.timed:0;
 const timeSum=same&&nonnegative(old.totalSeconds)?old.totalSeconds:0;
 const secs=safeSeconds(seconds);
 return {...current,[key]:{id:key,area:q.area,topic:q.topic,subtopic:q.subtopic,level:q.level,
  attempts:count+1,correct:hits+(correct?1:0),
  timed:timed+(secs===null?0:1),
  totalSeconds:Math.round((timeSum+(secs??0))*10)/10,
  studyAttempts:(same&&Number.isInteger(old.studyAttempts)?old.studyAttempts:0)+(context==='study'?1:0),
  examAttempts:(same&&Number.isInteger(old.examAttempts)?old.examAttempts:0)+(context==='exam'?1:0)}};
}
export function summarizeMetric(item,reportCount=0){
 if(!item||!Number.isInteger(item.attempts)||item.attempts<1||
 !Number.isInteger(item.correct)||item.correct<0||item.correct>item.attempts)return null;
 const accuracy=Math.round(item.correct/item.attempts*1000)/10;
 const avgSeconds=item.timed>0&&nonnegative(item.totalSeconds)?Math.round(item.totalSeconds/item.timed*10)/10:null;
 let label='Pocos datos',kind='insufficient';
 if(item.attempts>=MIN_OBSERVATIONS){
  if(accuracy<=35){label='Reforzar',kind='needs-practice'}
  else if(accuracy>=85){label='Dominado en práctica',kind='mastered'}
  else if(avgSeconds!==null&&avgSeconds>=90){label='Revisar tiempo',kind='slow'}
  else {label='En progreso',kind='developing'}
 }
 if(reportCount>0&&kind!=='insufficient'){label='Revisar informe',kind='reported'}
 return {...item,accuracy,avgSeconds,kind,label,reportCount};
}
export function summarizeMetrics(metrics={},reports=[]){
 const counts={};for(const r of Array.isArray(reports)?reports:[])if(typeof r?.questionId==='string')counts[r.questionId]=(counts[r.questionId]||0)+1;
 return Object.values(metrics&&typeof metrics==='object'&&!Array.isArray(metrics)?metrics:{})
  .map(x=>summarizeMetric(x,counts[x?.id]||0)).filter(Boolean).sort((a,b)=>a.accuracy-b.accuracy||b.attempts-a.attempts);
}
export function localOverview(items){
 const entries=Array.isArray(items)?items:[];
 const attempts=entries.reduce((n,x)=>n+x.attempts,0),correct=entries.reduce((n,x)=>n+x.correct,0);
 const timed=entries.reduce((n,x)=>n+(x.timed||0),0),seconds=entries.reduce((n,x)=>n+(x.totalSeconds||0),0);
 return {items:entries.length,attempts,correct,accuracy:attempts?Math.round(1000*correct/attempts)/10:null,
  avgSeconds:timed?Math.round(seconds/timed*10)/10:null,
  flagged:entries.filter(x=>x.kind==='needs-practice'||x.kind==='reported').length};
}
export function exportLocalMetrics(metrics,reports=[]){
 return JSON.stringify({app:'academia-paa-phuma',kind:'local-item-metrics',version:METRICS_VERSION,
  notice:'Solo este navegador; no es muestra poblacional, análisis psicométrico ni puntaje oficial PHUMA.',
  observations:summarizeMetrics(metrics,reports)},null,2);
}
