export default function ej18() {
  const $FORM = document.getElementById("form18");
  const $HEIGHT = document.getElementById("height");
  const $AGE = document.getElementById("age");
  const GENDER = document.getElementById("gender");
  const $RESULT = document.getElementById("result18");

  function handleSubmit(e) {
    e.preventDefault();

    let result;
    const height = parseFloat($HEIGHT.value);
    const age = parseFloat($AGE.value);
    const gender = GENDER.value;

    result = 50 + ((height - 150) / 4) * 3 + (age - 20) / 4;

    if (gender === "female") {
      result *= 0.9;
    }

    $RESULT.innerText = `Su peso recomendado es ${result} kg.`;
  }

  $FORM.addEventListener("submit", handleSubmit);
  $FORM.addEventListener(
    "reset",
    () => ($RESULT.innerText = "Esperando resultado.")
  );
}
