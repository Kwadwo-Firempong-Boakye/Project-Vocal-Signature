const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".navLink");

function showHamburger () {
    hamburger.classList.toggle("active");
    navLink.classList.toggle("active"); 
}

function hideHamburger () {
    hamburger.classList.remove("active");
    navLink.classList.remove("active"); 
}

hamburger.addEventListener("click", showHamburger)

document.querySelectorAll(".navLink.a").forEach((item) => {
    addEventListener("click", hideHamburger)
})