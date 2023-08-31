// todo timer.js - таймер

const SoundsTimerMP3 = document.getElementById("sounds-timer-mp3");
let isTimerRunning = false;
let intervalId;
let second;
// todo визуальный блок div
const Timer = document.createElement("div");
Timer.classList.add("timer");
Timer.textContent = 60;

let radius = 50;
let centerX = 50;
let centerY = 45;

let colorRiskDefault = "#8f1b1b";
let colorRiskActive = "#2ccf00";

function timerRisk(sec) {
    for (let i = 0; i < 60; i++) {
        console.log(sec);
        const Risk = document.createElement("span");
        Risk.classList.add("risk", `${i + 1}`);
        // Risk.style.backgroundColor = colorRiskDefault;
        Risk.style.backgroundColor =
            sec >= i + 1 ? colorRiskActive : colorRiskDefault;

        const angle = (90 - i * 6) * (Math.PI / 180); // Измененная формула
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        Risk.style.left = x + "px";
        Risk.style.top = y + "px";
        Risk.style.transform = `rotate(-${i * 6}deg)`;
        Timer.appendChild(Risk);
    }
}
timerRisk();

// todo звук таймера
function playSound() {
    SoundsTimerMP3.play();
    SoundsTimerMP3.currentTime = 0;
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
    timerRisk(second);
    if (second === 0) {
        clearInterval(intervalId);
        console.log("время вышло");
        isTimerRunning = false;
        stopSound();
        translationToOriginal();
        timerRisk(0);
    }
}
// todo перевот в исходное
function translationToOriginal() {
    setTimeout(() => {
        Timer.textContent = 60;
        Timer.style.backgroundColor = "#0000ff";
        timerRisk();
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
        timerRisk();
    }
}

Timer.addEventListener("click", function () {
    TimerStartEnd();
});

export default Timer;
