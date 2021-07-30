const db = require("../models/index")
const Notas = db.Notas

exports.viewAll = async (req, res) => {
    const AllNot = await Notas.findAll();
    res.json(AllNot);
}

exports.viewNotasId = async (req, res) => {
    const resultado = await Notas.findByPk(
        req.params.id
    );
    res.json(resultado);
}

exports.insertNotas = async (req, res) => {
    const { id_user, id_materia, notas } = req.body;
    const notaNueva = await Notas.create({ id_user, id_materia, notas }); 
    res.json(notaNueva);
}