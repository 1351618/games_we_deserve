//todo display_the_first_video.js

const liListVideo = document.querySelectorAll(".main_video-ul li");
const liNavig = document.querySelectorAll(".body__navigation ul li");

// получаем данные из локалстораж
const locaLStorageGetFirstIndex = localStorage.getItem("selectionCheckbox");
// console.log(locaLStorageGetFirstIndex, "locaLStorageGetFirstIndex");

// проверяем есть лии данные в хранилище
if (locaLStorageGetFirstIndex !== null) {
    // преобразуем в объект
    const locStorData = JSON.parse(locaLStorageGetFirstIndex);
    console.log(locStorData);

    // проходимся по значениям
    for (const key in locStorData) {
        if (locStorData[key] === true) {
            const index = parseInt(key.substring(3)); // получаем индекс из ключа
            console.log("Найдено ключ:", index);
            const secondLiElement = liListVideo[index - 1]; // получаем элемент из массива по индексу
            secondLiElement.classList.add("active");

            const liNavigElement = liNavig[index - 1]; // получаем элемент из массива по индексу
            liNavigElement.classList.add("active");
            break; // останавливаем цикл после первого совпадения
        }
    }
}
