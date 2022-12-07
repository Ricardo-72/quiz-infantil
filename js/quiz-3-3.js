//Questionario bank
var questionBank = [
    {
        question: 'A partir de que ano o movimento de contestação da moral cristã ganha mais visibilidade?',
        option: ['1960', '1690', '1906','1966'],
        answer: '1960'
    },
    {
        question: 'Qual é 0 sentido mais amplo da palavra grega porneia?',
        option: ['Significa tipo de relacionamentos entre pessoas do mesmo sexo', 'Significa qualquer tipo de ato sexual considerado pecaminoso, incluindo adultério, prostituição, impureza e fornicação.', 'Significa relacionamentos sexuais fora do casamento','Significa relacionamentos todo os tipos de relacionamentos sexuais'],
        answer: 'Significa qualquer tipo de ato sexual considerado pecaminoso, incluindo adultério, prostituição, impureza e fornicação.'
    },
    {
        question: 'Cite pelo menos uma base bíblica que reprova o adultério.',
        option: ['Quando Salomão se casou com a rainha de Etíope (1 Rs 10:13)', 'Quando o segundo filho de Judá casou com a viuva de seu irmão', 'Quando o rei Davi adulterou com Bate-seba, o profeta Natã, a mando de Deus, condenou de forma dura seu ato pecaminoso (2 Sm 11.1-5; 12.9,10).','Quando Sansão se casou com Dalila (Jz 16:4'],
        answer: 'Quando o rei Davi adulterou com Bate-seba, 0 profeta Natã, a mando de Deus, condenou de forma dura seu ato pecaminoso (2 Sm 11.1-5; 12.9,10).'
    },
    {
        question: 'Como o cristão compreende a homossexualidade?',
        option: ['compreende como sendo um ato biologicmente correto.', 'Compreende como um comportamento que Deus criou.', 'Copreendem como sendo algo natural.','Os cristãos conservadores, que têm na Bíblia sua única regra de fé, compreendem a homossexualidade como um comportamento adquirido e não como um determinismo biológico.'],
        answer: 'Os cristãos conservadores, que têm na Bíblia sua única regra de fé, compreendem a homossexualidade como um comportamento adquirido e não como um determinismo biológico.'
    },
    {
        question: 'Qual a maneira que o Criador deixou para guardar o casal contra as suas mais diferentes formas de impureza?',
        option: ['A maneira que o criador deixou para guardar o casal contra suas mais diferentes formas de impureza, como a fornicação e o adultério, foi o sexo praticado dentro da esfera do casamento.', 'Deixou a liberação do sexo fora do casamento', 'Casamento entre pessoas do mesmo sexo','A proibição do casamento de qualquer forma.'],
        answer: 'A maneira que o criador deixou para guardar o casal contra suas mais diferentes formas de impureza, como a fornicação e o adultério, foi o sexo praticado dentro da esfera do casamento.'
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
