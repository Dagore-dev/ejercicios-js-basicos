export default function ej14() {
  const $FORM = document.getElementById("form14");
  const $NAME = document.getElementById("name");
  const $QUESTIONS = document.getElementById("num6");
  const $CORRECT = document.getElementById("num7");
  const $RESULT = document.getElementById("result14");

  function handleSubmit(e) {
    e.preventDefault();

    const name = $NAME.value;
    const questions = parseInt($QUESTIONS.value);
    const correct = parseInt($CORRECT.value);

    if (questions >= correct) {
      $RESULT.innerText = `${name} => ${getLevel(questions, correct)}.`;
    } else {
      $RESULT.innerText = "Algo ha ido mal.";
    }
  }

  function getLevel(questions, correct) {
    let result;
    const percentage = Math.round((correct / questions) * 100);

    if (percentage < 50) {
      result = "Fuera de nivel";
    } else if (percentage < 75) {
      result = "Nivel bajo";
    } else if (percentage < 90) {
      result = "Nivel medio";
    } else {
      result = "Nivel superior";
    }

    return result;
  }

  $FORM.addEventListener("submit", handleSubmit);
  $FORM.addEventListener(
    "reset",
    () => ($RESULT.innerText = "Esperando resultado.")
  );
}
