let form1 = document.getElementById("form1");
// Inputs

let calcularvalor = document.getElementById("valor");
let pagar = document.getElementById("pagar");
//Informacion de valor
let cotizacionFinal = document.getElementById("cotizacionFinal");


form1.addEventListener("submit", calcularValor);

let listaMonedas;
let storagedMonedas;

listaMonedas = JSON.parse(localStorage.getItem("listaMonedas")) || []

const precioFinal = () => {
    let storaged = listaMonedas;
    storagedMonedas = [];

    for (const objeto of storaged) {
        console.log(objeto)
        storagedMonedas.push(new Precio(objeto));
    }
    console.log(storagedMonedas)

    for (const precio of storagedMonedas);
    let firstDiv = document.createElement("div");
    firstDiv.className = "card";
    firstDiv.innerHTML = `<div class="card-body">
    <h5 class="card-title">Cotizacion Final</h5>
</div>
<ul id="cotizacionFinal" class="list-group list-group-flush">
    <li class="list-group-item">${precio.type}</li>
    <li class="list-group-item">${precio.cantidad}</li>
    <li class="list-group-item">${precio.modo}</li>
</ul>
<div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-primary" id="pagar" type="submit">Proceder con el pago</button>
</div>`;



}

const cotizacion = (valor) => {
    //console.log(valor)
    listaMonedas.push(valor);
    //console.log(listaMonedas)
    localStorage.setItem("listaMonedas", JSON.stringify(listaMonedas))
    precioFinal();


}

/**
* Agrega un nuevo plan al Storage
* @param {Object} plan 
*/

function calcularValor(e) {
    // Inputs
    let seleccionMoneda = document.getElementById("seleccionMoneda").value;
    let compraVenta = document.getElementById("compraVenta").value;
    let cantidad = document.getElementById("cantidad").value;

    e.preventDefault();

    let valor = {
        type: seleccionMoneda,
        cantidad: cantidad,
        modo: compraVenta,
    }

    cotizacion(valor);

    


}
