import { m1BasicQuestions } from './gameM1Basic.js';
// Práctica original; revisión docente pendiente. Las respuestas aceptadas son explícitas.
const source='Guía PRE-U UNAH 2026, competencias comunicativas; práctica original';
const topic='Gramática y semántica';
const rows=[
['sin-cl-1','Sinónimos y antónimos','clasificacion','Clasifica «sereno» respecto de «tranquilo».',['Sinónimo','Antónimo'],'Sinónimo','Ambas palabras expresan calma en este contexto.'],
['sin-cl-2','Sinónimos y antónimos','clasificacion','Clasifica «escaso» respecto de «abundante».',['Sinónimo','Antónimo'],'Antónimo','Escaso indica poca cantidad y abundante indica mucha.'],
['sin-co-1','Sinónimos y antónimos','construccion','Completa con «claro» o «cerrado»: «El cuarto está muy ___» (opuesto de oscuro).',['claro'],'Claro expresa la idea contraria a oscuro en esta oración.'],
['sin-co-2','Sinónimos y antónimos','construccion','Completa con «comenzar» o «terminar»: «Vamos a ___ la reunión» (sinónimo de iniciar).',['comenzar'],'Comenzar puede sustituir iniciar en esta oración.'],
['coh-cl-1','Cohesión y coherencia','clasificacion','En «Llovía; por eso cancelaron el partido», ¿qué relación introduce «por eso»?',['Causa','Consecuencia','Contraste'],'Consecuencia','La cancelación se presenta como resultado de la lluvia.'],
['coh-cl-2','Cohesión y coherencia','clasificacion','En «Estudió; sin embargo, no aprobó», ¿qué relación introduce «sin embargo»?',['Adición','Consecuencia','Contraste'],'Contraste','El conector opone el resultado a lo esperado tras estudiar.'],
['coh-co-1','Cohesión y coherencia','construccion','Completa con «porque» o «aunque»: «No salió ___ estaba enferma».',['porque'],'Porque introduce la causa de que no saliera.'],
['coh-co-2','Cohesión y coherencia','construccion','Completa con «además» o «sin embargo»: «Trajo cuadernos y, ___, lápices».',['además'],'Además añade otro elemento a la información anterior.'],
['mor-cl-1','Morfosintaxis','clasificacion','En «Las aves vuelan», clasifica la palabra «vuelan».',['Sustantivo','Verbo','Adjetivo'],'Verbo','Vuelan expresa la acción y concuerda con el sujeto plural.'],
['mor-cl-2','Morfosintaxis','clasificacion','En «La casa blanca», clasifica la palabra «blanca».',['Sustantivo','Verbo','Adjetivo'],'Adjetivo','Blanca describe al sustantivo casa y concuerda con él.'],
['mor-co-1','Morfosintaxis','construccion','Completa con «llegó» o «llegaron»: «Las alumnas ___ temprano».',['llegaron'],'El sujeto plural «las alumnas» concuerda con «llegaron».'],
['mor-co-2','Morfosintaxis','construccion','Completa con «azul» o «azules»: «Los cuadernos son ___».',['azules'],'El adjetivo concuerda en número con «cuadernos».']
];
const pilotQuestions=rows.map(r=>{const [id,subtopic,game,prompt,choices,answer,explanation]=r; return game==='clasificacion'?{id,area:'espanol',topic,subtopic,game,level:'basico',prompt,choices,accepted:[answer],explanation,source,reviewStatus:'editorial-draft'}:{id,area:'espanol',topic,subtopic,game,level:'basico',prompt,accepted:choices,explanation:answer,source,reviewStatus:'editorial-draft'}});

export const GAME_BANK=[...pilotQuestions,...m1BasicQuestions];
