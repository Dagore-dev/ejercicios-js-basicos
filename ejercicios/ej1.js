//Ejercicio 1: Desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador. Ingresar por teclado un precio con decimales y la cantidad sin decimales, es decir un entero.
export default function ej1 () {
    const $FORM = document.getElementById('form1');
    const $PRICE = document.getElementById('price');
    const $QUANTITY = document.getElementById('quantity');
    const $RESULT = document.getElementById('result1');
    const isFloat = /^\d+(\.|,)?\d*$/;
    const isInteger = /\d+/;

    function handleSubmit ( e ) {
        
        e.preventDefault();

        const price = $PRICE.value;
        const units = $QUANTITY.value;
        
        if (isFloat.test(price) && isInteger.test(units) && units > 0) {
        
            $RESULT.innerText = `Precio total = ${price * units} euros.`;

        }
        else {

            $RESULT.innerText = 'Ha ocurrido un error.'

        }
    }

    function handleReset () {
        $RESULT.innerHTML = 'Esperando resultado.';
    }

    $FORM.addEventListener('submit', handleSubmit);
    $FORM.addEventListener('reset', handleReset);
}