document.addEventListener("DOMContentLoaded", function () {
    let link = document.querySelectorAll('.nav-link a');
    link.forEach(function (link) {
       let text = link.textContent;
       let upperCaseText = text.charAt(0).toUpperCase() + text.slice(1);
       link.textContent = upperCaseText;
    });
});
// ---Mobile-nav---

const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.nav-icon');
const fade = document.querySelector('.mobile-nav-fade');
const mobileNav = document.querySelector('.mobile-nav');

navBtn.addEventListener('click', function() {
    mobileNav.classList.toggle('open');
    fade.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
});

navBtn.onclick = function () {
    nav.classList.toggle('mobile-nav--open');
    fade.classList.toggle('mobile-nav-fade--open');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
};

fade.onclick = function () {
    nav.classList.toggle('mobile-nav--open');
    fade.classList.toggle('mobile-nav-fade--open');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
};
