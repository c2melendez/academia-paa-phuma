/** Fundamentos específicos de la guía oficial UNAH 2026, para completar temas antes ausentes.
 * Ejercicios didácticos originales, no preguntas oficiales.
 */
const seeds=[
  [
    "espanol",
    "Gramática y semántica",
    "Morfosintaxis",
    "En «Las flores amarillas crecen», ¿qué palabra concuerda en femenino plural con «flores»?",
    "amarillas",
    "crecen",
    "Las flores",
    "ninguna",
    "El adjetivo «amarillas» concuerda en género femenino y número plural con «flores»."
  ],
  [
    "espanol",
    "Gramática y semántica",
    "Hiperonimia",
    "¿Cuál es el hiperónimo de «tulipán»?",
    "Flor",
    "Tulipán rojo",
    "Pétalo",
    "Jardín",
    "Un hiperónimo designa una clase general; tulipán es un tipo de flor."
  ],
  [
    "espanol",
    "Gramática y semántica",
    "Homonimia y polisemia",
    "En «El banco del parque» y «el banco comercial», ¿qué debe consultarse para interpretar «banco»?",
    "El contexto de uso",
    "Solo la cantidad de letras",
    "La letra inicial",
    "La puntuación exclusivamente",
    "El significado pertinente se determina por contexto, pues «banco» se usa para una entidad financiera o un asiento."
  ],
  [
    "espanol",
    "Comprensión lectora",
    "Lenguaje figurado",
    "En «La esperanza floreció», la esperanza se presenta como si pudiera…",
    "Crecer como una planta",
    "Ser una ecuación",
    "Llover literalmente",
    "Medir temperaturas",
    "Florecer se usa en sentido figurado para expresar desarrollo o fortalecimiento de esperanza."
  ],
  [
    "espanol",
    "Redacción",
    "Generalización e integración",
    "Para resumir tres ejemplos de separación de residuos, ¿cuál es la mejor oración general?",
    "Separar residuos puede facilitar su aprovechamiento",
    "Todos los residuos son metal",
    "Nunca es útil clasificar desechos",
    "Los ejemplos tratan sobre deportes",
    "Una generalización válida reúne la idea común sin incorporar afirmaciones absolutas no sustentadas."
  ],
  [
    "matematicas",
    "Aritmética",
    "MCD y MCM",
    "¿Cuál es el mínimo común múltiplo de 6 y 8?",
    "24",
    "12",
    "48",
    "14",
    "Múltiplos de 6: 6,12,18,24; de 8: 8,16,24; el mínimo común es 24."
  ],
  [
    "matematicas",
    "Álgebra",
    "Ecuaciones cuadráticas",
    "¿Cuál es una solución de x²−9=0?",
    "3",
    "0",
    "9",
    "−9",
    "x²−9=(x−3)(x+3), así que x=3 o −3; entre las opciones aparece 3."
  ],
  [
    "matematicas",
    "Álgebra",
    "Inecuaciones",
    "Si x+4>9, ¿cuál es la condición para x?",
    "x>5",
    "x<5",
    "x=5",
    "x<13",
    "Al restar 4 a ambos lados sin cambiar el signo, resulta x>5."
  ],
  [
    "matematicas",
    "Álgebra",
    "Patrones algebraicos",
    "Completa 2, 5, 8, 11, __.",
    "14",
    "12",
    "15",
    "22",
    "La sucesión tiene diferencia constante de +3; después de 11 sigue 14."
  ],
  [
    "matematicas",
    "Geometría",
    "Sólidos: área y volumen",
    "¿Cuál es el volumen de un cubo cuyo lado mide 3 cm?",
    "27 cm³",
    "9 cm³",
    "12 cm³",
    "18 cm³",
    "El volumen del cubo es lado³: 3×3×3=27 cm³."
  ],
  [
    "matematicas",
    "Geometría",
    "Semejanza",
    "Dos triángulos son semejantes. Si el factor de escala de lados es 2, ¿qué ocurre con el perímetro?",
    "Se duplica",
    "Se cuadruplica",
    "Se mantiene",
    "Se reduce a la mitad",
    "El perímetro es una longitud y crece linealmente con el factor de semejanza 2."
  ],
  [
    "matematicas",
    "Estadística y probabilidad",
    "Dispersión de datos",
    "¿Qué mide el rango de los valores 3, 7, 9 y 12?",
    "9",
    "6",
    "31",
    "7",
    "Rango = máximo−mínimo = 12−3=9; es una medida simple de dispersión."
  ],
  [
    "matematicas",
    "Estadística y probabilidad",
    "Tablas y gráficas",
    "En una tabla hay 12 hombres y 18 mujeres. ¿Cuál es el total?",
    "30",
    "18",
    "6",
    "216",
    "Se suman ambas frecuencias: 12+18=30 personas."
  ],
  [
    "naturales",
    "Biología",
    "Biomoléculas",
    "¿Qué biomolécula está constituida principalmente por aminoácidos?",
    "Proteína",
    "Almidón",
    "Agua",
    "Glucosa",
    "Las proteínas son polímeros formados por aminoácidos unidos por enlaces peptídicos."
  ],
  [
    "naturales",
    "Biología",
    "División celular",
    "¿Qué proceso produce dos células hijas genéticamente similares en condiciones normales?",
    "Mitosis",
    "Meiosis",
    "Fecundación",
    "Polinización",
    "La mitosis produce dos núcleos con la misma información cromosómica; la división celular suele generar dos células."
  ],
  [
    "naturales",
    "Biología",
    "Fotosíntesis",
    "¿Qué gas suele captarse de la atmósfera durante la fotosíntesis?",
    "Dióxido de carbono",
    "Nitrógeno molecular en todos los casos",
    "Helio",
    "Ozono",
    "En la fotosíntesis oxigénica, el CO₂ se fija para producir compuestos orgánicos."
  ],
  [
    "naturales",
    "Biología",
    "Método científico",
    "¿Cuál es una hipótesis científica?",
    "Una explicación comprobable mediante observaciones o experimentos",
    "Una opinión imposible de contrastar",
    "Un resultado inventado",
    "Una conclusión que nunca se revisa",
    "Las hipótesis deben producir predicciones contrastables con evidencia."
  ],
  [
    "naturales",
    "Biología",
    "Clasificación biológica",
    "¿Qué grupo incluye a organismos formados por células sin núcleo verdadero?",
    "Procariotas",
    "Animales mamíferos",
    "Plantas vasculares",
    "Hongos multicelulares",
    "Las células procariotas no poseen núcleo delimitado por membrana."
  ],
  [
    "naturales",
    "Química",
    "Compuestos inorgánicos",
    "¿Cuál es un óxido?",
    "CO₂",
    "NaCl",
    "NaOH",
    "HCl",
    "CO₂ es un compuesto binario de oxígeno con carbono y se clasifica como óxido."
  ],
  [
    "naturales",
    "Química",
    "Contaminación y agroquímicos",
    "¿Cuál es una posible vía de contaminación de ríos por agroquímicos?",
    "Escorrentía de los campos hacia cuerpos de agua",
    "Evaporación completa del agua por la noche",
    "Conversión del agua en oxígeno",
    "Desaparición de los solutos por gravedad",
    "El agua de lluvia puede transportar sustancias usadas en cultivos hacia ríos y lagunas."
  ],
  [
    "naturales",
    "Física",
    "Magnitudes y conversiones",
    "¿Cuántos metros hay en 2.5 kilómetros?",
    "2500",
    "250",
    "25",
    "25000",
    "1 km=1000 m; 2.5×1000=2500 m."
  ],
  [
    "naturales",
    "Física",
    "Trabajo mecánico",
    "Si una fuerza de 10 N actúa en la misma dirección que un desplazamiento de 3 m, ¿cuál es el trabajo?",
    "30 J",
    "13 J",
    "3 J",
    "0 J",
    "Trabajo mecánico W=F×d cuando la fuerza está alineada: 10×3=30 joules."
  ],
  [
    "naturales",
    "Física",
    "Fuentes de energía",
    "¿Cuál de estas fuentes aprovecha el movimiento del aire?",
    "Eólica",
    "Geotérmica",
    "Nuclear",
    "Mareomotriz",
    "La energía eólica transforma la energía cinética del viento en electricidad u otros trabajos."
  ],
  [
    "sociales",
    "Historia de Honduras",
    "Enclave bananero",
    "¿Qué producto fue central en el enclave exportador hondureño del siglo XX?",
    "Banano",
    "Trigo",
    "Oliva",
    "Seda",
    "El enclave bananero se centró en el cultivo y exportación de banano por grandes empresas."
  ],
  [
    "sociales",
    "Historia de Honduras",
    "Neoliberalismo",
    "¿Qué término describe eliminar restricciones al comercio internacional?",
    "Apertura comercial",
    "Aislamiento comercial obligatorio",
    "Autarquía total",
    "Trueque exclusivamente",
    "La apertura comercial reduce barreras al intercambio de bienes y servicios entre países."
  ],
  [
    "sociales",
    "Historia universal",
    "Conflictos contemporáneos",
    "Para evaluar un acontecimiento contemporáneo, ¿qué fuente es más confiable?",
    "Un documento con fecha, autor y evidencia contrastable",
    "Un rumor sin autor",
    "Un texto sin fuentes",
    "Una imagen sin contexto",
    "La procedencia y evidencia verificable ayudan a evaluar información histórica y actual."
  ],
  [
    "sociales",
    "Geografía",
    "Husos horarios",
    "Si son las 12:00 en UTC−6, ¿qué hora es en UTC−5, sin ajustes estacionales?",
    "13:00",
    "11:00",
    "12:00",
    "18:00",
    "UTC−5 está una hora adelante de UTC−6."
  ],
  [
    "sociales",
    "Geografía",
    "Indicadores sociodemográficos",
    "¿Qué indicador expresa nacimientos por cada mil habitantes en cierto período?",
    "Tasa bruta de natalidad",
    "Densidad de carreteras",
    "Temperatura media",
    "Tasa de evaporación",
    "La tasa bruta de natalidad relaciona nacimientos con población media, habitualmente por cada mil habitantes."
  ],
  [
    "sociales",
    "Ciencias sociales",
    "Estratificación social",
    "¿Qué concepto se refiere a la distribución desigual de oportunidades entre grupos?",
    "Estratificación social",
    "Fotosíntesis",
    "Masa atómica",
    "Velocidad constante",
    "La estratificación social analiza diferencias de recursos, poder y oportunidades."
  ],
  [
    "sociales",
    "Ciencias sociales",
    "Instituciones sociales",
    "¿Cuál es un ejemplo de institución social?",
    "Familia",
    "Átomo",
    "Meseta",
    "Molécula",
    "La familia es una institución social que organiza roles, normas y relaciones."
  ],
  [
    "sociales",
    "Ciencias sociales",
    "Sociología política",
    "¿Qué estudia la sociología política?",
    "Relaciones entre poder, sociedad e instituciones",
    "Propiedades de metales",
    "Reacciones ácido-base",
    "Órbitas planetarias",
    "Esta disciplina analiza poder, participación, Estado y grupos sociales."
  ],
  [
    "sociales",
    "Ciencias sociales",
    "Origen humano",
    "¿Qué tipo de evidencia es relevante para estudiar la evolución humana?",
    "Fósiles y hallazgos arqueológicos",
    "Solo rumores",
    "Únicamente predicciones astrológicas",
    "Solo anuncios comerciales",
    "Fósiles, herramientas y evidencia biológica contribuyen al estudio científico del origen humano."
  ]
];
export const foundationQuestions=seeds.map(([area,topic,subtopic,prompt,right,a,b,c,explanation],i)=>{
 const options=[right,a,b,c],rotate=i%4,ordered=[...options.slice(rotate),...options.slice(0,rotate)];
 return {id:'foundation-basico-'+area+'-'+i,area,topic,subtopic,level:'basico',prompt,options:ordered,
 correct:ordered.indexOf(right),explanation,wrongExplanation:'La selección no cumple el criterio del concepto. '+explanation,
 source:'Guía oficial PRE-U UNAH 2026, tema académico; ejercicio original',calibration:'pedagogical-not-official'};
});
