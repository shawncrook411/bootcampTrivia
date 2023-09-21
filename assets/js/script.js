
var timerDisplay = document.getElementById("timer");
var questionCount = 0;
var questionCountDisplay = document.getElementById("question-count")
var startButtonDiv = document.getElementById("button-div")
var startButton;
var resetButton = document.getElementById("reset");
var globalCounter = 15;
var array = ["a.", "b.", "c.", "d.", "e."]
var questionBox = document.getElementById('questionbox-section')
var questionDisplay = document.getElementById('question')
var gameResult = 0;
var timer;

var wins = localStorage.getItem("wins")
var lose = localStorage.getItem("lose")
var highScore1 = localStorage.getItem("HS1")
var highScore2 = localStorage.getItem("HS2")
var highScore3 = localStorage.getItem("HS3") 

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
question[1].correct = 0

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
question[3].correct = 2

question[4] = Object.create(question)
question[4].text = "Question4"
question[4].answer = []
question[4].answer[0] = "answer1"
question[4].answer[1] = "answer1"
question[4].answer[2] = "answer1"
question[4].answer[3] = "answer1"
question[4].correct = 3

question[5] = Object.create(question)
question[5].text = "Question5"
question[5].answer = []
question[5].answer[0] = "test0"
question[5].answer[1] = "test1"
question[5].answer[2] = "test2"
question[5].answer[3] = "test3"
question[5].correct = 0






var displayStartButton = function() {

    
    startButton = document.createElement('button')
    startButton.setAttribute("id", "start-button")
    startButton.textContent = "Start!"
    startButton.addEventListener("click", startGame)
    startButtonDiv.appendChild(startButton)
}

var setTimer = function() {

    count = globalCounter;    

  


    timer = setInterval(countDown, 1000);

    function countDown() {
        console.log(count);
        var secondsDisplay = (count % 60)
        if (secondsDisplay < 10)
        {
            secondsDisplay = "0" + secondsDisplay // sets a placeholder 0... 1:07 example
        }
        timerDisplay.textContent = "0" + (Math.floor(count / 60 )) + ":" + (secondsDisplay) + "s"; // displays minutes:seconds
        
        if (count <= 0 && gameResult === 0)
        {    
            gameEnds();
            return;
        }
        count--;
    }
}   

var checkQuestion = function (event) {

    target = event.target;
    target = target.getAttribute("id");

    for(let i = 0; i < 4; i++)
    {
        if(target === array[i])
        {
            if(i === question[questionCount].correct)
            {
                console.log("correct")
            }
            else
            {
                console.log("incorrect")
                count = count - 15;

                if(count <= 0)
                {
                    gameResult = 0;
                    gameEnds();
                    return;
                }
            }
        }
    }
    displayNextQuestion();
}

var displayNextQuestion = function() {    
    
    buttonsDivs = questionBox.querySelectorAll('.answerDiv') 
    for(let i = 0; i < buttonsDivs.length; i++)
    {
        buttonsDivs[i].remove()
    }   
    
    if (questionCount >= 5)
    {
        gameResult = 1;
        gameEnds();
        return;
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
        answer.addEventListener('click', checkQuestion)

        answerDiv.appendChild(answer)
        questionBox.appendChild(answerDiv)
    }   
}

var startGame = function() {    
    questionCountDisplay.setAttribute("class", "displayBorder")
    gameResult = 0;
    questionCount = 0;
    setTimer();
    displayNextQuestion();
    startButton.remove()
}

var gameEnds = function () {
    
    questionCountDisplay.removeAttribute("class")
    if (gameResult === 1)
    {
        questionCountDisplay.textContent = "You've Won!"
        wins++;

        if (count > highScore1)
        {
            highScore3 = highScore2
            highScore2 = highScore1
            highScore1 = count
        }
        else if (count > highScore2)
        {
            highScore3 = highScore2
            highScore2 = count
        }
        else if (count > highScore3)
        {
            highScore3 = count
        }
        localStorage.setItem("HS1", highScore1)    
        localStorage.setItem("HS2", highScore2)
        localStorage.setItem("HS3", highScore3)    
    }
    else{
        questionCountDisplay.textContent = "You've Lost!"
        buttonsDivs = questionBox.querySelectorAll('.answerDiv') 
        for(let i = 0; i < buttonsDivs.length; i++)
        {
            buttonsDivs[i].remove()
            
        }
        lose++;   
    }
    count = 0;
    clearInterval(timer)
    timerDisplay.textContent = "00:00s"

    localStorage.setItem("wins", wins)
    localStorage.setItem("lose", lose)

    updateScoreBoard()
    displayStartButton();
}

var updateScoreBoard = function (){
    HS1 = document.getElementById("HS1")
    HS2 = document.getElementById("HS2")    
    HS3 = document.getElementById("HS3")
    WIN = document.getElementById("wins")
    LOSE = document.getElementById("lose")

    if (highScore1 > 0)
    {HS1.textContent = highScore1 + " seconds remaining"}
    else
    {HS1.textContent = " "}

    if (highScore2 > 0)
    {HS2.textContent = highScore2 + " seconds remaining"}
    else
    {HS2.textContent = " "}

    if (highScore3 > 0)
    {HS3.textContent = highScore3 + " seconds remaining"}
    else
    {HS3.textContent = " "}

    WIN.textContent = "Total Wins!: " + wins
    LOSE.textContent = "Total Losses!: " + lose
    
}

var reset = function(){
    console.log("Reset High Score")

    wins = 0;
    lose = 0;
    highScore1 = 0;
    highScore2 = 0; 
    highScore3 = 0;

    localStorage.setItem("wins", 0)
    localStorage.setItem("lose", 0)
    localStorage.setItem("HS1", 0)    
    localStorage.setItem("HS2", 0)
    localStorage.setItem("HS3", 0)

    updateScoreBoard()
}
resetButton.addEventListener('click', reset)


updateScoreBoard();
displayStartButton();






