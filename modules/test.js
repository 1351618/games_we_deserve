// document.addEventListener("DOMContentLoaded", function () {
//     const fileList = document.getElementById("file-list");

//     // Получаем список файлов из папки
//     fetch("../video/") // Указываем путь к папке с файлами
//         .then((response) => response.text())
//         .then((data) => {
//             const links = data.match(/href="\/video\/([^"]+)"/g); // Извлекаем только ссылки, начинающиеся с "/video/"
//             if (links) {
//                 links.forEach((link) => {
//                     const encodedFileName = link.match(/\/video\/([^"]+)"/)[1]; // Извлекаем имя файла
//                     const decodedFileName = decodeURIComponent(encodedFileName); // Декодируем имя файла
//                     console.log(decodedFileName);
//                 });
//             }
//         })
//         .catch((error) => console.error("Ошибка загрузки файлов:", error));
// });

// *******************************************************************************

document.addEventListener("DOMContentLoaded", function () {
    const fileList = document.getElementById("file-list");

    // Получаем список файлов из папки
    fetch("/video/") // Указываем путь к папке с файлами
        .then((response) => response.text())
        .then((data) => {
            const links = data.match(/href="\/video\/([^"]+)"/g); // Извлекаем только ссылки, начинающиеся с "/video/"
            if (links) {
                const fileNames = links.map((link) => {
                    const encodedFileName = link.match(/\/video\/([^"]+)"/)[1]; // Извлекаем имя файла
                    const decodedFileName = decodeURIComponent(encodedFileName); // Декодируем имя файла
                    return decodedFileName;
                });

                // Сохраняем имена файлов в локальное хранилище
                localStorage.setItem("fileNames", JSON.stringify(fileNames));

                // Выводим имена файлов на страницу
                fileNames.forEach((fileName) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = fileName;
                    fileList.appendChild(listItem);
                });
            }
        })
        .catch((error) => console.error("Ошибка загрузки файлов:", error));
});
