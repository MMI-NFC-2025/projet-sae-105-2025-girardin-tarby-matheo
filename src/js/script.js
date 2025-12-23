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