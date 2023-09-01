// TODO задачаи
// ! сделать меню для загрузки конкурсов
// ! меню где можно выбрать из имеющихся конкурсов и составить очередь игры
// ! создать таймер

// todo index.js

import Timer from "./modules/timer.js";
import "./modules/record_player.js";
import "./modules/start.js";

const blockTimer = document.querySelector(".block-timer");

blockTimer.appendChild(Timer);

document.body.appendChild(blockTimer);
