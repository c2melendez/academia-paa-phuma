/** Original visual-response practice inspired by diagram TYPES in PAA and PHUMA study guides.
 * Every graphic has structured data; drawings are rendered by visualRenderer.js, never copied from books.
 */
const TIERS={basico:0,intermedio:1,avanzado:2};
function make(area,level,family,variant,topic,subtopic,prompt,visual,right,distractors,explanation){
 const opts=[String(right),...distractors.map(String)];
 for(let i=1;i<4;i++)if(opts.slice(0,i).includes(opts[i])){
  const match=/^(-?\d+)(.*)$/.exec(opts[i]);
  if(!match)throw Error(`Duplicated nonnumeric distractor ${family}: ${opts[i]}`);
  let v=Number(match[1]);do{v++}while(opts.slice(0,i).includes(String(v)+match[2]));opts[i]=String(v)+match[2];
 }
 const rotate=(variant+TIERS[level])%4;
 const options=[...opts.slice(rotate),...opts.slice(0,rotate)];
 return {id:`visual-${area}-${level}-${family}-${variant}`,area,level,topic,subtopic,prompt,visual,options,correct:options.indexOf(String(right)),explanation,wrongExplanation:`Compara los datos y las unidades de la figura. ${explanation}`,source:'Ejercicio gráfico original basado en los tipos de gráficos y figuras de las guías PAA (College Board) y PHUMA (UNAH).'};
}
const visualQuestions=[];
for(const level of Object.keys(TIERS))for(let k=0;k<6;k++){
 const t=TIERS[level], n=k+1;
 // Reading: comparisons from multiple bars, rather than merely mentioning an absent graph.
 {
 const vals=[14+n+t*3,21+n+t*4,18+n+t*2,10+n+t*3];const right='Biblioteca';
 visualQuestions.push(make('espanol',level,'reading-bars',k,'Comprensión lectora','Lectura crítica','Según el gráfico de préstamos de libros, ¿qué sección registra el mayor número de préstamos?',{type:'bar',title:'Préstamos por sección',labels:['Historia','Biblioteca','Ciencias','Arte'],values:vals,unit:'préstamos'},right,['Historia','Ciencias','Arte'],`Biblioteca registra ${vals[1]} préstamos; supera a Historia (${vals[0]}), Ciencias (${vals[2]}) y Arte (${vals[3]}). La interpretación debe basarse en las barras y su escala.`));
 }
 // PAA style figure + caption: pictograph ratios.
 {
 const num=[2+n,4+n,3+n,1+n], total=num.reduce((a,b)=>a+b,0);
 visualQuestions.push(make('espanol',level,'reading-pictograph',k,'Comprensión lectora','Lectura crítica','Observa el pictograma. ¿Cuál de las siguientes afirmaciones está respaldada por los datos?',{type:'pictogram',title:'Libros donados por grupo',labels:['Grupo A','Grupo B','Grupo C','Grupo D'],values:num,unit:'libros',scale:5},`El grupo B donó ${num[1]*5} libros`,[`El grupo A donó ${num[1]*5} libros`,`El grupo D donó ${total*5} libros`,`El grupo C donó ${num[0]*5} libros`],`Cada símbolo representa 5 libros: el grupo B tiene ${num[1]} símbolos, es decir, ${num[1]} × 5 = ${num[1]*5} libros.`));
 }
 // Geometry: triangle with side lengths; redraw accurate right angle.
 {
 const a=3*(n+t+1),b=4*(n+t+1), hyp=5*(n+t+1);
 visualQuestions.push(make('matematicas',level,'right-triangle',k,'Geometría','Pitágoras','Observa el triángulo rectángulo. ¿Cuánto mide la hipotenusa x?',{type:'triangle',a,b,unit:'cm'},`${hyp} cm`,[`${hyp+3} cm`,`${hyp-2} cm`,`${a+b} cm`],`Por el teorema de Pitágoras, x² = ${a}² + ${b}². Por tanto x = √${a*a+b*b} = ${hyp} cm.`));
 }
 // Angle corresponding on parallel lines.
 {
 const angle=35+5*k+t*4;
 visualQuestions.push(make('matematicas',level,'parallel-lines',k,'Geometría','Ángulos','En la figura L₁ ∥ L₂. ¿Cuál es el ángulo x, correspondiente al ángulo señalado?',{type:'parallels',angle},`${angle}°`,[`${180-angle}°`,`${90-angle}°`,`${angle+10}°`],`Las rectas L₁ y L₂ son paralelas y una transversal las corta. Los ángulos correspondientes tienen la misma medida; x = ${angle}°.`));
 }
 // Composite bar chart and statistics.
 {
 const nums=[7+n+t*2,10+n+t*2,13+n+t*2,6+n+t*2];const sum=nums.reduce((a,b)=>a+b,0);
 visualQuestions.push(make('matematicas',level,'bar-total',k,'Estadística y probabilidad','Promedios','En el gráfico de barras, ¿cuál es la suma de todas las frecuencias?',{type:'bar',title:'Participantes por taller',labels:['A','B','C','D'],values:nums,unit:'personas'},sum,[sum-nums[0],sum+nums[1],sum-nums[3]+1],`Suma las cuatro barras: ${nums.join(' + ')} = ${sum}. Cada barra representa una frecuencia, no un porcentaje.`));
 }
 // Line graph changes in time.
 {
 const vals=[12+n+t,17+n+t*2,15+n+t*2,24+n+t*3]; const rise=vals[3]-vals[0];
 visualQuestions.push(make('matematicas',level,'line-change',k,'Estadística y probabilidad','Promedios','¿Cuánto aumentó el indicador entre el primer y el último período del gráfico?',{type:'line',title:'Evolución del indicador',labels:['Ene','Feb','Mar','Abr'],values:vals,unit:'unidades'},rise,[rise+vals[0],vals[3],rise+3],`Lee el valor inicial (${vals[0]}) y el final (${vals[3]}). La diferencia es ${vals[3]} − ${vals[0]} = ${rise} unidades.`));
 }
 // Pie chart: careful distinguish count and percent.
 {
 const a=20+5*k,b=25,c=30,d=100-a-b-c;const v=[a,b,c,d];
 visualQuestions.push(make('matematicas',level,'pie-percent',k,'Estadística y probabilidad','Probabilidad','Según el diagrama circular, ¿qué porcentaje corresponde a la categoría C?',{type:'pie',title:'Preferencias en una encuesta',labels:['A','B','C','D'],values:v,unit:'%'},`${c}%`,[`${a}%`,`${b}%`,`${d}%`],`El círculo completo representa 100 %. El sector C corresponde a ${c} de cada 100 respuestas: ${c} %.`));
 }
 // Scatter coordinate plot, line function increasing or decreasing (based on dataset).
 {
 const slope=n%2===0?2:3;const base=2+t;const pts=Array.from({length:5},(_,i)=>[i,slope*i+base]);
 visualQuestions.push(make('matematicas',level,'scatter-function',k,'Álgebra','Funciones','En el diagrama cartesiano se muestran puntos de una relación lineal. ¿Cuál es el cambio en y por cada unidad que aumenta x?',{type:'scatter',title:'Relación entre x e y',points:pts},String(slope),[String(slope+1),String(base),String(slope+base+1)],`Para dos puntos consecutivos, Δx = 1 y Δy = ${slope}; la pendiente es m = Δy/Δx = ${slope}.`));
 }
 // Physics speed-time: rectangular area = distance, no velocity reversal.
 {
 const vel=3+n+t*2, duration=2+n;const result=vel*duration;
 visualQuestions.push(make('naturales',level,'speed-time',k,'Física','Movimiento','La gráfica muestra una velocidad constante. ¿Qué distancia recorre el objeto durante el intervalo mostrado?',{type:'velocity',title:'Velocidad frente al tiempo',speed:vel,duration},`${result} m`,[`${vel+duration} m`,`${result+vel} m`,`${duration} m`],`En una gráfica velocidad–tiempo, el área bajo la curva representa el desplazamiento. ${vel} m/s × ${duration} s = ${result} m.`));
 }
 // Geography / demography: histogram age shares.
 {
 const values=[16+n+t,24+n+t*2,21+n+t,11+n+t];const biggest=values.indexOf(Math.max(...values));
 visualQuestions.push(make('sociales',level,'population-bars',k,'Geografía','Geografía humana','El gráfico compara grupos de edad de una comunidad. ¿Qué grupo tiene mayor población?',{type:'bar',title:'Población por rango de edad',labels:['0–14','15–29','30–59','60+'],values,unit:'personas'},'15–29 años',['0–14 años','30–59 años','60 años o más'],`La barra correspondiente a 15–29 años alcanza ${values[1]}, la cifra más alta entre los cuatro grupos. Se comparan alturas de barras con la misma escala.`));
 }
}
export {visualQuestions};