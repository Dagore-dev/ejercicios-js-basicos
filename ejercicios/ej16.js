export default function ej16 () {

  const $FORM = document.getElementById('form16');
  const $BRAND = document.getElementById('carBrand');
  const $MODEL = document.getElementById('carModel');
  const $RESULT = document.getElementById('result16');

  const DISCOUNTS = {
    'renault': 15,
    'ford': {
      'fiesta': 7,
      'focus': 10
    }
  }

  function handleSubmit ( e ) {

    e.preventDefault();

    const brand = $BRAND.value.toLowerCase();
    const model = $MODEL.value.toLowerCase();

    if (DISCOUNTS[brand]) {
      
      if (typeof DISCOUNTS[brand] === 'number') {
        
        $RESULT.innerText = `El ${brand} ${model} tiene un descuento del ${DISCOUNTS[brand]}%.`;

      }
      else {

        if (DISCOUNTS[brand][model]) {

          $RESULT.innerText = `El ${brand} ${model} tiene un descuento del ${DISCOUNTS[brand][model]}%.`;

        }
        else {

          $RESULT.innerText = `El ${brand} ${model} tiene un descuento del 5%.`;
          
        }

      }

    }
    else {
      $RESULT.innerText = `El ${brand} ${model} tiene un descuento del 5%.`;
    }

  }

  $FORM.addEventListener('submit', handleSubmit);
  $FORM.addEventListener('reset', () => $RESULT.innerText = 'Esperando resultado.');
}