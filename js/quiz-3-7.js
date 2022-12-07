//Questionario bank
var questionBank = [
    {
        question: 'Quais expressões referem-se ao fenômeno cultural pós-moderno?',
        option: ['Era das lives; dos cultos online.', 'a Era das igrejas com jogos de luzes e paredes escuras.', 'A era da falta oração, esfriamento espiritual.','"A era do vazio”; “pós-verdade’, “o fim das certezas”, “cultura líquida” ou ainda “desconstrução”.'],
        answer: '"A era do vazio”; “pós-verdade’, “o fim das certezas”, “cultura líquida” ou ainda “desconstrução”.'
    },
    {
        question: 'O que caracteriza o relativismo?',
        option: ['Não há valores perenes ou absolutos. Tudo é relativo.', 'Os valores foram deixados de lado.', 'Os frutos do Espírito esta ultrapassados.','A palavra de Deus não é suficiente e tudo é relativo, .'],
        answer: 'Não há valores perenes ou absolutos. Tudo é relativo.'
    },
    {
        question: 'O que não há espaço na narrativa do politicamente correto?',
        option: ['Não há espaço para a verdade’.', 'Dentro dessa narrativa do politicamente correto não há espaço para a Bíblia.', 'Não há espaço para corrigir o erro.','Não há espaço para falar o agrada.'],
        answer: 'Dentro dessa narrativa do politicamente correto não há espaço para a Bíblia.'
    },
    {
        question: 'O que a Bíblia é para o cristão?',
        option: ['Lâmpada para meus pés, e luz para o meu caminho.', 'Um livro antigo, portanto ultrapassado.', 'Para o cristão, a Bíblia é um texto antigo com uma mensagem atual.','A "A e C Estão corretas".'],
        answer: 'A "A e C Estão corretas".'
    },
    {
        question: 'O que distingue a Bíblia de outras obras literárias?',
        option: ['As outras obras literárias tem o mesmo valor que a Bíblia.', 'As outras obras literárias é importante para ter conhecimento.', 'As outras obras literárias não serve para nada.','A inspiração divina. Enquanto as outras obras são de inspiração humana, a Bíblia é de inspiração divina.'],
        answer: 'A inspiração divina. Enquanto as outras obras são de inspiração humana, a Bíblia é de inspiração divina.'
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
