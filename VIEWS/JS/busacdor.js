document.getElementById("buscador").addEventListener("keyup", function() {
    let filtro = this.value.toLowerCase();
    let platos = document.querySelectorAll(".item");

    platos.forEach(function(plato) {
        let nombre = plato.innerText.toLowerCase();
        if (nombre.includes(filtro)) {
            plato.style.display = "block";
        } else {
            plato.style.display = "none";
        }
    });
});