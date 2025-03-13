const express = require("express");
const router = express.Router();
const { getUsers, createUser } = require("../controllers/userController"); // Asegúrate de que la ruta sea correcta

router.get("/", getUsers); // GET /api/users
router.post("/", createUser); // POST /api/users

module.exports = router;
