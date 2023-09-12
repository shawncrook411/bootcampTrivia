var setTimer = function() {    

    var count = 30;    
    var timer = setInterval(countDown, 1000);

    function countDown() {
        count--;
        console.log(count);
        if (count <= 0)
        {
            clearInterval(timer)
            return;
        }
    }

    
}   