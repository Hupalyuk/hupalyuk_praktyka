// бургер меню
const burgerBtn = document.getElementById("burgerBtn");
const burgerIcon = document.getElementById("burgerIcon");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
function openMenu() {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    burgerIcon.firstElementChild?.setAttribute("href", "/assets/sprite/sprite.svg#btn-close");
}
function closeMenu() {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    burgerIcon.firstElementChild?.setAttribute("href", "/assets/sprite/sprite.svg#btn-menu");
}
burgerBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("active");
    isOpen ? closeMenu() : openMenu();
});
overlay.addEventListener("click", closeMenu);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
});

// кнопка прокрутка
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 1000) {
        scrollBtn.classList.add('show');
        scrollBtn.classList.remove('hide');
    } else {
        scrollBtn.classList.add('hide');
        setTimeout(() => scrollBtn.classList.remove('show'), 300);
    }
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});