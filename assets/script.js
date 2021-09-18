
const startButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
const questionContainer2El = document.getElementById('question-container2')
const questionContainer3El = document.getElementById('question-container3')
const questionContainer4El = document.getElementById('question-container4')
const scoreContainerEl = document.getElementById('score-container')
const highScoreContainerEl = document.getElementById('highscore-container')


let startingMinutes = 1;
let time = startingMinutes * 60;

let numCorrect = 0;

let correctAnswer1 = document.getElementById('ans1c')

//start countdown and jump to que 1 by clicking start button
var startGame = function(){
    console.log(startGame);
    setInterval(startCountdown, 1000);

    function startCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById("display").innerHTML = `Time: ${seconds}`;
    time--;
    }

    document.getElementById('challange').style.display = "none";
    questionContainerEl.style.display = "block";

    
};


function selectAnswer(){
    questionContainerEl.style.display = "none"; 
    questionContainer2El.style.display = "block";
    
    var correct1 = document.getElementById("ans1c")
    var wrong1 = document.getElementById('ans1a', 'ans1b', 'ans1d')


        if (correct1.clicked === true){
            numCorrect +=5;
        }
        else{
            time -= 5;
        }
        
}



function selectAnswer2(){
    questionContainer2El.style.display = "none"; 
    questionContainer3El.style.display = "block";

    
}

function selectAnswer3(){
    questionContainer3El.style.display = "none"; 
    questionContainer4El.style.display = "block";


}

function selectAnswer4(){
    questionContainer4El.style.display = "none"; 
    scoreContainerEl.style.display= "block";
}

function score(){
    scoreContainerEl.style.display = "none";
    highScoreContainerEl.style.display = "block";

}

function highScore(){

}





startButton.addEventListener("click", startGame)
questionContainerEl.addEventListener("click",selectAnswer)
questionContainer2El.addEventListener("click",selectAnswer2)
questionContainer3El.addEventListener("click",selectAnswer3)
questionContainer4El.addEventListener("click",selectAnswer4)
scoreContainerEl .addEventListener("click", score)
highScoreContainerEl.addEventListener("click", highScore)
















