const getOrders = async (req, res) => {
    try {
        res.json({ message: "Lista de órdenes" });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener órdenes" });
    }
};

const createOrder = async (req, res) => {
    try {
        res.status(201).json({ message: "Orden creada" });
    } catch (error) {
        res.status(500).json({ message: "Error al crear orden" });
    }
};

module.exports = { getOrders, createOrder };
