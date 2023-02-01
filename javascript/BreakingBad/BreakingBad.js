//vragen
var questionBank= [
    {
        question : "Wat is Marie's favoriete kleur?",
        option : ['Paars','Roze','Geel','Groen'],
        answer : 'Paars'
    },
    {
        question : 'Welke drugs heeft Jesse NIET gebruikt',
        option : ['Heroine','Meth', 'Weed','Ecstasy'],
        answer : 'Ecstasy'
    },
    {
        question : 'Wie werd vergiftigd met de ricin',
        option : ['Brock','Hector Salamanca','Ted Beneke','Lydia'],
        answer : 'Lydia'
    },
    {
        question : 'Wie ging oorspronkelijk dood in het einde van seizoen 1',
        option : ['Hank','Jesse','Marie','Walter'],
        answer : 'Jesse'
    },
    {
        question : 'Wat is Walt zijn tweede naam?',
        option : ['Hartwell','Hartley','Heartey','Harvey'],
        answer : 'Hartwell'
    },

    {
        question : 'Wat leidt Walt af van het opnemen van het nieuws over zijn kankerdiagnose?',
        option : ['De docter had een lui oog','De docter had mosterd op zijn jas.','Walt had stress over zijn geld.','De tweede telefoon van Walt ging af'],
        answer : 'De docter had mosterd op zijn jas.'
    },

    {
        question : 'In welke straat woont Walt en Skyler?',
        option : ['Calle Ocho','Negra Arroyo Lane','Brownfield','Al Street'],
        answer : 'Negra Arroyo Lane'
    },

    {
        question : 'Walt noemt het echter niet het meth-spel. Hij noemt het…',
        option : ['Pure chemistry','Making a living','The Chemistry business','The Empire business'],
        answer : 'The Empire business'
    },

    {
        question : 'Wat is de favoriete woord van Jesse?,',
        option : ['Bitch','Wire','Bad','Mister'],
        answer : 'Bitch'
    },

    {
        question : 'Gus doodt zijn junior handlanger, Victor, en vervangt hem door...,',
        option : ['Mike','Huell','Tyrus','Paco'],
        answer : 'Tyrus'
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i = 0;
var score = 0;

//laat de quiz zien
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'V.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Vraag"+' '+(i+1)+' '+'tot'+' '+questionBank.length;
}

//scoren calculaten
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'darkred';
    }
    setTimeout(nextQuestion,300);
}
//volgende vraag
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        const scores = document.getElementById("scores")
        scores.innerHTML = `
          ${localStorage.getItem('naam')}: ${score} / ${questionBank.length} goed <br />`
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block';

    }
}

next.addEventListener('click',nextQuestion);

function backToQuiz(){
    location.reload();
}

displayQuestion();