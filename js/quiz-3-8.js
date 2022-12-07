//Questionario bank
var questionBank = [
    {
        question: 'O que o Antigo Testamento mostra?',
        option: ['O Antigo Testamento mostra a ação do Espírito Santo em diferentes momentos e sobre a vida de diferentes pessoas.', 'O AT mostra a Samuel que Davi era o escolhido por Deus para reinar no lugar de Saul.', 'O AT mostra que a força de Sansão estava nos seus cabelos cumpridos.','Nenhuma das aternativas.'],
        answer: 'O Antigo Testamento mostra a ação do Espírito Santo em diferentes momentos e sobre a vida de diferentes pessoas.'
    },
    {
        question: 'O que podemos observar no Pentecostes?',
        option: ['Que os 120 foram batizados com o Espírito Santo.', 'Que o Espírito Santo usava à Pedro e Paulo.', 'O Batismo com o Espírito Santo era só para os Judeus.','No Pentecostes observamos que o Espírito é derramado sobre toda a carne, sem distinção de sexo, raça ou idade. Isso mostra a universalização da promessa de Deus.'],
        answer: 'No Pentecostes observamos que o Espírito é derramado sobre toda a carne, sem distinção de sexo, raça ou idade. Isso mostra a universalização da promessa de Deus.'
    },
    {
        question: 'Quem introduziu na igreja o erro doutrinário de que os dons haviam cessado?',
        option: ['João Calvino (1470 - 1505 d.c.).', 'Agostinho de Hipona (354-430 d.C.) introduziu na igreja o erro doutrinário de que os dons haviam cessado.', 'Martinho Lutero (1566 - 1789).','Somente a "B" esta correta.'],
        answer: 'Somente a "B" esta correta.'
    },
    {
        question: 'Onde está a sutileza a respeito do falar em outras línguas?',
        option: ['A sutileza está em dizer que o falar em outras línguas é somente para os pastores.', 'A sutileza está em dizer que o falar em outras línguas é só para os evangelista.', 'A sutileza está em dizer que o falar em outras línguas, de fato, existe, contudo, não é para todos.','A " A e B estão erradas.'],
        answer: 'A " A e B estão erradas.'
    },
    {
        question: 'O que não podemos rejeitar?',
        option: ['Não podemos rejeitar as orientações do Espirito Santo.', 'Não podemos rejeitar a presença do Espirito Santo..', 'Não podemos rejeitar as verdadeiras manifestações do Espírito por temer as falsas.','Todas estão corretas.'],
        answer: 'Todas estão corretas.'
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
