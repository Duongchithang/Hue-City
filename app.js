const bars = document.querySelector(".icon-bar");
const menu = document.querySelector(".header-list");
const close = document.querySelector(".icon-close");
bars.addEventListener("click", handleToggleMenu);
close.addEventListener("click", handleToggleMenu);

function handleToggleMenu(e) {
    menu.classList.toggle("is-show");
}