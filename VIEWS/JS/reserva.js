document.addEventListener("DOMContentLoaded", () => {
    mostrarHistorial();
});

function reservarMesa() {
    const fecha = document.getElementById("fecha").value;
    const personas = document.getElementById("personas").value;
    const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");

    if (!fecha || personas < 1 || personas > 5) {
        alert("Por favor, selecciona una fecha y un número válido de personas.");
        return;
    }

    // Guardar reserva en historial
    const reserva = {
        fecha,
        personas
    };
    guardarReserva(reserva);

    mensajeConfirmacion.innerHTML = `
        ✅ ¡Tu reserva ha sido realizada con éxito!<br>
        📅 Fecha: <strong>${fecha}</strong><br>
        👥 Personas: <strong>${personas}</strong><br>
        ✨ Disfruta de una experiencia inolvidable en <strong>El Rincón del Gourmet</strong>.
    `;

    mensajeConfirmacion.style.display = "block";
    mostrarHistorial();
}

function guardarReserva(reserva) {
    let historial = JSON.parse(localStorage.getItem("historialReservas")) || [];
    historial.push(reserva);
    localStorage.setItem("historialReservas", JSON.stringify(historial));
}

function mostrarHistorial() {
    const historialReservas = document.getElementById("historialReservas");
    historialReservas.innerHTML = "";
    let historial = JSON.parse(localStorage.getItem("historialReservas")) || [];

    historial.forEach((reserva, index) => {
        let li = document.createElement("li");
        li.innerHTML = `📅 <strong>${reserva.fecha}</strong> - 👥 ${reserva.personas} personas`;
        historialReservas.appendChild(li);
    });
}
