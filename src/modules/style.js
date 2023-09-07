// todo - style.js

const style = document.getElementById("style");

let mainBackground = "";
let mainBorder = "";

// todo асинхронная функция эффект окончания времени
function timeOutEffect() {
    const timePaus = [50, 50, 100, 100, 500, 500];
    let index = 0;
    function changeColor() {
        mainBackground = index % 2 === 0 ? "#ff0000bd" : "#240088";
        mainBorder = index % 2 === 0 ? "#ad0000bd" : "#14004d";
        appointment();
        index++;
        if (index < timePaus.length) {
            setTimeout(changeColor, timePaus[index]);
        }
    }
    setTimeout(changeColor, timePaus[index]);
}

function startEffrct() {
    mainBackground = "#008800";
    mainBorder = "#888800";
    appointment();
    setTimeout(() => {
        mainBackground = "#240088";
        mainBorder = "#14004d";
        appointment();
    }, 300);
}

export function styleEffect(num = 0) {
    if (num === 0) {
        mainBackground = "#240088";
        mainBorder = "#14004d";
    } // эффект окончания времени
    else if (num === 1) {
        timeOutEffect();
    } // эффект старта
    else if (num === 2) {
        startEffrct();
    }
}

function appointment() {
    style.textContent = `:root { --main-background: ${mainBackground}; --main-border: ${mainBorder}; }`;
}
