// todo index.js

import "./src/modules/timer.js";
import "./src/modules/start.js";
import "./src/modules/record_player.js";
import "./src/modules/swipe.js";
import "./src/modules/selected_games.js";
import "./src/modules/test.js";

const SaveChanges = document.getElementById("save-changes");

SaveChanges.addEventListener("click", function () {
    window.location.reload();
});
