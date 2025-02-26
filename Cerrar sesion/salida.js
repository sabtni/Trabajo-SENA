function cerrarSesion() {
    document.querySelector(".botones").style.display = "none";
    document.querySelector("p").style.display = "none";
    document.getElementById("mensaje-despedida").style.display = "block";
}

function cancelarCierre() {
    alert("Has cancelado el cierre de sesión. ¡Sigue disfrutando de El Rincón del Gourmet!");
}
