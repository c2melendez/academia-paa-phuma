import test from 'node:test';
import assert from 'node:assert/strict';
import { GAME_BANK } from '../data/gameBank.js';
import { inspectM1,QUOTAS } from '../scripts/m1-gate.mjs';

test('Cuotas M1 Español 10/15/20 por modalidad y subtema piloto',()=>{
 const r=inspectM1(GAME_BANK);
 assert.deepEqual(r.issues,[]);
 assert.equal(r.total,270);
 assert.equal(r.quota,270);
 assert.ok(r.matrix.every(x=>x.count>=QUOTAS[x.level]));
});
test('Mutaciones de ID, clave, ruta y nivel inválido se detectan',()=>{
 const row=GAME_BANK.find(q=>q.game==='clasificacion');
 const variants=[
   [...GAME_BANK,{...row,id:row.id}],
   GAME_BANK.map(q=>q.id===row.id?{...q,accepted:['categoría inexistente']}:q),
   GAME_BANK.map(q=>q.id===row.id?{...q,subtopic:'subtema inventado'}:q),
   GAME_BANK.map(q=>q.id===row.id?{...q,level:'superavanzado'}:q)
 ];
 for(const v of variants)assert.ok(inspectM1(v).issues.length>0);
});
