const express = require('express');
const router = express.Router();

//Controladores Metodos
const { viewAllUser, viewUser, insertUser, viewNotasUser } = require('../controller/users');

// Apartado de Usuarios
router.get('/saludos', (req, res) => {
    res.json("Usuarios");
})

router.route("/").get( viewNotasUser );
router.route("/:id").get( viewUser );
router.route("/").post( insertUser );
//router.route("/registro").get( viewNotasUser );

module.exports = router;