//Ejercicio 5: Crea tres radiobuttons, cuando uno de ellos se seleccione que muestre un mensaje diciendo que opción se seleccionó.
export default function ej5 () {
  const $FORM = document.getElementById('form5');  
  const $OPTIONS = document.querySelectorAll('[name = "radio"]');
  const $OPTIONDISPLAY = document.getElementById('optionDisplay');
    
  function handleClick ( e ) {
    $OPTIONDISPLAY.innerText = e.target.value; 
  }
    
  $OPTIONS.forEach(option => {
    option.addEventListener('click', handleClick);
  });

  $FORM.addEventListener('reset', () => $OPTIONDISPLAY.innerText = 'Esperando click.');
}