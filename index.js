var randomDice1 = Math.floor(Math.random() * 6) +1;
var randomDice2 = Math.floor(Math.random() * 6) +1;
let player1 = prompt("Name the first player:");
let player2 = prompt("Name the second player:");
document.querySelector(".img1").setAttribute("src", "images/dice" + randomDice1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomDice2 + ".png");

function changeTitle() {
    if (randomDice1 === randomDice2) {
        document.querySelector("h1").innerHTML = "DRAW!";

    } else if (randomDice1 > randomDice2) {
        document.querySelector("h1").innerHTML =  player1 + " Wins!";
    } else {
        document.querySelector("h1").innerHTML = player2 + " Wins!";
    }
}

function playerName() {
    document.getElementById("p1").innerHTML = player1;
    document.getElementById("p2").innerHTML = player2;
}

playerName();
changeTitle();