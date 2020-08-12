# La Adivina

_Página hecha con JavaScript, la cual trata de adivinar un número secreto que solo La Adivina sabe. ¿Serás capaz de adivinarlo?_

## Tecnologías utilizadas 🚀

_Este proyecto está hecho con JavaScript, HTML5, preprocesador Gulp, Sass y CSS3._

### Instalación 🔧

_Para poner en marcha el proyecto abre una terminal en la carpeta raíz de tu repositorio e instala las dependencias locales ejecutando en la terminal el comando:_

```
npm install
```

_Para arrancar el proyecto, hay que ejecutar el comando siguiente en la consola:_

```
npm start
```

_Por último para publicar la página en GitHub Pages, ejecutamos el siguiente comando:_

```
npm run docs
```

### Proyecto
_Lo primero de todo es declarar las variables, sobre las cuales se van a producir eventos, o necesitaremos para utilizarlo en alguna función._

```
const buttonTry = document.querySelector('.button__try__js');
const buttonReset = document.querySelector('.button__reset__js');
const introduceNumber = document.querySelector('.introduce__number__js');
const writeAndTry = document.querySelector('.main__numbertry__js');
```

_Lo siguiente será hacer una función que nos de un número aleatorio entero y cuyo máximo sea 100. Y un contador que nos cuente los intentos para adivinar el número._

```
//RANDOM NUMBER
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
```

_Por último, una función que comprueba si el número que hemos introducido es correcto y si no lo es, nos da pistas, para que tratemos de averiguarlo._

```
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
```

_Ponemos los listeners donde sea necesario y una funcion que nos resetea el juego... y ya estaría!!_

```
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
```

---
⌨️ Con ❤️ por [SandraTapia](https://github.com/sandratapia) 😊
