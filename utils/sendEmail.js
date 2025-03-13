const nodemailer = require('nodemailer');
require('dotenv').config(); // Cargar variables de entorno desde .env

const sendEmail = async (to, subject, text) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Tu correo desde .env
                pass: process.env.EMAIL_PASS  // Tu contraseña desde .env
            }
        });

        let mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text
        };

        let info = await transporter.sendMail(mailOptions);
        console.log('📩 Correo enviado: ', info.response);
    } catch (error) {
        console.error('❌ Error enviando correo: ', error);
    }
};

module.exports = sendEmail;
