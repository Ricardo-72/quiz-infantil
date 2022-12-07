//Questionario bank
var questionBank = [
    {
        question: 'Os desigrejados são contra o quê?',
        option: ['São contra as doutrinas bíblicas.', 'São contra os pastores.', 'São contra o governo.','Os desigrejados são contra toda forma de organização e institucionalização da Igreja.'],
        answer: 'Os desigrejados são contra toda forma de organização e institucionalização da Igreja.'
    },
    {
        question: 'Em que os desigrejados acreditam?',
        option: ['Acreditam que os dízimos e ofertas de hoje é para socorrer as viúvas e os pobres, conforme a igreja primitiva.', 'Acreditam que a igreja de hoje não precisa de líderes.', 'Acreditam que agindo contra o institucionalismo estão vivendo de acordo com o modelo da Igreja Primitiva.','Acreditam que a igreja de hoje esta de acordo com a igreja de atos.'],
        answer: 'Acreditam que agindo contra o institucionalismo estão vivendo de acordo com o modelo da Igreja Primitiva.'
    },
    {
        question: 'O que devemos observar a respeito da natureza da Igreja?',
        option: ['Sobre a natureza da igreja neotestamentária, devemos observar primeiramente que ela é um organismo vivo (Ef 1.22,23).', 'Que ela é a coluna e firmeza da verdade (1 Tm 3:15).', 'Que ela é a Noiva do Cordeiro.','Todas estão corretas.'],
        answer: 'Todas estão corretas.'
    },
    {
        question: 'Segundo a lição, como era o sistema de governo da Igreja Primitiva?',
        option: ['A Igreja Primitiva tinha um sistema de governo formado por apóstolos, profetas, evangelistas, presbíteros, diáconos, pastores e mestres (Ef 4.11; At 6.1-6; At 14.23).', 'A Igreja Primitiva tinha um sistema de governo formado por Sumo-sacerdote, Pastores, evangelistas, Prebíteros e diáconos (Ef 4.11; At 6.1-6; At 14.23).', 'A Igreja Primitiva tinha um sistema de governo formado por Sumo-sacerdote, Pastores, evangelistas, Prebíteros, diáconos e Levitas (Ef 4.11; At 6.1-6; At 14.23).','A Igreja Primitiva tinha um sistema de governo formado por Apostolos, Pastores, evangelistas, Prebíteros, diáconos e Levitas (Ef 4.11; At 6.1-6; At 14.23).'],
        answer: 'A Igreja Primitiva tinha um sistema de governo formado por apóstolos, profetas, evangelistas, presbíteros, diáconos, pastores e mestres (Ef 4.11; At 6.1-6; At 14.23).'
    },
    {
        question: 'Qual é a razão de a Igreja existir?',
        option: ['Para cantar os louvores dentro da igreja.', 'Deus criou a Igreja com o propósito de ser uma família, cuja missão é proclamar a sua abundante graça.', 'Para fazer as obras sociais.','Para orar e Louvar.'],
        answer: 'Deus criou a Igreja com o propósito de ser uma família, cuja missão é proclamar a sua abundante graça.'
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
