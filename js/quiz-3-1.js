//Questionario bank
var questionBank = [
    {
        question: 'Como ocorre a perseguição à Igreja nos dias atuais?',
        option: ['Por meio de decretos e leis.', 'Por meio da normalização de comportamentos e práticas contrárias à fé cristã.', 'Por invasões de templos.','Pelo fato de igreja rejeitar doutrinas anti-bíblica.'],
        answer: 'Por meio da normalização de comportamentos e práticas contrárias à fé cristã.'
    },
    {
        question: 'Segundo a lição, o que significa a expressão “últimos tempos”?',
        option: ['“últimos tempos” diz respeito a volta de Jesus.', 'A expressão “últimos tempos” é uma referência ao período compreendido como sendo a era da Igreja.', '“últimos tempos” é um referência ao esfriamento dos crentes em todo o mundo.', '“últimos tempos” é o grande avivamento na igreja de Cristo."'],
        answer: 'A expressão “últimos tempos” é uma referência ao período compreendido como sendo a era da Igreja.'
    },
    {
        question: 'Em qual esfera se encontram os comportamentos “hipócrita” e “mentiroso”?',
        option: ['Na esfera eclesiástica.', 'Na esfera espiritual.', 'Na esfera carnal.', 'Na esfera moral.'],
        answer: 'Na esfera moral.'
    },
    {
        question: 'Qual expressão bíblica que caracteriza o ataque à Igreja na esfera social?',
        option: ['“Que proíbem 0 casamento” (1 Tm 4.3).', '“Que aprova do casamento entre pessoas do mesmo sexo.”', '“Que proíbem casamento de padres.”', '“Que proíbem O casamento muito cedo.”'],
        answer: '“Que proíbem 0 casamento” (1 Tm 4.3).'
    },
    {
        question: 'Segundo a lição, quais as duas importantes armas ou ferramentas capazes de neutralizar os ataques do Diabo?',
        option: ['O Jejum e Oração.', 'Vigilancia e Oração.', 'A Palavra de Deus e a Oração.', 'Dizimar e Ofertar.'],
        answer: 'A Palavra de Deus e a Oração.'
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scoreboard= document.getElementById('scoreboard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var option4= document.getElementById('option4');

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
