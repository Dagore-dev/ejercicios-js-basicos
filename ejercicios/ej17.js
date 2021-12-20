export default function ej17 () {

  const $FORM = document.getElementById('form17');
  const $MONTH = document.getElementById('month2');
  const $YEAR = document.getElementById('year2');
  const $RESULT = document.getElementById('result17');

  function getDays (month, year) {

    

  }
  
  function handleSubmit ( e ) {
    
    e.preventDefault();

    const month = $MONTH.value;
    const year = $YEAR.value;

    $RESULT.innerText = `El ${month} de ${year} tiene ${getDays(month, year)}`;
  }

  $FORM.addEventListener('submit', handleSubmit);
  $FORM.addEventListener('reset', () => $RESULT.innerText = 'Esperando resultado.');

}