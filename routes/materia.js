const express = require('express');
const router = express.Router();

//Controladores Metodos
const { viewAllMaterias, viewMaterias, insertMaterias } = require('../controller/materia');

// Apartado de Usuarios
router.get('/saludos', (req, res) => {
    res.json("Materias");
})

router.route("/").get( viewAllMaterias );
router.route("/:id").get( viewMaterias );
router.route("/").post( insertMaterias );

module.exports = router;