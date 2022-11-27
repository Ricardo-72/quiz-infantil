//Questionario bank
var questionBank = [
    {
        question: 'Quanto é 2 x 3?',
        option: ['É igua à 5', 'É igua à 6', 'É igua à 12', 'É igua à 7'],
        answer: 'É igua à 6'
    },
    {
        question: 'Quanto é 3 X 3',
        option: ['É igua à 9', 'É igua à 6', 'É igua à 7', 'É igua à 10'],
        answer: 'É igua à 9'
    },
    {
        question: 'Quanto é 3 x 5?',
        option: ['É igua à 8', 'É igua à à 12', 'É igua à 9', 'É igua à 15'],
        answer: 'É igua à 15'
    },
    {
        question: 'Quando 4 x 4?',
        option: ['É igua à 4', 'É igua à 8', 'É igua à 16', 'É igua à 20'],
        answer: 'É igua à 16'
    },
    {
        question: 'Quanto é 2 x 5?',
        option: ['É igua à 10', 'É igua à 7', 'É igua à 11', 'É igua à 8'],
        answer: 'É igua à 10'
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
