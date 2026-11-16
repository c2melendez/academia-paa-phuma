import test from 'node:test';
import assert from 'node:assert/strict';
import {recordObservation,safeSeconds,summarizeMetric,summarizeMetrics,localOverview,exportLocalMetrics} from '../src/metrics.js';
const q={id:'q-01',area:'naturales',level:'intermedio',topic:'Biología',subtopic:'Genética',correct:1,prompt:'Prueba'};
test('Aciertos y segundos por pregunta se acumulan de manera reproducible y sin almacenar la respuesta',()=>{
 let stats={};
 stats=recordObservation(stats,q,{correct:true,seconds:12.4,context:'study'});
 stats=recordObservation(stats,q,{correct:false,seconds:35.1,context:'exam'});
 assert.deepEqual([stats[q.id].attempts,stats[q.id].correct,stats[q.id].timed,stats[q.id].totalSeconds],[2,1,2,47.5]);
 assert.equal(stats[q.id].studyAttempts,1);assert.equal(stats[q.id].examAttempts,1);
 assert.equal('selectedAnswer' in stats[q.id],false);assert.equal('prompt' in stats[q.id],false);
 assert.equal(summarizeMetric(stats[q.id]).accuracy,50);
 assert.equal(summarizeMetric(stats[q.id]).avgSeconds,23.8);
});
test('Tiempo no fiable no se suma ni contamina el promedio',()=>{
 let m=recordObservation({},q,{correct:false,seconds:null,context:'study'});
 m=recordObservation(m,q,{correct:true,seconds:-10,context:'study'});
 assert.equal(m[q.id].timed,0);assert.equal(summarizeMetric(m[q.id]).avgSeconds,null);
 assert.equal(safeSeconds(100000),600);
 assert.equal(safeSeconds(NaN),null);
});
test('Clasificaciones solo se aplican a partir de cinco intentos; no equivalen a ambigüedad oficial',()=>{
 let m={};
 for(let i=0;i<4;i++)m=recordObservation(m,q,{correct:false,seconds:30,context:'study'});
 assert.equal(summarizeMetrics(m)[0].kind,'insufficient');
 m=recordObservation(m,q,{correct:false,seconds:30,context:'study'});
 assert.equal(summarizeMetrics(m)[0].kind,'needs-practice');
 assert.equal(summarizeMetrics(m,[{questionId:q.id}])[0].kind,'reported');
 let easy={};for(let i=0;i<5;i++)easy=recordObservation(easy,q,{correct:true,seconds:10,context:'exam'});
 assert.equal(summarizeMetrics(easy)[0].kind,'mastered');
 assert.equal(localOverview(summarizeMetrics(easy)).accuracy,100);
});
test('Exportación local no incluye preguntas completas ni datos identificativos',()=>{
 const m=recordObservation({},q,{correct:true,seconds:15,context:'study'});
 const json=exportLocalMetrics(m);
 assert.ok(!json.includes('Prueba'));
 assert.equal(JSON.parse(json).observations.length,1);
 assert.ok(json.includes('no es muestra poblacional'));
 assert.throws(()=>recordObservation({},q,{correct:1,seconds:1,context:'study'}));
});
