var randomDice1 = Math.floor(Math.random() * 6) +1;
var randomDice2 = Math.floor(Math.random() * 6) +1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomDice1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomDice2 + ".png");

function changeTitle() {
    if (randomDice1 === randomDice2) {
        document.querySelector("h1").innerHTML = "DRAW!";

    } else if (randomDice1 > randomDice2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
}

changeTitle();