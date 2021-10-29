
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

let score = 0;

let highScoreBtnEl = document.getElementById('high-score');
 highScoreBtnEl.addEventListener('click', function(){
    var name = JSON.parse( localStorage.getItem('Name'));
    var score = JSON.parse( localStorage.getItem('Score')); 
    window.alert( name +':'  + score);

 })   

//start countdown and jump to que 1 by clicking start button
var startGame = function(){
    setInterval(startCountdown, 1000);

    function startCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById("display").innerHTML = `Time: ${seconds}`;
    time--;
    if (time < 0){
        window.clearInterval(update); 
    }
    }

    document.getElementById('challange').style.display = "none";
    questionContainerEl.style.display = "block";
    generatePage1();
};

var generatePage1 = function(){
    let questionContainerEl = document.getElementById('question-container')
    var que1El = document.createElement('div')
    
    var queEl = document.createElement('h2');
    queEl.textContent = "QUESTION 1: Commonly used data types Do not Include:";
    queEl.addClass = "queAns1";
    que1El.appendChild(queEl);
    
    var opt1El = document.createElement('button');
    opt1El.textContent = "1. String";
    opt1El.addClass = "ans1";
    que1El.appendChild( opt1El);

    var opt2El = document.createElement('button')
    opt2El.textContent = "2. Boolean";
    opt2El.addClass = "ans2";
    que1El.appendChild(opt2El);

    var opt3El = document.createElement('button');
    opt3El.textContent = "3. Alert";
    opt3El.addClass = "ans3";
    que1El.appendChild(opt3El);
   
    var opt4El = document.createElement('button');
    opt4El.textContent = "4. Numbers";
    opt4El.addClass = "ans4";
    que1El.appendChild(opt4El);

    questionContainerEl.appendChild(que1El);

   
    opt3El.addEventListener('click', function(){
        localStorage.setItem('Score', JSON.stringify(score += 5));
        questionContainerEl.style.display = "none"; 
        questionContainer2El.style.display = "block";
        generatePage2();
    })
    opt1El.addEventListener("click",function(){
        questionContainerEl.style.display = "none";
        questionContainer2El.style.display = "block";
        generatePage2();
        time -= 5;
    })
    opt2El.addEventListener("click",function(){
        questionContainerEl.style.display = "none";
        questionContainer2El.style.display = "block";
        generatePage2();
        time -= 5;
    })
    opt4El.addEventListener("click",function(){
        questionContainerEl.style.display = "none";
        questionContainer2El.style.display = "block";
        generatePage2();
        time -= 5;
    })
};

var generatePage2 = function(){
    let questionContainer2El = document.getElementById('question-container2');
    var que2El = document.createElement('div')
    
    var queEl = document.createElement('h2');
    queEl.textContent = "QUESTION 2: Arrays in JavaScript can be used to store______.";
    queEl.addClass = "queAns2";
    que2El.appendChild(queEl);
    
    var opt1El = document.createElement('button');
    opt1El.textContent = "1. Number and Strings";
    opt1El.addClass = "ans1";
    que2El.appendChild( opt1El);

    var opt2El = document.createElement('button')
    opt2El.textContent = "2. Other Arrays";
    opt2El.addClass = "ans2";
    que2El.appendChild(opt2El);

    var opt3El = document.createElement('button');
    opt3El.textContent = "3. Booleans";
    opt3El.addClass = "ans3";
    que2El.appendChild(opt3El);
   
    var opt4El = document.createElement('button');
    opt4El.textContent = "4. All of the above";
    opt4El.addClass = "ans4";
    que2El.appendChild(opt4El);

    questionContainer2El.appendChild(que2El);

    opt4El.addEventListener('click', function(){
        localStorage.setItem('Score', JSON.stringify(score += 5));
        questionContainer2El.style.display = "none"; 
        questionContainer3El.style.display = "block";
        generatePage3();
    })
    opt1El.addEventListener("click",function(){
        questionContainer2El.style.display = "none";
        questionContainer3El.style.display = "block";
        generatePage3();
        time -= 5;
    })
    opt2El.addEventListener("click",function(){
        questionContainer2El.style.display = "none";
        questionContainer3El.style.display = "block";
        generatePage3();
        time -= 5;
    })
    opt3El.addEventListener("click",function(){
        questionContainer2El.style.display = "none";
        questionContainer3El.style.display = "block";
        generatePage3();
        time -= 5;
    })
};

