export default function ej20() {
  const $FORM = document.getElementById("form20");
  const $BI = document.getElementById("bi");
  const $IVA = document.getElementById("iva");
  const $WEIGHT = document.getElementById("weight");
  const $RESULT = document.getElementById("result20");

  function shippingPrice(weight) {
    let result;

    if (weight < 1) {
      result = 3;
    } else if (weight < 3) {
      result = 5;
    } else {
      result = 10;
    }

    return result;
  }

  function finalPrice(bi, iva, shipping) {
    return bi + bi * (iva / 100) + shipping;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const bi = parseFloat($BI.value);
    const iva = parseFloat($IVA.value);
    const weight = parseFloat($WEIGHT.value);
    const shipping = shippingPrice(weight);

    $RESULT.innerText = `Precio total: ${finalPrice(bi, iva, shipping)} euros.`;
  }

  $FORM.addEventListener("submit", handleSubmit);
  $FORM.addEventListener(
    "reset",
    () => ($RESULT.innerText = "Esperando resultado.")
  );
}
