//Questionario bank
var questionBank = [
    {
        question: 'Por quer Sansão perdeu seu poder, foi preso e morreu?',
        option: ['Porque se casou?', 'Porque matou o leão?', 'Desobedeceu aos seus pais e a Deus?', 'Porque tinha os cabelos muito grande?'],
        answer: 'Desobedeceu aos seus pais e a Deus?'
    },
    {
        question: 'Qual é o 1º mandamento que Deus nos abençoa com muitos anos de vida?',
        option: ['Orar muito.', 'Vigiar.', 'Honrar pai e mãe', 'Ir para igreja todo domingo'],
        answer: 'Honrar pai e mãe'
    },
    {
        question: 'Por que Jonas foi engolido por um peixe?',
        option: ['Por que desobedeceu a Deus', 'b) Por que ele era mau', 'b) Por que ele era profeta', 'b) Por que ele não sabia nadar'],
        answer: 'Por que desobedeceu a Deus'
    },
    {
        question: 'Quais é o 2º maior mandamento de Deus?',
        option: ['Não faltar aos cultos', 'Dá o dízimo todo mês', 'Orar 3 vezes ao dia', 'amar o teu próximo como a ti mesmo'],
        answer: 'amar o teu próximo como a ti mesmo.'
    },
    {
        question: 'Quais os profetas que foi chamado por Deus ainda criança?',
        option: ['Moisés', 'Jeremias', 'Ezequiel', 'Eliseu'],
        answer: 'Jeremias'
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
