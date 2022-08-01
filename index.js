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


const everyKey = document.querySelectorAll(".images");
everyKey.forEach((item) => item.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", audioMatch)



