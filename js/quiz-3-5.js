//Questionario bank
var questionBank = [
    {
        question: 'O que é o Materialismo?',
        option: ['O Materialismo é a doutrina segunda a qual a matéria é a única realidade que existe.', 'É a doutrina que defende que o homem é só matéria.', 'É a doutrina que ensina que Jesus não se materializou após sua morte.','É a doutrina que defende que Jesus não veio em carne.'],
        answer: 'O Materialismo é a doutrina segunda a qual a matéria é a única realidade que existe.'
    },
    {
        question: 'O que é o Ateísmo?',
        option: ['É a doutrina que diz que há um só e um só Senhor.', 'De uma forma bem simples, o Ateísmo é a doutrina que nega a existência de Deus, sobretudo, a de um Deus pessoal conforme revelado na Bíblia (Cf. Gn 12.1-3).', 'É a doutrina que garante que Deus é Espírito.','É a doutrina que Deus não criou todas as coisas.'],
        answer: 'De uma forma bem simples, o Ateísmo é a doutrina que nega a existência de Deus, sobretudo, a de um Deus pessoal conforme revelado na Bíblia (Cf. Gn 12.1-3)..'
    },
    {
        question: 'Qual é a causa primária da incredulidade humana?',
        option: ['A falta de oração.', 'A falta de Estudar a bíblia.', 'O pecado é a causa primária da incredulidade humana e, consequentemente, a fonte do seu Materialismo e Ateísmo.','A falta de Orar e ler a palavra de Deus.'],
        answer: 'O pecado é a causa primária da incredulidade humana e, consequentemente, a fonte do seu Materialismo e Ateísmo.'
    },
    {
        question: 'Quais os pressupostos do Materialismo e do Ateísmo?',
        option: ['Que o homem é seu próprio deus.', 'Que o homem não foi feito do pó da Terra.', 'A negação da existência de Deus e a negação da singularidade do homem.','O ceu não existe.'],
        answer: 'A negação da existência de Deus e a negação da singularidade do homem.'
    },
    {
        question: 'Onde encontramos a verdade sobre Deus de forma precisa e sem erros?',
        option: ['Só no NT.', 'Na Tradição contada pelos Judeus.', 'Na bíblia.','Na Torá.'],
        answer: 'Na Bíblia..'
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
