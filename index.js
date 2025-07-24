var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg1 = "dice" + randomNumber1 + ".png";
var randomDiceImgSrc1 = "images/" + randomDiceImg1;

var firstImg = document.querySelectorAll("img")[0];
firstImg.setAttribute("src", randomDiceImgSrc1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomDiceImgSrc2 = "images/" + randomDiceImg2;

var secondImg = document.querySelectorAll("img")[1];
secondImg.setAttribute("src", randomDiceImgSrc2);

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "2nd Player Win";
} else if (randomNumber2 < randomNumber1) {
  document.querySelector("h1").innerHTML = "1st Player Win";
} else {
  document.querySelector("h1").innerHTML = "DRAW!!!";
}
