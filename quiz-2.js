//Questionario bank
var questionBank = [
    {
        question: 'Qual foi o pecado do filho pródigo?',
        option: ['Pediu sua parte da herança antes do tempo.', 'Não convidou o irmão mais velho para ir com ele.', 'Desobedeceu aos seus pais e a Deus.', 'Econimizou todo o dinheiro da sua herança.'],
        answer: 'Pediu sua parte da herança antes do tempo.'
    },
    {
        question: 'com quantos anos Jesus pregou pela primeira vez no templo?',
        option: ['12 anos', '23 anos', '30 anos', '13 anos'],
        answer: '12 anos'
    },
    {
        question: 'O que Deus colocou no Jardim do Éden?',
        option: ['Foram dois homens', 'foram duas mulheres', 'Um homem e uma mulher', 'Dois Anjos'],
        answer: 'Um homem e uma mulher'
    },
    {
        question: 'O que nós aprendemos em Levítico. 20:13?',
        option: ['Pode um homem se casar com outro homem', 'Pode uma mulher se casar com outra muher', 'Que Deus abençoa o casamento entre dois homens', 'Aprendemos que Deus proíbe o casamento de homem com homem e de mulher com mulher.'],
        answer: 'Aprendemos que Deus proíbe o casamento de homem com homem e de mulher com mulher.'
    },
    {
        question: 'O que nós aprendemos em Proverbios 6:20?',
        option: ['Que Jesus já tinha nascido', 'Que os filhos podem desobedecer seus pais', 'Que podem contar uma mentirinha', 'Que os filhos tem que obedecer o Pai, e ouvir os ensinos da mãe.'],
        answer: 'Que os filhos tem que obedecer o Pai, e ouvir os ensinos da mãe.'
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
