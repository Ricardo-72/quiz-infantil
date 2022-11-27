//Questionario bank
var questionBank = [
    {
        question: 'Jesus chamou 12 apóstolos e Israel tem 12 tribos, qual a soma de 12 + 12?',
        option: ['É = 10', 'É = 18.', 'É = 36', 'É = 24.'],
        answer: 'É = 24.'
    },
    {
        question: 'Jesus começou a fazer a obra do seu Pai com 30 anos e morreu com 33 anos, quantos anos durou seu trabalho?',
        option: ['12 anos', '3 anos', '30 anos', '13 anos'],
        answer: '3 anos'
    },
    {
        question: 'Jacó teve 12 filhos mas, só 2 foram filhos de Raquel, quanto é 12 - 2?',
        option: ['É = 10', 'É = 8', 'É = 14', 'É = 11'],
        answer: 'É = 10'
    },
    {
        question: 'Moisés tinha 80 anos quando Deus mandou ele tirar o povo do Egito, e ele andou no deserto por 40 anos, quanto é 80 + 40?',
        option: ['12 anos.', '120 anos', '90 anos', '110 anos'],
        answer: '120 anos'
    },
    {
        question: 'Moisés viveu 120 anos e Josué seu sucessor viveu 110, quanto é 120 - 110?',
        option: ['É 12 anos.', 'É 100 anos.', 'É 5 anos.', 'É 10 anos.'],
        answer: 'É 10 anos.'
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
