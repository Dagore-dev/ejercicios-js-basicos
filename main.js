//Ejercicio 1: Desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador. Ingresar por teclado un precio con decimales y la cantidad sin decimales, es decir un entero.
const $FORM1 = document.getElementById('form1');
const $PRICE = document.getElementById('price');
const $QUANTITY = document.getElementById('quantity');
const $RESULT1 = document.getElementById('result1');
const isNumber = /\d+(.|,)?\d*/;

function handleSubmit1 ( e ) {
  e.preventDefault();
  
  if (isNumber.test($PRICE.value) && isNumber.test($QUANTITY.value)) {
    const price = parseFloat($PRICE.value);
    const quantity = parseInt($QUANTITY.value);
  
    $RESULT1.innerHTML = `Precio total = ${price * quantity} euros.`;
  }
  else {
    $RESULT1.innerHTML = "Ha ocurrido un problema."
  }
}

function handleReset1 () {
  $RESULT1.innerHTML = "Esperando resultado."
}

$FORM1.addEventListener('submit', handleSubmit1);
$FORM1.addEventListener('reset', handleReset1);

//Ejercicio 2: Crear un input y un button, cuando le demos al botón, se añadirá el texto que hemos puesto en el input en un div vacío. Recuerda se añadirá el texto, no se machaca lo que haya en el div.
const $FORM2 = document.getElementById('form2');
const $TEXT = document.getElementById('text');
const $RESULT2 = document.getElementById('result2');

function handleSubmit2 ( e ) {
  e.preventDefault();

  $RESULT2.innerHTML = $TEXT.value;
}

function handleReset2 () {
  $RESULT2.innerHTML = "Esperando input.";
}

$FORM2.addEventListener('submit', handleSubmit2);
$FORM2.addEventListener('reset', handleReset2);

//Ejercicio 3: Crear dos input de números y un botón, al pulsar el botón, mostrar en un alert quien es el mayor de los dos.
const $FORM3 = document.getElementById('form3');
const $NUM1 = document.getElementById('num1');
const $NUM2 = document.getElementById('num2');

function handleSubmit3 ( e ) {
  e.preventDefault();

  alert($NUM1.value > $NUM2.value ? $NUM1.value : $NUM2.value);
}

$FORM3.addEventListener('submit', handleSubmit3);

//Ejercicio 4: Dado un input y un botón, escribir nombres de personas (solo controlamos que no esté vacío) y lo mostramos en una lista desordenada.
const $FORM4 = document.getElementById('form4');
const $INSERT = document.getElementById('insert');
const $LIST = document.getElementById('list');

function handleSubmit4 ( e ) {
  
  e.preventDefault();

  const insert = $INSERT.value;

  if (insert !== "") {
    $LIST.innerHTML += `<li>${insert}</li>`;
  }

  $FORM4.reset();
}

$FORM4.addEventListener('submit', handleSubmit4);

//Ejercicio 5: Crea tres radiobuttons, cuando uno de ellos se seleccione que muestre un mensaje diciendo que opción se seleccionó.
const $OPTIONS = document.querySelectorAll('[name = "radio"]');
const $OPTIONDISPLAY = document.getElementById('optionDisplay');

function handleClick1 ( e ) {
  $OPTIONDISPLAY.innerText = e.target.value; 
}

$OPTIONS.forEach(option => {
  option.addEventListener('click', handleClick1);
});