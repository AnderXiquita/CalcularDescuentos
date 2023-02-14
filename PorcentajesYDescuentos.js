const body = document.querySelector(".body");
const P = document.querySelector("#precio");
const D = document.querySelector("#descuento");
const calc = document.querySelector(".calc");
const clear = document.querySelector(".clear");
const resultado = document.querySelector(".Total");
const abrirCupon = document.querySelector(".cupon");
const cupon = document.querySelector(".cupon_container");
const codigoCupon = document.querySelector("#codigo");
const canjearCupon = document.querySelector(".canjear-cupon");
const cerrarCupon = document.querySelector(".cerrar-cupon");
const mensaje1 = document.querySelector(".ms1_precioActual");
const mensaje2 = document.querySelector(".ms1_cupon");
const mensaje3 = document.querySelector(".ms2_cupon");

calc.addEventListener('click', calcularDescuento);
clear.addEventListener('click', limpiarImputs);
abrirCupon.addEventListener('click', cuponDescuentoWindow);
canjearCupon.addEventListener('click', canjearCodigoCupon);
cerrarCupon.addEventListener('click', cerrarCuponWindow);

const codigosDescuento = {
    mameyc: 50,
    codigoo: 40,
    anderX: 80,
    fffff: 20,
    pta: 30,
    ricardo: 100,
    jeje32: 2
};

function calcularDescuento() {

    if (P.value == "" || D.value == "") {
        return resultado.innerText = 'Por favor llena los campos';
    } else if (D.value > 100 || D.value <= 0) {
        return resultado.innerText = 'Valor de Descuento (%) invalido';
    }else if (P.value == 0) {
        return resultado.innerText = 'Valor de Precio invalido';
    } else {
        let total = (P.value * (100 - D.value))/100;
        let T = Number(total);

        resultado.innerText = `El total a pagar seria  $${T}`;
    }

}

function limpiarImputs() {
    P.value = "";
    D.value = "";
    resultado.innerText = "";
}

function cuponDescuentoWindow() {
    if (P.value == "" || P.value <= 0) {
        return resultado.innerText = 'Tienes que ingresar el precio para poder canjear un cupon';
    } else {
        mensaje1.innerText = `Precio actual: $${P.value}`;
        resultado.innerText = "";
        canjearCupon.classList.remove("inactive");
        cupon.classList.remove("inactive");
        body.classList.add("filter");
    }
}

function canjearCodigoCupon() {
    if (codigoCupon.value == "") {
        mensaje2.innerText = "Ingresa un codigo por favor";
    } else if (codigosDescuento[codigoCupon.value]) {
        canjearCupon.classList.add("inactive");
        mensaje1.innerHTML = `Precio anterior: <span class = "tach">$${P.value}</span> - <span class = "porc">${codigosDescuento[codigoCupon.value]}%</span>`;
        mensaje2.innerText = `¡Felicidades! ahora tu total a pagar es de: `;

        let total = (P.value * (100 - codigosDescuento[codigoCupon.value]))/100;
        let T = Number(total);

        mensaje3.innerText = `$${T}`;
    } else {
        canjearCupon.classList.add("inactive");
        mensaje2.innerText = "Codigo Inexistente";
    }
}


function cerrarCuponWindow() {
    P.value = "";
    D.value = "";
    cupon.classList.add("inactive");
    body.classList.remove("filter");
    codigoCupon.value = "";
    mensaje2.innerText = "";
    mensaje3.innerText = "";
}


