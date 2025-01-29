let timer;
let hours = 0, minutes = 0, seconds = 0;
let running = false;

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
            document.getElementById('display').innerText = 
                (hours < 10 ? '0' + hours : hours) + ':' + 
                (minutes < 10 ? '0' + minutes : minutes) + ':' + 
                (seconds < 10 ? '0' + seconds : seconds);
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('display').innerText = "00:00:00";
}
