// БУРГЕР
const burgerBtn = document.getElementById("burgerBtn");
const burgerIcon = document.getElementById("burgerIcon");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
    mobileMenu?.classList.add("active");
    overlay?.classList.add("active");
    burgerIcon?.firstElementChild?.setAttribute("href", "/assets/sprite/sprite.svg#btn-close");
}

function closeMenu() {
    mobileMenu?.classList.remove("active");
    overlay?.classList.remove("active");
    burgerIcon?.firstElementChild?.setAttribute("href", "/assets/sprite/sprite.svg#btn-menu");
}

burgerBtn?.addEventListener("click", () => {
    const isOpen = mobileMenu?.classList.contains("active");
    isOpen ? closeMenu() : openMenu();
});

overlay?.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
});

// КНОПКА ПРОКРУТКИ
const scrollBtn = document.getElementById('scrollTopBtn');

if (scrollBtn) {
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
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// МОДАЛКА 1
const openModal = document.getElementById("openModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

if (openModal && modalOverlay && closeModal) {
    openModal.addEventListener("click", () => modalOverlay.style.display = "flex");
    closeModal.addEventListener("click", () => modalOverlay.style.display = "none");

    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) modalOverlay.style.display = "none";
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") modalOverlay.style.display = "none";
    });
}

// МОДАЛКА 2
const openModal2 = document.getElementById("openModal2");
const modalOverlay2 = document.getElementById("modalOverlay2");
const closeModal2 = document.getElementById("closeModal2");

if (openModal2 && modalOverlay2 && closeModal2) {
    openModal2.addEventListener("click", () => modalOverlay2.style.display = "flex");
    closeModal2.addEventListener("click", () => modalOverlay2.style.display = "none");

    modalOverlay2.addEventListener("click", (e) => {
        if (e.target === modalOverlay2) modalOverlay2.style.display = "none";
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") modalOverlay2.style.display = "none";
    });
}

// МОДАЛКИ "ЗВ'ЯЗОК"
function setupModal(triggerSelector) {
    const triggers = document.querySelectorAll(triggerSelector);

    if (!triggers.length) return;

    triggers.forEach(trigger => {
        const modalId = trigger.getAttribute("data-modal");
        const modal = document.getElementById(modalId);

        if (!modal) return;

        const closeBtn = modal.querySelector(".modal-close");

        trigger.addEventListener("click", () => modal.style.display = "flex");
        closeBtn?.addEventListener("click", () => modal.style.display = "none");

        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.style.display = "none";
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") modal.style.display = "none";
        });
    });
}
setupModal(".open-user-modal");

// ФОРМА
const userForm = document.getElementById("userForm");

if (userForm) {
    userForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("userName")?.value.trim();
        const email = document.getElementById("userEmail")?.value.trim();
        const message = document.getElementById("userMessage")?.value.trim();

        if (!name || !email || !message) {
            document.getElementById("formResult").textContent = "Будь ласка, заповніть всі поля!";
            return;
        }

        document.getElementById("formResult").textContent = `Дякуємо, ${name}! Ми отримали ваше повідомлення.`;
        userForm.reset();
    });
}

// сям там
const container = document.querySelector(".info-six");
const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");
const btnLeft2 = document.getElementById("btn-left-2");

if (container) {
    btnRight?.addEventListener("click", () => {
        container.appendChild(container.firstElementChild);
    });

    btnLeft?.addEventListener("click", () => {
        container.insertBefore(container.lastElementChild, container.firstElementChild);
    });

    btnLeft2?.addEventListener("click", () => {
        container.insertBefore(container.lastElementChild, container.firstElementChild);
    });
}

// свайпер
const swiperContainer = document.querySelector(".mySwiper");

if (swiperContainer) {
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            650: {
                slidesPerView: 1,
            },
            1000: {
                slidesPerView: 2,
            }
        }
    });
}

