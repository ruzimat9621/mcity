// Адаптация меню под мобильные устройства

const nav = document.querySelector(".navbar");
const navMenu = document.querySelector(".navbar-nav");

nav.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
