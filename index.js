//Select hamburger icon and nav element
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".navLink");

//listen for a press on the keyboard anywhere.
window.addEventListener("keydown", audioMatch)

//function to show the hamburger menu
function showHamburger () {
    hamburger.classList.toggle("active");
    navLink.classList.toggle("active"); 
}

//function to hide the hamburger menu
function hideHamburger () {
    hamburger.classList.remove("active");
    navLink.classList.remove("active"); 
}


//Event listeners for showing and hiding the hamburger menu
hamburger.addEventListener("click", showHamburger);
navLink.addEventListener("click", hideHamburger);
window.addEventListener("scroll",hideHamburger);


//Function to match audio with key
function audioMatch (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)
    if (!audio) {
        return;
    } else {
    audio.currentTime = 0;
    audio.play();
    }

    const key = document.querySelector(`.img-container[data-key="${e.keyCode}"]`)
    const keyImage = key.children[0];
    keyImage.classList.remove("playing");
    keyImage.classList.add("playing");
}

//Function to remove transition 

function removeTransition (e) {
    if (e.propertyName !== "border-top-width") {
        return;
    } else {
        this.classList.remove("playing");
    }
}

//Select all images and for each one, listen for transition end to remove click effect
const everyKey = document.querySelectorAll(".images");
everyKey.forEach((item) => item.addEventListener("transitionend", removeTransition));




//Select all div and audio elements with data-key attribute
let divKeys = document.querySelectorAll("div[data-key]");
let audioKeys = document.querySelectorAll("audio[data-key]");

//For each div, listen for touches and clicks
divKeys.forEach ((item) => {
    item.addEventListener("click", clickPlay);
    item.addEventListener("touchend", clickPlay);
})

//Function to match audio data-key with div data key and play correct sound
function clickPlay () {
    audioKeys.forEach ((item) => {
        if (this.dataset.key == item.dataset.key) {
            item.currentTime = 0 ;
            item.play();
            this.children[0].classList.add("playing");
        }
    })
}