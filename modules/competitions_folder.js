//todo competitions_folder.js

//********************** получение данных из папки ******************* */
// Укажите путь к папке с видео
const folderVideo = "../video/";

// Функция для получения и вывода названий видеофайлов в папке
function listVideosInFolder(folderPath) {
    return fetch(folderPath)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Ошибка при запросе");
            }
            return response.text();
        })
        .then((data) => {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(data, "text/html");
            const links = htmlDoc.querySelectorAll("a");

            const videoFiles = Array.from(links)
                .filter((link) => link.href.match(/\.(mp4|avi|mkv|mov)$/i))
                .map((link) => {
                    const fileName = link.textContent;
                    const parts = fileName.split(".mp4"); // Разбиваем строку по ".mp4"
                    return parts[0] + ".mp4"; // Берем первую часть и добавляем обратно ".mp4"
                });

            return videoFiles; // Возвращаем массив с названиями видеофайлов
        });
}

function displayVideoFilesOnPage(folderPath) {
    const ulElement = document.querySelector(".selection__list ul");

    listVideosInFolder(folderPath)
        .then((result) => {
            // Пройдемся по массиву с названиями файлов и создадим элементы li для каждого файла
            result.forEach((fileName) => {
                const liElement = document.createElement("li");
                const spanElement = document.createElement("span");
                const inputElement = document.createElement("input");

                spanElement.textContent = fileName.slice(0, -4);
                inputElement.setAttribute("type", "checkbox");

                liElement.appendChild(spanElement);
                liElement.appendChild(inputElement);

                ulElement.appendChild(liElement);
            });
        })
        .catch((error) => {
            console.error("Произошла ошибка:", error);
        });
}

// Вызываем функцию для вывода названий видеофайлов на страницу
displayVideoFilesOnPage(folderVideo);

let test = "test";
