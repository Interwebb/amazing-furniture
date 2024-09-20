const button = document.querySelector("#menu");
const menu = document.querySelector(".menu-links");

function toggleMenu() {
  console.log("clicked");
  menu.classList.toggle("flex");
}

button.addEventListener("click", toggleMenu);

console.log(menu);
