// todo index.js

import "./src/modules/timer.js";
import "./src/modules/start.js";
import "./src/modules/record_player.js";
import "./src/modules/swipe.js";
import "./src/modules/list_competitions.js";
import "./src/modules/display_the_first_video.js";

const saveChangesButtons = document.querySelectorAll(".selection-save");

saveChangesButtons.forEach((button) => {
    button.addEventListener("click", function () {
        window.location.reload();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("myVideo");
    video.play();
});
