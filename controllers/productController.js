import Product, { find } from '../models/product'; // Ruta corregida

// Obtener todos los productos
const getProducts = async (req, res) => {
    try {
        const products = await find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos', error });
    }
};

// Crear un producto nuevo
const createProduct = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
        const newProduct = new Product({ name, price, stock });
        await newProduct.save();
        res.status(201).json({ message: 'Producto creado con éxito', product: newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear producto', error });
    }
};

export default { getProducts, createProduct }; // 🔹 Exportación correcta
