let burger_menu = document.querySelector(".burger_menu");
burger_menu.addEventListener('click', animacion_burger_menu)
function animacion_burger_menu() {
    burger_menu.classList.toggle("change");
}