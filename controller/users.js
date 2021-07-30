const db = require("../models/index");
const User = db.User
const Notas = db.Notas

exports.viewAllUser = async (req, res) => {
    const resultado = await Users.findAll();
    res.json(resultado);
}

exports.viewUser = async (req, res) => {
    const resultado = await Users.findByPk(
        req.params.id
    );
    res.json(resultado);
}

exports.insertUser = async (req, res) => {
    const { firstName, lastName, age } = req.body;
    const usuarioNuevo = await Users.create({ firstName, lastName, age }); 
    res.json(usuarioNuevo);
}

exports.viewNotasUser = async (req, res) => {
    const ver_usuarios_clases = await User.findAll({
        include: [{ 
            model: Notas,
            as: "notas",
            required: true,
            //attributes: []
        }]
    });
    res.json(ver_usuarios_clases);
}