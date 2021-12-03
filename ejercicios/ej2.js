//Ejercicio 2: Crear un input y un button, cuando le demos al botón, se añadirá el texto que hemos puesto en el input en un div vacío. Recuerda se añadirá el texto, no se machaca lo que haya en el div.
export default function ej2 () {
    const $FORM = document.getElementById('form2');
    const $TEXT = document.getElementById('text');
    const $RESULT = document.getElementById('result2');

    function handleSubmit ( e ) {
        
        e.preventDefault();

        $RESULT.innerText += $TEXT.value;

        $TEXT.value = '';
    }

    $FORM.addEventListener('submit', handleSubmit);
    $FORM.addEventListener('reset', () => $RESULT.innerText = '');
}