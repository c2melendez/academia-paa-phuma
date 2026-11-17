import test from 'node:test';
import assert from 'node:assert/strict';
import {GAME_BANK} from '../data/gameBank.js';
test('Interfaz de juegos comprueba respuestas, persiste vistos y avisa al agotar',async()=>{
 const root={innerHTML:''},handlers={},store=new Map(),alerts=[];let kind='clasificacion',answer='Antónimo';
 const old={document:globalThis.document,localStorage:globalThis.localStorage,alert:globalThis.alert};
 globalThis.document={documentElement:{dataset:{}},getElementById(id){return id==='app'?root:id==='g-sub'?{value:'Sinónimos y antónimos'}:id==='g-kind'?{value:kind}:id==='game-answer'?{value:answer}:null},addEventListener(t,f){handlers[t]=f},hidden:false};
 globalThis.localStorage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)};globalThis.alert=x=>alerts.push(x);
 try{await import('../src/main.js?integration=games');const click=a=>handlers.click({target:{closest:()=>({disabled:false,dataset:{action:a}})}});click('games');click('game-start');assert.match(root.innerHTML,/sereno/);click('game-check');assert.match(root.innerHTML,/Revisa tu respuesta/);assert.equal(JSON.parse(store.get('academia-paa-phuma-v1')).gameSeen.length,1);click('game-next');answer='Antónimo';click('game-check');assert.match(root.innerHTML,/Correcto/);click('game-next');const total=GAME_BANK.filter(q=>q.subtopic==='Sinónimos y antónimos'&&q.game==='clasificacion').length;for(let i=2;i<total;i++){click('game-check');click('game-next')}assert.match(alerts[0],/Terminaste/);kind='construccion';click('game-start');answer='CLARO';click('game-check');assert.match(root.innerHTML,/Correcto/);assert.equal(JSON.parse(store.get('academia-paa-phuma-v1')).gameSeen.length,total+1)}finally{Object.assign(globalThis,old)}
});
