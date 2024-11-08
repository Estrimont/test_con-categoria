const tests = {
    matematicas: {
        1: [
            { question: "¿Cuál es el resultado de 5 + 7?", options: ["10", "11", "12", "13"], answer: 2 },
            { question: "¿Qué es un triángulo?", options: ["Una figura con tres lados", "Una figura con cuatro lados", "Una figura redonda", "Ninguna de las anteriores"], answer: 0 }
        ],
        2: [
            { question: "¿Cuál es el resultado de 8 * 9?", options: ["72", "81", "63", "54"], answer: 0 },
            { question: "¿Qué es un cuadrado?", options: ["Una figura con cuatro lados iguales", "Una figura con tres lados", "Una figura con cinco lados", "Ninguna de las anteriores"], answer: 0 }
        ],
        3: [
            { question: "¿Cuánto es 100 / 5?", options: ["15", "20", "25", "30"], answer: 2 },
            { question: "¿Qué es el perímetro?", options: ["La medida del área", "La suma de todos los lados de una figura", "La medida de la altura", "Ninguna de las anteriores"], answer: 1 }
        ],
        4: [
            { question: "¿Qué es un ángulo recto?", options: ["90 grados", "180 grados", "45 grados", "360 grados"], answer: 0 },
            { question: "¿Qué es un círculo?", options: ["Una figura sin esquinas", "Una figura con tres lados", "Una figura con cuatro lados", "Ninguna de las anteriores"], answer: 0 }
        ]
    },
    lengua: {
        1: [
            { question: "¿Cuál es el sinónimo de 'rápido'?", options: ["Lento", "Ágil", "Tardo", "Pesado"], answer: 1 },
            { question: "¿Qué es un sustantivo?", options: ["Nombre de una persona, animal o cosa", "Acción", "Descripción", "Ninguna de las anteriores"], answer: 0 }
        ],
        2: [
            { question: "¿Cuál es el antónimo de 'intransigente'?", options: ["Flexible", "Radical", "Indiferente", "Obstinada"], answer: 0 },
            { question: "¿Qué tipo de oración es 'No me gustan las mentiras'?", options: ["Exclamativa", "Interrogativa", "Afirmativa", "Negativa"], answer: 3 }
        ],
        3: [
            { question: "¿Qué significa el término 'hipérbaton'?", options: ["Cambio en el orden de las palabras en una oración", "Uso exagerado de adjetivos", "Contradicción en una misma frase", "Uso de palabras incompletas para causar suspenso"], answer: 0 },
            { question: "¿Qué función sintáctica cumple el complemento directo en la oración 'Juan comió una manzana'?", options: ["Sujeto", "Verbo", "Objeto directo", "Complemento circunstancial"], answer: 2 }
        ],
        4: [
            { question: "¿Qué recurso literario se utiliza en la frase 'El viento susurraba entre los árboles'?", options: ["Metáfora", "Prosopopeya", "Oxímoron", "Anáfora"], answer: 1 },
            { question: "¿Cuál es el pronombre relativo en la oración 'El libro que leímos es interesante'?", options: ["El", "Leímos", "Que", "Interesante"], answer: 2 }
        ]
    }
    // Añadir más preguntas para lengua, ciencias, historia, geografía y icfes
    ,
    ciencias: {
        1: [
            { question: "¿Cuál es el estado de la materia del agua a temperatura ambiente?", options: ["Sólido", "Líquido", "Gas", "Plasma"], answer: 1 },
            { question: "¿Qué es una célula?", options: ["La unidad básica de los seres vivos", "Una partícula de polvo", "Una molécula de agua", "Un tipo de tejido"], answer: 0 }
        ],
        2: [
            { question: "¿Quién propuso la teoría de la evolución?", options: ["Isaac Newton", "Charles Darwin", "Galileo Galilei", "Albert Einstein"], answer: 1 },
            { question: "¿Qué gas es esencial para la respiración en los animales?", options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Metano"], answer: 0 }
        ],
        3: [
            { question: "¿Qué partícula subatómica tiene carga positiva?", options: ["Protón", "Neutrón", "Electrón", "Foton"], answer: 0 },
            { question: "¿Cómo se llama el proceso por el cual las plantas fabrican su alimento?", options: ["Fotosíntesis", "Respiración celular", "Transpiración", "Fermentación"], answer: 0 }
        ],
        4: [
            { question: "¿Qué es el ADN?", options: ["Ácido desoxirribonucleico", "Ácido ribonucleico", "Una proteína", "Un tipo de célula"], answer: 0 },
            { question: "¿Cómo se llama la ley que establece que la energía no se crea ni se destruye, solo se transforma?", options: ["Ley de la gravedad", "Ley de la conservación de la energía", "Ley de la relatividad", "Ley de la termodinámica"], answer: 1 }
        ]// Preguntas de ciencias
    },
    historia: {
        1: [
            { question: "¿Quién fue el primer presidente de los Estados Unidos?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: 0 },
            { question: "¿En qué año Cristóbal Colón descubrió América?", options: ["1492", "1500", "1453", "1600"], answer: 0 }
        ],
        2: [
            { question: "¿Quién fue el líder de la Revolución Francesa?", options: ["Napoleón Bonaparte", "Luis XVI", "Maximilien Robespierre", "Georges Danton"], answer: 2 },
            { question: "¿Qué imperio construyó la Gran Muralla China?", options: ["Imperio Romano", "Imperio Chino", "Imperio Persa", "Imperio Mongol"], answer: 1 }
        ],
        3: [
            { question: "¿Qué evento marcó el fin de la Edad Media?", options: ["La caída de Constantinopla", "La Revolución Industrial", "El descubrimiento de América", "La firma de la Carta Magna"], answer: 0 },
            { question: "¿Quién fue el líder del Imperio Azteca durante la llegada de los españoles?", options: ["Moctezuma II", "Cuauhtémoc", "Hernán Cortés", "Tlacaélel"], answer: 0 }
        ],
        4: [
            { question: "¿Qué tratado puso fin a la Primera Guerra Mundial?", options: ["Tratado de Versalles", "Tratado de Tordesillas", "Tratado de París", "Tratado de Utrecht"], answer: 0 },
            { question: "¿En qué año se fundó la Unión Soviética?", options: ["1917", "1922", "1939", "1945"], answer: 1 }
        ]// Preguntas de historia
    },
    geografia: {
        1: [
            { question: "¿Cuál es la capital de Francia?", options: ["Madrid", "Londres", "París", "Roma"], answer: 2 },
            { question: "¿En qué continente se encuentra el desierto del Sahara?", options: ["Asia", "América", "África", "Oceanía"], answer: 2 }
        ],
        2: [
            { question: "¿Cuál es el río más largo del mundo?", options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"], answer: 0 },
            { question: "¿En qué país se encuentra el monte Everest?", options: ["Nepal", "India", "China", "Tíbet"], answer: 0 }
        ],
        3: [
            { question: "¿Qué océano baña la costa este de Estados Unidos?", options: ["Atlántico", "Pacífico", "Índico", "Ártico"], answer: 0 },
            { question: "¿Qué país tiene la mayor cantidad de islas del mundo?", options: ["Suecia", "Canadá", "Indonesia", "Filipinas"], answer: 1 }
        ],
        4: [
            { question: "¿Qué país es el más grande del mundo por superficie?", options: ["Canadá", "China", "Rusia", "Estados Unidos"], answer: 2 },
            { question: "¿Cuál es la ciudad más poblada del mundo?", options: ["Nueva York", "Beijing", "Tokio", "Ciudad de México"], answer: 2 }
        ]// Preguntas de geografía
    },
    icfes: {
        1: [
            { question: "¿Cuál es el sinónimo de 'feliz'?", options: ["Triste", "Alegre", "Enojado", "Aburrido"], answer: 1 },
            { question: "¿Cuál es el resultado de 15 × 2?", options: ["30", "20", "35", "25"], answer: 0 }
        ],
        2: [
            { question: "¿Qué significa la palabra 'ecología'?", options: ["Estudio de los ecosistemas", "Estudio de los animales", "Estudio de las plantas", "Estudio del clima"], answer: 0 },
            { question: "Si un triángulo tiene lados de 6 cm, 8 cm y 10 cm, ¿qué tipo de triángulo es?", options: ["Equilátero", "Isósceles", "Escaleno", "Rectángulo"], answer: 3 }
        ],
        3: [
            { question: "¿Cuál es el tema principal del texto 'Cien años de soledad' de Gabriel García Márquez?", options: ["La historia de la familia Buendía", "La lucha por la independencia", "La vida en la ciudad de Macondo", "Las tradiciones de América Latina"], answer: 0 },
            { question: "En el sistema solar, ¿qué planeta está más cerca del sol?", options: ["Venus", "Mercurio", "Tierra", "Marte"], answer: 1 }
        ],
        4: [
            { question: "¿Qué tipo de oración es 'Aunque llueva, iremos al parque'?", options: ["Afirmativa", "Negativa", "Subordinada", "Interrogativa"], answer: 2 },
            { question: "¿Cuál es la fórmula química del agua?", options: ["CO2", "H2O", "O2", "HCl"], answer: 1 }
        ]// Preguntas de ICFES
    }
};

let currentTest;
let currentQuestionIndex = 0;
let score = 0;

function startTest(level) {
    isTesting = true; // Se inicia el test
    const category = new URLSearchParams(window.location.search).get('category');
    currentTest = tests[category][level];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('info').innerHTML = `<p>Test ${level}: ${currentTest.length} preguntas.</p>`;
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('next-button').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    optionsElement.innerHTML = '';
    const currentQuestion = currentTest[currentQuestionIndex];

    questionElement.innerHTML = currentQuestion.question;
    currentQuestion.options.forEach((option, index) => {
        optionsElement.innerHTML += `<button class="button" onclick="selectAnswer(${index})">${option}</button>`;
    });
}

function selectAnswer(selectedIndex) {
    if (selectedIndex === currentTest[currentQuestionIndex].answer) {
        score++;
    }
    document.getElementById('next-button').style.display = 'block';
    const buttons = document.querySelectorAll('#options .button');
    buttons.forEach(button => button.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentTest.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    isTesting = false; // El test ha finalizado
    document.getElementById('question-container').style.display = 'none';
    const category = new URLSearchParams(window.location.search).get('category');
    document.getElementById('info').innerHTML = `<p>Test finalizado. Tu puntuación es: ${score} de ${currentTest.length}.</p>`;
}
