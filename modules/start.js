// todo start.js

import { styleEffect } from "./style.js";
import { TimerStart, TimerStop } from "./timer.js";

const btStart = document.querySelector(".bt-start");
const bodyTimerWind = document.querySelector(".body__timer-wind");

btStart.addEventListener("click", () => {
    bodyTimerWind.classList.add("game-start");
    TimerStart();
    setTimeout(() => {
        styleEffect(2); // Вызываем с задержкой
    }, 0);
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        bodyTimerWind.classList.add("game-start");
        styleEffect(2);
        TimerStart();
    }
    if (event.key === "Escape") {
        // bodyTimerWind.classList.remove("game-start");
        TimerStop();
    }
});
