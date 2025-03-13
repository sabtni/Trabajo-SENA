require('dotenv').config();
console.log("MONGO_URI:", process.env.MONGO_URI);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const routes = require("./routes/index");

const app = express();

app.use(helmet());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Limite de 100 solicitudes por IP
    message: "Demasiadas solicitudes desde esta IP, intenta de nuevo más tarde."
}));

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api", routes);

// Conexión a MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB conectado"))
    .catch((err) => {
        console.error("❌ Error conectando MongoDB:", err);
        process.exit(1); // Cierra la app si falla la conexión
    });

app.get("/", (req, res) => {
    res.status(200).json({ mensaje: "Servidor corriendo correctamente 🚀" });
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack); // Log del error en la consola
    res.status(500).json({ message: "Algo salió mal" }); // Respuesta al cliente
});

// Crear servidor HTTP manualmente
const http = require('http');
const server = http.createServer(app); // Usamos http.createServer para crear el servidor

// Configuración del puerto y arrancar el servidor
const PORT = process.env.PORT || 5002;
server.listen(PORT, () => {
    console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`);
});
