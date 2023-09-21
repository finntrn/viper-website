let menuButton;


menuButton = document.querySelector('nav li:nth-of-type(2) a');

menuButton.addEventListener('click', menuButtonClick);

let menuToggle = false;

function menuButtonClick(){
    if (menuToggle == false) {
        menuToggle = true;
        menuButton.innerHTML = "Sluiten";
    } else {
        menuToggle = false;
        menuButton.innerHTML = "Menu";
    }
}