// TODO задачаи
// ! сделать меню для загрузки конкурсов
// ! меню где можно выбрать из имеющихся конкурсов и составить очередь игры
// ! создать таймер

// todo index.js

import Timer from "./modules/timer.js";

const blockTimer = document.createElement("div");
blockTimer.classList.add("block-timer");

blockTimer.appendChild(Timer);

document.body.appendChild(blockTimer);
