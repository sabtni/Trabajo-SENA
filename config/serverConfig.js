require('dotenv').config(); 

const config = {
    PORT: process.env.PORT || 5000, // Usa el puerto definido en .env o 5000 por defecto
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/PARQUE',
    NODE_ENV: process.env.NODE_ENV || 'development'
};

module.exports = config;
