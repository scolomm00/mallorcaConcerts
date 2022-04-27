let hamburger = document.getElementById("hamburger");
let mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('up');

});