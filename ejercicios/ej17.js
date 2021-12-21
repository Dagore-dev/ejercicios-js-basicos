export default function ej17() {
  const $FORM = document.getElementById("form17");
  const $MONTH = document.getElementById("month2");
  const $YEAR = document.getElementById("year2");
  const $RESULT = document.getElementById("result17");

  function isLeapYear(year) {
    let isLeapYear;

    if (year % 4 == 0) {
      if (year % 100 == 0 && year % 400 != 0) {
        isLeapYear = false;
      } else {
        isLeapYear = true;
      }
    } else {
      isLeapYear = false;
    }

    return isLeapYear;
  }

  function getDays(month, year) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let result;

    if (month === 1 && isLeapYear(year)) {
      result = 29;
    } else {
      result = days[month];
    }

    return result;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const month = parseInt($MONTH.value);
    const year = parseInt($YEAR.value);

    $RESULT.innerText = `El ${months[month]} de ${year} tiene ${getDays(month,year)} días.`;
  }

  $FORM.addEventListener("submit", handleSubmit);
  $FORM.addEventListener(
    "reset",
    () => ($RESULT.innerText = "Esperando resultado.")
  );
}
