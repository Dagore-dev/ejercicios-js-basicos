export default function ej19() {
  const $CASH = document.getElementById("cash");
  const $FORM = document.getElementById("form19");
  const $BET = document.getElementById("bet");
  const $DICE = document.getElementById("diceResult");
  const $SUBMIT = document.getElementById("submit19");

  function diceResult() {
    return Math.floor(Math.random() * 6 + 1);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const result = diceResult();
    const cash = parseFloat($CASH.dataset.cash);
    const bet = parseFloat($BET.value);
    const dice = parseInt($DICE.value);
    let newCash;

    if (result === dice) {
      newCash = cash + bet;

      if (newCash >= 200) {
        alert(`Ha ganado el juego, se retira con ${newCash}`);
        $SUBMIT.toggleAttribute("disabled", true);
      } else {
        alert(`Gana con un ${result}, ahora tiene ${newCash} euros.`);
      }

      $CASH.dataset.cash = `${newCash}`;
      $CASH.innerText = `Disponible: ${newCash} euros.`;
    } else {
      newCash = cash - bet;

      if (newCash <= 0) {
        alert(
          `Ha salido un ${result} y apostó por el ${dice}. Se retira por falta de fondos.`
        );
      } else {
        alert(
          `Ha salido un ${result} y apostó por el ${dice}, ahora tiene ${newCash} euros.`
        );
      }

      $CASH.dataset.cash = `${cash - bet}`;
      $CASH.innerText = `Disponible: ${newCash} euros.`;
    }
  }

  function handleReset() {
    $CASH.innerText = "Disponible: 50 euros.";
    $CASH.dataset.cash = "50";
    $SUBMIT.toggleAttribute("disabled", false);
  }

  $FORM.addEventListener("submit", handleSubmit);
  $FORM.addEventListener("reset", handleReset);
}
