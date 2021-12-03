//Ejercicio 4: Dado un input y un botón, escribir nombres de personas (solo controlamos que no esté vacío) y lo mostramos en una lista desordenada.
export default function ej4 () {
    const $FORM = document.getElementById('form4');
    const $INSERT = document.getElementById('insert');
    const $LIST = document.getElementById('list');

    function handleSubmit ( e ) {
    
        e.preventDefault();

        const insert = $INSERT.value;

        if (insert !== '') {
            $LIST.innerHTML += `<li>${insert}</li>`;
        }

        $INSERT.value = '';
    }

    $FORM.addEventListener('submit', handleSubmit);
    $FORM.addEventListener('reset', () => $LIST.innerHTML = '');
}