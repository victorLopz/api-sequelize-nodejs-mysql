const express = require('express');
const router = express.Router();

//Controladores Metodos
const { viewAll, viewNotasId, insertNotas } = require('../controller/notas');

// Apartado de Usuarios
router.get('/saludos', (req, res) => {
    res.json("Notas");
})

router.route("/").get( viewAll );
router.route("/:id").get( viewNotasId );
router.route("/").post( insertNotas );

module.exports = router;