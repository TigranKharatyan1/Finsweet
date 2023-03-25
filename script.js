let container = document.querySelector(".popup_container")
let join = document.querySelector(".join").addEventListener("click", function () {
    container.style.display = "flex"
})
let clos = document.querySelector(".clos").addEventListener("click", function () {
    container.style.display = "none"
})
let nav_menu = document.querySelector(".nav_link_open")
let nav_open = document.querySelector(".nav_link_arrow").addEventListener("click", function () {
    if (nav_menu.style.display = "flex" === nav_menu.style.display) {
        nav_menu.style.display = "none"
    } else {
        nav_menu.style.display = "flex"
    }
})
