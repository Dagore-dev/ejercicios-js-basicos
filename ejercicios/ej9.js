import { isInteger } from "../utils/regexp.js";

export default function ej9 () {

  const $BUTTON = document.getElementById('prompt9');
  const $RESULT = document.getElementById('result9');

  function handleClick () {

    const numInput = prompt('Introduzca un número entero');

    if (isInteger.test(numInput)) {
      
      const num = parseInt(numInput);

      if (num === 0) {
        $RESULT.innerText = `El entero ingresado (${num}) es igual a cero.`;
      }
      else {

        if (num > 0) {
          $RESULT.innerText = `El entero ingresado (${num}) es mayor que cero.`;
        }
        else {
          $RESULT.innerText = `El entero ingresado (${num}) es menor que cero.`;
        }

      }

    }
    else {
      alert('Por favor, introduzca un número entero.')
    }

  }

  $BUTTON.addEventListener('click', handleClick)

}