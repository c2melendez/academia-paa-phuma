import test from 'node:test';
import assert from 'node:assert/strict';
import {GAME_BANK} from '../data/gameBank.js';
import {gradeGame,nextGame,validateGames} from '../src/games.js';
test('Banco piloto íntegro y respuestas correctas e incorrectas',()=>{assert.deepEqual(validateGames(GAME_BANK),[]); for(const q of GAME_BANK){for(const a of q.accepted)assert.equal(gradeGame(q,' '+a.toUpperCase()+' '),true);assert.equal(gradeGame(q,'respuesta incorrecta'),false)} });
test('Clasificación rechaza asignaciones equivocadas',()=>{for(const q of GAME_BANK.filter(x=>x.game==='clasificacion'))for(const c of q.choices)assert.equal(gradeGame(q,c),c===q.accepted[0]);});
test('Primero no vistos, sin repetición dentro de la sesión y agotamiento explícito',()=>{const xs=GAME_BANK.slice(0,2);assert.equal(nextGame(xs,[xs[0].id],[]).item.id,xs[1].id);assert.equal(nextGame(xs,[],[xs[0].id]).item.id,xs[1].id);assert.equal(nextGame(xs,[],xs.map(x=>x.id)).exhausted,true);});
test('Validación detecta claves imposibles e IDs repetidos',()=>{assert.ok(validateGames([GAME_BANK[0],{...GAME_BANK[0],accepted:['inexistente']}]).length>=2)});
