require('dotenv').config(); 
const mongoose = require("mongoose");
const Product = require("./models/product");  // Asegúrate de importar tu modelo

mongoose.connect("mongodb://127.0.0.1:27017/PARQUE", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    console.log("✅ Conectado a MongoDB");

    // Crear un producto de prueba
    const newProduct = new Product({
        name: "Hamburguesa BBQ",
        price: 30.99,
        category: "Comida"
    });

    await newProduct.save();
    console.log("🎉 Producto agregado y colección creada");

    mongoose.connection.close(); // Cerrar conexión después de insertar
})
.catch(err => console.error("❌ Error:", err));
