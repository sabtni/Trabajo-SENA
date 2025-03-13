const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const productRoutes = require("../models/product");
const orderRoutes = require("./orderRoutes");

// Definir rutas con prefijos adecuados
router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);

module.exports = router;
