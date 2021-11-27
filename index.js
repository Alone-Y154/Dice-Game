// player 1

// gives a random number from 1 -- 6
var randomNumber1 = Math.floor(Math.random() * 6 )+ 1;


// selects random images
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);


// player 2


var randomNumber2 = Math.floor(Math.random() * 6 )+ 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
// conditions
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML =("🔥player 1 won");
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML =("🔥player 2 won");
} else {
  document.querySelector("h1").innerHTML =("draw!");
}
