const outputHour = document.getElementById("stopHour");
const outputMinute = document.getElementById("stopMinute");
const outputSecond = document.getElementById("stopSecond");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("reset");

let inputHour = Number(outputHour.innerHTML);
let inputMinute = Number(outputMinute.innerHTML);
let inputSecond = Number(outputSecond.innerHTML);
let timerApp = null;

startBtn.addEventListener("click", startClock);
stopBtn.addEventListener("click", stopClock);
resetBtn.addEventListener("click", resetClock);

function formatTime(time) {
    return time < 10 ? "0" + time : time.toString();
}

function updateDisplay() {
    outputHour.innerHTML = formatTime(inputHour);
    outputMinute.innerHTML = formatTime(inputMinute);
    outputSecond.innerHTML = formatTime(inputSecond);
}

function startClock() {
    if (timerApp !== null) return; // Prevent multiple intervals
    timerApp = setInterval(() => {
        inputSecond++;
        if (inputSecond >= 60) {
            inputSecond = 0;
            inputMinute++;
        }
        if (inputMinute >= 60) {
            inputMinute = 0;
            inputHour++;
        }
        updateDisplay();
    }, 1000);

    startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
}

function stopClock() {
    clearInterval(timerApp);
    timerApp = null;
    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
}

function resetClock() {
    stopClock();
    inputHour = 0;
    inputMinute = 0;
    inputSecond = 0;
    updateDisplay();
}
