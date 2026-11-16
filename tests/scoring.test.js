import test from 'node:test';
import assert from 'node:assert/strict';
import {calculateScores} from '../src/scoring.js';
test('Aciertos y escala lineal referencial sobre 1600',()=>{
 assert.deepEqual([calculateScores(0).reference1600,calculateScores(60).reference1600,calculateScores(90).reference1600,calculateScores(120).reference1600],[0,800,1200,1600]);
 assert.equal(calculateScores(90).percentage,75);
 assert.equal(calculateScores(119).percentage,99.17);
 assert.equal(calculateScores(60).method,'linear-practice-only');
});
test('Porcentaje y referencia conservan máximos y límites',()=>{
 for(let n=0;n<=120;n++){const r=calculateScores(n);assert.ok(r.percentage>=0&&r.percentage<=100);assert.ok(r.reference1600>=0&&r.reference1600<=1600);assert.equal(r.correct,n);}
 assert.throws(()=>calculateScores(121));assert.throws(()=>calculateScores(-1));assert.throws(()=>calculateScores(1,0));
});
