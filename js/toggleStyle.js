const toggleButton = document.querySelector("#dark-toggler");
const root = document.documentElement;
const fixedElement = document.querySelector(".position-fixed");

if (localStorage.getItem("theme") === "dark") {
    enableDarkMode();
}

toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        enableLightMode();

    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    root.style.setProperty('--jt-border-light', '#323539');
    root.style.setProperty('--jt-bg-body', '#212529');
    root.style.setProperty('--jt-bg-header', '#212529');
    root.style.setProperty('--jt-bg-light', '#292d31');
    root.style.setProperty('--jt-bg-archive', '#292d31');
    root.style.setProperty('--jt-nav-text', '#9fa6ad');
    root.style.setProperty('--icon-color', '#fff');

    document.body.classList.add('dark-mode');
    localStorage.setItem("theme", "dark");
}

function enableLightMode() {
    root.style.setProperty('--jt-border-light', '#efefef');
    root.style.setProperty('--jt-bg-body', '#ffffff');
    root.style.setProperty('--jt-bg-header', '#ffffff');
    root.style.setProperty('--jt-bg-light', '#f3f7f9');
    root.style.setProperty('--jt-bg-archive', '#fffff');
    root.style.setProperty('--jt-nav-text', '#0000CD');
    root.style.setProperty('--icon-color', '#3c3c3c');

    document.body.classList.remove('dark-mode');
    localStorage.setItem("theme", "light");
}

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        fixedElement.classList.remove("d-none");
    } else {
        fixedElement.classList.add("d-none");
    }
});

const header = document.querySelector(".header-animate");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Якщо скролимо вниз – ховаємо
        header.classList.add("header-hidden");
    } else {
        // Якщо скролимо вгору – показуємо
        header.classList.remove("header-hidden");
    }
    lastScrollY = window.scrollY; // Оновлюємо останню позицію скролу
});
