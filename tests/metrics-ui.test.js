import test from 'node:test';
import assert from 'node:assert/strict';

test('Modo estudio, examen y progreso registran métricas desde la interfaz sin backend',async()=>{
 const root={innerHTML:''},handlers={};
 const store=new Map();
 const previous={document:globalThis.document,localStorage:globalThis.localStorage,confirm:globalThis.confirm,alert:globalThis.alert};
 globalThis.document={
  documentElement:{dataset:{}},
  getElementById(id){if(id==='app')return root;if(id==='e-level')return {value:'intermedio'};if(id==='clock')return {textContent:''};return null},
  addEventListener(type,fn){handlers[type]=fn},
  hidden:false
 };
 globalThis.localStorage={getItem:key=>store.get(key)||null,setItem:(key,val)=>store.set(key,val)};
 globalThis.confirm=()=>true;
 globalThis.alert=()=>{};
 try{
  await import('../src/main.js?integration=metrics-ui');
  const click=(action,data={})=>{
   assert.ok(handlers.click,'No se registró escucha de clics');
   const target={disabled:false,dataset:{action,...data}};
   handlers.click({target:{closest:()=>target}});
  };
  const status=()=>JSON.parse(store.get('academia-paa-phuma-v1'));
  click('study');click('start-study');click('answer',{choice:'0'});
  assert.equal(status().studyAnswered,1);
  assert.equal(Object.values(status().itemMetrics).reduce((n,x)=>n+x.attempts,0),1);
  click('exam');click('start-exam');click('exam-answer',{choice:'0'});click('finish-exam');
  assert.equal(status().exams.length,1);
  assert.equal(Object.values(status().itemMetrics).reduce((n,x)=>n+x.attempts,0),2);
  assert.equal(Object.values(status().itemMetrics).reduce((n,x)=>n+x.examAttempts,0),1);
  assert.equal(status().draft,null);
  click('progress');
  assert.match(root.innerHTML,/Desempeño por pregunta/);
  assert.match(root.innerHTML,/Exportar estadísticas JSON/);
  assert.match(root.innerHTML,/Tiempo medio/);
  click('clear-metrics');
  assert.deepEqual(status().itemMetrics,{});
  assert.equal(status().exams.length,1,'No debe eliminar resultados históricos');
 }finally{
  globalThis.document=previous.document;
  globalThis.localStorage=previous.localStorage;
  globalThis.confirm=previous.confirm;
  globalThis.alert=previous.alert;
 }
});
