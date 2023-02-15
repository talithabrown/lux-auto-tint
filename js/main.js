function openNav() {
    sideNav.style.width = "100%";
    document.addEventListener('click', closeNavOnOutsideClick)
}
  
function closeNav() {
    sideNav.style.width = "0";
}

let sideNav = document.getElementById("side-nav-div")

let mobileMenuButton = document.getElementById('menu-button')
mobileMenuButton.addEventListener('click', openNav)

let navCloseButton = document.getElementById('nav-close-btn')
navCloseButton.addEventListener('click', closeNav)