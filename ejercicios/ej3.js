//Ejercicio 3: Crear dos input de números y un botón, al pulsar el botón, mostrar en un alert quien es el mayor de los dos.
export default function ej3 () {
    const $FORM = document.getElementById('form3');
    const $NUM1 = document.getElementById('num1');
    const $NUM2 = document.getElementById('num2');

    function handleSubmit ( e ) {
        e.preventDefault();

        alert($NUM1.value > $NUM2.value ? $NUM1.value : $NUM2.value);
    }

    $FORM.addEventListener('submit', handleSubmit);
}