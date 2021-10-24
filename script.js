"use strict";

function getNumber(num) {

  let userNumber = +prompt("Угадайте число от 1 до 100. У вас 10 попыток");
  let counter = 10;

  if (!userNumber) {
    alert("Игра окончена");
    return;
  }

  function guessNumber() {

    while (counter > 1) {

      counter--;

      if (userNumber === num) {
        alert("Поздравляю, Вы угадали!");
        playAgain();
        return;
      } else if (userNumber > num) {
        userNumber = +prompt("Загаданное число меньше. Осталось попыток " + counter + ". Введите новое число.");
      } else if (userNumber < num) {
        userNumber = +prompt("Загаданное число больше. Осталось попыток " + counter + ". Введите новое число.");
      } else if (isNaN(userNumber) || !isFinite(userNumber)) {
        userNumber = +prompt("Введи число! Осталось попыток " + counter);
      }
      return guessNumber(userNumber);
    }

    alert("Попытки закончились");
    playAgain();
  }

  guessNumber(userNumber);
}

function playAgain() {

  let play = confirm("Хотели бы сыграть еще раз?");

  if (play === true) {
    getNumber(1);
  } else if (!play) {
    alert("Игра окончена");
    return;
  }
}

let randomNumber = getNumber(100);
randomNumber();