/** Banco matemático parametrizado: cada distractor modela un error de procedimiento.
 * v2 cambia los IDs para que el historial no trate un ítem revisado como si fuera la versión anterior.
 */
const TIERS={basico:0,intermedio:1,avanzado:2};
function hash(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;}
function random(seed){let x=seed>>>0;return ()=>((x=(Math.imul(1664525,x)+1013904223)>>>0)/4294967296)}
function shuffle(a,r){const result=[...a];for(let i=result.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;}
function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;}
function frac(a,b){if(!b)throw Error('Denominador cero');const g=gcd(a,b);return `${a/g}/${b/g}`;}
function numeric(value){const t=String(value);const m=/^(-?\d+)\/(-?\d+)$/.exec(t);return m?Number(m[1])/Number(m[2]):Number(t);}
function item(topic,subtopic,prompt,correct,explanation,alternatives){return {topic,subtopic,prompt,right:String(correct),explanation,alternatives};}
export function mathQuestion(level,i){
 const tier=TIERS[level];if(tier===undefined)throw Error('Nivel inválido');
 const rng=random(hash(`math-v2-${level}-${i}`));
 const a=4+Math.floor(rng()*16)+tier*3,b=3+Math.floor(rng()*11)+tier*2,c=2+Math.floor(rng()*6);
 let q;
 switch(i%15){
 case 0:{const v=a+b*c;q=item('Aritmética','Operaciones',`Calcula ${a} + ${b} × ${c}.`,v,`La multiplicación tiene prioridad: ${b} × ${c} = ${b*c}; ${a} + ${b*c} = ${v}.`,[[ (a+b)*c,'Aplicaste la suma antes de multiplicar; faltaron los paréntesis.' ],[a+b+c,'Reemplazaste el producto por una suma.'],[a*b+c,'Multiplicaste los términos equivocados.']]);break;}
 case 1:{const n=a+c;q=item('Aritmética','Fracciones',`Calcula ${a}/${b} + ${c}/${b}. Da la fracción simplificada.`,frac(n,b),`Los denominadores coinciden; se suman numeradores y se simplifica: (${a}+${c})/${b} = ${frac(n,b)}.`,[[frac(n,2*b),'Sumaste los denominadores aunque ya eran iguales.'],[frac(a*c,b),'Multiplicaste los numeradores en lugar de sumarlos.'],[frac(a+c,b+1),'Alteraste el denominador común.'],[frac(a+c+1,b),'Añadiste una unidad de más al numerador.']]);break;}
 case 2:{const p=c*5,N=a*20,v=a*c;q=item('Aritmética','Porcentajes',`¿Cuál es el ${p}% de ${N}?`,v,`${p}% = ${p}/100, así que ${N} × ${p}/100 = ${v}.`,[[N*p/10,'Dividiste el porcentaje entre 10, no entre 100.'],[N*p/1000,'Dividiste entre 1,000 en lugar de 100.'],[N-v,'Calculaste la parte restante en vez del porcentaje solicitado.'],[v+p,'Sumaste el porcentaje como si fueran unidades.']]);break;}
 case 3:{const v=(c+1)*b;q=item('Aritmética','Proporciones',`Si ${a} cuadernos cuestan L ${a*b}, ¿cuánto cuestan ${c+1} cuadernos al mismo precio?`,v,`Cada cuaderno cuesta L ${(a*b)/a}; ${c+1} × ${b} = L ${v}.`,[[a*b+b,'Aumentaste el costo original en un solo cuaderno sin atender a la nueva cantidad.'],[(c+1)*a,'Confundiste cantidad inicial con precio unitario.'],[a*b,'Mantuviste el costo del grupo inicial.'],[v+b,'Contaste un cuaderno adicional.']]);break;}
 case 4:{const v=c*c+a;q=item('Aritmética','Potencias',`Calcula ${c}² + ${a}.`,v,`${c}² = ${c*c}, por lo que ${c*c}+${a}=${v}.`,[[2*c+a,'Confundiste elevar al cuadrado con multiplicar por 2.'],[(c+a)**2,'Elevaste al cuadrado toda la suma sin paréntesis en el enunciado.'],[c*c*a,'Multiplicaste por el sumando en vez de sumarlo.']]);break;}
 case 5:{q=item('Álgebra','Ecuaciones',`Resuelve ${b}x + ${a} = ${a+b*c}. ¿Cuál es x?`,c,`Restas ${a}: ${b}x = ${b*c}; luego divides entre ${b}: x = ${c}.`,[[c+a,'No aislaste x antes de operar con el término independiente.'],[b*c,'Olvidaste dividir entre el coeficiente de x.'],[a+b*c,'Tomaste el miembro derecho como el valor de x.']]);break;}
 case 6:{q=item('Álgebra','Sistemas de ecuaciones',`Si x+y=${a+b} y x−y=${a-b}, encuentra x.`,a,`Sumando ambas ecuaciones, 2x=${2*a}; por tanto x=${a}.`,[[b,'Calculaste y en lugar de x.'],[2*a,'Olvidaste dividir el resultado de la suma entre 2.'],[a+b,'Copiaste el primer miembro derecho sin resolver el sistema.']]);break;}
 case 7:{const v=a+4*b;q=item('Álgebra','Sucesiones',`En la sucesión ${a}, ${a+b}, ${a+2*b}, ${a+3*b}, … ¿qué valor sigue?`,v,`La diferencia común es ${b}; al cuarto término se le suma ${b}: ${v}.`,[[a+3*b,'Repetiste el último término mostrado.'],[a+5*b,'Avanzaste dos posiciones.'],[a+4,'Incrementaste en 1 el multiplicador de manera incorrecta.']]);break;}
 case 8:{const v=b*a+c;q=item('Álgebra','Funciones',`Si f(x)=${b}x+${c}, calcula f(${a}).`,v,`Sustituye x=${a}: ${b}(${a})+${c} = ${v}.`,[[b+a+c,'Sumaste x al coeficiente en vez de multiplicar.'],[b*a,'Olvidaste el término independiente.'],[b*(a+c),'Multiplicaste el término independiente por el coeficiente.']]);break;}
 case 9:{const v=a*b;q=item('Geometría','Áreas y perímetros',`Un rectángulo mide ${a} cm de largo y ${b} cm de ancho. ¿Cuál es su área en cm²?`,v,`El área de un rectángulo es largo por ancho: ${a} × ${b}=${v} cm².`,[[2*(a+b),'Calculaste el perímetro, no el área.'],[a+b,'Sumaste las longitudes sin multiplicarlas.'],[a*a,'Supones un cuadrado de lado igual al largo.']]);break;}
 case 10:{const v=4*a;q=item('Geometría','Áreas y perímetros',`Un cuadrado tiene lado ${a} cm. ¿Cuál es su perímetro en cm?`,v,`El perímetro de un cuadrado suma sus cuatro lados: 4×${a}=${v} cm.`,[[a*a,'Calculaste el área en vez del perímetro.'],[2*a,'Contaste solo dos lados.'],[a+4,'Sumaste cuatro unidades en vez de cuatro lados.']]);break;}
 case 11:{const given=a+35,v=180-given;q=item('Geometría','Ángulos',`Dos ángulos son suplementarios. Uno mide ${given}°. ¿Cuánto mide el otro?`,v,`La suma de ángulos suplementarios es 180°. Entonces 180−${given}=${v}°.`,[[90-given,'Usaste 90°, que corresponde a ángulos complementarios.'],[given,'Supusiste que deben tener medidas iguales.'],[180+given,'Sumaste en lugar de restar la medida conocida.']]);break;}
 case 12:{const x=3*c,y=4*c,v=5*c;q=item('Geometría','Pitágoras',`Un triángulo rectángulo tiene catetos de ${x} cm y ${y} cm. ¿Cuál es su hipotenusa?`,v,`Por Pitágoras: √(${x}²+${y}²) = √(${x*x+y*y}) = ${v} cm.`,[[x+y,'Sumaste los catetos sin elevar al cuadrado.'],[Math.abs(x-y),'Restaste catetos, una operación que no da la hipotenusa.'],[x*x+y*y,'Omitiste la raíz cuadrada final.']]);break;}
 case 13:{const v=a+b;q=item('Estadística y probabilidad','Promedios',`¿Cuál es la media de ${a}, ${a+b} y ${a+2*b}?`,v,`La suma es ${3*v}; divide entre tres y obtienes ${v}.`,[[3*v,'Calculaste la suma pero no la dividiste entre tres.'],[a+2*b,'Tomaste el dato mayor como promedio.'],[a,'Tomaste el dato menor como promedio.']]);break;}
 default:{const total=a+b;q=item('Estadística y probabilidad','Probabilidad',`En una bolsa hay ${a} bolas verdes y ${b} amarillas. ¿Qué probabilidad hay de sacar una verde?`,frac(a,total),`Hay ${a} casos favorables de ${total} posibles: ${a}/${total} = ${frac(a,total)}.`,[[frac(b,total),'Calculaste la probabilidad de amarilla en lugar de verde.'],[frac(a,b),'Tomaste solo las bolas amarillas como denominador.'],[frac(total,a),'Invertiste casos favorables y totales.'],[frac(a,total+1),'Incluiste una bola que no existe en el experimento.']]);}
 }
 const answers=[{value:q.right,reason:q.explanation}];
 for(const [raw,reason] of q.alternatives){
   const value=String(raw);if(!Number.isFinite(numeric(value)))continue;
   if(answers.some(x=>Math.abs(numeric(x.value)-numeric(value))<1e-10))continue;
   answers.push({value,reason});if(answers.length===4)break;
 }
 // Respaldo excepcional (también se comprueba numéricamente): sin opciones ficticias como «12+1».
 for(let k=1;answers.length<4;k++){const v=String(numeric(q.right)+k);if(answers.some(x=>numeric(x.value)===numeric(v)))continue;answers.push({value:v,reason:'Esta cifra no se obtiene aplicando correctamente el procedimiento mostrado.'});}
 const ordered=shuffle(answers,rng),options=ordered.map(x=>x.value),correct=options.indexOf(q.right);
 return {id:`matematicas-v2-${level}-${i}`,area:'matematicas',level,topic:q.topic,subtopic:q.subtopic,prompt:q.prompt,options,correct,explanation:q.explanation,
 optionExplanations:Object.fromEntries(ordered.map((o,k)=>[k,o.reason])),wrongExplanation:`Comprueba el procedimiento: ${q.explanation}`,
 source:'Ejercicio matemático original parametrizado; revisión de distractores por procedimiento.',familyId:`math-${i%15}`,bankVersion:2};
}