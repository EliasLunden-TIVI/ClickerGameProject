// Clickpoints is how many points the player has //

let Clickpoints = 0;

// Clickpower is how many poinst the player gets per click //

let ClickPower = 1;

// AutoClickDelay is how long the delay is for automatic clicks //

let AutoClickDelay = 5;

// Starting costs for upgrades

let ClickPowerUpgradeCost = 25; 
let AutoClickUpgradeCost = 10;
// GUI elements //
const scoreDisplay = document.getElementById("ScoreLabel");
const clickButton = document.getElementById("ClickButton");
// Click power Upgrades //
const clickPowerButton = document.getElementById("ClickPowerButton");
const clickPowerButtonPrice = document.getElementById("ClickPowerButtonPrice");
// Auto Click Upgrades //
const AutoClickButton = document.getElementById("AutoClickButton");
const AutoClickButtonPrice = document.getElementById("AutoClickButtonPrice");

// Set prices on start //
ClickPowerButtonPrice.textContent = `Cost: ${ClickPowerUpgradeCost}`;
AutoClickButtonPrice.textContent = `Cost: ${ClickPowerUpgradeCost}`;

// Function that adds score for button press //
function pressButton(power) {
    Clickpoints += power;
    scoreDisplay.textContent = `Points: ${Clickpoints}`;
}

function upgradeClickPower(power) {
    ClickPower += power;
    scoreDisplay.textContent = `Points: ${Clickpoints}`;

}

function UpgradeAutoClick(reduction) {
    AutoClickDelay -= reduction;
    scoreDisplay.textContent = `Points: ${Clickpoints}`;
    AutoClick(reduction)
}

clickButton.addEventListener("click", function () {
    pressButton(ClickPower);
});

clickPowerButton.addEventListener("click", function () {
    if (Clickpoints >= ClickPowerUpgradeCost) {
        
        // Deduct the cost of the upgrade //
        Clickpoints -= ClickPowerUpgradeCost

        upgradeClickPower(1)

        // The price of the upgrade increases by 50% //
        ClickPowerUpgradeCost += ClickPowerUpgradeCost / 2 
        clickPowerButtonPrice.textContent = `Cost: ${ClickPowerUpgradeCost}`;
    } else { console.log("Not enough money for upgrade")}
        
});

AutoClickButton.addEventListener("click", function () {
    if (Clickpoints >= AutoClickUpgradeCost) {

        UpgradeAutoClick(1)

        // The price of the upgrade increases by 50% //
        AutoClickUpgradeCost += AutoClickUpgradeCost / 2 
        AutoClickButtonPrice.textContent = `Cost: ${AutoClickButtonPrice}`;
        
    }
});
// This script is broken and causes a infinite loop //
function AutoClick(power) {
    while (AutoClickDelay > 0) {
        if (AutoClickDelay > 0) {
            setTimeout(power)
            pressButton()
        } else {
            break
        }
        
    } 
    
}