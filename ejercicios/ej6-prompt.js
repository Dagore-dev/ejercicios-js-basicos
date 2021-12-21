export default function ej6Prompt() {
  const $BUTTON = document.getElementById("prompt6");

  function handleClick() {
    const num1 = parseInt(prompt("Introduce el primer número"));
    const num2 = parseInt(prompt("Introduce el segundo número"));

    if (num1 > num2) {
      alert(
        `${num1} + ${num2} = ${num1 + num2}\n${num1} - ${num2} = ${num1 - num2}`
      );
    } else {
      alert(
        `${num1} x ${num2} = ${num1 * num2}\n${num1} / ${num2} = ${num1 / num2}`
      );
    }
  }

  $BUTTON.addEventListener("click", handleClick);
}
