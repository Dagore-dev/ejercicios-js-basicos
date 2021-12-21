import { isFloat, isInteger } from "../utils/regexp.js";

export default function ej1() {
  const $FORM = document.getElementById("form1");
  const $PRICE = document.getElementById("price");
  const $QUANTITY = document.getElementById("quantity");
  const $RESULT = document.getElementById("result1");

  function handleSubmit(e) {
    e.preventDefault();

    const price = $PRICE.value;
    const units = $QUANTITY.value;

    if (isFloat.test(price) && isInteger.test(units) && units > 0) {
      $RESULT.innerText = `Precio total = ${price * units} euros.`;
    } else {
      $RESULT.innerText = "Ha ocurrido un error.";
    }
  }

  function handleReset() {
    $RESULT.innerHTML = "Esperando resultado.";
  }

  $FORM.addEventListener("submit", handleSubmit);
  $FORM.addEventListener("reset", handleReset);
}
