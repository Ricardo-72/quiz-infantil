//Questionario bank
var questionBank = [
    {
        question: 'Qual é a alegação mais comum dos que são contra a prática do dízimo?',
        option: ['A alegação mais comum, dentre muitas outras que existem, é que Jesus ordenou a prática.', 'A alegação mais comum, dentre muitas outras que existem, é que a prática do dízimo era um preceito mosaico.', 'A alegação mais comum, dentre muitas outras que existem, é que a igreja não precisa de dinheiro.','A alegação mais comum, dentre muitas outras que existem, é Ananias e Safira morreram por dizimar.'],
        answer: 'A alegação mais comum, dentre muitas outras que existem, é que a prática do dízimo era um preceito mosaico.'
    },
    {
        question: 'A que princípio o apóstolo Paulo recorreu para cuidar do sustento dos obreiros?',
        option: ['Ao princípio da obra social do governo de Roma.', 'Ao princípio da obra social do templo.', 'Ao princípio do dízimo levítico.','Ao princípio do trablho escravo.'],
        answer: 'Ao princípio do dízimo levítico.'
    },
    {
        question: 'Qual é o princípio básico da doutrina da mordomia bíblica?',
        option: ['O primeiro princípio básico da doutrina da mordomia bíblica está no fato de que o homem tem que trablhar para se sustentar.', 'O primeiro princípio básico da doutrina da mordomia bíblica está no fato de que Deus vi enviar pão do céu para sustentar os seus servos.', 'O primeiro princípio básico da doutrina da mordomia bíblica está no fato de a igreja tem que sustentar os irmãos desempregados.','O primeiro princípio básico da doutrina da mordomia bíblica está no fato de que Deus é o criador e o provedor de tudo (S124.1).'],
        answer: 'O primeiro princípio básico da doutrina da mordomia bíblica está no fato de que Deus é o criador e o provedor de tudo (S124.1).'
    },
    {
        question: 'O que é ser dizimista e ofertante?',
        option: ['Ser dizimista e ofertante nada mais é do que reconhecer o Senhor como a fonte provedora de tudo.', 'É acerteza de que nunca vai passar por diiculdades financeiras.', 'É a certeza de que Deus vai dá em dobro.','É a certeza de que Deus vai me dá um carro novo e uma casa.'],
        answer: 'Ser dizimista e ofertante nada mais é do que reconhecer o Senhor como a fonte provedora de tudo.'
    },
    {
        question: 'Qual é o pecado gravíssimo mencionado na lição?',
        option: ['O pecado da falta de Jejum.', 'O pecado da avareza.', 'O Pecado da falta dinheiro.','O Pecado da falta trabalho.'],
        answer: 'O pecado da avareza.'
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
