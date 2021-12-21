import { isFloat } from "../utils/regexp.js";

export default function ej13() {
  const $BUTTON = document.getElementById("prompt13");
  const $RESULT = document.getElementById("result13");

  function handleClick() {
    let a = [];

    for (let i = 0; i < 3; i++) {
      const numInput = prompt(`Introduce el número ${i + 1}: `);

      if (isFloat.test(numInput)) {
        a.push(parseFloat(numInput));
      } else {
        alert("Lo último que ha introducido no era un número.");
        i--;
      }
    }

    if (a[0] === a[1] && a[1] === a[2]) {
      $RESULT.innerText = `${a[0]} + ${a[0]} = ${a[0] + a[0]}\n${a[0] + a[0]} * ${a[0]} = ${(a[0] + a[0]) * a[0]}`;
    } else {
      $RESULT.innerText = "Los números no son iguales.";
    }
  }

  $BUTTON.addEventListener("click", handleClick);
}
