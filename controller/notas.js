const db = require("../models/index")
const Nota = db.Nota

exports.viewAll = async (req, res) => {
    const AllNot = await Nota.findAll();
    res.json(AllNot);
}

exports.viewNotasId = async (req, res) => {
    const resultado = await Nota.findByPk(
        req.params.id
    );
    res.json(resultado);
}

exports.insertNotas = async (req, res) => {
    const { id_user, id_materia, notas } = req.body;
    const notaNueva = await Nota.create({ id_user, id_materia, notas }); 
    res.json(notaNueva);
}