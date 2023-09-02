// todo record_player.js      аудио проигрыватель

const TimerMP3_Audio = document.getElementById("sounds-timer-mp3__audio");
const TimerMP3_playBt = document.getElementById("sounds-timer-mp3__playBt");
const TimerMP3_pauseBt = document.getElementById("sounds-timer-mp3__pauseBt");

TimerMP3_playBt.addEventListener("click", function () {
    TimerMP3_Audio.play();
});
TimerMP3_pauseBt.addEventListener("click", function () {
    TimerMP3_Audio.currentTime = 0;
    TimerMP3_Audio.pause();
});

// ****************************************************************************

const mute = document.getElementById("mute");

// При загрузке страницы, проверьте значение в локальном хранилище
const isMuted = localStorage.getItem("mute") === "true";

// Установите состояние чекбокса на основе значения в локальном хранилище
mute.checked = isMuted;

// Добавьте обработчик события для сохранения состояния чекбокса в локальном хранилище при изменении
mute.addEventListener("change", function () {
    // Сохраните значение чекбокса (как строку "true" или "false") в локальном хранилище
    localStorage.setItem("mute", mute.checked);
});

// ***************************************************************************

TimerMP3_Audio.muted = isMuted === true ? true : false;
