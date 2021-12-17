export default function ej15 () {

  const $FORM = document.getElementById('form15');
  const $SALARY = document.getElementById('salary');
  const $SENIORITY = document.getElementById('seniority');
  const $RESULT = document.getElementById('result15');

  function handleSubmit ( e ) {
    
    e.preventDefault();

    const salary = $SALARY.value;
    const seniority = $SENIORITY.value;

    if (salary < 1000) {
      
      if (seniority < 10) {
        $RESULT.innerText = salary * 1.05;
      }
      else {
        $RESULT.innerText = salary * 1.20;
      }

    }
    else {
      $RESULT.innerText = salary;
    }
  }

  $FORM.addEventListener('submit', handleSubmit);
  $FORM.addEventListener('reset', () => $RESULT.innerText = 'Esperando resultado.');
}