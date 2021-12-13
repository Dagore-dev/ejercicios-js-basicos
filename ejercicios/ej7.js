//Programa en el que se ingresen tres notas de un alumno, si el promedio es menor que 5 mostrar el mensaje “Repetidor”, entre 5 y 7 mostrar el mensaje “Superado” y si es mayor o igual a siete mostrar el mensaje ‘Promocionado’. Tener en cuenta que para obtener el promedio debemos operar la suma de las notas, y luego hacer promedio = suma / 3.
import { isFloat } from '../utils/regexp.js';

export default function ej7 () {
  
    const $FORM = document.getElementById('form7');
    const $STUDENTS = document.getElementById('num5');

    function handleSubmit ( e ) {
        
        e.preventDefault();

        let scores = 0;

        for (let i = 0; i < $STUDENTS.value; i++) {

            const score = prompt(`Introduzca la ${i + 1}ª nota del alumno:`);

            if (isFloat.test(score) && score <= 10 && score >= 0) {
                
                scores += parseFloat(score);

            }
            else {
                alert('La última nota no tenía un formato correcto, vuelva a ingresarla.');
                i--;
            }

        }

        const mean = scores / $STUDENTS.value;
        
        alert(`La nota media es ${mean}: ${promotion(mean)}.`)

    }

    function promotion ( studentMean ) {
        
        let result;
        
        if (studentMean < 5) {
            result = 'Repetidor';
        }
        else if (studentMean <= 7) {
            result = 'Superado';
        }
        else {
            result = 'Promocionado';
        }

        return result;
    }

    $FORM.addEventListener('submit', handleSubmit);
}