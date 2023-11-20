const db = require('../models/index');
const Materia = db.Materia;

exports.viewAllMaterias = async ( req, res) => {
    const resultado = await Materia.findAll();
    res.json(resultado);
}

exports.viewMaterias = async (req, res) => {
    const resultado = await Materia.findByPk(
        req.params.id
    );
    res.json(resultado);
}

exports.insertMaterias = async (req, res) => {
    const { name, comment } = req.body;
    const materiaNueva = await Materia.create({ name, comment }); 
    res.json(materiaNueva);
}