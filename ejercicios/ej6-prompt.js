// Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo.
export default function ej6Prompt () {
  const $BUTTON = document.getElementById('prompt6');

  function handleClick () {
    const num1 = parseInt(prompt('Introduce el primer número'));
    const num2 = parseInt(prompt('Introduce el segundo número'));

    if (num1 > num2) {
      alert(`${num1} + ${num2} = ${num1 + num2}\n${num1} - ${num2} = ${num1 - num2}`);
    }
    else {
      alert(`${num1} x ${num2} = ${num1 * num2}\n${num1} / ${num2} = ${num1 / num2}`);
    }
  }
  
  $BUTTON.addEventListener('click', handleClick);
}