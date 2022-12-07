//Questionario bank
var questionBank = [
    {
        question: 'O que se quer dizer com a expressão “a graça é divina”?',
        option: ['Quer dizer que vem do ceu.', 'Quer dizer que vem dos seres divinos', 'Quer dizer que vem de Cristo','Ao se afirmar que a graça é divina, se quer dizer com isso que a sua origem está inteiramente em Deus.'],
        answer: 'Ao se afirmar que a graça é divina, se quer dizer com isso que a sua origem está inteiramente em Deus.'
    },
    {
        question: 'Qual é a diferença entre a graça universal e a “graça universalista”?',
        option: ['Universal e Universal são a mesma coisa.', 'A Universal é apenas para os Crentes, e a Universal é para todos os homens.', 'A graça é extensiva a todos os homens. Ela é universal. Contudo, por ser universal, não significa dizer que ela é universalista, que quer dizer que todos independente de credo, religião ou arrependimento, serão salvos.', 'A Universal é para todos os homens e a Universalista só para os Judeus.'],
        answer: 'A graça é extensiva a todos os homens. Ela é universal. Contudo, por ser universal, não significa dizer que ela é universalista, que quer dizer que todos independente de credo, religião ou arrependimento, serão salvos.'
    },
    {
        question: 'Segundo a lição, como surge a Reforma Protestante?',
        option: ['A Reforma Protestante surge como uma reação à corrupção da doutrina da graça.', 'Surge como uma reação frente a corrupção do ser humano.', 'Surge em função dos desvios dos Bispos e Pastores.', 'Surge para dividir a igreja católica.'],
        answer: 'A Reforma Protestante surge como uma reação à corrupção da doutrina da graça.'
    },
    {
        question: '0 que quer dizer a expressão “graça barata”?',
        option: ['A expressão “graça barata” diz respeito à vida cristã nominal ou mundanizada.','diz respeito ao fato de Jesus já ter pago na cruz.','diz respeito ao evangelho da graça.','diz respeito ao evangelho que se prega hoje em dia.'],
        answer: 'A expressão “graça barata” diz respeito à vida cristã nominal ou mundanizada.'
    },

    {
        question: '0 que o apóstolo Paulo afirmou ao escrever aos coríntios?',
        option: ['Escrevendo aos coríntios, o apóstolo da graça afirmou: "Vocês pecaram."', 'Escrevendo aos coríntios, o apóstolo da graça afirmou: "Vocês não estão sabendo celebrar a Santa Ceia do Senhor".', 'Escrevendo aos coríntios, o apóstolo da graça afirmou:"Vocês tem os dons espirituais".', 'Escrevendo aos coríntios, o apóstolo da graça afirmou: “Vocês foram comprados por preço” (1 Co 7.23 - NAA).'],
        answer: 'Escrevendo aos coríntios, o apóstolo da graça afirmou: “Vocês foram comprados por preço” (1 Co 7.23 - NAA).'
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
