/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const pintas = ["♥", "♦", "♠", "♣"];

  let textNumberHtml = document.querySelector(".number-card");
  let pintaTop = document.querySelector("#pinta-top");
  let pintaBottom = document.querySelector("#pinta-bottom");

  function randomCard(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function card() {
    let pinta = pintas[randomCard(pintas)];
    let number = numbers[randomCard(numbers)];

    if (pinta === "♠" || pinta === "♣") {
      pintaTop.innerHTML = pinta;
      pintaBottom.innerHTML = pinta;
      textNumberHtml.innerHTML = number;

      pintaTop.style.color = "black";
      pintaBottom.style.color = "black";
    } else {
      pintaTop.innerHTML = pinta;
      pintaBottom.innerHTML = pinta;
      textNumberHtml.innerHTML = number;

      pintaTop.style.color = "red";
      pintaBottom.style.color = "red";
    }
  }

  card();
};
