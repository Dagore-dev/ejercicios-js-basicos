import { isInteger, isFloat } from "../utils/regexp.js";

export default function ej1Prompt() {
  const $BUTTON = document.getElementById("prompt1");

  function handleClick() {
    const price = prompt(
      "Introduzca el precio del artículo (un número que puede ser decimal):"
    );
    const units = prompt(
      "Introduzca el número de unidades que ha comprado (un entero mayor o igual a 1):"
    );

    if (isFloat.test(price) && isInteger.test(units) && units > 0) {
      alert(`El total asciende a ${price * units} euros.`);
    } else {
      alert("Ha ocurrido un error.");
    }
  }

  $BUTTON.addEventListener("click", handleClick);
}
