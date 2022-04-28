let hamburger = document.getElementById("hamburger");
let adminMenu = document.getElementById("adminMenu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle('active');
    adminMenu.classList.toggle('up');

});