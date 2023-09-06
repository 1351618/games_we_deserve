//todo  swipe.js

// ****************** свайп для левого меню ******************************
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

// ****************** свайп для правого меню ******************************
const bodyNav = document.querySelector(".body__navigation");

let isSwipingNav = false;
let startXNav = 0;

bodyNav.addEventListener("touchstart", (e) => {
    isSwipingNav = true;
    startXNav = e.touches[0].clientX;
});

bodyNav.addEventListener("touchmove", (e) => {
    if (!isSwipingNav) return;

    const currentXNav = e.touches[0].clientX;
    const offsetXNav = startXNav - currentXNav;

    // Ограничьте смещение до 80 пикселей
    const maxOffsetXNav = 80;
    const limitedOffsetXNav = Math.min(maxOffsetXNav, Math.max(0, offsetXNav));

    // Примените смещение к элементу
    bodyNav.style.transform = `translateX(-${limitedOffsetXNav}px)`;
});

bodyNav.addEventListener("touchend", () => {
    isSwipingNav = false;

    // Выполните дополнительные действия при завершении свайпа, если необходимо
});
