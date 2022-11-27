//Questionario bank
var questionBank = [
    {
        question: 'Onde se encontra na Bíblia " O Senhor é meu pastor, nada me faltará"??',
        option: ['Salmos 23.', 'Salmos 1', 'Salmos 90.', 'Salmos 91'],
        answer: 'Salmos 23.'
    },
    {
        question: 'Qual destes nomes não era discípulo de Jesus?',
        option: ['José.', 'Pedro.', 'João.', 'Mateus'],
        answer: 'José.'
    },
    {
        question: 'Qual o nome do primeiro casal a existir na terra?',
        option: ['José e Maria.', 'Abraão e Sara.', 'Adão e Eva.', 'Jocó e Raquel'],
        answer: 'Adão e Eva.'
    },
    {
        question: 'Como se chama o momento quando o mundo ficou coberto por água?',
        option: ['Tempestade.', 'Chuvisco.', 'Dilúvio', 'Enchente.'],
        answer: 'Dilúvio'
    },
    {
        question: 'Em qual dia foi criado o homem?',
        option: ['Foi no 1º dia.', 'Foi no 5º dia.', 'Foi no 7º dia.', 'Foi no 6º dia.'],
        answer: 'Foi no 6º dia.'
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scoreboard= document.getElementById('scoreboard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');

var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
let score= 0;

//função do display: 
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML='Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'de'+' '+questionBank.length;
  
}

//função de calculo do resultado
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background='limegreen';
    }
    else{
        document.getElementById(e.id).style.background='tomato';
    }
    setTimeout(nexQuestion,300);
}

function nexQuestion(){

    if(i<questionBank.length-1)
    {
        i=i+1
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ 
        questionBank.length;
        quizContainer.style.display = 'none'; 
        scoreboard.style.display= 'block'
    }
}
//evento click do botão
next.addEventListener('click',nexQuestion);

function backToQuiz(){
    location.reload();

}

function checkAnswer(){
        var answerBank= document.getElementById('answerBank');
        var answers= document.getElementById('answers');
        answerBank.style.display= 'block';
        scoreboard.style.display= 'none';

        for(var a=0;a<questionBank.length;a++)
        {
            var list=document.createElement('li');
            list.innerHTML= questionBank[a].answer;
            answers.appendChild(list);

        }
}


displayQuestion();