var generatePage3 = function(){
    let questionContainer3El = document.getElementById('question-container3');
    var que3El = document.createElement('div')
    
    var queEl = document.createElement('h2');
    queEl.textContent = "QUESTION 3: String values must be enclosed within _____ when</br>being assigned to variables.";
    queEl.addClass = "queAns3";
    que3El.appendChild(queEl);
    
    var opt1El = document.createElement('button');
    opt1El.textContent = "1. Commas";
    opt1El.addClass = "ans1";
    que3El.appendChild( opt1El);

    var opt2El = document.createElement('button')
    opt2El.textContent = "2. Curly Brackets";
    opt2El.addClass = "ans2";
    que3El.appendChild(opt2El);

    var opt3El = document.createElement('button');
    opt3El.textContent = "3. Quotes";
    opt3El.addClass = "ans3";
    que3El.appendChild(opt3El);
   
    var opt4El = document.createElement('button');
    opt4El.textContent = "4. Parenthesis";
    opt4El.addClass = "ans4";
    que3El.appendChild(opt4El);

    questionContainer3El.appendChild(que3El);

    opt3El.addEventListener('click', function(){
        localStorage.setItem('Score', JSON.stringify(score += 5));
        questionContainer3El.style.display = "none"; 
        questionContainer4El.style.display = "block";
        generatePage4();
    })
    opt1El.addEventListener("click",function(){
        questionContainer3El.style.display = "none";
        questionContainer4El.style.display = "block";
        generatePage4();
        time -= 5;
    })
    opt2El.addEventListener("click",function(){
        questionContainer3El.style.display = "none";
        questionContainer4El.style.display = "block";
        generatePage4();
        time -= 5;
    })
    opt4El.addEventListener("click",function(){
        questionContainer3El.style.display = "none";
        questionContainer4El.style.display = "block";
        generatePage4();
        time -= 5;
    })
};

var generatePage4 = function(){
    let questionContainer4El = document.getElementById('question-container4');
    var que4El = document.createElement('div')
    
    var queEl = document.createElement('h2');
    queEl.textContent = "QUESTION 4: A very useful tool used during development and </br>debugging for printing content to the</br>debugger is:";
    queEl.addClass = "queAns4";
    que4El.appendChild(queEl);
    
    var opt1El = document.createElement('button');
    opt1El.textContent = "1. JavaScript";
    opt1El.addClass = "ans1";
    que4El.appendChild( opt1El);

    var opt2El = document.createElement('button')
    opt2El.textContent = "2. Terminal/Bash";
    opt2El.addClass = "ans2";
    que4El.appendChild(opt2El);

    var opt3El = document.createElement('button');
    opt3El.textContent = "3. For Loops";
    opt3El.addClass = "ans3";
    que4El.appendChild(opt3El);
   
    var opt4El = document.createElement('button');
    opt4El.textContent = "4. Console.log";
    opt4El.addClass = "ans4";
    que4El.appendChild(opt4El);

    questionContainer4El.appendChild(que4El);

    opt4El.addEventListener('click', function(){
        localStorage.setItem('Score', JSON.stringify(score += 5));
        questionContainer4El.style.display = "none"; 
        scoreContainerEl.style.display = "block";
        selectAnswer4();
    })
    opt1El.addEventListener("click",function(){
        selectAnswer4();
        time -= 5;
    })
    opt2El.addEventListener("click",function(){
        selectAnswer4();
        time -= 5;
    })
    opt3El.addEventListener("click",function(){
        selectAnswer4();
        time -= 5;
    })

    
};

function selectAnswer4(){
    questionContainer4El.style.display = "none"; 
    scoreContainerEl.style.display= "block";
    const submitEl = document.getElementById('submit-btn');

    var getScore = JSON.parse( localStorage.getItem('Score'));
    
    var spanEl = document.getElementById('span');
    var currentScoreEl = document.createElement('span');
    currentScoreEl.textContent = getScore;
    spanEl.appendChild(currentScoreEl);
    
    submitEl.addEventListener('click', function(event){
        event.preventDefault();
        input = document.querySelector("input[id='name']").value;
        localStorage.setItem('Name', JSON.stringify(input));
        yourScore();
    })
}

function yourScore(){
    scoreContainerEl.style.display = "none";
    highScoreContainerEl.style.display = "block";
    highScore();
    
}

function highScore(){
    var dataEl = document.getElementById('data');

    var getStoredData = JSON.parse( localStorage.getItem('Name'));
    var getStoredData1 = JSON.parse( localStorage.getItem('Score'));
    console.log(getStoredData);

    var dataNameEl = document.createElement('span');
    dataNameEl.textContent = getStoredData;
    dataEl.appendChild(dataNameEl);

    var dataScoreEl = document.createElement('span');
    dataScoreEl.textContent = getStoredData1;
    dataEl.appendChild(dataScoreEl);
    
    let clearEl = document.getElementById('clear-btn');
    clearEl.addEventListener('click', function(){
        localStorage.removeItem('Score');
        localStorage.removeItem('Name')
    })

    let backEl = document.getElementById('goback-btn');
    backEl.addEventListener('click', function(){
        window.location.replace('https://purvimec.github.io/homework-week4/');
    })

    
}








startButton.addEventListener("click", startGame)
//scoreContainerEl .addEventListener("click", yourScore)
//highScoreContainerEl.addEventListener("click", highScore)
















