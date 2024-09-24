const menu = document.getElementById("menu");
const menuBtn = document.getElementById('menu-button');

function toggleMenu() {
    menuBtn.classList.toggle("change");
    if(menu.classList.contains("menu-open")) {
        menu.classList.remove("menu-open");
        menu.classList.add("menu-close");
    } 
    else {
        menu.classList.remove("menu-close");
        menu.classList.add("menu-open");
    }
}