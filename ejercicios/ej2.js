export default function ej2() {
  const $FORM = document.getElementById("form2");
  const $TEXT = document.getElementById("text");
  const $RESULT = document.getElementById("result2");

  function handleSubmit(e) {
    e.preventDefault();

    $RESULT.innerText += $TEXT.value;

    $TEXT.value = "";
  }

  $FORM.addEventListener("submit", handleSubmit);
  $FORM.addEventListener("reset", () => ($RESULT.innerText = ""));
}
