/*
dolar
euro
real
cripto
cantidad
message
//Monedas disponibles
let dolar = document.getElementById("dolar")
let euro = document.getElementById("euro")
let real = document.getElementById("real")
let cripto = document.getElementById("cripto")
// Cantidad que quiera el usuario
let cantidad = document.getElementById("cantidad")
//Aqui tendria que salir la moneda y cantidad multiplicado el precio
let message = document.getElementById("message")
*/
function moneda(tipo, precio){
    this.tipo = tipo.toUpperCase();
    this.precio = parseFloat(precio);
    this.cantidad = function(){
        this.precio = this.precio ;
    }
}

const monedas = [];
monedas.push(new moneda("Dolar", "740"));
monedas.push(new moneda("Euro", "815"));
monedas.push(new moneda("Peso Chileno", "0.45"));
monedas.push(new moneda("Real", "72"));
console.log(monedas)
for (const moneda of monedas){
    moneda.cantidad();
    console.log('moneda = ' + moneda.tipo + ' precio = ' + moneda.precio)
}

let compra = (prompt("¿Que tipo de moneda quieres comprar?"));
let Cantidad = +(prompt("¿Que cantidad quieres comprar?"));
if (compra === "dolar" || compra === "Dolar" || compra === "DOLAR")
alert("Tu compra de Dolares" + " " + "en pesos es" + " " + Cantidad * this.precio );
