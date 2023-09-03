//todo  swipe.js

const bodySelect = document.querySelector(".body__selection");

let isSwiping = false;
let startX = 0;

bodySelect.addEventListener("touchstart", (e) => {
    isSwiping = true;
    startX = e.touches[0].clientX;
});

bodySelect.addEventListener("touchmove", (e) => {
    if (!isSwiping) return;

    const currentX = e.touches[0].clientX;
    const offsetX = currentX - startX;

    // Ограничьте смещение до 80 пикселей
    const maxOffsetX = 80;
    const limitedOffsetX = Math.min(maxOffsetX, Math.max(0, offsetX));

    // Примените смещение к элементу
    bodySelect.style.transform = `translateX(${limitedOffsetX}px)`;
});

bodySelect.addEventListener("touchend", () => {
    isSwiping = false;

    // Выполните дополнительные действия при завершении свайпа, если необходимо
});
