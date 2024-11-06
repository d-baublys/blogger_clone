const header = document.querySelector(".header");
const sections = document.querySelectorAll(".section");
const themes = document.querySelectorAll(".theme.js-theme");
const themesParent = document.querySelector(".publish-background");

const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
let currentIndex = 0;

function handleScroll() {
    if (window.scrollY > pageHeight * 0.01) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function createIntersectionObserver() {
    const options = {
        root: null,
        rootMargin: "-50% 0px 0px 0px",
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (!entry.target.classList.contains("publish")) {
                    entry.target.classList.add("active");
                }
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });
}

function updateActiveTheme() {
    themes.forEach((theme) => theme.classList.remove("active"));
    themes[currentIndex].classList.add("active");
    setNextTimeout();
    currentIndex = (currentIndex + 1) % themes.length;
}

function getNextTimeout() {
    return currentIndex === 2 ? 10000 : 2300;
}

function setNextTimeout() {
    setTimeout(updateActiveTheme, getNextTimeout());
}

function removeNoTransition() {
    themesParent.classList.remove("no-transition");
}

function initialiseThemes() {
    if (currentIndex === 0) {
        themesParent.classList.add("no-transition");
        setTimeout(removeNoTransition, 0);
    }
    updateActiveTheme();
}

function setUpEventListeners() {
    window.addEventListener("scroll", handleScroll);
}

function init() {
    initialiseThemes();
    createIntersectionObserver();
    setUpEventListeners();
}

init();
