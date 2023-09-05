//todo selected_games.js

const liSelect = document.querySelectorAll(".selection__list ul li");
const liNavig = document.querySelectorAll(".body__navigation ul li");

console.log(liSelect);
console.log(liNavig);

// Функция, которая будет выполнена при изменении состояния чекбоксов
function handleCheckboxChange(event) {
    const checkbox = event.target;
    if (checkbox.checked) {
        const li = checkbox.closest("li");
        const index = Array.from(li.parentNode.children).indexOf(li);
        console.log(`li с индексом ${index} отмечен`);
    }
}

// Назначаем обработчик события для всех чекбоксов в li элементах
liSelect.forEach((li) => {
    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", handleCheckboxChange);
});
