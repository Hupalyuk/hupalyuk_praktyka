const burgerBtn = document.querySelector(".btn-nav-bar");
const mobileMenu = document.querySelector(".mobile-menu");

burgerBtn.addEventListener("click", () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "flex" ? "none" : "flex";
});