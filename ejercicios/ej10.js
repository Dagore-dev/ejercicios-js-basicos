import { isPositiveInt } from "../utils/regexp.js";

export default function ej10() {
  const $BUTTON = document.getElementById("prompt10");
  const $RESULT = document.getElementById("result10");

  function handleClick() {
    const numInput = prompt("Introduce un entero positivo: ");
    let count = 0;

    if (isPositiveInt.test(numInput)) {
      const number = parseFloat(numInput);
      let num = number;

      if (num === 0) {
        $RESULT.innerText = `${num} tiene una cifra.`;
      } else {
        while (num > 0) {
          num = Math.round(num / 10);
          count++;
        }

        $RESULT.innerText = `${number} tiene ${count} cifras.`;
      }
    } else {
      alert(`${numInput} no es un entero positivo.`);
    }
  }

  $BUTTON.addEventListener("click", handleClick);
}
