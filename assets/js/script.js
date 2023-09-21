
var timerDisplay = document.getElementById("timer");
var questionCount = 0;
var questionCountDisplay = document.getElementById("question-count")
var startButtonDiv = document.getElementById("button-div")
var startButton;
var globalCounter = 10;



var displayStartButton = function() {

    startButton = document.createElement('button')
    startButton.setAttribute("id", "start-button")
    startButton.textContent = "Start!"
    startButton.addEventListener("click", function(){
        startGame();
    })
    startButtonDiv.appendChild(startButton)
}




var setTimer = function() {
      
    var count = globalCounter;    
    var timer = setInterval(countDown, 1000);

    function countDown() {
        console.log(count);
        var secondsDisplay = (count % 60)
        if (secondsDisplay < 10)
        {
            secondsDisplay = "0" + secondsDisplay // sets a placeholder 0... 1:07 example
        }
        timerDisplay.textContent = "0" + (Math.floor(count / 60 )) + ":" + (secondsDisplay) + "s"; // displays minutes:seconds
        
        if (count <= 0)
        {
            gameEnds();
            console.log(count);
            clearInterval(timer)
            return;
        }
        count--;
    }
}   

var gameEnds = function () {
    displayStartButton();
}

var displayNextQuestion = function() {
    questionCountDisplay.setAttribute("class", "displayBorder")
    questionCount++;
    questionCountDisplay.textContent = "Question #" + questionCount + "!";
}

var startGame = function() {
    questionCount = 0;
    setTimer();
    displayNextQuestion();
    startButton.remove()
}



displayStartButton();





