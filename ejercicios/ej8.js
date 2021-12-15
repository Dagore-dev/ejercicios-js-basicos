export default function ej8 () {
  
  const $BUTTON = document.getElementById('prompt8');
  const $RESULT = document.getElementById('result8');
  
  function handleClick () {
    const num1 = parseFloat(prompt('Primer número: '));
    const num2 = parseFloat(prompt('Segundo número: '));
    const num3 = parseFloat(prompt('Tercer número: '));
    let result;
    
    if (num1 > num2) {
      
      if (num1 > num3) {
        result = num1;  
      }
      else {
        result = num3
      }

    }
    else {

      if (num2 > num3) {
        result = num2;
      }
      else{
        result = num3;
      }

    }

    $RESULT.innerText = `El mayor de los tres es ${result}`;
  }

  $BUTTON.addEventListener('click', handleClick)
}