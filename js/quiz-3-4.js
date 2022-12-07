//Questionario bank
var questionBank = [
    {
        question: 'Qual era o plano de Deus na Antiga Aliança em relação ao casamento?',
        option: ['O pano era que o homem poderia ter até 4 mulheres', 'O plano era que todo israelita tinha quer ser circuncidado', 'O plano era que o homem deveria ter até duas mulheres, por isso Abraão (Gn 25:1), Jacó teve duas esposas.(Gn 29:30) ','Na Antiga Aliança, o plano de Deus para a raça humana é que o casamento fosse monogâmico e vitalício (Gn 1.27,28; 2.22-25).'],
        answer: 'Na Antiga Aliança, o plano de Deus para a raça humana é que o casamento fosse monogâmico e vitalício (Gn 1.27,28; 2.22-25).'
    },
    {
        question: 'Qual é o plano original de Deus para o casamento em Mateus 19?',
        option: ['O plano era ambos fossem fieis um para com o outro', 'O plano era que se um dos dois tivesse lepra, deveria se separar para não haver contaminação.', 'No texto de Mateus capítulo 19, Jesus mostra que o plano original de Deus é que o casamento dure para toda a vida (Mt 19.4-6).','O plano era o casamento é eterno enquanto dure.'],
        answer: 'No texto de Mateus capítulo 19, Jesus mostra que o plano original de Deus é que o casamento dure para toda a vida (Mt 19.4-6).'
    },
    {
        question: 'Quais são os dois aspectos do divórcio tratados na lição?',
        option: ['Legal e Espiritual', 'Legal e moral.', 'Moral e Religioso','Carnal e Espiitual'],
        answer: 'Legal e moral.'
    },
    {
        question: 'Quais são os dois aspectos do divórcio que envolvem a prática pastoral?',
        option: ['A pessoa divorciada e o divorciado como cristão.', 'A família do divorciado', 'Somente o pai e a mãe da divorciada','somente os pais dos casal'],
        answer: 'A pessoa divorciada e o divorciado como cristão.'
    },
    {
        question: 'O que as Escrituras contêm a respeito dos relacionamentos?',
        option: ['As Escrituras contêm princípios e preceitos que moldam os relacionamentos humanos.', 'Contem as regras que definem o casamento', 'As condições do dote da noiva','A organização da festa do casamento'],
        answer: 'As Escrituras contêm princípios e preceitos que moldam os relacionamentos humanos.'
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
