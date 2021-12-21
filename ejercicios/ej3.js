export default function ej3() {
  const $FORM = document.getElementById("form3");
  const $NUM1 = document.getElementById("num1");
  const $NUM2 = document.getElementById("num2");

  function handleSubmit(e) {
    e.preventDefault();

    alert($NUM1.value > $NUM2.value ? $NUM1.value : $NUM2.value);
  }

  $FORM.addEventListener("submit", handleSubmit);
}
