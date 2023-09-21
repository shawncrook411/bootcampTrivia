var startButton = document.getElementById("start-button");
var timerDisplay = document.getElementById("timer")

console.log(timer);


var setTimer = function() {  
      
    var count = 75;    
    var timer = setInterval(countDown, 1000);

    function countDown() {
        console.log(count);
        count--;
        var secondsDisplay = (count % 60)
        if (secondsDisplay < 10)
        {
            secondsDisplay = "0" + secondsDisplay // sets a placeholder 0... 1:07 example
        }
        timerDisplay.textContent = (Math.floor(count / 60 )) + ":" + (secondsDisplay); // displays minutes:seconds

        if (count <= 0)
        {
            console.log(count);
            clearInterval(timer)
            return;
        }
    }
}   


startButton.addEventListener("click", function() {
    setTimer();
})






