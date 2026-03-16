// Clickpoints is how many points the player has //

let Clickpoints = 0;

// Clickpower is how many poinst the player gets per click //

let ClickPower = 1;

// AutoClickDelay is how long the delay is for automatic clicks //

let AutoClickDelay = 1;



let PowerUpgradeCost = 50;

const scoreDisplay = document.getElementById("ScoreLabel");
const clickButton = document.getElementById("ClickButton");
const clickPowerButton = document.getElementById("ClickPowerButton");


// Function that adds score for button press //

function pressButton(power) {
    Clickpoints += power;
    scoreDisplay.textContent = `Points: ${Clickpoints}`;
}

function upgradeClickPower(power) {
    ClickPower += power;
    scoreDisplay.textContent = `Points: ${Clickpoints}`;

}

clickButton.addEventListener("click", function () {
    pressButton(ClickPower);
});

clickPowerButton.addEventListener("click", function () {
    if (Clickpoints >= PowerUpgradeCost) {
        
        // Deduct the cost of the upgrade //
        Clickpoints -= PowerUpgradeCost

        upgradeClickPower(1)

        // The price of the upgrade doubles //
        PowerUpgradeCost *= 2
    } else { console.log("Not enough money for upgrade")}
        
});



pressButton(ClickPower)