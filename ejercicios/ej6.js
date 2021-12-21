export default function ej6() {
  const $FORM = document.getElementById("form6");
  const $NUM1 = document.getElementById("num3");
  const $NUM2 = document.getElementById("num4");
  const $RESULT = document.getElementById("result6");

  function handleSubmit(e) {
    e.preventDefault();

    const num1 = parseInt($NUM1.value);
    const num2 = parseInt($NUM2.value);

    if (num1 > num2) {
      $RESULT.innerText = `${num1} + ${num2} = ${num1 + num2}\n${num1} - ${num2} = ${num1 - num2}`;
    } else {
      $RESULT.innerText = `${num1} x ${num2} = ${num1 * num2}\n${num1} / ${num2} = ${num1 / num2}`;
    }
  }

  $FORM.addEventListener("submit", handleSubmit);
  $FORM.addEventListener(
    "reset",
    () => ($RESULT.innerText = "Esperando resultado.")
  );
}
