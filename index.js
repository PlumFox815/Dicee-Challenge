
  let randomNumber1 = Math.floor(Math.random()*6)+1;
  let randomNumber2 = Math.floor(Math.random()*6)+1;

const imgSource = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png" ]

let firstDice = imgSource[randomNumber1-1]
let secondDice = imgSource[randomNumber2-1]

document.querySelector(".img1").setAttribute("src", firstDice)
document.querySelector(".img2").setAttribute("src", secondDice)

  if (firstDice === secondDice){
    document.querySelector("h1").innerHTML = "Draw!"
  } else if (firstDice > secondDice){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
  } else if (firstDice < secondDice){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
  }
 