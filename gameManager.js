// Clickpoints is how many points the player has //

let Clickpoints = 0;

// Clickpower is how many poinst the player gets per click //

let ClickPower = 1;

// AutoClickDelay is how long the delay is for automatic clicks //

let AutoClickDelay = 1;

const scoreDisplay = document.getElementById("ScoreLabel");
const clickButton = document.getElementById("ClickButton");


// Function that adds score for button press //

function pressButton(power) {
    Clickpoints += power;
    scoreDisplay.textContent = `Points: ${Clickpoints}`;
}

clickButton.addEventListener("click", function () {
    pressButton(ClickPower);
});




pressButton(ClickPower)