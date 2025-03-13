<?php
// Aquí podrías colocar funciones PHP si necesitas alguna para tu página.
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El Rincón del Gourmet</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="logo">
            <h1>El Rincón del Gourmet</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#menu">Menú</a></li>
                <li><a href="#reserva">Reservas</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Sección de Inicio -->
        <section id="inicio">
            <h2>Bienvenidos a El Rincón del Gourmet</h2>
            <p>Disfruta de una experiencia gastronómica única con nuestros platos exquisitos.</p>
        </section>

        <!-- Sección de Menú -->
        <section id="menu">
            <h2>Menú</h2>
            <h3>Entradas</h3>
            <ul>
                <li>Ensalada César - $10</li>
                <li>Sopa del día - $8</li>
            </ul>
            <h3>Platos principales</h3>
            <ul>
                <li>Filete Mignon - $25</li>
                <li>Spaghetti Bolognese - $15</li>
            </ul>
            <h3>Postres</h3>
            <ul>
                <li>Pastel de Chocolate - $7</li>
                <li>Helado de Vainilla - $5</li>
            </ul>
        </section>

        <!-- Sección de Reservas -->
        <section id="reserva">
            <h2>Reserva tu mesa</h2>
            <form action="index.php" method="POST">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required>
                <label for="fecha">Fecha:</label>
                <input type="date" id="fecha" name="fecha" required>
                <label for="hora">Hora:</label>
                <input type="time" id="hora" name="hora" required>
                <label for="personas">Número de personas:</label>
                <input type="number" id="personas" name="personas" required>
                <button type="submit">Reservar</button>
            </form>
            <?php
            // Procesar el formulario de reserva
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $nombre = $_POST['nombre'];
                $email = $_POST['email'];
                $fecha = $_POST['fecha'];
                $hora = $_POST['hora'];
                $personas = $_POST['personas'];

                echo "<p>Reserva guardada con éxito para $nombre. Fecha: $fecha, Hora: $hora, Personas: $personas.</p>";
            }
            ?>
        </section>

        <!-- Sección de Contacto -->
        <section id="contacto">
            <h2>Contacto</h2>
            <form method="POST" action="contacto.php">
                <label for="nombre_contacto">Nombre:</label>
                <input type="text" id="nombre_contacto" name="nombre_contacto" required>
                <label for="email_contacto">Correo Electrónico:</label>
                <input type="email" id="email_contacto" name="email_contacto" required>
                <label for="mensaje_contacto">Mensaje:</label>
                <textarea id="mensaje_contacto" name="mensaje_contacto" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 El Rincón del Gourmet - Todos los derechos reservados</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>
