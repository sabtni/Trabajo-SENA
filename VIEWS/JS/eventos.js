document.addEventListener("DOMContentLoaded", function() {
    const eventosLista = document.getElementById("eventos-lista");
    const historialReservas = document.getElementById("historial-reservas");

    // Lista de eventos
    const eventos = [
        { nombre: "Noche de Catas de Vino", fecha: "15 de Marzo", descripcion: "Explora los mejores vinos maridados con deliciosos quesos." },
        { nombre: "Cena Romántica Bajo las Estrellas", fecha: "22 de Marzo", descripcion: "Disfruta de una cena especial con música en vivo." },
        { nombre: "Festival de Tapas Gourmet", fecha: "5 de Abril", descripcion: "Descubre una variedad de tapas exclusivas de nuestra cocina." },
        { nombre: "Maridaje de Cocteles y Entradas", fecha: "18 de Abril", descripcion: "Una noche de sabores únicos combinando cócteles y entradas gourmet." },
        { nombre: "Noche de Pastas Italianas", fecha: "25 de Abril", descripcion: "Disfruta de un buffet de pastas caseras con salsas deliciosas." },
        { nombre: "Día del Asado Argentino", fecha: "3 de Mayo", descripcion: "Degusta auténticas carnes asadas al estilo argentino." },
        { nombre: "Dulces Tentaciones: Postres y Chocolates", fecha: "12 de Mayo", descripcion: "Un festín de postres y chocolates artesanales." },
        { nombre: "Cena Internacional: Sabores del Mundo", fecha: "20 de Mayo", descripcion: "Platos representativos de diferentes países en una sola noche." },
        { nombre: "Cena de Alta Cocina Francesa", fecha: "10 de Junio", descripcion: "Deléitate con una cena inspirada en la cocina francesa clásica." },
        { nombre: "Fiesta Mexicana: Tacos y Tequila", fecha: "24 de Junio", descripcion: "Una noche vibrante con tacos gourmet y una selección de tequilas." },
        { nombre: "Experiencia Gastronómica de Mariscos", fecha: "8 de Julio", descripcion: "Un recorrido por los mejores platillos de mariscos frescos." },
        { nombre: "Cocina Fusión: Oriente y Occidente", fecha: "22 de Julio", descripcion: "Descubre sabores innovadores mezclando lo mejor de Asia y Europa." },
        { nombre: "Noche de Hamburguesas Gourmet", fecha: "5 de Agosto", descripcion: "Prueba hamburguesas premium con ingredientes únicos." },
        { nombre: "Evento Vegano: Sabores Naturales", fecha: "19 de Agosto", descripcion: "Menú exclusivo para amantes de la comida saludable y plant-based." },
        { nombre: "Especial de BBQ y Costillas", fecha: "2 de Septiembre", descripcion: "Degusta costillas jugosas y carnes ahumadas en una noche especial." },
        { nombre: "Café y Repostería Artesanal", fecha: "16 de Septiembre", descripcion: "Disfruta de una cata de cafés y postres elaborados a mano." },
        { nombre: "Noche de Sushi y Sake", fecha: "30 de Septiembre", descripcion: "Explora el arte del sushi acompañado de sake tradicional japonés." },
        { nombre: "Fiesta Española: Tapas y Flamenco", fecha: "14 de Octubre", descripcion: "Saborea tapas españolas con un espectáculo de flamenco en vivo." },
        { nombre: "Noche de Degustación de Quesos y Vinos", fecha: "28 de Octubre", descripcion: "Descubre una selección de quesos artesanales con vinos premium." },
        { nombre: "Especial de Navidad: Cena de Lujo", fecha: "24 de Diciembre", descripcion: "Una cena festiva con platillos tradicionales de Navidad." }
    ];

    // Cargar eventos en la página
    eventos.forEach((evento, index) => {
        const eventoDiv = document.createElement("div");
        eventoDiv.classList.add("evento");

        eventoDiv.innerHTML = `
            <h3>${evento.nombre}</h3>
            <p><strong>Fecha:</strong> ${evento.fecha}</p>
            <p>${evento.descripcion}</p>
            <button class="boton-reservar" onclick="reservarEvento(${index})">Reservar</button>
        `;

        eventosLista.appendChild(eventoDiv);
    });

    // Función para reservar un evento
    window.reservarEvento = function(index) {
        const evento = eventos[index];
        const reserva = document.createElement("li");
        reserva.textContent = `Reserva para ${evento.nombre} - ${evento.fecha}`;
        historialReservas.appendChild(reserva);
        alert(`Reserva realizada para ${evento.nombre} el ${evento.fecha}. ¡Te esperamos en El Rincón del Gourmet!`);
    };
});
