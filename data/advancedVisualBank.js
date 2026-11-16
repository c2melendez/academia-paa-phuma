/** Ejercicios gráficos avanzados originales de interpretación multietapa; datos hipotéticos. */
export const advancedVisualQuestions=[
  {
    "id": "visual-reasoning-avanzado-espanol-0",
    "area": "espanol",
    "level": "avanzado",
    "topic": "Comprensión lectora",
    "subtopic": "Lectura crítica",
    "prompt": "El gráfico muestra préstamos en dos pares de bibliotecas. ¿En cuánto supera la suma de las bibliotecas C y D a la suma de A y B?",
    "visual": {
      "type": "bar",
      "title": "Préstamos por biblioteca (datos hipotéticos)",
      "labels": [
        "A",
        "B",
        "C",
        "D"
      ],
      "values": [
        70,
        90,
        100,
        150
      ],
      "unit": "préstamos"
    },
    "options": [
      "90 préstamos",
      "40 préstamos",
      "250 préstamos",
      "160 préstamos"
    ],
    "correct": 0,
    "explanation": "C+D=100+150=250; A+B=70+90=160; la diferencia es 90.",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. C+D=100+150=250; A+B=70+90=160; la diferencia es 90.",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  },
  {
    "id": "visual-reasoning-avanzado-espanol-1",
    "area": "espanol",
    "level": "avanzado",
    "topic": "Comprensión lectora",
    "subtopic": "Análisis de textos",
    "prompt": "Observa la evolución de inscripciones. ¿Cuál es el incremento porcentual desde el primer período hasta el último?",
    "visual": {
      "type": "line",
      "title": "Inscripciones por período (datos simulados)",
      "labels": [
        "I",
        "II",
        "III",
        "IV"
      ],
      "values": [
        40,
        50,
        60,
        80
      ],
      "unit": "inscripciones"
    },
    "options": [
      "40 %",
      "50 %",
      "80 %",
      "100 %"
    ],
    "correct": 3,
    "explanation": "El incremento es 80−40=40; relativo al valor inicial 40, equivale a (40/40)×100=100 %.",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. El incremento es 80−40=40; relativo al valor inicial 40, equivale a (40/40)×100=100 %.",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  },
  {
    "id": "visual-reasoning-avanzado-espanol-2",
    "area": "espanol",
    "level": "avanzado",
    "topic": "Comprensión lectora",
    "subtopic": "Lectura crítica",
    "prompt": "Se presenta este pictograma: cada símbolo representa 5 libros. ¿Cuántos libros adicionales deben aportar los grupos A y C juntos para igualar al grupo B?",
    "visual": {
      "type": "pictogram",
      "title": "Donaciones hipotéticas",
      "labels": [
        "Grupo A",
        "Grupo B",
        "Grupo C",
        "Grupo D"
      ],
      "values": [
        3,
        8,
        2,
        4
      ],
      "unit": "símbolos",
      "scale": 5
    },
    "options": [
      "5 libros",
      "25 libros",
      "15 libros",
      "3 libros"
    ],
    "correct": 2,
    "explanation": "A+C suma 5 símbolos y B tiene 8: la diferencia de 3 símbolos ×5 libros es 15 libros.",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. A+C suma 5 símbolos y B tiene 8: la diferencia de 3 símbolos ×5 libros es 15 libros.",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  },
  {
    "id": "visual-reasoning-avanzado-matematicas-3",
    "area": "matematicas",
    "level": "avanzado",
    "topic": "Estadística y probabilidad",
    "subtopic": "Tablas y gráficas",
    "prompt": "Según el gráfico, ¿cuántos de los cuatro talleres tienen más asistentes que el promedio?",
    "visual": {
      "type": "bar",
      "title": "Asistencia por taller",
      "labels": [
        "A",
        "B",
        "C",
        "D"
      ],
      "values": [
        18,
        22,
        26,
        34
      ],
      "unit": "personas"
    },
    "options": [
      "4 talleres",
      "2 talleres",
      "3 talleres",
      "1 taller"
    ],
    "correct": 1,
    "explanation": "Promedio=(18+22+26+34)/4=25. Superan 25 los talleres C y D.",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. Promedio=(18+22+26+34)/4=25. Superan 25 los talleres C y D.",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  },
  {
    "id": "visual-reasoning-avanzado-matematicas-4",
    "area": "matematicas",
    "level": "avanzado",
    "topic": "Estadística y probabilidad",
    "subtopic": "Dispersión de datos",
    "prompt": "Según los cuatro datos, ¿cuál es el rango estadístico?",
    "visual": {
      "type": "bar",
      "title": "Mediciones registradas",
      "labels": [
        "1",
        "2",
        "3",
        "4"
      ],
      "values": [
        12,
        27,
        18,
        39
      ],
      "unit": "unidades"
    },
    "options": [
      "27",
      "24",
      "21",
      "39"
    ],
    "correct": 0,
    "explanation": "Rango=valor máximo−valor mínimo=39−12=27.",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. Rango=valor máximo−valor mínimo=39−12=27.",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  },
  {
    "id": "visual-reasoning-avanzado-matematicas-5",
    "area": "matematicas",
    "level": "avanzado",
    "topic": "Estadística y probabilidad",
    "subtopic": "Tablas y gráficas",
    "prompt": "¿En qué porcentaje aumentó el indicador del primer al último mes?",
    "visual": {
      "type": "line",
      "title": "Producción mensual",
      "labels": [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril"
      ],
      "values": [
        80,
        88,
        104,
        120
      ],
      "unit": "unidades"
    },
    "options": [
      "40 %",
      "33.3 %",
      "120 %",
      "50 %"
    ],
    "correct": 3,
    "explanation": "Aumento=(120−80)/80×100=50 %.",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. Aumento=(120−80)/80×100=50 %.",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  },
  {
    "id": "visual-reasoning-avanzado-matematicas-6",
    "area": "matematicas",
    "level": "avanzado",
    "topic": "Geometría",
    "subtopic": "Áreas y perímetros",
    "prompt": "En el triángulo rectángulo mostrado, calcula el área (no la hipotenusa).",
    "visual": {
      "type": "triangle",
      "a": 6,
      "b": 8,
      "unit": "cm"
    },
    "options": [
      "10 cm²",
      "14 cm²",
      "24 cm²",
      "48 cm²"
    ],
    "correct": 2,
    "explanation": "Área=(cateto×cateto)/2=(6×8)/2=24 cm².",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. Área=(cateto×cateto)/2=(6×8)/2=24 cm².",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  },
  {
    "id": "visual-reasoning-avanzado-matematicas-7",
    "area": "matematicas",
    "level": "avanzado",
    "topic": "Álgebra",
    "subtopic": "Funciones",
    "prompt": "Los puntos representados siguen una función lineal. ¿Qué valor toma y cuando x=6?",
    "visual": {
      "type": "scatter",
      "title": "Relación lineal",
      "points": [
        [
          0,
          3
        ],
        [
          1,
          5
        ],
        [
          2,
          7
        ],
        [
          3,
          9
        ],
        [
          4,
          11
        ]
      ]
    },
    "options": [
      "18",
      "15",
      "12",
      "13"
    ],
    "correct": 1,
    "explanation": "La pendiente es 2 y el intercepto es 3; y=2x+3. Para x=6, y=15.",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. La pendiente es 2 y el intercepto es 3; y=2x+3. Para x=6, y=15.",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  },
  {
    "id": "visual-reasoning-avanzado-matematicas-8",
    "area": "matematicas",
    "level": "avanzado",
    "topic": "Estadística y probabilidad",
    "subtopic": "Probabilidad",
    "prompt": "El gráfico representa preferencias de 200 participantes. ¿Cuántas personas eligieron la categoría B?",
    "visual": {
      "type": "pie",
      "title": "Preferencias hipotéticas",
      "labels": [
        "A",
        "B",
        "C",
        "D"
      ],
      "values": [
        20,
        30,
        40,
        10
      ],
      "unit": "%"
    },
    "options": [
      "60 personas",
      "30 personas",
      "40 personas",
      "80 personas"
    ],
    "correct": 0,
    "explanation": "La categoría B es el 30 % de 200: 0.30×200=60 personas.",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. La categoría B es el 30 % de 200: 0.30×200=60 personas.",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  },
  {
    "id": "visual-reasoning-avanzado-naturales-9",
    "area": "naturales",
    "level": "avanzado",
    "topic": "Física",
    "subtopic": "Movimiento",
    "prompt": "En la gráfica velocidad-tiempo se muestra una velocidad constante. ¿Qué distancia recorre en kilómetros?",
    "visual": {
      "type": "velocity",
      "title": "Velocidad y tiempo",
      "speed": 12,
      "duration": 25
    },
    "options": [
      "3 km",
      "300 km",
      "0.03 km",
      "0.3 km"
    ],
    "correct": 3,
    "explanation": "Área bajo la curva=12 m/s×25 s=300 m. Como 1 km=1000 m, son 0.3 km.",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. Área bajo la curva=12 m/s×25 s=300 m. Como 1 km=1000 m, son 0.3 km.",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  },
  {
    "id": "visual-reasoning-avanzado-naturales-10",
    "area": "naturales",
    "level": "avanzado",
    "topic": "Física",
    "subtopic": "Magnitudes y conversiones",
    "prompt": "El gráfico presenta mediciones de una variable física. ¿Cuánto supera el promedio de las dos últimas mediciones al promedio de las dos primeras?",
    "visual": {
      "type": "line",
      "title": "Cuatro mediciones hipotéticas",
      "labels": [
        "1",
        "2",
        "3",
        "4"
      ],
      "values": [
        12,
        16,
        20,
        28
      ],
      "unit": "unidades"
    },
    "options": [
      "12 unidades",
      "14 unidades",
      "10 unidades",
      "8 unidades"
    ],
    "correct": 2,
    "explanation": "Promedio inicial=(12+16)/2=14; promedio final=(20+28)/2=24; diferencia=10.",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. Promedio inicial=(12+16)/2=14; promedio final=(20+28)/2=24; diferencia=10.",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  },
  {
    "id": "visual-reasoning-avanzado-naturales-11",
    "area": "naturales",
    "level": "avanzado",
    "topic": "Biología",
    "subtopic": "Método científico",
    "prompt": "Se aplicaron dos tratamientos y se registraron cuatro valores comparables. ¿Qué afirmación expresa correctamente la diferencia entre el valor mayor y menor sin sugerir causalidad?",
    "visual": {
      "type": "bar",
      "title": "Indicador observado (datos simulados)",
      "labels": [
        "T1-A",
        "T1-B",
        "T2-A",
        "T2-B"
      ],
      "values": [
        12,
        15,
        21,
        24
      ],
      "unit": "unidades"
    },
    "options": [
      "La amplitud observada es 9 unidades",
      "La amplitud observada es 12 unidades",
      "El tratamiento T2 causa exactamente un aumento de 12 unidades",
      "La amplitud observada es 24 unidades"
    ],
    "correct": 1,
    "explanation": "El máximo es 24 y el mínimo 12; amplitud=12. El gráfico aislado no prueba causalidad.",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. El máximo es 24 y el mínimo 12; amplitud=12. El gráfico aislado no prueba causalidad.",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  },
  {
    "id": "visual-reasoning-avanzado-sociales-12",
    "area": "sociales",
    "level": "avanzado",
    "topic": "Geografía",
    "subtopic": "Indicadores sociodemográficos",
    "prompt": "Si los datos representan 300 hogares, ¿cuántos corresponden conjuntamente a los grupos C y D?",
    "visual": {
      "type": "pie",
      "title": "Hogares por sector (datos hipotéticos)",
      "labels": [
        "A",
        "B",
        "C",
        "D"
      ],
      "values": [
        15,
        25,
        35,
        25
      ],
      "unit": "%"
    },
    "options": [
      "180 hogares",
      "60 hogares",
      "120 hogares",
      "200 hogares"
    ],
    "correct": 0,
    "explanation": "C+D=35 %+25 %=60 %. El 60 % de 300 hogares es 180.",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. C+D=35 %+25 %=60 %. El 60 % de 300 hogares es 180.",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  },
  {
    "id": "visual-reasoning-avanzado-sociales-13",
    "area": "sociales",
    "level": "avanzado",
    "topic": "Geografía",
    "subtopic": "Geografía humana",
    "prompt": "A partir del gráfico, ¿qué fracción del total de 300 habitantes representa el grupo C?",
    "visual": {
      "type": "bar",
      "title": "Población por grupo (simulación)",
      "labels": [
        "A",
        "B",
        "C",
        "D"
      ],
      "values": [
        50,
        70,
        100,
        80
      ],
      "unit": "personas"
    },
    "options": [
      "1/2",
      "1/4",
      "2/3",
      "1/3"
    ],
    "correct": 3,
    "explanation": "El total es 300 y el grupo C tiene 100: 100/300=1/3.",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. El total es 300 y el grupo C tiene 100: 100/300=1/3.",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  },
  {
    "id": "visual-reasoning-avanzado-sociales-14",
    "area": "sociales",
    "level": "avanzado",
    "topic": "Geografía",
    "subtopic": "Indicadores sociodemográficos",
    "prompt": "Según el gráfico, ¿cuál fue el cambio relativo desde el primer período al último?",
    "visual": {
      "type": "line",
      "title": "Acceso a educación (datos hipotéticos)",
      "labels": [
        "2018",
        "2019",
        "2020",
        "2021"
      ],
      "values": [
        60,
        72,
        84,
        90
      ],
      "unit": "alumnos"
    },
    "options": [
      "90 % de aumento",
      "25 % de aumento",
      "50 % de aumento",
      "30 % de aumento"
    ],
    "correct": 2,
    "explanation": "La diferencia es 90−60=30 y representa el 50 % del valor inicial de 60.",
    "wrongExplanation": "Analiza conjuntamente la escala y las relaciones de los datos. La diferencia es 90−60=30 y representa el 50 % del valor inicial de 60.",
    "reasoningDepth": "multi-step",
    "source": "Gráfico original avanzado basado en destrezas de PAA y PHUMA; datos hipotéticos.",
    "calibration": "pedagogical-not-official"
  }
];
