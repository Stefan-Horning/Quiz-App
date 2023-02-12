let questions =[
    {
        'question': 'Wofür ist Javascriprt da?',
        'answer_1': 'Für das Grundgerüst einer Website',
        'answer_2': 'Für die logik einer einers Programmes',
        'answer_3': 'Was ist Javascript',
        'answer_4': 'Um etwas zu Stylen',
        'right_answer': 2
    },
    {
        'question': 'Was ist <b>keine</b> Programmiersprache?',
        'answer_1': 'php',
        'answer_2': 'Javascript',
        'answer_3': 'Zoom4',
        'answer_4': 'Java',
        'right_answer': 3
    },
    {
        'question': 'Welche Programmiersprache schreibt man wie ein Kochrezept?',
        'answer_1': 'Chef',
        'answer_2': 'Javascript',
        'answer_3': 'Python',
        'answer_4': 'C++',
        'right_answer': 1
    },
    {
        'question': 'Wie Zählt ein Informatiker?',
        'answer_1': '1,2,3,4,5...',
        'answer_2': '-1,0,1,2,3,4,5...',
        'answer_3': '0,1,2,3,4,5...',
        'answer_4': 'Garnicht',
        'right_answer': 3
    },
    {
        'question': 'Was ist ChatGPT',
        'answer_1': 'Eine TV-Show',
        'answer_2': 'Eine Anderebesvhreibung für dein Quell-Code',
        'answer_3': 'Ein sehr guter PC',
        'answer_4': 'Eine Künstliche Intelligenz',
        'right_answer': 4
    }
];

let currentQuestion = 0;

function init(){
    document.getElementById('question-number').innerHTML = questions.length;
    showQuestion()
}

function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('quest1').innerHTML = question['answer_1'];
    document.getElementById('quest2').innerHTML = question['answer_2'];
    document.getElementById('quest3').innerHTML = question['answer_3'];
    document.getElementById('quest4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    if (selectedQuestionNumber == question['right_answer']){
        document.getElementById(selection).classList.add('bg-success');
    }
}