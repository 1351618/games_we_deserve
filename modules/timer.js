// todo timer.js - таймер

import { styleEffect } from "./style.js";

const selectElement = document.querySelector(".selection__60-30-15 select");
const bodyTimerWind = document.querySelector(".body__timer-wind");
const TimerMP3_Audio = document.getElementById("sounds-timer-mp3__audio");
const btStopTim = document.querySelector(".timer-wind__stop-tim");

// Проверяем, есть ли сохраненное значение в localStorage
const savedValue = localStorage.getItem("selectedValue");
let timerInterval; // Переменная для хранения интервала
const Timer = document.querySelector(".timer-wind__timer");
let WindTimerHeight = 100;
let isTransitionHandled = false;

// Если есть сохраненное значение, устанавливаем его в элемент <select>
if (savedValue) {
    selectElement.value = savedValue;
}
let countdownTime = savedValue === null ? "60" : savedValue;
console.log(savedValue);
Timer.textContent = countdownTime;
Timer.style.fontSize = "60px";
riscRendering();

// todo получаем от пользователя время таймера
selectElement.addEventListener("change", function () {
    const selectedValue = selectElement.value;
    localStorage.setItem("selectedValue", selectedValue);
    console.log("Выбранное значение:", selectedValue);
    riscRendering();
});

Timer.addEventListener("transitionend", function (event) {
    if (isTransitionHandled) {
        return; // Выходим, если обработчик уже вызван
    }
    if (event.propertyName === "width" || event.propertyName === "height") {
        // Здесь блок завершил изменение размера
        WindTimerHeight = Timer.offsetHeight;
        Timer.style.fontSize = WindTimerHeight > 150 ? "200px" : "60px";
        riscRendering();
        isTransitionHandled = true; // Устанавливаем флаг в true
        setTimeout(() => {
            // Отложенный сброс флага через 100 миллисекунд
            isTransitionHandled = false;
        }, 100);
    }
});

// todo отрисовка рисок
function riscRendering() {
    // Очищаем существующие дочерние элементы <span>
    const childSpans = Timer.querySelectorAll("span");
    childSpans.forEach((span) => {
        Timer.removeChild(span);
    });

    const numRisks = 60; // Количество индикаторов риска
    const centerX = WindTimerHeight === 100 ? 45 : 125; // Координата X центра
    const centerY = WindTimerHeight === 100 ? 50 : 145; // Координата Y центра
    const radius = WindTimerHeight === 100 ? 55 : 165; // Учитываем отступ

    for (let i = 1; i <= numRisks; i++) {
        const angle = (360 / numRisks) * i; // Вычисляем угол для каждого индикатора
        const radians = (angle * Math.PI) / 180; // Переводим в радианы

        const timeRisc = document.createElement("span");
        timeRisc.classList.add("risk", `${i}`);

        // Вычисляем позиции с использованием тригонометрии относительно центра
        const x = centerX + radius * Math.cos(radians);
        const y = centerY + radius * Math.sin(radians);

        // Устанавливаем позиции
        timeRisc.style.top = `${y}px`;
        timeRisc.style.left = `${x}px`;

        // Применяем вращение к индикатору риска
        timeRisc.style.transform = `rotate(${angle}deg)`;

        timeRisc.style.backgroundColor =
            i <= countdownTime ? "#00dd09" : "#ff0000";

        // ! выставляем цвет риски

        // Timer.style.backgroundColor = countdownTime < 10 ? "#ff0000" : "";
        Timer.classList.toggle("little-time", countdownTime < 10);

        Timer.appendChild(timeRisc);
    }
}

// остановка и сброс таймера
export function TimerStop() {
    // Остановить интервал, когда countdownTime достигнет 0
    btStopTim.classList.remove("active");
    clearInterval(timerInterval);
    timerInterval = undefined;
    Timer.textContent = "✖";
    bodyTimerWind.classList.remove("game-start");
    riscRendering();
    styleEffect(1);
    TimerMP3_Audio.currentTime = 0;
    TimerMP3_Audio.pause();
    setTimeout(() => {
        countdownTime = savedValue;
        Timer.textContent = countdownTime;
        riscRendering();
    }, 2000);
}

// запуск таймера
export function TimerStart() {
    // btStopTim.classList.add("active");
    // Если таймер уже выполняется, сбрасываем его
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = undefined;
        return;
    }
    TimerMP3_Audio.play();
    // Создание интервала и сохранение идентификатора
    timerInterval = setInterval(() => {
        if (countdownTime != 0) {
            Timer.textContent = countdownTime - 1;
        } else {
            TimerStop();
        }
        countdownTime--;
        riscRendering();
    }, 1000);
}

Timer.addEventListener("click", function () {
    TimerStart();
});
