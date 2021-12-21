export default function ej4() {
  const $FORM = document.getElementById("form4");
  const $INSERT = document.getElementById("insert");
  const $LIST = document.getElementById("list");

  function handleSubmit(e) {
    e.preventDefault();

    const insert = $INSERT.value;

    if (insert !== "") {
      $LIST.innerHTML += `<li>${insert}</li>`;
    }

    $INSERT.value = "";
  }

  $FORM.addEventListener("submit", handleSubmit);
  $FORM.addEventListener("reset", () => ($LIST.innerHTML = ""));
}
