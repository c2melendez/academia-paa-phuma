import test from 'node:test';
import assert from 'node:assert/strict';
import {evaluate,run} from '../scripts/qa-module.mjs';
test('etapa obligatoria ausente bloquea cierre',()=>{
 const gate=evaluate([{stage:'syntax',status:'PASS'}],['syntax','tests']);
 assert.equal(gate.ok,false);assert.deepEqual(gate.missing,['tests']);
});
test('fallo deliberado bloquea cierre',()=>{
 const report=run({stagesToRun:[['syntax','node',['-e','process.exit(7)']]],execute:()=>({status:7,stdout:'',stderr:''})});
 assert.equal(report.ok,false);assert.deepEqual(report.failed,['syntax']);
});
test('solo etapas presentes y PASS permiten cierre',()=>{
 assert.equal(evaluate([{stage:'a',status:'PASS'},{stage:'b',status:'PASS'}],['a','b']).ok,true);
 assert.equal(evaluate([{stage:'a',status:'SKIP'}],['a']).ok,false);
 assert.equal(evaluate([{stage:'a',status:'NOT_APPLICABLE'}],['a']).ok,false);
});
