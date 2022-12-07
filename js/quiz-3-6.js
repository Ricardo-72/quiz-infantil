//Questionario bank
var questionBank = [
    {
        question: 'O que Jesus respondeu aos fariseus, quando consultado sobre o divórcio?',
        option: ['Quando consultado pelos fariseus sobre a questão do divórcio, Jesus respondeu: “Portanto, o que Deus ajuntou não separe o homem” (Mt 19.6b).', 'O divórcio sendo legal na lei dos homens, pode ser feito.', 'Que se não existe amor, pode se separar.','Que pode se casar quantas fezes quiser.'],
        answer: 'Quando consultado pelos fariseus sobre a questão do divórcio, Jesus respondeu: “Portanto, o que Deus ajuntou não separe o homem” (Mt 19.6b).'
    },
    {
        question: 'O que a família é no contexto social?',
        option: ['A família não base doutrinária.', 'No contexto social, a família é a primeira instituição a ser estabelecida (Gn 2.24). Ela é a célula mater da sociedade, ou seja, na base da sociedade está a família.', 'Não tem nenhuma importância no contexto social.','Só foi importante no passado, hoje, pode deixar de existir.'],
        answer: 'No contexto social, a família é a primeira instituição a ser estabelecida (Gn 2.24). Ela é a célula mater da sociedade, ou seja, na base da sociedade está a família.'
    },
    {
        question: 'Quais os fundamentos da família cristã',
        option: ['Heterossexualidade, Bigamia e indissolubilidade.', 'Monogamia, heterossexualidade e indissolubilidade são fundamentos da família cristã.', 'Monogamia, homosexualidade e durabilidade.','indissolubilidade e Heterossexualidade.'],
        answer: 'Monogamia, heterossexualidade e indissolubilidade são fundamentos da família cristã.'
    },
    {
        question: 'O que é uma pessoa não-binária?',
        option: ['É aquela que nasce mulher e se identifica como mulher.', 'É aquela que nasce mulher e se identifica como homem.', 'Uma pessoa “não-binária” é aquela que não se percebe como pertencendo a um único gênero.','É aquela que nasce homem e se identifica como mulher.'],
        answer: 'Uma pessoa “não-binária” é aquela que não se percebe como pertencendo a um único gênero.'
    },
    {
        question: 'Qual o papel dos pais',
        option: ['Colocar os filhos nas melhores escolas.', 'Dá educação religiosa aos filhos.', 'Transmitir os valores direta ou indiretamente através da dos programas apresentados pela mídia.','Os pais têm um papel preponderante na base da formação familiar. Isso significa dizer que os pais têm a missão de transmitir valores a seus filhos (Dt 6.6-9).'],
        answer: 'Os pais têm um papel preponderante na base da formação familiar. Isso significa dizer que os pais têm a missão de transmitir valores a seus filhos (Dt 6.6-9).'
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
