//Ejercicio 1: Desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador. Ingresar por teclado un precio con decimales y la cantidad sin decimales, es decir un entero.
export default function ej1Prompt () {

    const $BUTTON = document.getElementById('prompt1');
    const isFloat = /^\d+(\.|,)?\d*$/;
    const isInteger = /\d+/;

    function handleClick () {
        const price = prompt('Introduzca el precio del artículo (un número que puede ser decimal):');
        const units = prompt('Introduzca el número de unidades que ha comprado (un entero mayor o igual a 1):')

        if (isFloat.test(price) && isInteger.test(units) && units > 0) {
            
            alert(`El total asciende a ${price * units} euros.`);

        }
        else {
            
            alert('Ha ocurrido un error.');
            
        }
    }

    $BUTTON.addEventListener('click', handleClick);

}