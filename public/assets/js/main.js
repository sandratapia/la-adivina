'use strict';

//VARIABLES
const buttonTry = document.querySelector('.button__try__js');
const buttonReset = document.querySelector('.button__reset__js');
const introduceNumber = document.querySelector('.introduce__number__js');
const writeAndTry = document.querySelector('.main__numbertry__js');
const max = 100;
const randomNumber = getRandomNumber(max);
const counterNumbers = document.querySelector('.main__try__counter-js');


function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(`El número al azar es: ${randomNumber}`);

//COUNTER
let counter = 0;

const count = function () {
  counter += 1;
  counterNumbers.innerHTML = `${counter}`;
};


//EVENT GAME FUNTION
function answerNumber() {
  const numberIntroduced = Number(introduceNumber.value);
  const userIntroduceValue = numberIntroduced;
  console.log(`La usuaria ha introducido el número ${userIntroduceValue}`);
  if (randomNumber === numberIntroduced) {
    writeAndTry.innerHTML = 'Has ganado campeona!!';
    console.log('La usuaria ha ganado el juego');
  } else if (
    userIntroduceValue < 1 || userIntroduceValue > 100
  ) {
    writeAndTry.innerHTML = 'Por favor, introduce un número entre 1 y 100.';
  } else if (randomNumber < userIntroduceValue) {
    writeAndTry.innerHTML = 'El número es demasiado alto';
  } else {
    writeAndTry.innerHTML = 'El número es demasiado bajo';
  }
}

//EVENT RESET FUNCTION
function resetGame() {
  location.reload();
}

function doingFunctions(event) {
  event.preventDefault();
  answerNumber();
  count();
}

//LISTENERS
buttonTry.addEventListener('click', doingFunctions);
buttonReset.addEventListener('click', resetGame);

//# sourceMappingURL=main.js.map
