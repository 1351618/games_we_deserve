// todo index.js

import "./modules/timer.js";
import "./modules/start.js";
import "./modules/record_player.js";
import "./modules/swipe.js";
import "./modules/selected_games.js";
import "./modules/test.js";

const SaveChanges = document.getElementById("save-changes");

SaveChanges.addEventListener("click", function () {
    window.location.reload();
});
