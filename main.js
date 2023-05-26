const Navbar = document.querySelector("nav");
const openMenu = document.getElementById("menuBtn");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
    Navbar.classList.add("openMenu");

})
closeMenu.addEventListener("click", () => {
    Navbar.classList.remove("openMenu");

})