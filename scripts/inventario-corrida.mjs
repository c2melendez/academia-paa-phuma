import { AREAS, LEVELS } from '../src/catalog.js';
import { BANK } from '../data/questionBank.js';

// Inventario técnico del banco general. No infiere independencia ni juegos.
const rows = [];
for (const area of AREAS) for (const [topic, subtopics] of Object.entries(area.topics)) for (const subtopic of subtopics) {
  const counts = Object.fromEntries(LEVELS.map(({id}) => [id, BANK.filter(q => q.area === area.id && q.topic === topic && q.subtopic === subtopic && q.level === id).length]));
  rows.push({ area: area.id, tema: topic, subtema: subtopic, banco_general: counts, juegos_identificados: null, independiente: null, revision_humana: null });
}
console.log(JSON.stringify({ descripcion: 'Conteos técnicos de preguntas generales; no son cobertura lúdica ni evidencia de independencia.', total_registros: BANK.length, subtemas: rows.length, combinaciones_juego: null, matriz: rows }, null, 2));
