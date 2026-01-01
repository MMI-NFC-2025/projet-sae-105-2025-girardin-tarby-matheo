// Menu //

const toggle = document.getElementById('menuButton') || document.querySelector('.menu-button');
const closeBtn = document.getElementById('menuClose');
const nav = document.getElementById('mainNav') || document.querySelector('.menu');
const page = document.body;

toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    page.classList.toggle('no-scroll');
});

closeBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    page.classList.toggle('no-scroll');
});


// Carrousel //

const carousel = document.querySelector("div.carousel__container");
const prevButton = document.querySelector("button.carousel__button--prev");
const nextButton = document.querySelector("button.carousel__button--next");

if (carousel) {
    const premierItem = document.querySelector(".carousel__item");

    function getScrollAmount() {
        return premierItem.clientWidth;
    }

    prevButton.addEventListener("click", () => {
        carousel.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });
    });

    nextButton.addEventListener("click", () => {
        carousel.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });
    });
    window.addEventListener("resize", () => {
    });
}
