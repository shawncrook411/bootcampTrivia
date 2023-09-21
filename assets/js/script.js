
var timerDisplay = document.getElementById("timer");
var questionCount = 0;
var questionCountDisplay = document.getElementById("question-count")
var startButtonDiv = document.getElementById("button-div")
var startButton;
var globalCounter = 10;
var array = ["a.", "b.", "c.", "d.", "e."]
var questionBox = document.getElementById('questionbox-section')
var questionDisplay = document.getElementById('question')


var question = {
    text: '',
    answer: [],
    correct: '', 
}



question[1] = Object.create(question)
question[1].text = "Question2"
question[1].answer = []
question[1].answer[0] = "answer0"
question[1].answer[1] = "answer1"
question[1].answer[2] = "answer2"
question[1].answer[3] = "answer3"
question[1].correct = 1

question[2] = Object.create(question)
question[2].text = "Question2"
question[2].answer = []
question[2].answer[0] = "answer1"
question[2].answer[1] = "answer1"
question[2].answer[2] = "answer1"
question[2].answer[3] = "answer1"
question[2].correct = 1

question[3] = Object.create(question)
question[3].text = "Question3"
question[3].answer = []
question[3].answer[0] = "answer1"
question[3].answer[1] = "answer1"
question[3].answer[2] = "answer1"
question[3].answer[3] = "answer1"
question[3].correct = 1

question[4] = Object.create(question)
question[4].text = "Question4"
question[4].answer = []
question[4].answer[0] = "answer1"
question[4].answer[1] = "answer1"
question[4].answer[2] = "answer1"
question[4].answer[3] = "answer1"
question[4].correct = 1

question[5] = Object.create(question)
question[5].text = "Question5"
question[5].answer = []
question[5].answer[0] = "test0"
question[5].answer[1] = "test1"
question[5].answer[2] = "test2"
question[5].answer[3] = "test3"
question[5].correct = 1





var displayStartButton = function() {

    startButton = document.createElement('button')
    startButton.setAttribute("id", "start-button")
    startButton.textContent = "Start!"
    startButton.addEventListener("click", startGame)
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
            clearInterval(timer)
            return;
        }
        count--;
    }
}   

var displayNextQuestion = function() {
    
    if (questionCount === 0)
    {
        questionCountDisplay.setAttribute("class", "displayBorder")
    }

    buttonsDivs = questionBox.querySelectorAll('.answerDiv')    
    
    
    console.log(buttonsDivs)

    for(let i = 0; i < buttonsDivs.length; i++)
    {
        buttonsDivs[i].remove()
    }   

    questionCount++;
    questionCountDisplay.textContent = "Question #" + questionCount + "!";
    
    for (let i = 0; i < 4; i++)
    {
        answerDiv = document.createElement('div')
        
        answerDiv.setAttribute("class", "answerDiv")
        answer = document.createElement('button');
        answer.setAttribute("id", array[i])

        content = question[questionCount].answer[i]        
        answer.textContent = array[i] + " " + content
        answer.addEventListener('click', displayNextQuestion)

        answerDiv.appendChild(answer)
        questionBox.appendChild(answerDiv)
    }
}

var startGame = function() {
    questionCount = 0;
    setTimer();
    displayNextQuestion();
    startButton.remove()
}

var gameEnds = function () {
    displayStartButton();
}

displayStartButton();






