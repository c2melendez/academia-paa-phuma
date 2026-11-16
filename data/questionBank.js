import {visualQuestions} from './visualBank.js';
import {readingQuestions} from './readingBank.js';
import {advancedVisualQuestions} from './advancedVisualBank.js';
import {enrichmentQuestions} from './enrichmentBank.js';
import {foundationQuestions} from './foundationBank.js';
import {gapClosureQuestions} from './gapClosureBank.js';
import {curated} from './curated.js';
import {AREAS,LEVELS} from '../src/catalog.js';
const spanishFacts=[
 ['Comprensión lectora','Idea principal','La plaza se llenó de vecinos que sembraron árboles para recuperar un parque.','La comunidad recuperó un parque sembrando árboles','Los árboles crecen solo en plazas','La plaza estaba cerrada permanentemente','Los vecinos construyeron una carretera'],
 ['Comprensión lectora','Idea principal','Un grupo de estudiantes organizó una campaña para reducir los desechos de plástico en su colegio.','Los estudiantes impulsaron una iniciativa para reducir residuos plásticos','Los estudiantes cerraron el colegio','Se prohibieron todos los materiales','La campaña trató sobre matemáticas'],
 ['Comprensión lectora','Idea principal','Durante meses, las familias reunieron libros para abrir una pequeña biblioteca comunal.','Las familias colaboraron para crear una biblioteca comunitaria','La biblioteca fue destruida','Todas las familias vendieron sus libros','Los libros llegaron de otro país únicamente'],
 ['Comprensión lectora','Idea principal','La investigación encontró que dormir suficientes horas favorece la atención durante las clases.','El descanso adecuado puede beneficiar la atención','Dormir elimina la necesidad de estudiar','Las clases se desarrollaron de noche','La investigación no examinó el sueño'],
 ['Comprensión lectora','Inferencias','Cada tarde Julia lleva paraguas; hoy salió con botas impermeables y el cielo estaba oscuro.','Julia se prepara para posible lluvia','Julia se mudó a otra ciudad','Julia compró un automóvil','El día está necesariamente despejado'],
 ['Comprensión lectora','Inferencias','El laboratorio apagó las luces; todos guardaron sus materiales y se dirigieron hacia la salida.','La sesión probablemente terminó','El experimento acaba de iniciar','Los alumnos se mudaron de escuela','Los materiales fueron destruidos'],
 ['Comprensión lectora','Inferencias','El comerciante bajó los precios y al día siguiente aumentó la cantidad de compradores.','La reducción de precios pudo atraer compradores','Los clientes dejaron de comprar','La tienda cerró definitivamente','Los productos fueron regalados'],
 ['Comprensión lectora','Inferencias','Al ver que su equipo había terminado, Ana revisó una última vez las instrucciones antes de entregar.','Ana procuró verificar el trabajo','Ana no participó en el proyecto','El proyecto había sido cancelado','Las instrucciones no existían'],
 ['Comprensión lectora','Lectura crítica','Un anuncio afirma: «Nueve de cada diez usuarios nos recomiendan», pero no informa cómo fue elegida la muestra.','Falta información metodológica para evaluar la afirmación','La afirmación es necesariamente falsa','Todos los productos son idénticos','El anuncio presenta una demostración científica completa'],
 ['Comprensión lectora','Lectura crítica','Una noticia usa solo el testimonio de una persona para explicar un fenómeno nacional.','La evidencia puede ser insuficiente para generalizar','Una opinión representa automáticamente a todo el país','No existe otro testimonio','Toda la noticia es matemática'],
 ['Comprensión lectora','Lectura crítica','Un reporte compara dos escuelas pero no considera sus diferencias de recursos.','La comparación puede omitir una variable relevante','Las escuelas son iguales en todo','Los recursos nunca afectan resultados','La comparación prueba causalidad'],
 ['Comprensión lectora','Lectura crítica','Un artículo presenta una gráfica sin unidades ni fuente.','Falta información necesaria para interpretar los datos','La gráfica prueba cualquier conclusión','Las unidades nunca importan','Todos los valores son exactos'],
 ['Comprensión lectora','Vocabulario en contexto','La maestra pidió un relato CONCISO que expusiera la idea con pocas palabras.','Breve','Extenso','Confuso','Repetitivo'],
 ['Comprensión lectora','Vocabulario en contexto','El estudiante fue DILIGENTE: terminó la investigación con cuidado y constancia.','Aplicado','Despreocupado','Negligente','Impuntual'],
 ['Comprensión lectora','Vocabulario en contexto','El informe fue OBJETIVO: se apoyó en datos en vez de preferencias personales.','Imparcial','Arbitrario','Caprichoso','Parcial'],
 ['Comprensión lectora','Vocabulario en contexto','La solución fue VIABLE porque contaban con tiempo, recursos y personal suficientes.','Realizable','Imposible','Incierta por definición','Inútil'],
 ['Gramática y semántica','Categorías gramaticales','En «Las niñas estudian», ¿qué palabra es un verbo?','estudian','Las','niñas','ninguna'],
 ['Gramática y semántica','Categorías gramaticales','En «La casa azul», ¿qué palabra es un adjetivo?','azul','La','casa','ninguna'],
 ['Gramática y semántica','Categorías gramaticales','En «Ellos llegaron temprano», ¿qué palabra funciona como adverbio?','temprano','Ellos','llegaron','ninguna'],
 ['Gramática y semántica','Categorías gramaticales','En «Nosotros aprendemos juntos», ¿qué palabra es pronombre personal?','Nosotros','aprendemos','juntos','ninguna'],
 ['Gramática y semántica','Sinónimos y antónimos','¿Qué palabra es sinónimo de «rápido»?','Veloz','Lento','Débil','Tardío'],
 ['Gramática y semántica','Sinónimos y antónimos','¿Qué palabra es antónimo de «efímero»?','Duradero','Breve','Pasajero','Momentáneo'],
 ['Gramática y semántica','Sinónimos y antónimos','¿Qué palabra es sinónimo de «prudente»?','Cauteloso','Temerario','Impulsivo','Irreflexivo'],
 ['Gramática y semántica','Sinónimos y antónimos','¿Qué palabra es antónimo de «abundante»?','Escaso','Numeroso','Copioso','Cuantioso'],
 ['Gramática y semántica','Cohesión y coherencia','«Estudié con constancia; ___, mejoré mis resultados». ¿Qué conector expresa consecuencia?','por eso','sin embargo','aunque','en cambio'],
 ['Gramática y semántica','Cohesión y coherencia','«Quería salir; ___, estaba lloviendo intensamente». ¿Qué conector indica contraste?','sin embargo','por tanto','porque','así que'],
 ['Gramática y semántica','Cohesión y coherencia','«No pudo asistir ___ estaba enfermo». ¿Qué conector introduce causa?','porque','aunque','sin embargo','además'],
 ['Gramática y semántica','Cohesión y coherencia','«Trajo cuadernos; ___, lápices y reglas». ¿Qué conector añade información?','además','sin embargo','a pesar de','en consecuencia'],
 ['Redacción','Corrección','¿Cuál oración tiene concordancia adecuada?','Las estudiantes terminaron la tarea.','Las estudiantes terminó la tarea.','La estudiantes terminaron la tarea.','Las estudiantes termina la tarea.'],
 ['Redacción','Conectores','¿Qué enlace completa «Se esforzó mucho; ___, alcanzó su meta»?','por consiguiente','no obstante','aun cuando','en lugar de'],
 ['Redacción','Organización textual','¿Qué oración funciona mejor como conclusión de un texto sobre reciclaje?','Por estas razones, separar residuos es una práctica beneficiosa.','Ayer almorcé arroz.','La luna tiene cráteres.','Mi hermana llegó tarde.'],
 ['Redacción','Organización textual','¿Qué estructura suele presentar un texto argumentativo?','Tesis, argumentos y conclusión','Solo lista de palabras','Únicamente instrucciones numeradas','Diálogo sin tema'],
 ['Literatura','Figuras retóricas','En «Tus ojos son dos luceros», ¿qué recurso literario se utiliza?','Metáfora','Hipérbaton','Enumeración','Onomatopeya'],
 ['Literatura','Figuras retóricas','En «El viento susurraba entre los árboles», ¿qué figura aparece?','Personificación','Anáfora','Elipsis','Paradoja'],
 ['Literatura','Géneros literarios','¿Qué género se asocia principalmente con la representación teatral mediante diálogos?','Dramático','Lírico exclusivamente','Ensayo técnico','Instructivo'],
 ['Literatura','Géneros literarios','¿Qué característica es propia del género narrativo?','Presencia de un narrador y acciones','Ausencia obligatoria de personajes','Versos rimados siempre','Solo acotaciones teatrales']
];
function hash(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function rng(seed){let x=seed>>>0;return ()=>((x=(Math.imul(1664525,x)+1013904223)>>>0)/4294967296)}
function shuffle(a,r){const o=[...a];for(let i=o.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[o[i],o[j]]=[o[j],o[i]]}return o}
function fromFact(area,level,row,i){let [topic,subtopic,prompt,right,...rest]=row;let explanation=rest[3]||'';const wrong=rest.slice(0,3);const r=rng(hash(`${area}-${level}-${i}`));const ordered=shuffle([right,...wrong],r);
 return {id:`${area}-${level}-${i}`,area,topic,subtopic,level,prompt,options:ordered,correct:ordered.indexOf(right),explanation:explanation||`La respuesta correcta es «${right}». Esta opción expresa la idea o regla que se desprende del enunciado; las demás contradicen o desvían el sentido.`,wrongExplanation:`Las demás opciones no satisfacen la condición del enunciado. Se debe elegir «${right}» por el significado y el contexto del concepto evaluado.`,source:'Banco original de práctica; guías PAA y PHUMA utilizadas para selección temática.'};}
function spanishQuestion(base,i,level){let [topic,subtopic,prompt,right,...wrong]=base;const labels={basico:'',intermedio:'Examina el texto o enunciado y elige la opción más precisa. ',avanzado:'Evalúa cuidadosamente la interpretación y descarta los distractores. '};
 // Different stimuli at each level, while keeping logically valid options; same academic skill reviewed with increasing task framing.
 const modifiers={basico:'',intermedio:' Justifica mentalmente tu elección atendiendo al contexto.',avanzado:' Considera el sentido completo y no solo palabras aisladas.'};
 return fromFact('espanol',level,[topic,subtopic,labels[level]+prompt+modifiers[level],right,...wrong],i);
}
function mathQuestion(level,i){const tier={basico:0,intermedio:1,avanzado:2}[level];const r=rng(hash(`math-${level}-${i}`));const a=3+Math.floor(r()*18)+tier*4, b=2+Math.floor(r()*12)+tier*3,c=2+Math.floor(r()*7);let subtopic,topic,prompt,correct,reason;
 switch(i%15){
 case 0:topic='Aritmética';subtopic='Operaciones';prompt=`Calcula ${a} + ${b} × ${c}.`;correct=a+b*c;reason=`Jerarquía: primero ${b} × ${c} = ${b*c}; después ${a} + ${b*c} = ${correct}.`;break;
 case 1:topic='Aritmética';subtopic='Fracciones';prompt=`¿Cuánto es ${a}/${b} + ${c}/${b}? (expresa el resultado como fracción)`;correct=`${a+c}/${b}`;reason=`Con denominador común se suman numeradores: (${a}+${c})/${b} = ${correct}; es equivalente a su fracción reducida.`;break;
 case 2:topic='Aritmética';subtopic='Porcentajes';prompt=`¿Cuál es el ${c*5}% de ${a*20}?`;correct=c*5*a/5;reason=`Porcentaje = ${a*20} × ${c*5}/100 = ${correct}.`;break;
 case 3:topic='Aritmética';subtopic='Proporciones';prompt=`Si ${a} cuadernos cuestan L ${a*b}, ¿cuánto cuestan ${c+1} cuadernos al mismo precio?`;correct=(c+1)*b;reason=`El precio unitario es L ${b}; ${c+1} cuadernos cuestan L ${correct}.`;break;
 case 4:topic='Aritmética';subtopic='Potencias';prompt=`Calcula ${c}² + ${a}.`;correct=c*c+a;reason=`${c}² = ${c*c}; luego ${c*c}+${a}=${correct}.`;break;
 case 5:topic='Álgebra';subtopic='Ecuaciones';prompt=`Resuelve ${b}x + ${a} = ${a+b*c}. ¿Cuál es x?`;correct=c;reason=`Restar ${a} a ambos lados: ${b}x=${b*c}. Dividir entre ${b}: x=${c}.`;break;
 case 6:topic='Álgebra';subtopic='Sistemas de ecuaciones';prompt=`Si x+y=${a+b} y x−y=${a-b}, encuentra x.`;correct=a;reason=`Sumando ecuaciones: 2x=${2*a}, entonces x=${a}.`;break;
 case 7:topic='Álgebra';subtopic='Sucesiones';prompt=`En la sucesión ${a}, ${a+b}, ${a+2*b}, ${a+3*b}, … ¿qué valor sigue?`;correct=a+4*b;reason=`Es una sucesión aritmética de diferencia ${b}. El siguiente término es ${correct}.`;break;
 case 8:topic='Álgebra';subtopic='Funciones';prompt=`Si f(x)=${b}x+${c}, calcula f(${a}).`;correct=b*a+c;reason=`Sustituir x=${a}: f(${a})=${b}(${a})+${c}=${correct}.`;break;
 case 9:topic='Geometría';subtopic='Áreas y perímetros';prompt=`Un rectángulo mide ${a} cm de largo y ${b} cm de ancho. ¿Cuál es su área en cm²?`;correct=a*b;reason=`Área del rectángulo: largo × ancho = ${a} × ${b} = ${correct} cm².`;break;
 case 10:topic='Geometría';subtopic='Áreas y perímetros';prompt=`Un cuadrado tiene lado ${a} cm. ¿Cuál es su perímetro en cm?`;correct=4*a;reason=`Perímetro: 4 × lado = 4(${a}) = ${correct} cm.`;break;
 case 11:topic='Geometría';subtopic='Ángulos';prompt=`Dos ángulos son suplementarios. Uno mide ${a+35}°. ¿Cuánto mide el otro?`;correct=180-a-35;reason=`Los suplementarios suman 180°. Restar ${a+35}°: ${correct}°.`;break;
 case 12:topic='Geometría';subtopic='Pitágoras';prompt=`Un triángulo rectángulo tiene catetos ${3*c} y ${4*c} cm. ¿Cuál es su hipotenusa en cm?`;correct=5*c;reason=`Por Pitágoras: √((${3*c})²+(${4*c})²)=${correct} cm.`;break;
 case 13:topic='Estadística y probabilidad';subtopic='Promedios';prompt=`¿Cuál es la media de ${a}, ${a+b} y ${a+2*b}?`;correct=a+b;reason=`La suma es ${3*(a+b)} y al dividir entre 3 se obtiene ${correct}.`;break;
 default:topic='Estadística y probabilidad';subtopic='Probabilidad';prompt=`En una bolsa hay ${a} bolas verdes y ${b} bolas amarillas. ¿Qué probabilidad hay de sacar una verde?`;correct=`${a}/${a+b}`;reason=`Casos favorables / totales = ${a}/(${a}+${b}) = ${correct}.`;break;
 }
 const isFrac=typeof correct==='string';let opts=isFrac?[correct,`${a+1}/${a+b}`,`${b}/${a+b}`,`${a}/${a+b+1}`]:[correct,correct+b,correct+c+1,correct-(c+1)];
 opts=[...new Set(opts.map(String))];for(let k=1;opts.length<4;k++)opts.push(String(correct)+'+'+k);const ordered=shuffle(opts,r);
 return {id:`matematicas-${level}-${i}`,area:'matematicas',topic,subtopic,level,prompt,options:ordered,correct:ordered.indexOf(String(correct)),explanation:reason,wrongExplanation:`La respuesta correcta es ${correct}. Revisa la operación indicada: ${reason}`,source:'Ejercicio original parametrizado; temas de guías PAA y PHUMA.'};
}
export const BANK=[...visualQuestions,...readingQuestions,...advancedVisualQuestions,...enrichmentQuestions,...foundationQuestions,...gapClosureQuestions,...LEVELS.flatMap(({id:level})=>[
 ...spanishFacts.map((row,i)=>spanishQuestion(row,i,level)),
 ...Array.from({length:90},(_,i)=>mathQuestion(level,i)),
 ...['naturales','sociales','blandas'].flatMap(area=>curated[area][level].map((row,i)=>fromFact(area,level,row,i)))
])];
export function coverage(){return LEVELS.map(l=>({level:l.id,areas:AREAS.map(a=>({area:a.id,need:a.count,available:BANK.filter(q=>q.level===l.id&&q.area===a.id).length}))}))}
export function validateBank(){const ids=new Set();const errors=[];for(const q of BANK){if(ids.has(q.id))errors.push(`ID duplicado ${q.id}`);ids.add(q.id);if(q.options.length!==4||new Set(q.options).size!==4)errors.push(`Opciones inválidas ${q.id}`);if(!(q.correct>=0&&q.correct<4)||!q.explanation||!q.topic||!q.subtopic)errors.push(`Registro incompleto ${q.id}`)}for(const level of coverage())for(const a of level.areas)if(a.available<a.need)errors.push(`Faltan preguntas ${level.level}/${a.area}`);return errors}
export function generateExam(level,history=[]){
 const used=new Set(history),arr=[];let repeats=0;
 const minimumVisuals={espanol:2,matematicas:4,naturales:1,sociales:1,blandas:0};
 for(const area of AREAS){
  const candidates=BANK.filter(q=>q.level===level&&q.area===area.id);
  if(candidates.length<area.count)throw Error(`Banco insuficiente para ${area.label} en ${level}`);
  const prioritize=list=>[...shuffle(list.filter(q=>!used.has(q.id)),Math.random),...shuffle(list.filter(q=>used.has(q.id)),Math.random)];
  const required=minimumVisuals[area.id]||0;
  const visualPool=candidates.filter(q=>q.visual);
  const visualOrder=level==='avanzado'
   ? [...prioritize(visualPool.filter(q=>q.reasoningDepth==='multi-step')),...prioritize(visualPool.filter(q=>q.reasoningDepth!=='multi-step'))]
   : prioritize(visualPool);
  const mandatory=visualOrder.slice(0,required);
  if(mandatory.length<required)throw Error(`Banco visual insuficiente para ${area.label} en ${level}`);
  // Agrupar reactivos vinculados a un mismo texto: se aproxima al formato
  // de pasaje seguido por varias preguntas de las prácticas de admisión.
  const passages=area.id==='espanol'?candidates.filter(q=>q.passage):[];
  const passageGroups=Object.groupBy(passages,q=>q.passageTitle);
  const groups=Object.values(passageGroups).filter(g=>g.length>=3)
   .sort((a,b)=>b.filter(q=>!used.has(q.id)).length-a.filter(q=>!used.has(q.id)).length);
  const passageQuestions=groups.length?prioritize(groups[0]).slice(0,3):[];
  if(area.id==='espanol'&&passageQuestions.length<3)throw Error('Faltan lecturas con preguntas vinculadas en '+level);
  // En nivel intermedio se garantizan aplicaciones contextualizadas; en avanzado,
  // varios pasos, interpretación de evidencia y decisiones razonadas.
  const quotas={
   intermedio:{espanol:3,matematicas:5,naturales:5,sociales:5,blandas:3},
   avanzado:{espanol:8,matematicas:12,naturales:10,sociales:8,blandas:5}
  };
  const minReasoning=quotas[level]?.[area.id]||0;
  const seeded=[...mandatory,...passageQuestions];
  const analytical=prioritize(candidates.filter(q=>q.reasoningDepth&&!seeded.some(m=>m.id===q.id))).slice(0,minReasoning);
  if(analytical.length<minReasoning)throw Error('Faltan ejercicios de razonamiento para '+area.id+'/'+level);
  const picked=new Set([...seeded,...analytical].map(q=>q.id));
  const chosen=[...seeded,...analytical,...prioritize(candidates.filter(q=>!picked.has(q.id))).slice(0,area.count-picked.size-minReasoning)];
  if(chosen.length!==area.count||new Set(chosen.map(q=>q.id)).size!==area.count)throw Error('Distribución de reactivos inválida: '+area.id+'/'+level);
  repeats+=chosen.filter(q=>used.has(q.id)).length;arr.push(...chosen);
 }
 return {questions:shuffle(arr,Math.random),repeats};
}
export function nextStudy({area,topic,subtopic,level,history=[]}){const matches=BANK.filter(q=>q.level===level&&(!area||q.area===area)&&(!topic||q.topic===topic)&&(!subtopic||q.subtopic===subtopic));const unseen=matches.filter(q=>!history.includes(q.id));const list=unseen.length?unseen:matches;return {question:list.length?list[Math.floor(Math.random()*list.length)]:null,recycled:!!matches.length&&!unseen.length,available:matches.length};}