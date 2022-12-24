//Questionario bank
var questionBank = [
    {
        question: 'Qual o castigo que Sansão recebeu por ter desobedecido à Deus?',
        option: ['Ficou doente.', 'Foi morto por leão.', 'Ficou cego.', 'Levou 30 chibatadas'],
        answer: 'Ficou cego.'
    },
    {
        question: 'Qual o nome do homem que construiu um barco com 3 andares?',
        option: ['Moisés.', 'Davi.', 'Noé.', 'Abraão.'],
        answer: 'Noé.'
    },
    {
        question: 'Por que Jonas foi engolido por um peixe?',
        option: ['Por que desobedeceu a Deus', 'b) Por que ele era mau', 'b) Por que ele era profeta', 'b) Por que ele não sabia nadar'],
        answer: 'Por que desobedeceu a Deus'
    },
    {
        question: 'Qual é o 2º maior mandamento de Deus?',
        option: ['Não faltar aos cultos', 'Dá o dízimo todo mês', 'Orar 3 vezes ao dia', 'amar o teu próximo como a ti mesmo.'],
        answer: 'amar o teu próximo como a ti mesmo.'
    },
    {
        question: 'Qual dos nomes abaixo já tinha um barco quando ainda era uma criança?',
        option: ['Moisés.', 'Jeremias.', 'Ezequiel.', 'Eliseu.'],
        answer: 'Moisés.'
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
