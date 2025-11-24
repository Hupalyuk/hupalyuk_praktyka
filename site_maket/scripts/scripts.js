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

// динамічний вивід елементів на сторінку
const pressReleases = [
    {
        image: "assets/images/about-sec/about-sec-2-1.png",
        title: "YourBank запускає нову програму винагород для підвищення лояльності та задоволеності клієнтів",
        location: "Індія",
        date: "06/11/2024",
        text: `YourBank радий оголосити про запуск нашої нової Програми винагород,
        спрямованої на винагородження наших постійних клієнтів та покращення їхнього 
        банківського досвіду. Програма пропонує ексклюзивні переваги, знижки та 
        персоналізовані пропозиції.`
    },
    {
        image: "assets/images/about-sec/about-sec-2-2.png",
        title: "YourBank розширює мережу відділень, відкривши нове відділення в Ченнаї",
        location: "Індія",
        date: "12/11/2024",
        text: `YourBank радий оголосити про урочисте відкриття нашого нового відділення.
        Це розширення підтверджує нашу відданість клієнтам та зручності доступу 
        до банківських послуг.`
    },
    {
        image: "assets/images/about-sec/about-sec-2-3.png",
        title: "YourBank співпрацює з некомерційною організацією для підтримки фінансової освіти",
        location: "Індія",
        date: "24/12/2024",
        text: `YourBank представляє Ініціативу сталого банкінгу, що включає зелені кредити,
        екологічно чисті інвестиційні варіанти та безпаперові банківські рішення.`
    },
    {
        image: "assets/images/about-sec/about-sec-2-4.png",
        title: "YourBank запускає ініціативу сталого банкінгу для екологічної відповідальності",
        location: "Індія",
        date: "28/12/2024",
        text: `Ініціатива «Сталий банкінг» демонструє нашу відданість екології — зелені кредити,
        екологічні інвестиції та електронні рішення для більш зеленого майбутнього.`
    }
];

// Контейнер
const container_about_sec_2 = document.getElementById("pressContainer");

// Цикл створення карток
pressReleases.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("cell-about-sec-2");

    card.innerHTML = `
        <picture>
            <img src="${item.image}" alt="${item.title}">
        </picture>

        <span>${item.title}</span>

        <div class="info-p-group">
            <p class="info-p">Розташування: ${item.location}</p>
            <p class="info-p">Дата: ${item.date}</p>
        </div>

        <p>${item.text}</p>
    `;

    container_about_sec_2.appendChild(card);
});

