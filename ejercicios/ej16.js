export default function ej16 () {

  const $FORM = document.getElementById('form16');
  const $BRAND = document.getElementById('carBrand');
  const $MODEL = document.getElementById('carModel');

  function handleSubmit ( e ) {

    e.preventDefault();

    console.log('OK');

  }

  $FORM.addEventListener('submit', handleSubmit)
}