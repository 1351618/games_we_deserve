const liListVideo = document.querySelectorAll(".main_video-ul li");
const ulSelectionlist = document.querySelector(".selection__list-ul");
const ulNavigationlist = document.querySelector(".body__navigation-ul");
const liNavig = document.querySelectorAll(".body__navigation ul li");

//*********************  получение списка видео  *******************************
liListVideo.forEach((liElement, index) => {
    const videoElement = liElement.querySelector("video");
    if (videoElement) {
        const videoSrc = videoElement
            .querySelector("source")
            .getAttribute("src");
        const videoName = videoSrc
            .substring(videoSrc.lastIndexOf("/") + 1)
            .slice(0, -4);

        const key = `li-${index + 1}`;
        crealeLiElementSelectList(key, videoName);
        crealeLiElementNavigation(key, videoName);
    }
});

//*********************  записываем элементы для выбора  левое меню   *******************************
function crealeLiElementSelectList(key, videoName) {
    const newLiItemS = document.createElement("li");
    newLiItemS.classList.add(key);

    const liSpan = document.createElement("span");
    liSpan.textContent = videoName;

    const liInput = document.createElement("input");
    liInput.setAttribute("type", "checkbox");

    // Проверяем значение чекбокса в локальном хранилище
    const selectionCheckboxString = localStorage.getItem("selectionCheckbox");
    if (selectionCheckboxString) {
        const selectionCheckbox = JSON.parse(selectionCheckboxString);
        const isChecked = selectionCheckbox[key];
        liInput.checked = isChecked;
    }

    newLiItemS.appendChild(liSpan);
    newLiItemS.appendChild(liInput);

    ulSelectionlist.appendChild(newLiItemS);

    liInput.addEventListener("click", function (event) {
        const checkbox = event.target;
        const listItem = checkbox.parentNode;
        const listItemClass = listItem.classList;

        handleCheckboxClick(checkbox, listItemClass);
    });
}

//*********************  записываем элементы выбранные правое меню     *******************************
function crealeLiElementNavigation(key, videoName) {
    // li элемент
    const newLiItemN = document.createElement("li");
    newLiItemN.classList.add(key);

    // span
    const liSpan = document.createElement("span");
    liSpan.textContent = videoName;

    // кнопка
    const liButton = document.createElement("span");
    liButton.textContent = "✖";
    liButton.classList.add(`body__navigation_bt-del`);

    // добавляем в li
    newLiItemN.appendChild(liSpan);
    newLiItemN.appendChild(liButton);

    // добавляем на страницу
    ulNavigationlist.appendChild(newLiItemN);

    // обработчик событий li
    newLiItemN.addEventListener("click", function (event) {
        activeLiItemN(newLiItemN);
    });

    // обработчик событий кнопки
    liButton.addEventListener("click", function (event) {
        deliteLiItemN(key);
    });
}

// ****************** функция для обработчика событий чекбоксов *********************
let selectionCheckbox = {}; // Глобальная переменная для хранения данных чекбоксов

function handleCheckboxClick(checkbox, listItemClass) {
    const isChecked = checkbox.checked;
    const listItemClassName = listItemClass.value;

    console.log("Класс элемента:", listItemClassName);
    console.log("Состояние чекбокса:", isChecked);
    selectionCheckbox[listItemClassName] = isChecked;
    console.log(selectionCheckbox);

    // Преобразуем объект в строку JSON
    const selectionCheckboxString = JSON.stringify(selectionCheckbox);

    // Сохраняем строку в локальном хранилище
    localStorage.setItem("selectionCheckbox", selectionCheckboxString);
}
// ***************************** обработчик чекбоксов ******************************

window.addEventListener("DOMContentLoaded", function () {
    const liNavig = document.querySelectorAll(".body__navigation ul li");
    const selectionCheckboxString = localStorage.getItem("selectionCheckbox");

    if (selectionCheckboxString) {
        selectionCheckbox = JSON.parse(selectionCheckboxString); // Обновляем глобальную переменную selectionCheckbox
        // console.log("Данные из локального хранилища:", selectionCheckbox);

        for (const key in selectionCheckbox) {
            const isChecked = selectionCheckbox[key];

            if (isChecked) {
                for (const liItem of liNavig) {
                    if (liItem.classList.contains(key)) {
                        liItem.classList.add("show");
                    }
                }
            } else {
                for (const liItem of liNavig) {
                    if (liItem.classList.contains(key)) {
                        liItem.classList.remove("show");
                    }
                }
            }
        }
    }
});
//*************************** */ обработчик кнопок отключения **************************************
function deliteLiItemN(key) {
    const liNavig = document.querySelectorAll(".body__navigation ul li");

    for (const liItem of liNavig) {
        if (liItem.classList.contains(key)) {
            liItem.classList.remove("show");
            // console.log("Класс:", key);
            // console.log("Логическое значение:", false);

            // Обновляем значение в локальном хранилище
            const selectionCheckboxString =
                localStorage.getItem("selectionCheckbox");
            if (selectionCheckboxString) {
                const selectionCheckbox = JSON.parse(selectionCheckboxString);
                selectionCheckbox[key] = false; // Изменяем только одно состояние на false
                localStorage.setItem(
                    "selectionCheckbox",
                    JSON.stringify(selectionCheckbox)
                );
            }
            break; // Прерываем цикл после обновления одного состояния
        }
    }
}

// ***********************

function activeLiItemN(liItem) {
    const liNavig = document.querySelectorAll(".body__navigation ul li");
    const liListVideo = document.querySelectorAll(".main_video-ul li");

    liNavig.forEach(function (item) {
        item.classList.remove("active");
    });
    liListVideo.forEach(function (liItem) {
        liItem.classList.remove("active");
    });

    const mainActiveIndex = parseInt(liItem.classList[0].substring(3));
    // console.log("классом:", mainActiveIndex);
    const secondLiElement = liListVideo[mainActiveIndex - 1];
    secondLiElement.classList.add("active");
    liItem.classList.add("active");
}
