/** Local-only issue reports. Never sends a request; the student exports JSON voluntarily. */
export const REPORT_REASONS=[
 {id:'incorrect-key',label:'La respuesta marcada parece incorrecta'},
 {id:'ambiguous',label:'Hay más de una respuesta posible'},
 {id:'diagram',label:'El gráfico o figura es confuso'},
 {id:'explanation',label:'La explicación necesita corregirse'},
 {id:'topic',label:'El tema o nivel no corresponde'},
 {id:'other',label:'Otro problema'}
];
export function createQuestionReport(question, reason, note='',context='study',clock=()=>new Date()){
 if(!question||typeof question.id!=='string'||!question.id||!question.area||!question.level)throw new TypeError('Reactivo no válido');
 if(!REPORT_REASONS.some(x=>x.id===reason))throw new RangeError('Motivo inválido');
 if(!['study','exam','review'].includes(context))throw new RangeError('Contexto inválido');
 const comment=String(note).trim().slice(0,500);
 return {version:1,questionId:question.id,area:question.area,topic:question.topic,subtopic:question.subtopic,
  level:question.level,reason,comment,context,createdAt:clock().toISOString()};
}
export function exportQuestionReports(reports){
 if(!Array.isArray(reports))throw new TypeError('Informes inválidos');
 return JSON.stringify({application:'academia-paa-phuma',kind:'question-reports',version:1,
  privacy:'Archivo local. No contiene respuestas de alumnos ni se envía automáticamente.',
  reports:reports.map(x=>({...x}))},null,2);
}
