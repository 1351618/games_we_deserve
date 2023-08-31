// todo record_player.js      аудио проигрыватель

const SoundsTimerMP3 = document.getElementById("sounds-timer-mp3");
const TurnOffSound = document.getElementById("turn_off_sound");
playButton.addEventListener("click", () => {
    SoundsTimerMP3.play();
});

pauseButton.addEventListener("click", () => {
    SoundsTimerMP3.pause();
});
