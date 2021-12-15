export default function ej12 () {

  const $FORM = document.getElementById('form12');
  const $DAY = document.getElementById('day');
  const $MONTH = document.getElementById('month');

  function handleSubmit ( e ) {
    
    e.preventDefault();

    if ($DAY.value === "25" && $MONTH.value === "diciembre") {
      alert("ES NAVIDAD!!!");
    }
    else{
      alert("Aún no es navidad.");
    }
  }
  
  $FORM.addEventListener('submit', handleSubmit);
}