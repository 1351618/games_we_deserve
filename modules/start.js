// todo start.js
import { TimerStartEnd, timerRisk } from "./timer.js";
const StartButto = document.querySelector(".start__button");
const BlockTimer = document.querySelector(".block-timer");

const Timer = document.querySelector(".timer");

StartButto.addEventListener("click", () => {
    console.log("start");
    BlockTimer.classList.add("play-start");
    TimerStartEnd();
    // Timer.style.fontSize = "200px";
    // Timer.style.width = "300px";
    // Timer.style.height = "300px";
    timerRisk();
});
