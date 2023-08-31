// todo timer.js - таймер

const SoundsTimerMP3 = new Audio("../sounds/timer.mp3");
let isTimerRunning = false;
let intervalId;
let second;

const Timer = document.createElement("div");
Timer.classList.add("timer");
Timer.textContent = 60;

// todo звук таймера
function playSound() {
    SoundsTimerMP3.play();
}
function stopSound() {
    SoundsTimerMP3.pause();
    SoundsTimerMP3.currentTime = 0;
}

// todo вывод таймера
function counting() {
    if (second - 1 < 10) {
        Timer.textContent = "0" + (second - 1);
        Timer.style.backgroundColor = "#ff0000";
    } else {
        Timer.textContent = (second - 1).toString();
    }
    second--;
    if (second === 0) {
        clearInterval(intervalId);
        console.log("время вышло");
        isTimerRunning = false;
        stopSound();
        translationToOriginal();
    }
}
// todo перевот в исходное
function translationToOriginal() {
    setTimeout(() => {
        Timer.textContent = 60;
        Timer.style.backgroundColor = "#0000ff";
    }, 5000);
}

// todo запуск остановка таймера
function TimerStartEnd() {
    second = 60;
    if (!isTimerRunning) {
        console.log("таймер запущен");
        isTimerRunning = true;
        intervalId = setInterval(counting, 1000);
        playSound();
    } else {
        clearInterval(intervalId);
        console.log("таймер остановлен");
        Timer.textContent = 60;
        isTimerRunning = false;
        stopSound();
    }
}

Timer.addEventListener("click", function () {
    TimerStartEnd();
});

export default Timer;
