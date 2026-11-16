/** Indicadores didácticos: esta NO es la tabla oficial de conversión PHUMA.
 * Los parámetros psicométricos de los ítems y la equiparación no son públicos.
 * La medida sobre 1,600 es lineal, exclusivamente referencial.
 */
export const MAX_REFERENCE_SCORE = 1600;
export function calculateScores(correct,total=120){
 if(!Number.isInteger(correct)||!Number.isInteger(total)||total<=0||correct<0||correct>total)throw new RangeError('Cantidad de aciertos inválida');
 const percentage=Number(((correct/total)*100).toFixed(2));
 const reference1600=Math.round((correct/total)*MAX_REFERENCE_SCORE);
 return {correct,total,percentage,reference1600,maxReference:MAX_REFERENCE_SCORE,method:'linear-practice-only'};
}
export const SCORING_NOTICE='Puntaje referencial lineal de práctica, NO equivalente a la calificación oficial PHUMA. La UNAH puede utilizar procedimientos psicométricos de conversión y equiparación que no se han publicado para este banco.';
