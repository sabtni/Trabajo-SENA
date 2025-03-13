const express = require("express");
const Product = require("../models/product");
const router = express.Router();

// Agregar un nuevo producto (POST /api/products)
router.post("/", async (req, res) => {
    try {
        const { name, price, category } = req.body;
        const newProduct = new Product({ name, price, category });
        await newProduct.save();
        res.status(201).json({ message: "Producto agregado con éxito", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Error al agregar producto", error });
    }
});

// Obtener todos los productos (GET /api/products)
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos", error });
    }
});

module.exports = router;
