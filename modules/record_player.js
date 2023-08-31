// todo record_player.js      аудио проигрыватель

const SoundsTimerMP3 = document.getElementById("sounds-timer-mp3");

playButton.addEventListener("click", () => {
    SoundsTimerMP3.play();
});

pauseButton.addEventListener("click", () => {
    SoundsTimerMP3.pause();
});
