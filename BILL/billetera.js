document.addEventListener("DOMContentLoaded", () => {
    cargarSaldo();
    mostrarHistorial();
    mostrarTarjetas();
});

function recargarSaldo() {
    let monto = prompt("Ingrese el monto a recargar:");
    if (monto && !isNaN(monto) && monto > 0) {
        let saldoActual = parseFloat(localStorage.getItem("saldo") || 0);
        saldoActual += parseFloat(monto);
        localStorage.setItem("saldo", saldoActual);
        document.getElementById("saldo-total").textContent = `$${saldoActual.toFixed(2)}`;

        guardarHistorial(`Recarga de $${monto}`);
        mostrarHistorial();
    } else {
        alert("Por favor, ingrese un monto válido.");
    }
}

function cargarSaldo() {
    let saldo = localStorage.getItem("saldo") || 0;
    document.getElementById("saldo-total").textContent = `$${parseFloat(saldo).toFixed(2)}`;
}

function guardarHistorial(transaccion) {
    let historial = JSON.parse(localStorage.getItem("historial")) || [];
    historial.push(transaccion);
    localStorage.setItem("historial", JSON.stringify(historial));
}

function mostrarHistorial() {
    const historialLista = document.getElementById("historial-transacciones");
    historialLista.innerHTML = "";
    let historial = JSON.parse(localStorage.getItem("historial")) || [];

    historial.forEach(transaccion => {
        let li = document.createElement("li");
        li.textContent = transaccion;
        historialLista.appendChild(li);
    });
}

function mostrarFormularioTarjeta() {
    document.getElementById("formulario-tarjeta").style.display = "flex";
}

function cerrarFormularioTarjeta() {
    document.getElementById("formulario-tarjeta").style.display = "none";
}

function registrarTarjeta() {
    let tipo = document.getElementById("tipo-tarjeta").value;
    let numero = document.getElementById("numero-tarjeta").value;
    let nombre = document.getElementById("nombre-tarjeta").value;

    if (!numero || !nombre) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    let tarjetas = JSON.parse(localStorage.getItem("tarjetas")) || [];
    tarjetas.push({ tipo, numero, nombre });
    localStorage.setItem("tarjetas", JSON.stringify(tarjetas));

    cerrarFormularioTarjeta();
    mostrarTarjetas();
}

function mostrarTarjetas() {
    const listaTarjetas = document.getElementById("lista-tarjetas");
    listaTarjetas.innerHTML = "";
    let tarjetas = JSON.parse(localStorage.getItem("tarjetas")) || [];

    tarjetas.forEach(tarjeta => {
        let li = document.createElement("li");
        li.textContent = `${tarjeta.tipo} - **** **** **** ${tarjeta.numero.slice(-4)}`;
        listaTarjetas.appendChild(li);
    });
}
